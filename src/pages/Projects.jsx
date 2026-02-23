import { useEffect, useRef } from 'react'

const projects = [
  {
    name: "Bhullar's Brief",
    url: 'https://distill-client.onrender.com/brief',
    github: 'https://github.com/jagjothbhullar/distill',
    description: 'AI-powered daily news briefing that editorializes trending stories in an NPR-style format, converts to audio via ElevenLabs TTS, and delivers via email and Spotify podcast. Full-stack Node.js + React with PostgreSQL.',
    tags: ['Node.js', 'Express', 'React', 'Claude AI', 'ElevenLabs', 'PostgreSQL', 'Prisma'],
  },
  {
    name: '408 Sports',
    url: 'https://four08sports.onrender.com',
    github: 'https://github.com/jagjothbhullar/408sports',
    description: 'A retro CRT television interface for watching Bay Area sports highlights. Features a channel system with transport controls, built with Vite and the YouTube IFrame API. Handles NFL Content ID blocks with graceful fallbacks.',
    tags: ['Vite', 'YouTube IFrame API', 'CSS Animations', 'Responsive Design'],
  },
  {
    name: 'Fair Play (NIL Platform)',
    url: '#',
    github: null,
    description: 'NIL analytics platform for college athletes, featuring Supabase authentication, Claude AI-powered deal analysis, and interactive data visualizations for evaluating endorsement opportunities.',
    tags: ['React', 'Supabase', 'Claude AI', 'Chart.js', 'Tailwind CSS'],
  },
  {
    name: 'NFL Playbook Simulator',
    url: '#',
    github: null,
    description: 'Interactive NFL play simulation and analytics tool. Visualize offensive and defensive formations, simulate play outcomes, and analyze strategic matchups with data-driven insights.',
    tags: ['React', 'Canvas API', 'Data Visualization', 'NFL Data'],
  },
  {
    name: 'NHL Salary Predictor',
    url: '#',
    github: 'https://github.com/jagjothbhullar/nhl-analytics',
    description: 'Machine learning model that predicts NHL player contract values by analyzing performance metrics against historical contract data. Built to support hockey operations decision-making.',
    tags: ['Python', 'scikit-learn', 'pandas', 'NHL API', 'Data Analytics'],
  },
  {
    name: 'Hockey for Dummies',
    url: '#',
    github: null,
    description: 'Interactive hockey education and analytics tool that breaks down the game for new fans. Features visual explanations of rules, positions, strategies, and real-time game analytics.',
    tags: ['React', 'D3.js', 'NHL Data', 'Interactive Education'],
  },
]

export default function Projects() {
  const fadeRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    fadeRefs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const addFadeRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el)
  }

  return (
    <div>
      {/* Hero header */}
      <section className="bg-navy text-white pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-serif text-sm text-gold block mb-4">Projects</span>
          <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight tracking-tight mb-6">
            Things I've<br /><em className="italic text-gold">Built</em>
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Real software, live in production. From AI-powered news platforms to retro sports TV interfaces — built with modern stacks, deployed on real infrastructure.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-cream py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.name}
              ref={addFadeRef}
              className="fade-in bg-white border border-black/8 p-8 md:p-10 hover:border-gold transition-all group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <h2 className="font-serif text-2xl font-medium text-navy group-hover:text-gold transition-colors mb-3">
                {project.name}
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-text-muted border border-black/10 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.url !== '#' && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-sm font-medium hover:opacity-70 transition-opacity"
                  >
                    Live Demo &rarr;
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted text-sm font-medium hover:text-navy transition-colors"
                  >
                    GitHub &rarr;
                  </a>
                )}
                {project.url === '#' && !project.github && (
                  <span className="text-xs font-medium tracking-[0.1em] uppercase text-text-muted">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
