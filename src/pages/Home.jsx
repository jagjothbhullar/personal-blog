import { Link } from 'react-router-dom'

const expertise = [
  {
    title: 'Sports Law',
    description: 'Media rights, sponsorships, venue agreements, and league compliance across professional and collegiate sports.',
    icon: '🏆'
  },
  {
    title: 'Entertainment & Media',
    description: 'Content licensing, distribution deals, production agreements, and talent negotiations.',
    icon: '🎬'
  },
  {
    title: 'Commercial Transactions',
    description: 'Complex deal structuring, contract negotiations, and strategic partnerships.',
    icon: '📝'
  },
  {
    title: 'Intellectual Property',
    description: 'IP strategy, licensing, brand partnerships, and digital rights management.',
    icon: '💡'
  }
]

const experience = [
  {
    company: 'San Jose Sharks',
    role: 'Deputy General Counsel',
    period: '2025 - Present',
    highlight: 'Advising on commercial operations, broadcasting, IP, and compliance with NHL regulations.',
    color: 'bg-teal-600'
  },
  {
    company: 'FuboTV',
    role: 'Director of Legal & Business Affairs',
    period: '2024 - 2025',
    highlight: 'Led content licensing with major networks, studios, and sports leagues.',
    color: 'bg-orange-500'
  },
  {
    company: 'Pac-12 Conference',
    role: 'Senior Counsel',
    period: '2019 - 2024',
    highlight: 'Promoted 3x. Managed $100M+ distribution portfolio and landmark media deals.',
    color: 'bg-blue-700'
  }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 border-b border-gray-100">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="/images/profile.jpg"
            alt="Jagjoth Bhullar"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
          <div className="flex-1">
            <p className="text-blue-600 font-semibold mb-2">Sports & Entertainment Attorney</p>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Jagjoth Bhullar
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Deputy General Counsel at San Jose Sharks. I help sports organizations,
              media companies, and entertainment brands navigate complex legal landscapes
              and close transformative deals.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:jbhullar@berkeley.edu"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
              >
                Get in Touch
              </a>
              <Link
                to="/about"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Areas of Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item) => (
            <div key={item.title} className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="space-y-6">
          {experience.map((item) => (
            <div key={item.company} className="flex gap-6 p-6 bg-gray-50 rounded-lg">
              <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                {item.company.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.company}</h3>
                  <span className="text-sm text-gray-500">{item.period}</span>
                </div>
                <p className="text-blue-600 font-medium mb-2">{item.role}</p>
                <p className="text-gray-600">{item.highlight}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/about"
          className="inline-block mt-6 text-blue-600 hover:text-blue-800 font-medium"
        >
          View full experience →
        </Link>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-gray-900">UC Berkeley School of Law</h3>
            <p className="text-gray-600">Juris Doctor, 2019</p>
            <p className="text-sm text-gray-500 mt-2">IP in Music Industry, Sports Law, Negotiations</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-gray-900">Santa Clara University</h3>
            <p className="text-gray-600">B.S. Computer Engineering, 2016</p>
            <p className="text-sm text-gray-500 mt-2">Magna Cum Laude, Dean's List 2013-2016</p>
          </div>
        </div>
      </section>
    </div>
  )
}
