export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-600">
            <span className="font-semibold text-gray-900">Jagjoth Bhullar</span>
            <span className="mx-2">·</span>
            <span>Sports & Entertainment Attorney</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="mailto:jbhullar@berkeley.edu" className="hover:text-blue-600">
              jbhullar@berkeley.edu
            </a>
            <span>·</span>
            <span>Bay Area, CA</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Jagjoth Bhullar. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
