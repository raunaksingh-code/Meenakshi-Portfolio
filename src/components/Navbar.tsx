import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-background/90 backdrop-blur-md border-b border-muted">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-foreground">
          Meenakshi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-foreground">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#achievements" className="hover:text-primary transition-colors">Achievements</Link>
          <Link href="#education" className="hover:text-primary transition-colors">Education</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a 
            href="/Resume.pdf" 
            target="_blank"
            className="px-6 py-2.5 bg-[#0F172A] text-white text-sm font-medium rounded hover:bg-[#1E293B] transition-colors"
          >
            Download CV
          </a>
        </div>
        
        {/* Mobile menu toggle (placeholder for simplicity) */}
        <div className="lg:hidden">
          <button className="text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
