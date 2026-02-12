export default function RajSportsPitch() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-12 pb-8 border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">RAJ Sports</h1>
        <p className="text-xl text-gray-600 mb-1">A Vision for Legal Excellence</p>
        <p className="text-gray-500">Jagjoth Bhullar | Counsel Candidate</p>
      </div>

      {/* About Me */}
      <Section title="About Me: A Track Record of Impact">
        <h3 className="font-semibold text-gray-800 mb-3">Career Progression</h3>
        <div className="space-y-2 mb-6">
          <CareerEntry company="San Jose Sharks" role="Deputy General Counsel" years="2025-Present" />
          <CareerEntry company="FuboTV" role="Director of Legal & Business Affairs" years="2024-2025" />
          <CareerEntry company="Pac-12 Conference" role="Senior Counsel" years="2019-2024" detail="Promoted 3x | #2 to General Counsel" />
        </div>

        <h3 className="font-semibold text-gray-800 mb-3">Signature Deals & Transactions</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2 pr-4 font-semibold text-gray-700">Deal</th>
                <th className="text-left py-2 pr-4 font-semibold text-gray-700">Value</th>
                <th className="text-left py-2 font-semibold text-gray-700">My Role</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <DealRow deal="ASU Mountain America Stadium Naming Rights" value="$50M+ / 15 years" role="Lead counsel on agreement structure" />
              <DealRow deal="SAP Center Renovation" value="$425M" role="Negotiated venue agreements" />
              <DealRow deal="Pac-12 Networks Distribution" value="Multi-year renewals" role="Led carrier negotiations" />
              <DealRow deal="Pac-12 Media Rights (CW/Fox)" value="Conference-defining" role="Supported media strategy" />
              <DealRow deal="Tempus Ex Data Partnership" value="First of its kind" role="Structured data licensing" />
              <DealRow deal="NIL Licensing Framework" value="Conference-wide" role="Built compliance infrastructure" />
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold text-gray-800 mb-2">Education</h3>
        <p className="text-gray-600 text-sm"><span className="font-medium">UC Berkeley School of Law</span> &mdash; Sports Law, Advertising Law</p>
        <p className="text-gray-600 text-sm"><span className="font-medium">Santa Clara University</span> &mdash; BS Computer Engineering (magna cum laude)</p>
      </Section>

      {/* I Understand RAJ Sports */}
      <Section title="I Understand RAJ Sports">
        <h3 className="font-semibold text-gray-800 mb-2">The Bhathal Vision</h3>
        <p className="text-gray-600 mb-4">
          The Bhathal family isn't just investing in sports &mdash; they're <strong>building a women's sports empire at the perfect moment</strong>. Alex Bhathal and Lisa Bhathal Merage have assembled:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
          <li><strong>Portland Thorns FC</strong> (NWSL) &mdash; Premium franchise with strongest fanbase in league</li>
          <li><strong>Portland Fire</strong> (WNBA) &mdash; Expansion team joining 2026 season</li>
        </ul>

        <h3 className="font-semibold text-gray-800 mb-2">Why This Matters</h3>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <StatCard value="300%+" label="Women's sports viewership growth since 2019" />
          <StatCard value="$2.2B" label="WNBA media deal over 11 years" />
          <StatCard value="3x" label="NWSL valuations year-over-year" />
          <StatCard value="Portland" label="Passionate, engaged, underserved market" />
        </div>

        <h3 className="font-semibold text-gray-800 mb-2">The Challenge & Opportunity</h3>
        <p className="text-gray-600">
          The Thorns acquisition came with reputational baggage from prior ownership's mishandling of workplace issues. RAJ Sports has the opportunity to <strong>redefine what professional women's sports ownership looks like</strong> &mdash; and needs legal counsel who can help build that culture from day one.
        </p>
      </Section>

      {/* The Women's Sports Moment */}
      <Section title="The Women's Sports Moment">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">NWSL Growth Indicators</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>Ring sponsorship (Thorns) &mdash; <strong>largest kit deal in NWSL history</strong></li>
              <li>Average attendance up 40% since 2022</li>
              <li>New CBA (2025): No draft, full free agency, player-empowering terms</li>
              <li>Salary cap rising to <strong>$5.1M by 2030</strong></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">WNBA Expansion Landscape</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>Portland Fire among 4 new teams (2024-2026)</li>
              <li>Expansion fee: <strong>$50M+</strong> (up from $15M in 2020)</li>
              <li>New media deal brings unprecedented exposure</li>
              <li>CBA currently in negotiation &mdash; critical window</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700 text-sm font-medium">
            The Legal Complexity: This isn't just sports law &mdash; it's <strong>labor law, employment law, real estate, sponsorship, media, and crisis management</strong> all converging during a period of explosive growth.
          </p>
        </div>
      </Section>

      {/* 90-Day Plan */}
      <Section title="My 90-Day Plan">
        <div className="grid md:grid-cols-3 gap-4">
          <PlanPhase
            phase="Days 1-30"
            title="Listen & Learn"
            items={[
              'Audit all existing contracts (player, sponsor, venue, vendor)',
              'Map current compliance posture across both franchises',
              'Build relationships with leadership, HR, operations teams',
              'Understand Bhathal family priorities and risk tolerance',
            ]}
          />
          <PlanPhase
            phase="Days 31-60"
            title="Assess & Prioritize"
            items={[
              'Identify contract gaps, renewal opportunities, risk areas',
              'Develop legal playbook for WNBA expansion (Fire)',
              'Review Thorns sponsorship pipeline against compliance requirements',
              'Establish outside counsel relationships for specialized needs',
            ]}
          />
          <PlanPhase
            phase="Days 61-90"
            title="Build & Execute"
            items={[
              'Implement contract management system (technology-enabled)',
              'Draft standard templates: player, sponsor, vendor, employment',
              'Create compliance training for staff on CBA, employment, NIL',
              'Present strategic legal roadmap to ownership',
            ]}
          />
        </div>
      </Section>

      {/* Strategic Vision */}
      <Section title="Strategic Vision: Legal as a Competitive Advantage">
        <div className="grid md:grid-cols-2 gap-6">
          <VisionCard
            number="1"
            title="Technology-Enabled Operations"
            description="Leverage my engineering background to build efficient, scalable legal systems: contract lifecycle management, compliance tracking automation, data-driven risk assessment, and AI-assisted document review."
          />
          <VisionCard
            number="2"
            title="Proactive Sponsorship Strategy"
            description="Structure deals that protect the brand while maximizing value. Anticipate conflicts, build templates that accelerate deal velocity. Great legal work unlocks revenue."
          />
          <VisionCard
            number="3"
            title="Player-Centric Approach"
            description="Navigate new CBA provisions with sophistication. Support NIL strategy that benefits players AND organization. Build trust through transparent, fair dealings."
          />
          <VisionCard
            number="4"
            title="Crisis Readiness"
            description="The Thorns' history demands proactive risk management: employment practices audit, clear reporting structures, investigation protocols, and media coordination."
          />
        </div>
      </Section>

      {/* Why Me */}
      <Section title="Why Me">
        <div className="space-y-4">
          <Differentiator
            title="Built for Complexity"
            text="I've operated at the intersection of labor, media, commercial, and compliance throughout my career. At Pac-12, I handled everything from NCAA investigations to $50M+ naming rights deals — often simultaneously."
          />
          <Differentiator
            title="Technology Fluency"
            text="My CS degree isn't just a resume line. I've built AI tools for contract analysis and sports law research. I can evaluate technology vendors, understand data rights, and bring modern efficiency to legal operations."
          />
          <Differentiator
            title="Women's Sports Expertise"
            text="Pac-12 had more women's teams than any other conference. I negotiated broadcasting for women's basketball, soccer, softball, volleyball — and understand the unique dynamics of these properties."
          />
          <Differentiator
            title="Executive Presence"
            text="As #2 to the General Counsel at a major conference, I've presented to university presidents, athletic directors, and boards. I'm comfortable in the room with ownership."
          />
          <Differentiator
            title="California Bar + Bay Area Roots"
            text="Active CA bar member, based in the Bay Area, ready for the Newport Beach office with Portland travel as needed."
          />
        </div>
      </Section>

      {/* The Opportunity */}
      <Section title="The Opportunity">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">What I Bring to RAJ Sports</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><strong>Immediate impact</strong> &mdash; No ramp-up needed on sports business fundamentals</li>
              <li><strong>Deal experience</strong> &mdash; $500M+ in transactions at Pac-12, FuboTV, Sharks</li>
              <li><strong>Cultural fit</strong> &mdash; Entrepreneurial mindset, ownership mentality</li>
              <li><strong>Long-term vision</strong> &mdash; Ready to build the legal function that scales with your portfolio</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">What I'm Looking For</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><strong>Ownership access</strong> &mdash; Direct relationship with decision-makers</li>
              <li><strong>Building something</strong> &mdash; Chance to establish processes, not just maintain them</li>
              <li><strong>Women's sports focus</strong> &mdash; Belief in this moment and this movement</li>
              <li><strong>Growth trajectory</strong> &mdash; As RAJ Sports expands, so does my opportunity</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="text-center py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Build Something Great</h2>
        <p className="text-gray-700 font-medium mb-1">Jagjoth Bhullar</p>
        <p className="text-gray-500 text-sm mb-4">
          <a href="mailto:jagjoth@berkeley.edu" className="text-blue-600 hover:text-blue-800">jagjoth@berkeley.edu</a>
          {' '}&middot;{' '}
          <a href="https://linkedin.com/in/jagjoth" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
        </p>
        <p className="text-gray-600 italic">Ready to be your first call for the complex decisions ahead.</p>
      </div>

      {/* Appendix: Deal Highlights */}
      <Section title="Appendix: Deal Highlights">
        <h3 className="font-semibold text-gray-800 mb-3">Pac-12 Conference (2019-2024)</h3>
        <div className="space-y-4 mb-6">
          <AppendixDeal title="ASU Mountain America Stadium Naming Rights" details={['Led negotiations for 15-year, $50M+ agreement', 'Navigated university governance, NCAA compliance', 'Structured revenue-sharing and activation rights']} />
          <AppendixDeal title="Pac-12 Networks Distribution" details={['Renewed carriage agreements with major MVPDs', 'Managed technical distribution requirements', 'Coordinated with media rights strategy']} />
          <AppendixDeal title="Tempus Ex Machina Data Partnership" details={['First-of-kind data rights deal for conference', 'Structured athlete data protections', 'Balanced commercial value with compliance']} />
        </div>

        <h3 className="font-semibold text-gray-800 mb-3">San Jose Sharks (2025-Present)</h3>
        <div className="space-y-4">
          <AppendixDeal title="SAP Center Renovation" details={['$425M venue modernization project', 'Negotiated with city, vendors, sponsors', 'Managed construction and operational agreements']} />
          <AppendixDeal title="Arena Operations" details={['Day-to-day venue legal support', 'Event contracts and risk management', 'Sponsor fulfillment and activation']} />
        </div>
      </Section>

      {/* Appendix: Thorns */}
      <Section title="Appendix: Portland Thorns Analysis">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Current State</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li><strong>Acquisition:</strong> RAJ Sports completed purchase 2024</li>
              <li><strong>Stadium:</strong> Providence Park (shared with Timbers)</li>
              <li><strong>Training:</strong> Hillsboro facility development</li>
              <li><strong>Roster:</strong> Competitive squad with international stars</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Legal Priorities</h3>
            <ol className="text-gray-600 text-sm space-y-1 list-decimal list-inside">
              <li>Sponsorship pipeline &mdash; build on Ring deal momentum</li>
              <li>CBA compliance &mdash; operational integration</li>
              <li>Workplace culture &mdash; clean break from past</li>
              <li>Stadium rights &mdash; optimize Providence Park terms</li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Appendix: Fire */}
      <Section title="Appendix: Portland Fire Analysis">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Expansion Timeline</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li><strong>2024:</strong> Expansion awarded ($50M+ fee)</li>
              <li><strong>2025:</strong> Player acquisition, facility buildout</li>
              <li><strong>2026:</strong> Inaugural season</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Legal Priorities</h3>
            <ol className="text-gray-600 text-sm space-y-1 list-decimal list-inside">
              <li>CBA navigation &mdash; critical timing</li>
              <li>Facility agreements &mdash; $150M Hillsboro training center</li>
              <li>Player contracts &mdash; expansion draft, free agency</li>
              <li>Sponsor foundation &mdash; build category map from scratch</li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Appendix: CBA Comparison */}
      <Section title="Appendix: NWSL & WNBA CBA Comparison">
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2 pr-4 font-semibold text-gray-700">Element</th>
                <th className="text-left py-2 pr-4 font-semibold text-gray-700">NWSL CBA (2025)</th>
                <th className="text-left py-2 font-semibold text-gray-700">WNBA CBA (Negotiating)</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <CBARow element="Free Agency" nwsl="All players" wnba="Restricted/Unrestricted tiers" />
              <CBARow element="Draft" nwsl="No mandatory draft" wnba="Annual draft" />
              <CBARow element="Salary Cap" nwsl="$3.3M (rising to $5.1M)" wnba="~$1.4M (expected increase)" />
              <CBARow element="Trade Rights" nwsl="Player consent required" wnba="Team control with limitations" />
              <CBARow element="NIL" nwsl="Full rights retained" wnba="Full rights retained" />
              <CBARow element="Charter Flights" nwsl="Required" wnba="Currently negotiating" />
            </tbody>
          </table>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <ul className="text-gray-700 text-sm space-y-1">
            <li>NWSL structure is <strong>more player-friendly</strong> &mdash; requires sophisticated negotiation</li>
            <li>WNBA CBA timing means <strong>opportunity to shape Fire's foundation</strong></li>
            <li>Both leagues trending toward <strong>greater player empowerment</strong></li>
          </ul>
        </div>
      </Section>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-12 pb-8 border-b border-gray-200 last:border-b-0">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      {children}
    </div>
  )
}

