import { useEffect, useRef } from 'react'

export default function About() {
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
      {/* Hero */}
      <section className="bg-navy text-white pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-serif text-sm text-gold block mb-4">About</span>
          <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight tracking-tight mb-6">
            The Full<br /><em className="italic text-gold">Story</em>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            A sports and entertainment attorney with a computer engineering degree — navigating the intersection of law, sports, media, and technology.
          </p>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div ref={addFadeRef} className="fade-in mb-16">
            <span className="font-serif text-sm text-gold block mb-4">01</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight">
              Professional Experience
            </h2>
          </div>

          {/* Sharks */}
          <div ref={addFadeRef} className="fade-in mb-12 pb-12 border-b border-black/10">
            <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-16">
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-gold">June 2025 - Present</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-navy mb-1">San Jose Sharks</h3>
                <p className="text-gold font-medium text-sm mb-4">Deputy General Counsel</p>
                <ul className="text-text-muted space-y-3 leading-relaxed">
                  <li>Advise on commercial operations, marketing, promotions, broadcasting, IT, international operations, arena operations, hockey operations, public relations, litigation, workers' compensation, intellectual property, and employment law.</li>
                  <li>Draft, review, and negotiate commercial agreements including sponsorships, licensing, broadcasting, employment, vendor relationships, construction, and technology contracts.</li>
                  <li>Maintain compliance with NHL regulations and collaborate with other NHL entities.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FuboTV */}
          <div ref={addFadeRef} className="fade-in mb-12 pb-12 border-b border-black/10">
            <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-16">
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-gold">Oct 2024 - June 2025</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-navy mb-1">FuboTV</h3>
                <p className="text-gold font-medium text-sm mb-4">Director of Legal & Business Affairs</p>
                <ul className="text-text-muted space-y-3 leading-relaxed">
                  <li>Led content licensing and distribution matters with major network partners, studios, independent distributors, sports leagues, and FAST channels — both domestic and international.</li>
                  <li>Advised cross-functional teams on strategic business and legal issues including music licensing, intellectual property, acquisitions, and antitrust matters.</li>
                  <li>Supported production of original content including negotiation of talent, release, and clearance agreements.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pac-12 */}
          <div ref={addFadeRef} className="fade-in mb-12 pb-12 border-b border-black/10">
            <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-16">
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-gold">Aug 2019 - Sept 2024</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-navy mb-1">Pac-12 Conference</h3>
                <p className="text-gold font-medium text-sm mb-4">Senior Counsel, Legal and Business Affairs</p>
                <p className="text-text-muted italic mb-4">Promoted three times during tenure. Served as #2 attorney to General Counsel.</p>
                <ul className="text-text-muted space-y-3 leading-relaxed">
                  <li>Managed Pac-12 Networks content distribution portfolio worth hundreds of millions in annual revenue (cable, satellite, OTT, AVOD).</li>
                  <li>Negotiated media rights package with CW and Fox, and extended Pac-12 Bowl agreements.</li>
                  <li>Secured venue agreements at Allegiant Stadium, T-Mobile Arena, and Michelob Ultra Arena for championship games.</li>
                  <li>Led sponsorship agreements with Paycor, Nextiva, Gatorade, Nike, and Pacific Premier Bank.</li>
                  <li>Spearheaded innovation partnerships: data rights with Tempus Ex, NFT partnership with Recur, NIL licensing with Veritone, and launch of Pac-12 Insider (24x7 AVOD).</li>
                  <li>Negotiated a 15-year naming rights partnership for Arizona State University — at the time, the most valuable naming rights deal in college sports.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Earlier Experience */}
          <div ref={addFadeRef} className="fade-in mb-12">
            <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-16">
              <div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-gold">Pre-Bar</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-navy mb-4">Earlier Experience</h3>
                <p className="text-text-muted mb-4">Prior to passing the bar, completed internships at leading organizations across sports and entertainment:</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Pac-12 Conference',
                    'Kobe Bryant Inc.',
                    'Berkeley Athletic Compliance',
                    'Screen Actors Guild',
                    'Baker Botts LLP',
                    'Qualcomm Inc.',
                  ].map((org) => (
                    <div key={org} className="text-text-muted text-sm py-2 border-b border-black/5">
                      {org}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-cream py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div ref={addFadeRef} className="fade-in mb-16">
            <span className="font-serif text-sm text-gold block mb-4">02</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div ref={addFadeRef} className="fade-in bg-white p-8 md:p-10 border border-black/8 hover:border-gold transition-colors">
              <h3 className="font-serif text-2xl font-medium text-navy mb-2">UC Berkeley School of Law</h3>
              <p className="text-gold text-sm font-medium mb-4">Juris Doctor, 2019</p>
              <p className="text-text-muted text-sm leading-relaxed">IP in the Music Industry, Negotiations, Sports Law, Advertising Law</p>
            </div>
            <div ref={addFadeRef} className="fade-in bg-white p-8 md:p-10 border border-black/8 hover:border-gold transition-colors">
              <h3 className="font-serif text-2xl font-medium text-navy mb-2">Santa Clara University</h3>
              <p className="text-gold text-sm font-medium mb-4">B.S. Computer Engineering, 2016</p>
              <p className="text-text-muted text-sm leading-relaxed">Magna Cum Laude, Dean's List 2013-2016</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking & Teaching */}
      <section className="bg-navy text-white py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div ref={addFadeRef} className="fade-in mb-16">
            <span className="font-serif text-sm text-gold block mb-4">03</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight text-white">
              Speaking & Teaching
            </h2>
          </div>

          <div ref={addFadeRef} className="fade-in">
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Guest lecturer, moderator, and panelist at:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'UC Berkeley',
                'UC Hastings',
                'UC Davis',
                'Pepperdine',
                'Santa Clara University',
                'Arizona State University',
                'American Bar Association',
              ].map((school) => (
                <div key={school} className="py-3 border-b border-white/10 text-white/70 text-sm">
                  {school}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
