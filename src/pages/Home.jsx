import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { getAllPosts } from '../utils/posts'
import PostCard from '../components/PostCard'

const career = [
  {
    company: 'San Jose Sharks',
    role: 'Deputy General Counsel',
    dates: '2025 - Present',
    summary: '$425M SAP Center renovation. NHL CBA compliance. Sponsorship, venue, and IP portfolio management.',
  },
  {
    company: 'FuboTV',
    role: 'Director of Legal & Business Affairs',
    dates: '2024 - 2025',
    summary: 'Led content licensing with Premier League, European League Football, and PPV expansion across streaming platforms.',
  },
  {
    company: 'Pac-12 Conference',
    role: 'Associate Counsel → Senior Counsel',
    dates: '2019 - 2024',
    summary: 'Promoted 3x. $100M+ cable portfolio. CW/Fox media rights. First Power 5 NIL licensing portal. Tempus Ex data partnership.',
  },
]

const projects = [
  {
    name: "Bhullar's Brief",
    url: 'https://distill-client.onrender.com/brief',
    oneLiner: 'AI-powered daily news briefing with TTS, email, and Spotify podcast',
    tags: ['Node.js', 'React', 'Claude AI', 'ElevenLabs', 'PostgreSQL'],
  },
  {
    name: '408 Sports',
    url: 'https://four08sports.onrender.com',
    oneLiner: 'Retro CRT TV interface for Bay Area sports highlights',
    tags: ['Vite', 'YouTube API', 'CSS Animations'],
  },
  {
    name: 'Fair Play (NIL Platform)',
    url: '#',
    oneLiner: 'NIL analytics platform with Supabase auth and Claude AI',
    tags: ['React', 'Supabase', 'Claude AI', 'Charts'],
  },
  {
    name: 'NFL Playbook Simulator',
    url: '#',
    oneLiner: 'Interactive NFL play simulation and analytics',
    tags: ['React', 'Canvas API', 'Data Viz'],
  },
  {
    name: 'NHL Salary Predictor',
    url: '#',
    oneLiner: 'ML model predicting NHL player contract values',
    tags: ['Python', 'scikit-learn', 'NHL API'],
  },
  {
    name: 'Hockey for Dummies',
    url: '#',
    oneLiner: 'Interactive hockey education and analytics tool',
    tags: ['React', 'D3.js', 'NHL Data'],
  },
]

export default function Home() {
  const fadeRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const addFadeRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el)
    }
  }

  const posts = getAllPosts().slice(0, 3)

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="min-h-screen bg-navy text-white flex flex-col justify-center px-6 md:px-16 pt-28 pb-16 relative overflow-hidden">
        {/* Subtle gold radial glow */}
        <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[200%] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(201,162,39,0.08) 0%, transparent 70%)' }}
        />

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-8 animate-fade-up animate-fade-up-1">
                Sports Attorney &middot; Software Builder
              </p>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-normal leading-[0.95] tracking-tight mb-8 animate-fade-up animate-fade-up-2">
                Jagjoth<br /><em className="italic text-gold">Bhullar</em>
              </h1>
              <p className="text-lg md:text-xl font-light text-white/70 max-w-xl leading-relaxed animate-fade-up animate-fade-up-3">
                Sports Attorney. Software Builder.
              </p>
            </div>

            {/* Photo */}
            <div className="shrink-0 animate-fade-up animate-fade-up-3">
              <div className="w-56 h-56 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/images/profile.jpg"
                  alt="Jagjoth Bhullar"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%)' }}
                />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-16 mt-16 pt-8 border-t border-white/10 animate-fade-up animate-fade-up-5">
            {[
              { value: '6+', label: 'Projects Shipped' },
              { value: '3', label: 'Roles in Sports Law' },
              { value: 'BS', label: 'Computer Engineering' },
              { value: 'JD', label: 'UC Berkeley' },
            ].map((stat) => (
              <div key={stat.label} className="text-left group cursor-default">
                <div className="font-serif text-4xl md:text-5xl font-normal text-gold group-hover:text-cyan transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-medium tracking-[0.1em] uppercase text-white/50 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 01 — CAREER ===== */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div ref={addFadeRef} className="fade-in grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-end">
            <div>
              <span className="font-serif text-sm text-gold block mb-4">01</span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight">
                A Track Record<br />of Impact
              </h2>
            </div>
            <p className="text-lg text-text-muted leading-relaxed">
              From conference-defining media deals to arena renovations, a career built on closing complex sports transactions.
            </p>
          </div>

          <div className="border-t border-black/10">
            {career.map((item, i) => (
              <div
                key={item.company}
                ref={addFadeRef}
                className="fade-in grid md:grid-cols-[200px_1fr] gap-4 md:gap-16 py-8 border-b border-black/10 hover:bg-gold/[0.03] transition-colors"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-xs font-semibold tracking-[0.1em] uppercase text-gold">
                  {item.dates}
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium mb-1">{item.company}</h3>
                  <p className="text-sm text-text-muted mb-2">{item.role}</p>
                  <p className="text-text-muted leading-relaxed">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>

          <div ref={addFadeRef} className="fade-in mt-8">
            <Link to="/about" className="text-gold text-sm font-medium tracking-[0.1em] uppercase hover:opacity-70 transition-opacity">
              View full experience &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 02 — PROJECTS ===== */}
      <section className="bg-navy text-white py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div ref={addFadeRef} className="fade-in grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-end">
            <div>
              <span className="font-serif text-sm text-gold block mb-4">02</span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight text-white">
                Projects I've<br />Shipped
              </h2>
            </div>
            <p className="text-lg text-white/60 leading-relaxed">
              Real software, live in production. Built with modern stacks, deployed on real infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <a
                key={project.name}
                href={project.url}
                target={project.url !== '#' ? '_blank' : undefined}
                rel={project.url !== '#' ? 'noopener noreferrer' : undefined}
                ref={addFadeRef}
                className="fade-in block bg-white/[0.03] border border-white/10 p-8 hover:border-gold hover:bg-white/[0.06] transition-all group"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <h3 className="font-serif text-xl font-medium text-gold mb-3 group-hover:text-gold-light transition-colors">
                  {project.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">{project.oneLiner}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-white/40 border border-white/10 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div ref={addFadeRef} className="fade-in mt-10">
            <Link to="/projects" className="text-gold text-sm font-medium tracking-[0.1em] uppercase hover:opacity-70 transition-opacity">
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 03 — LATEST WRITING ===== */}
      <section className="bg-cream py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div ref={addFadeRef} className="fade-in grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-end">
            <div>
              <span className="font-serif text-sm text-gold block mb-4">03</span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight">
                Latest<br />Writing
              </h2>
            </div>
            <p className="text-lg text-text-muted leading-relaxed">
              Thoughts on sports law, media rights, and the business of athletics.
            </p>
          </div>

          <div ref={addFadeRef} className="fade-in">
            {posts.length > 0 ? (
              posts.map((post) => <PostCard key={post.slug} post={post} />)
            ) : (
              <p className="text-text-muted">No posts yet. Check back soon!</p>
            )}
          </div>

          <div ref={addFadeRef} className="fade-in mt-4">
            <Link to="/blog" className="text-gold text-sm font-medium tracking-[0.1em] uppercase hover:opacity-70 transition-opacity">
              View all insights &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
