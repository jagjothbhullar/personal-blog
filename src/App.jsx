import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams, useLocation, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { posts, getPost, formatDate } from './utils/posts'
import feeds from './data/feeds.json'

const MARQUEE_ITEMS = [
  'Sports', 'Entertainment', 'Technology', 'Media Rights', 'Broadcasting',
  'NIL', 'Sponsorship', 'Venue Operations', 'Streaming', 'IP',
]

const DOCKETS = [
  {
    period: '2025 — Present',
    logo: '/logo-sharks.webp',
    title: 'San Jose Sharks',
    role: 'Deputy General Counsel · SSE (Sharks Sports & Entertainment)',
    summary:
      'Counsel to the NHL club across commercial operations, broadcasting, IT, arena operations and hockey ops — including spearheading negotiations for SAP Center renovations.',
    bullets: [
      'Advise SSE across commercial operations, marketing, promotions, broadcasting, IT, international ops, arena ops, hockey ops, PR, litigation, workers\u2019 comp, IP and employment.',
      'Draft, review, and negotiate sponsorships, licensing, broadcasting, employment, independent-contractor, vendor, construction and technology agreements.',
      'Spearhead negotiations on SAP Center renovation matters.',
      'Collaborate with hockey ops on NHL regulatory and collective bargaining compliance.',
      'Helped build playbooks, templates, and a full-service legal operating system powered by AI tools — scaling output across the legal function.',
    ],
  },
  {
    period: '2024 — 2025',
    logo: '/logo-fubo.png',
    title: 'FuboTV',
    role: 'Director, Legal & Business Affairs · New York',
    summary:
      'Lead lawyer on content licensing and distribution — deal strategy, drafting, and negotiation with major networks, studios, sports leagues and FAST channels across domestic and international markets.',
    bullets: [
      'Owned content licensing & distribution matters end-to-end: deal structure, drafting, and negotiation of all phases with major network partners, studios, independent distributors, sports leagues and FAST channels.',
      'Supported original content production, including talent, release and clearance agreements.',
      'Worked across domestic and international partner relationships.',
    ],
  },
  {
    period: '2019 — 2024',
    logo: '/logo-pac12.png',
    title: 'Pac-12 Conference',
    role: 'Senior Counsel, Legal & Business Affairs · San Francisco',
    summary:
      'Five years, three promotions. Ended tenure as #2 to the General Counsel — lead negotiator across content distribution, sponsorship, venues, brand & tech partnerships.',
    bullets: [
      'Promoted three times; served as #2 attorney to the General Counsel in final year.',
      'Expansive remit: business affairs, corporate governance, IP, litigation management, athletic compliance, TV distribution, sales, engineering & leadership support.',
      'Managed Pac-12 Networks distribution portfolio worth hundreds of millions in annual revenue (cable, satellite, OTT, AVOD); ensured distribution of 850+ live events annually.',
      'Negotiated the \u201cPac-2\u201d media rights package with CW and Fox, plus affiliate agreements vs. MW and WCC, and extended Pac-12 Bowl Agreements.',
      'Secured championship-game venue agreements at Allegiant Stadium, T-Mobile Arena, and Michelob Ultra Arena.',
      'Sponsorships incl. Paycor, Nextiva, Gatorade, Nike, and Pacific Premier Bank.',
      'Emerging-tech deals: data rights w/ Tempus Ex, NFT partnership w/ Recur, NIL highlight licensing w/ Veritone, launch of Pac-12 Insider (24×7 AVOD).',
      'Negotiated a 15-year naming-rights partnership for Arizona State University\u2019s athletic department — at the time the most valuable naming-rights deal in college sports.',
    ],
  },
]

