#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const LETTERBOXD_USER = 'jagjoth'
const GOODREADS_ID = '127587433'
const UA = 'Mozilla/5.0 (personal-blog feed fetcher; +https://github.com/jagjothbhullar/personal-blog)'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_PATH = path.resolve(__dirname, '../src/data/feeds.json')

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`${url} -> ${res.status}`)
  return res.text()
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

async function loadExisting() {
  try {
    const txt = await fs.readFile(OUT_PATH, 'utf8')
    return JSON.parse(txt)
  } catch {
    return null
  }
}

async function run() {
  const [lbXml, grRead, grReading] = await Promise.all([
    fetchText(`https://letterboxd.com/${LETTERBOXD_USER}/rss/`),
    fetchText(`https://www.goodreads.com/review/list_rss/${GOODREADS_ID}?shelf=read`),
    fetchText(`https://www.goodreads.com/review/list_rss/${GOODREADS_ID}?shelf=currently-reading`),
  ])

  const data = {
    fetchedAt: new Date().toISOString(),
    letterboxd: parseLetterboxd(lbXml),
    goodreads: {
      currentlyReading: parseGoodreads(grReading),
      read: parseGoodreads(grRead),
    },
  }

  await fs.mkdir(path.dirname(OUT_PATH), { recursive: true })
  await fs.writeFile(OUT_PATH, JSON.stringify(data, null, 2) + '\n')
  console.log(`[feeds] wrote ${OUT_PATH}`)
  console.log(`  letterboxd: ${data.letterboxd.length} films (latest: ${data.letterboxd[0]?.title || '—'})`)
  console.log(`  goodreads currently reading: ${data.goodreads.currentlyReading.length}`)
  console.log(`  goodreads read: ${data.goodreads.read.length} (latest: ${data.goodreads.read[0]?.title || '—'})`)
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