function CareerEntry({ company, role, years, detail }) {
  return (
    <div className="flex items-baseline gap-2 text-sm">
      <span className="font-semibold text-gray-800">{company}</span>
      <span className="text-gray-400">&mdash;</span>
      <span className="text-gray-600">{role} ({years})</span>
      {detail && <span className="text-gray-400 text-xs">| {detail}</span>}
    </div>
  )
}

function DealRow({ deal, value, role }) {
  return (
    <tr className="border-b border-gray-100">
      <td className="py-2 pr-4 font-medium text-gray-800">{deal}</td>
      <td className="py-2 pr-4 text-gray-600">{value}</td>
      <td className="py-2 text-gray-600">{role}</td>
    </tr>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 text-center">
      <div className="text-2xl font-bold text-blue-600">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  )
}

function PlanPhase({ phase, title, items }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="text-xs font-semibold text-blue-600 uppercase mb-1">{phase}</div>
      <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>
      <ul className="text-gray-600 text-sm space-y-2">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function VisionCard({ number, title, description }) {
  return (
    <div className="border border-gray-200 rounded-lg p-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-blue-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{number}</span>
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

function Differentiator({ title, text }) {
  return (
    <div className="pl-4 border-l-2 border-blue-600">
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  )
}

function AppendixDeal({ title, details }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h4 className="font-medium text-gray-800 mb-2">{title}</h4>
      <ul className="text-gray-600 text-sm space-y-1">
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  )
}

function CBARow({ element, nwsl, wnba }) {
  return (
    <tr className="border-b border-gray-100">
      <td className="py-2 pr-4 font-medium text-gray-800">{element}</td>
      <td className="py-2 pr-4">{nwsl}</td>
      <td className="py-2">{wnba}</td>
    </tr>
  )
}