const PRESS = [
  { kicker: ['UC Berkeley', 'Lecture'], title: 'Sports Media Rights in the Streaming Era', venue: 'Berkeley Law — Guest Lecturer' },
  { kicker: ['UC Hastings', 'Panel'], title: 'NIL, Collectives & the New College Athlete', venue: 'UC Law SF (Hastings) — Panelist' },
  { kicker: ['UC Davis', 'Moderator'], title: 'Inside In-House: Building a Sports Law Career', venue: 'UC Davis School of Law — Moderator' },
  { kicker: ['Pepperdine', 'Panel'], title: 'Emerging Technology & the Business of Live Sport', venue: 'Pepperdine Caruso School of Law' },
  { kicker: ['Santa Clara', 'Lecture'], title: 'From Engineer to Attorney: The Hybrid Track', venue: 'Santa Clara University — Guest Lecturer' },
  { kicker: ['Selected', 'Ongoing'], title: 'Additional appearances on request', venue: 'Available for panels, lectures and moderation' },
]

const PROJECTS = [
  {
    num: '001 /',
    title: 'Bhullar\u2019s Brief',
    desc: 'An AI-generated daily podcast delivering the sports, media & legal news that actually matters — produced and narrated end-to-end by model inference.',
    link: 'Listen',
    href: 'https://distill-client.onrender.com/brief',
    preview: { kicker: '// bhullars-brief.v1', head: 'Today in sport & the law.', foot: '\u25B6 00:00 / 08:43 · DAILY' },
  },
  {
    num: '002 /',
    title: 'Hockey for Dummies',
    desc: 'A plain-English primer for fans who are new to the sport — rules, positions, and the pace of the game, explained without the jargon.',
    link: 'Open',
    href: 'https://hockey-for-dummies.onrender.com/',
    preview: { kicker: '// hockey-for-dummies', head: 'The game, in plain English.', foot: 'CH. 01 · THE FACEOFF' },
  },
  {
    num: '003 /',
    title: 'MyPeople',
    desc: 'An AI-native talent agency — reimagining representation, deal flow, and client service from the ground up with modern tooling.',
    link: 'Coming soon',
    href: '#',
    preview: { kicker: '// mypeople · agency', head: 'Representation, rebuilt.', foot: 'AI-NATIVE · IN DEVELOPMENT' },
  },
  {
    num: '004 /',
    title: 'LegalOS',
    desc: 'An open-sourced system prompt for in-house attorneys — a portable operating layer that steers general-purpose LLMs toward the way in-house counsel actually work.',
    link: 'View on GitHub',
    href: 'https://github.com/jagjothbhullar/legalos/',
    preview: { kicker: '// legalos · open-source', head: 'A system prompt for in-house counsel.', foot: '$ git clone legalos \u21B5' },
  },
]

const ACCENT_SWATCHES = ['#00C2B2', '#FF4D2E', '#D4A017', '#3F6DF5', '#9D5CFF', '#0A0A0A']

const NAV_LINKS = [
  ['01', 'About', '/#about'],
  ['02', 'Experience', '/#experience'],
  ['03', 'Speaking', '/#press'],
  ['04', 'Projects', '/#projects'],
  ['05', 'Writing', '/#writing'],
  ['06', 'Currently', '/#currently'],
  ['07', 'Education', '/#education'],
  ['08', 'Contact', '/#contact'],
]

function useCursor() {
  const location = useLocation()
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return

    const dot = document.getElementById('cursorDot')
    const ring = document.getElementById('cursorRing')
    if (!dot || !ring) return

    let rx = window.innerWidth / 2
    let ry = window.innerHeight / 2
    let mx = rx
    let my = ry

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }
    const onLeave = () => { ring.classList.add('hidden'); dot.style.opacity = '0' }
    const onEnter = () => { ring.classList.remove('hidden'); dot.style.opacity = '1' }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    let rafId
    const tick = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      rafId = requestAnimationFrame(tick)
    }
    tick()

    const selector = 'a, button, .docket, .swatch, .press-item, .project, .writing-item, .currently-card, .hero-cta'
    const onOver = (e) => {
      if (e.target.closest && e.target.closest(selector)) ring.classList.add('hover')
    }
    const onOut = (e) => {
      if (e.target.closest && e.target.closest(selector)) {
        const related = e.relatedTarget
        if (!related || !related.closest || !related.closest(selector)) {
          ring.classList.remove('hover')
        }
      }
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [location.pathname])
}

