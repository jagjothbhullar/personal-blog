#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const LETTERBOXD_USER = 'jagjoth'
const GOODREADS_ID = '127587433'
const GITHUB_USER = 'jagjothbhullar'
const LASTFM_USER = 'jagjoth2794'
const LASTFM_API_KEY = process.env.LASTFM_API_KEY || ''
const DISTILL_RSS = 'https://distill-server.onrender.com/podcast/feed.xml'
const SPOTIFY_SHOW_URL = 'https://open.spotify.com/show/0Op9eHKLSb0nfZrh5wu2mt'
const UA = 'Mozilla/5.0 (personal-blog feed fetcher; +https://github.com/jagjothbhullar/personal-blog)'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_PATH = path.resolve(__dirname, '../src/data/feeds.json')

async function fetchText(url, headers = {}) {
  const res = await fetch(url, { headers: { 'User-Agent': UA, ...headers } })
  if (!res.ok) throw new Error(`${url} -> ${res.status}`)
  return res.text()
}

async function fetchJSON(url, headers = {}) {
  const res = await fetch(url, { headers: { 'User-Agent': UA, ...headers } })
  if (!res.ok) throw new Error(`${url} -> ${res.status}`)
  return res.json()
}

function stripCData(s) {
  if (!s) return ''
  return s.replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, '$1').trim()
}

function firstTag(xml, name) {
  const re = new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, 'i')
  const m = re.exec(xml)
  return m ? stripCData(m[1]) : ''
}

