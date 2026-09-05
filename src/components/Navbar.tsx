import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-slate-900 drop-shadow-sm">
          Meenakshi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-700">
          <Link href="#about" className="hover:text-slate-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">About</Link>
          <Link href="#experience" className="hover:text-slate-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Experience</Link>
          <Link href="#projects" className="hover:text-slate-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Projects</Link>
          <Link href="#skills" className="hover:text-slate-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Skills</Link>
          <Link href="#achievements" className="hover:text-slate-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Achievements</Link>
          <Link href="#education" className="hover:text-slate-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Education</Link>
          <Link href="#contact" className="hover:text-slate-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-slate-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">Contact</Link>
        </nav>

        {/* Mobile menu toggle (placeholder for simplicity) */}
        <div className="lg:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