function useReveal() {
  const location = useLocation()
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [location.pathname])
}

function ScrollToHash() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])
  return null
}

function Cursor() {
  return (
    <>
      <div className="cursor-ring" id="cursorRing" />
      <div className="cursor-dot" id="cursorDot" />
    </>
  )
}

function TopNav({ minimal = false }) {
  return (
    <nav className="topnav" aria-label="Primary">
      <Link to="/" className="brand"><b>JB</b> / Counsel &amp; Code</Link>
      {!minimal && (
        <div className="linklist">
          {NAV_LINKS.map(([num, label, href]) => (
            <Link key={href} to={href} data-num={num} aria-label={`${label}, section ${num}`}>
              {label}
            </Link>
          ))}
        </div>
      )}
      {minimal && (
        <div className="linklist">
          <Link to="/#writing" data-num="←">All writing</Link>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="about about-hero reveal in" id="top">
      <div className="hero-meta-bar">
        <div className="hero-meta mono">
          <span><span className="dot" aria-hidden="true"></span> CA Bar Certified · #328782</span>
          <span>Based in the Bay Area, CA</span>
        </div>
        <div className="hero-meta mono right" style={{ textAlign: 'right' }}>
          <span>Jagjoth Bhullar · Portfolio &amp; Docket</span>
        </div>
      </div>

      <div className="about-portrait">
        <img src="/portrait.jpeg" alt="Black-and-white portrait of Jagjoth Bhullar" />
        <div className="tag" aria-hidden="true">
          <span>JB · 2026</span>
          <span>35mm</span>
        </div>
      </div>

      <div className="about-text" id="about">
        <h1 className="about-lede">
          Jagjoth <em>Bhullar</em> — counsel for <em>sport · media · tech.</em>
        </h1>
        <p className="about-pull">
          I negotiate the deals that put <em>live sports on your screen</em> — media rights, sponsorships, venues, broadcast tech — and I write code for the AI tools I wish my job had.
        </p>
        <div className="bio-body">
          <p>
            Trained at <strong>Berkeley Law</strong> after a Computer Engineering degree from <strong>Santa Clara</strong>, I’ve spent my career on the business side of sports &amp; entertainment — most recently as <strong>Deputy General Counsel</strong> for an NHL club, previously leading content licensing at a national streaming platform and serving as senior counsel at a major collegiate athletic conference.
          </p>
          <p>
            Representative work includes multi-hundred-million-dollar distribution deals, a 15-year collegiate naming-rights partnership (at the time the largest in college sports), and emerging-tech partnerships spanning data rights, NFTs, NIL, and AVOD.
          </p>
          <p>On the side, I build AI tools for the practice of sports law.</p>
        </div>
      </div>
    </section>
  )
}

function Marquee({ slow = false }) {
  const row = []
  for (let i = 0; i < 4; i++) {
    MARQUEE_ITEMS.forEach((w, idx) => {
      row.push(
        <span key={`${i}-w-${idx}`}>{w}</span>,
        <span key={`${i}-d-${idx}`} className="dot">●</span>
      )
    })
  }
  return (
    <div className={`marquee${slow ? ' slow' : ''}`} aria-hidden="true">
      <div className="marquee-track">{row}</div>
    </div>
  )
}

function Docket({ docket, open, onToggle, index }) {
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }
  return (
    <div
      className={`docket${open ? ' open' : ''}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-controls={`docket-body-${index}`}
      onClick={(e) => {
        if (e.target.closest && e.target.closest('a')) return
        onToggle()
      }}
      onKeyDown={onKeyDown}
    >
      <div className="docket-period">{docket.period}</div>
      <div className="docket-mark" aria-hidden="true">
        <img className="logo-gray" src={docket.logo} alt="" />
        <img className="logo-color" src={docket.logo} alt="" />
      </div>
      <div>
        <h3 className="docket-title">{docket.title}</h3>
        <div className="docket-role">{docket.role}</div>
      </div>
      <div className="docket-summary">{docket.summary}</div>
      <div className="docket-chevron" aria-hidden="true">+</div>
      <div className="docket-body" id={`docket-body-${index}`}>
        <ul>
          {docket.bullets.map((b, i) => (
            <li key={i}><div>{b}</div></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Experience() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="section" id="experience">
      <div className="big-numeral" aria-hidden="true">02</div>
      <div className="section-head reveal">
        <div className="section-num">§ 02 · Docket</div>
        <div>
          <h2 className="section-title">Selected <em>experience</em></h2>
          <p className="section-sub">Three chapters. Leagues, streaming, and live sport. Click any entry to open the case file.</p>
        </div>
      </div>
      <div className="dockets reveal">
        {DOCKETS.map((d, i) => (
          <Docket
            key={d.title}
            index={i}
            docket={d}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  )
}

function Press() {
  return (
    <section className="section" id="press">
      <div className="big-numeral" aria-hidden="true">03</div>
      <div className="section-head reveal">
        <div className="section-num">§ 03 · Lectern</div>
        <div>
          <h2 className="section-title">Speaking <em>&amp;</em> press</h2>
          <p className="section-sub">Guest lectures, panels, and moderated conversations at law schools across California.</p>
        </div>
      </div>
      <div className="press reveal">
        {PRESS.map((p, i) => (
          <a key={i} href="#" className="press-item" onClick={(e) => e.preventDefault()}>
            <div className="press-kicker"><span>{p.kicker[0]}</span><span>{p.kicker[1]}</span></div>
            <h3 className="press-title">{p.title}</h3>
            <div className="press-venue">{p.venue}</div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="big-numeral" aria-hidden="true">04</div>
      <div className="section-head reveal">
        <div className="section-num">§ 04 · Workshop</div>
        <div>
          <h2 className="section-title">AI <em>projects</em></h2>
        </div>
      </div>
      <div className="projects reveal">
        {PROJECTS.map((p) => {
          const external = p.href.startsWith('http')
          return (
            <a
              key={p.title}
              className="project"
              href={p.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              <div className="project-num">{p.num}</div>
              <div>
                <h3 className="project-title">{p.title}</h3>
              </div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-link">{p.link} <span className="arrow">↗</span></div>
              <div className="project-preview" aria-hidden="true">
                <div className="project-preview-inner">
                  <div className="preview-kicker">{p.preview.kicker}</div>
                  <div className="preview-head">{p.preview.head}</div>
                  <div className="preview-foot">{p.preview.foot}</div>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

function Writing() {
  return (
    <section className="section" id="writing">
      <div className="big-numeral" aria-hidden="true">05</div>
      <div className="section-head reveal">
        <div className="section-num">§ 05 · Notes</div>
        <div>
          <h2 className="section-title">Writing <em>&amp; notes</em></h2>
          <p className="section-sub">Short pieces on sport, media, and the software I build around them.</p>
        </div>
      </div>
      <div className="writing-list reveal">
        {posts.length === 0 && (
          <div className="writing-empty">No posts yet — check back soon.</div>
        )}
        {posts.map((p) => (
          <Link key={p.slug} to={`/writing/${p.slug}`} className="writing-item">
            <div className="writing-kicker">
              <span>{formatDate(p.date)}</span>
              <span>{p.readingMinutes} min read</span>
            </div>
            <h3 className="writing-title">{p.title}</h3>
            <div className="writing-excerpt">{p.excerpt}</div>
            <div className="writing-link">Read <span className="arrow">↗</span></div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function stars(rating) {
  const n = Number(rating)
  if (!n) return ''
  const full = Math.floor(n)
  const half = n - full >= 0.5
  return '★'.repeat(full) + (half ? '½' : '')
}

function shortDate(input) {
  if (!input) return ''
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(input)
  const d = m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : new Date(input)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function relativeTime(iso) {
  if (!iso) return ''
  const then = new Date(iso).getTime()
  if (Number.isNaN(then)) return ''
  const diffMs = Date.now() - then
  const mins = Math.round(diffMs / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hours = Math.round(mins / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.round(hours / 24)
  if (days < 14) return `${days}d ago`
  const weeks = Math.round(days / 7)
  if (weeks < 8) return `${weeks}w ago`
  const months = Math.round(days / 30)
  return `${months}mo ago`
}

function FilmCard({ film }) {
  if (!film) return null
  return (
    <a className="currently-card" href={film.link} target="_blank" rel="noopener noreferrer">
      <div className="currently-kicker">
        <span>Watching</span>
        <span>Letterboxd</span>
      </div>
      <div className="currently-body">
        {film.poster && <img className="currently-art" src={film.poster} alt={`${film.title} poster`} loading="lazy" />}
        <div className="currently-text">
          <h3 className="currently-title">{film.title}</h3>
          <div className="currently-meta">
            {film.year}
            {film.rating && <> · <span className="stars">{stars(film.rating)}</span></>}
            {film.rewatch && <> · rewatch</>}
          </div>
          {film.review && <p className="currently-review">{film.review}</p>}
          <div className="currently-date mono">{shortDate(film.watchedDate)}</div>
        </div>
      </div>
    </a>
  )
}

function BookCard({ book, currentlyReading }) {
  if (!book) return null
  return (
    <a className="currently-card" href={book.link} target="_blank" rel="noopener noreferrer">
      <div className="currently-kicker">
        <span>{currentlyReading ? 'Reading' : 'Last finished'}</span>
        <span>Goodreads</span>
      </div>
      <div className="currently-body">
        {book.cover && <img className="currently-art book" src={book.cover} alt={`${book.title} cover`} loading="lazy" />}
        <div className="currently-text">
          <h3 className="currently-title">{book.title}</h3>
          <div className="currently-meta">
            {book.author}
            {Number(book.rating) > 0 && <> · <span className="stars">{stars(book.rating)}</span></>}
          </div>
          {book.review && <p className="currently-review">{book.review}</p>}
          {!currentlyReading && <div className="currently-date mono">{shortDate(book.readAt)}</div>}
        </div>
      </div>
    </a>
  )
}

function BuildingCard({ events }) {
  if (!events || events.length === 0) return null
  const latest = events[0]
  const rest = events.slice(1, 4)
  return (
    <a className="currently-card compact" href={latest.link} target="_blank" rel="noopener noreferrer">
      <div className="currently-kicker">
        <span>Building</span>
        <span>GitHub</span>
      </div>
      <div className="currently-compact-body">
        <div className="currently-compact-lead">
          <div className="currently-meta">{latest.verb}</div>
          <h3 className="currently-title">{latest.repoShort}</h3>
          {latest.detail && <div className="currently-meta">{latest.detail}</div>}
          <div className="currently-date mono">{relativeTime(latest.createdAt)}</div>
        </div>
        {rest.length > 0 && (
          <ul className="currently-sublist">
            {rest.map((e) => (
              <li key={`${e.type}:${e.repo}:${e.createdAt}`}>
                <span className="mono currently-sublist-verb">{e.verb}</span>
                <span className="currently-sublist-title">{e.repoShort}</span>
                <span className="mono currently-sublist-date">{relativeTime(e.createdAt)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </a>
  )
}

function ListeningCard({ lastfm }) {
  if (!lastfm || lastfm.unconfigured) return null
  const track = lastfm.nowPlaying || lastfm.recent?.[0]
  if (!track) return null
  return (
    <a className="currently-card" href={track.url || `https://www.last.fm/user/jagjoth2794`} target="_blank" rel="noopener noreferrer">
      <div className="currently-kicker">
        <span>{track.nowPlaying ? 'Now playing' : 'Listening'}</span>
        <span>Last.fm</span>
      </div>
      <div className="currently-body">
        {track.image && <img className="currently-art square" src={track.image} alt={`${track.name} album art`} loading="lazy" />}
        <div className="currently-text">
          <h3 className="currently-title">{track.name}</h3>
          <div className="currently-meta">
            {track.artist}
            {track.album && <> · <span style={{ fontStyle: 'italic' }}>{track.album}</span></>}
          </div>
          {!track.nowPlaying && track.playedAt && (
            <div className="currently-date mono">{relativeTime(track.playedAt)}</div>
          )}
          {track.nowPlaying && <div className="currently-date mono" style={{ color: 'var(--accent)' }}>● Live</div>}
        </div>
      </div>
    </a>
  )
}

function Currently() {
  const film = feeds?.letterboxd?.[0]
  const reading = feeds?.goodreads?.currentlyReading?.[0]
  const lastRead = feeds?.goodreads?.read?.[0]
  const book = reading || lastRead
  const recentFilms = (feeds?.letterboxd || []).slice(1, 4)
  return (
    <section className="section" id="currently">
      <div className="big-numeral" aria-hidden="true">06</div>
      <div className="section-head reveal">
        <div className="section-num">§ 06 · Currently</div>
        <div>
          <h2 className="section-title">What I&rsquo;m <em>into.</em></h2>
          <p className="section-sub">A running feed from Letterboxd, Goodreads, GitHub and Last.fm — films, books, code, and what&rsquo;s in my headphones.</p>
        </div>
      </div>
      <div className="currently-grid reveal">
        <FilmCard film={film} />
        <BookCard book={book} currentlyReading={Boolean(reading)} />
        <BuildingCard events={feeds?.github} />
        <ListeningCard lastfm={feeds?.lastfm} />
      </div>
      {recentFilms.length > 0 && (
        <div className="currently-strip reveal">
          <div className="mono currently-strip-label">Also recently</div>
          <ul className="currently-strip-list">
            {recentFilms.map((f) => (
              <li key={f.link}>
                <a href={f.link} target="_blank" rel="noopener noreferrer">
                  <span className="currently-strip-title">{f.title}</span>
                  <span className="currently-strip-meta mono">
                    {f.year}{f.rating ? ` · ${stars(f.rating)}` : ''}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

function Education() {
  return (
    <section className="section" id="education">
      <div className="big-numeral" aria-hidden="true">07</div>
      <div className="section-head reveal">
        <div className="section-num">§ 07 · Credentials</div>
        <div>
          <h2 className="section-title">Education <em>&amp; bar</em></h2>
        </div>
      </div>
      <div className="edu reveal">
        <div>
          <div className="label">2019</div>
          <h3>University of California, Berkeley — School of Law</h3>
          <div className="degree">Juris Doctor (J.D.)</div>
          <div className="honors">
            Received honors across various courses including: IP in the Music Industry, Negotiations, Sports Law, and Advertising Law.
          </div>
        </div>
        <div>
          <div className="label">2016</div>
          <h3>Santa Clara University</h3>
          <div className="degree">B.S., Computer Engineering · <em>magna cum laude</em></div>
          <div className="honors">
            Dean’s List, 2013–2016 · President, Tau Beta Pi (National Honor Society of Engineers)
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="big-numeral" aria-hidden="true">08</div>
      <div className="section-num reveal" style={{ marginBottom: '1.5rem' }}>§ 08 · Correspondence</div>
      <h2 className="contact-h reveal">
        Let’s <em>work.</em>
      </h2>
      <div className="contact-grid reveal">
        <div>
          <div className="label">Email</div>
          <a href="mailto:jagjothbhullar@gmail.com">jagjothbhullar@gmail.com</a>
        </div>
        <div>
          <div className="label">LinkedIn</div>
          <a href="https://www.linkedin.com/in/jagjoth-bhullar" target="_blank" rel="noopener noreferrer">/in/jagjoth-bhullar</a>
        </div>
        <div>
          <div className="label">Resume</div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download PDF ↓</a>
        </div>
        <div></div>
      </div>
      <div className="colophon">
        <span>© MMXXVI · Jagjoth Bhullar</span>
        <span>CA Bar #328782</span>
        <span>Made with counsel &amp; code</span>
      </div>
    </section>
  )
}

function Tweaks() {
  const [open, setOpen] = useState(false)
  const [accent, setAccent] = useState('#00C2B2')
  const [motion, setMotion] = useState('medium')

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('jb-tweaks') || '{}')
      if (stored.accent) setAccent(stored.accent)
      if (stored.motion) setMotion(stored.motion)
    } catch { /* noop */ }

    const onMessage = (e) => {
      if (!e.data || typeof e.data !== 'object') return
      if (e.data.type === '__activate_edit_mode') setOpen(true)
      if (e.data.type === '__deactivate_edit_mode') setOpen(false)
    }
    window.addEventListener('message', onMessage)

    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*') } catch { /* noop */ }

    return () => window.removeEventListener('message', onMessage)
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent)
    document.body.classList.remove('motion-low', 'motion-medium', 'motion-high')
    document.body.classList.add('motion-' + motion)
    try {
      localStorage.setItem('jb-tweaks', JSON.stringify({ accent, motion }))
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { accent, motion } }, '*')
    } catch { /* noop */ }
  }, [accent, motion])

  return (
    <div className={`tweaks${open ? ' open' : ''}`} id="tweaks" aria-hidden={!open}>
      <h4>
        <span>⚙ Tweaks</span>
        <button onClick={() => setOpen(false)} aria-label="close">×</button>
      </h4>
      <div className="row">
        <div className="row-label">Accent color</div>
        <div className="swatches">
          {ACCENT_SWATCHES.map((c) => (
            <button
              key={c}
              type="button"
              className={`swatch${accent === c ? ' active' : ''}`}
              style={{ background: c, borderColor: c === '#0A0A0A' ? '#fff6' : undefined }}
              aria-label={`Accent ${c}`}
              onClick={() => setAccent(c)}
            />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="row-label">Motion</div>
        <div className="motion-opts">
          {['low', 'medium', 'high'].map((m) => (
            <button
              key={m}
              type="button"
              className={motion === m ? 'active' : ''}
              onClick={() => setMotion(m)}
            >
              {m === 'medium' ? 'Med' : m[0].toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      <Marquee />
      <Experience />
      <Press />
      <Projects />
      <Writing />
      <Currently />
      <Education />
      <Contact />
    </>
  )
}

function PostPage() {
  const { slug } = useParams()
  const post = getPost(slug)
  if (!post) return <Navigate to="/" replace />
  return (
    <>
      <TopNav minimal />
      <article className="post-page">
        <div className="post-kicker mono reveal in">
          <Link to="/#writing">← Writing</Link>
          <span>{formatDate(post.date)} · {post.readingMinutes} min read</span>
        </div>
        <h1 className="post-title reveal in">{post.title}</h1>
        {post.excerpt && <p className="post-excerpt reveal in">{post.excerpt}</p>}
        <div className="post-body reveal in">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        <div className="post-foot mono">
          <Link to="/#writing">← Back to writing</Link>
          <Link to="/">Return home</Link>
        </div>
      </article>
    </>
  )
}

function AppInner() {
  useCursor()
  useReveal()
  return (
    <>
      <Cursor />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing/:slug" element={<PostPage />} />
      </Routes>
      <Tweaks />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
