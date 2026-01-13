import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-900 hover:text-blue-700">
          Jagjoth Bhullar
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-gray-600 hover:text-gray-900 font-medium">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 font-medium">
              Insights
            </Link>
          </li>
          <li>
            <a
              href="mailto:jbhullar@berkeley.edu"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
