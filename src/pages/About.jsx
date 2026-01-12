export default function About() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          I'm a sports and entertainment attorney with a unique blend of legal expertise
          and technical background. Currently serving as Deputy General Counsel at the
          San Jose Sharks, I help organizations navigate the intersection of sports,
          media, and business.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Professional Experience</h2>

        {/* San Jose Sharks */}
        <div className="mb-10 pb-10 border-b border-gray-100">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">San Jose Sharks</h3>
            <span className="text-gray-500 text-sm">June 2025 - Present</span>
          </div>
          <p className="text-blue-600 font-medium mb-4">Deputy General Counsel</p>
          <ul className="text-gray-600 space-y-2">
            <li>Advise on commercial operations, marketing, promotions, broadcasting, IT, international operations, arena operations, hockey operations, public relations, litigation, workers' compensation, intellectual property, and employment law.</li>
            <li>Draft, review, and negotiate commercial agreements including sponsorships, licensing, broadcasting, employment, vendor relationships, construction, and technology contracts.</li>
            <li>Maintain compliance with NHL regulations and collaborate with other NHL entities.</li>
          </ul>
        </div>

        {/* FuboTV */}
        <div className="mb-10 pb-10 border-b border-gray-100">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">FuboTV</h3>
            <span className="text-gray-500 text-sm">October 2024 - June 2025</span>
          </div>
          <p className="text-blue-600 font-medium mb-4">Director of Legal & Business Affairs</p>
          <ul className="text-gray-600 space-y-2">
            <li>Led content licensing and distribution matters with major network partners, studios, independent distributors, sports leagues, and FAST channels—both domestic and international.</li>
            <li>Advised cross-functional teams on strategic business and legal issues including music licensing, intellectual property, acquisitions, and antitrust matters.</li>
            <li>Supported production of original content including negotiation of talent, release, and clearance agreements.</li>
          </ul>
        </div>

        {/* Pac-12 */}
        <div className="mb-10 pb-10 border-b border-gray-100">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">Pac-12 Conference</h3>
            <span className="text-gray-500 text-sm">August 2019 - September 2024</span>
          </div>
          <p className="text-blue-600 font-medium mb-4">Senior Counsel, Legal and Business Affairs</p>
          <p className="text-gray-600 mb-4 italic">Promoted three times during tenure. Served as #2 attorney to General Counsel.</p>
          <ul className="text-gray-600 space-y-2">
            <li>Managed Pac-12 Networks content distribution portfolio worth hundreds of millions in annual revenue (cable, satellite, OTT, AVOD).</li>
            <li>Negotiated media rights package with CW and Fox, and extended Pac-12 Bowl agreements.</li>
            <li>Secured venue agreements at Allegiant Stadium, T-Mobile Arena, and Michelob Ultra Arena for championship games.</li>
            <li>Led sponsorship agreements with Paycor, Nextiva, Gatorade, Nike, and Pacific Premier Bank.</li>
            <li>Spearheaded innovation partnerships: data rights with Tempus Ex, NFT partnership with Recur, NIL licensing with Veritone, and launch of Pac-12 Insider (24x7 AVOD).</li>
            <li>Negotiated a 15-year naming rights partnership for Arizona State University—at the time, the most valuable naming rights deal in college sports.</li>
          </ul>
        </div>

        {/* Earlier Experience */}
        <div className="mb-10 pb-10 border-b border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Earlier Experience</h3>
          <p className="text-gray-600 mb-4">
            Prior to passing the bar, I completed internships at leading organizations across sports and entertainment:
          </p>
          <ul className="text-gray-600 space-y-1">
            <li><strong>Pac-12 Conference</strong> - Spring 2019</li>
            <li><strong>Kobe Bryant Inc.</strong> - Winter 2018</li>
            <li><strong>Berkeley Athletic Compliance</strong> - Fall 2018</li>
            <li><strong>Screen Actors Guild</strong> - Summer 2018</li>
            <li><strong>Baker Botts LLP</strong> - Summer 2017</li>
            <li><strong>Qualcomm Inc.</strong> - Technology/IP experience</li>
          </ul>
        </div>

        {/* Education */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Education</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 text-lg">UC Berkeley School of Law</h3>
            <p className="text-gray-600">Juris Doctor, 2019</p>
            <p className="text-sm text-gray-500 mt-2">
              Honors: IP in the Music Industry, Negotiations, Sports Law, Advertising Law
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 text-lg">Santa Clara University</h3>
            <p className="text-gray-600">B.S. Computer Engineering, 2016</p>
            <p className="text-sm text-gray-500 mt-2">
              Magna Cum Laude, Dean's List (2013-2016)
            </p>
          </div>
        </div>

        {/* Speaking */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Speaking & Teaching</h2>
        <p className="text-gray-600 mb-4">
          I've had the privilege of serving as a guest lecturer, moderator, and panelist at:
        </p>
        <p className="text-gray-600">
          UC Berkeley, UC Hastings, UC Davis, Pepperdine, Santa Clara University, Arizona State University, and the American Bar Association.
        </p>

        {/* Contact */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-4">
          I'm always interested in connecting with fellow professionals in sports, media, and entertainment law.
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:jbhullar@berkeley.edu"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            jbhullar@berkeley.edu
          </a>
          <span className="text-gray-300">|</span>
          <span className="text-gray-600">Bay Area, California</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-600">CA Bar #328782</span>
        </div>
      </div>
    </div>
  )
}
