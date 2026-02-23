export default function Footer() {
  return (
    <footer className="bg-navy text-white text-center py-20 md:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-serif text-4xl md:text-6xl font-normal tracking-tight mb-6">
          <em className="italic text-gold">Jagjoth Bhullar</em>
        </h2>
        <p className="text-white/50 text-lg mb-2">Sports Attorney. Software Builder.</p>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 pt-8 mt-8 border-t border-white/10 text-sm text-white/50">
          <span>jagjothbhullar@gmail.com</span>
          <span>408-896-6014</span>
          <a
            href="https://apps.calbar.ca.gov/attorney/Licensee/Detail/328782"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-gold hover:text-white transition-colors"
          >
            CA Bar #328782
          </a>
          <a
            href="https://github.com/jagjothbhullar"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-gold hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="mt-8 text-xs text-white/30">
          &copy; {new Date().getFullYear()} Jagjoth Bhullar
        </div>
      </div>
    </footer>
  )
}