function allItems(xml) {
  const re = /<item\b[^>]*>([\s\S]*?)<\/item>/gi
  const out = []
  let m
  while ((m = re.exec(xml))) out.push(m[1])
  return out
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

function parseLetterboxd(xml) {
  return allItems(xml).slice(0, 6).map((item) => {
    const desc = firstTag(item, 'description')
    const posterMatch = desc.match(/src="([^"]+)"/)
    const review = desc
      .replace(/<p><img[^>]*\/?><\/p>/i, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
    return {
      title: firstTag(item, 'letterboxd:filmTitle'),
      year: firstTag(item, 'letterboxd:filmYear'),
      rating: firstTag(item, 'letterboxd:memberRating'),
      rewatch: firstTag(item, 'letterboxd:rewatch') === 'Yes',
      watchedDate: firstTag(item, 'letterboxd:watchedDate'),
      link: firstTag(item, 'link'),
      poster: posterMatch ? posterMatch[1] : '',
      review: review.length > 200 ? review.slice(0, 197) + '…' : review,
    }
  })
}

function parseGoodreads(xml) {
  return allItems(xml).slice(0, 6).map((item) => {
    const review = decodeEntities(firstTag(item, 'user_review') || '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
    return {
      title: firstTag(item, 'title'),
      author: firstTag(item, 'author_name'),
      rating: firstTag(item, 'user_rating'),
      readAt: firstTag(item, 'user_read_at') || firstTag(item, 'user_date_added'),
      link: firstTag(item, 'link').split('?')[0],
      cover: firstTag(item, 'book_large_image_url') || firstTag(item, 'book_medium_image_url'),
      published: firstTag(item, 'book_published'),
      review: review.length > 240 ? review.slice(0, 237) + '…' : review,
    }
  })
}

function summarizeGitHubEvent(ev) {
  const repo = ev.repo?.name || ''
  const repoShort = repo.split('/').pop()
  const repoLink = repo ? `https://github.com/${repo}` : ''
  switch (ev.type) {
    case 'PushEvent': {
      const ref = (ev.payload?.ref || '').replace('refs/heads/', '')
      return {
        type: 'push',
        verb: 'Pushed to',
        repo,
        repoShort,
        detail: ref && ref !== 'main' && ref !== 'master' ? `${ref}` : '',
        link: repoLink,
        createdAt: ev.created_at,
      }
    }
    case 'PullRequestEvent':
      return {
        type: 'pr',
        verb: ev.payload?.action === 'closed' ? 'Closed PR in' : 'Opened PR in',
        repo,
        repoShort,
        detail: ev.payload?.pull_request?.title || '',
        link: ev.payload?.pull_request?.html_url || repoLink,
        createdAt: ev.created_at,
      }
    case 'WatchEvent':
      return { type: 'star', verb: 'Starred', repo, repoShort, detail: '', link: repoLink, createdAt: ev.created_at }
    case 'CreateEvent':
      if (ev.payload?.ref_type === 'repository') {
        return { type: 'create', verb: 'Created', repo, repoShort, detail: 'new repository', link: repoLink, createdAt: ev.created_at }
      }
      return null
    case 'ForkEvent':
      return { type: 'fork', verb: 'Forked', repo, repoShort, detail: '', link: repoLink, createdAt: ev.created_at }
    case 'ReleaseEvent':
      return {
        type: 'release',
        verb: 'Released',
        repo,
        repoShort,
        detail: ev.payload?.release?.tag_name || '',
        link: ev.payload?.release?.html_url || repoLink,
        createdAt: ev.created_at,
      }
    default:
      return null
  }
}

async function fetchGitHub() {
  const headers = { Accept: 'application/vnd.github+json' }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  const events = await fetchJSON(`https://api.github.com/users/${GITHUB_USER}/events/public?per_page=30`, headers)
  const summarized = events.map(summarizeGitHubEvent).filter(Boolean)
  const seen = new Set()
  const deduped = []
  for (const s of summarized) {
    const key = `${s.type}:${s.repo}`
    if (seen.has(key)) continue
    seen.add(key)
    deduped.push(s)
    if (deduped.length >= 5) break
  }
  return deduped
}

async function fetchLastfm() {
  if (!LASTFM_API_KEY) return { unconfigured: true, recent: [], nowPlaying: null }
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&format=json&limit=6`
  const data = await fetchJSON(url)
  const tracks = data?.recenttracks?.track || []
  const recent = tracks.slice(0, 6).map((t) => ({
    name: t.name,
    artist: typeof t.artist === 'object' ? t.artist['#text'] : t.artist,
    album: typeof t.album === 'object' ? t.album['#text'] : t.album,
    image: (t.image || []).find((i) => i.size === 'large')?.['#text'] || (t.image || []).pop()?.['#text'] || '',
    url: t.url,
    nowPlaying: t['@attr']?.nowplaying === 'true',
    playedAt: t.date?.uts ? new Date(Number(t.date.uts) * 1000).toISOString() : null,
  }))
  return { recent, nowPlaying: recent.find((t) => t.nowPlaying) || null }
}

function parseDistill(xml) {
  const items = allItems(xml)
  if (!items.length) return null
  const item = items[0]
  const summary = decodeEntities(firstTag(item, 'itunes:summary') || firstTag(item, 'description') || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return {
    title: firstTag(item, 'title'),
    date: firstTag(item, 'pubDate'),
    duration: firstTag(item, 'itunes:duration'),
    episode: firstTag(item, 'itunes:episode'),
    summary: summary.length > 260 ? summary.slice(0, 257) + '…' : summary,
    spotifyUrl: SPOTIFY_SHOW_URL,
  }
}

async function loadExisting() {
  try {
    const txt = await fs.readFile(OUT_PATH, 'utf8')
    return JSON.parse(txt)
  } catch {
    return null
  }
}

async function run() {
  const existing = (await loadExisting()) || {}

  const safe = async (label, fn, fallback) => {
    try {
      return await fn()
    } catch (err) {
      console.error(`[feeds] ${label} failed:`, err.message)
      return fallback
    }
  }

  const [lbXml, grRead, grReading, github, lastfm, distillXml] = await Promise.all([
    safe('letterboxd', () => fetchText(`https://letterboxd.com/${LETTERBOXD_USER}/rss/`), null),
    safe('goodreads read', () => fetchText(`https://www.goodreads.com/review/list_rss/${GOODREADS_ID}?shelf=read`), null),
    safe('goodreads reading', () => fetchText(`https://www.goodreads.com/review/list_rss/${GOODREADS_ID}?shelf=currently-reading`), null),
    safe('github', fetchGitHub, existing.github || []),
    safe('lastfm', fetchLastfm, existing.lastfm || { unconfigured: !LASTFM_API_KEY, recent: [], nowPlaying: null }),
    safe('distill', () => fetchText(DISTILL_RSS), null),
  ])

  const data = {
    fetchedAt: new Date().toISOString(),
    letterboxd: lbXml ? parseLetterboxd(lbXml) : existing.letterboxd || [],
    goodreads: {
      currentlyReading: grReading ? parseGoodreads(grReading) : existing.goodreads?.currentlyReading || [],
      read: grRead ? parseGoodreads(grRead) : existing.goodreads?.read || [],
    },
    github,
    lastfm,
    distill: distillXml ? parseDistill(distillXml) : existing.distill || null,
  }

  await fs.mkdir(path.dirname(OUT_PATH), { recursive: true })
  await fs.writeFile(OUT_PATH, JSON.stringify(data, null, 2) + '\n')
  console.log(`[feeds] wrote ${OUT_PATH}`)
  console.log(`  letterboxd: ${data.letterboxd.length} films (latest: ${data.letterboxd[0]?.title || '—'})`)
  console.log(`  goodreads currently reading: ${data.goodreads.currentlyReading.length}`)
  console.log(`  goodreads read: ${data.goodreads.read.length} (latest: ${data.goodreads.read[0]?.title || '—'})`)
  console.log(`  github events: ${data.github.length} (latest: ${data.github[0]?.repoShort || '—'})`)
  console.log(`  lastfm: ${data.lastfm.unconfigured ? 'unconfigured (set LASTFM_API_KEY)' : `${data.lastfm.recent.length} recent tracks`}`)
  console.log(`  distill: ${data.distill ? `latest "${data.distill.title}"` : '—'}`)
}

run().catch(async (err) => {
  console.error('[feeds] fetch failed:', err.message)
  const existing = await loadExisting()
  if (existing) {
    console.error('[feeds] keeping previous feeds.json')
  } else {
    console.error('[feeds] no previous feeds.json — writing empty shell')
    await fs.mkdir(path.dirname(OUT_PATH), { recursive: true })
    await fs.writeFile(
      OUT_PATH,
      JSON.stringify({ fetchedAt: null, letterboxd: [], goodreads: { currentlyReading: [], read: [] } }, null, 2) + '\n'
    )
  }
  // Exit 0 so builds don't fail on transient feed issues.
})
