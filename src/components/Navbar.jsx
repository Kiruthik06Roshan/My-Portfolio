const navItems = [
  ['Hero', '#hero'],
  ['Projects', '#systems'],
  ['Skills', '#tech-dna'],
  ['Approach', '#problem-solving'],
  ['Method', '#approach'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#262626] bg-[#0A0A0A]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3B82F6]">
          KIRUTHIK ROSHAN
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs uppercase tracking-[0.22em] text-[#A1A1AA] hover:text-[#3B82F6]"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-lg border border-[#3B82F6] bg-[#3B82F6] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white hover:bg-[#2563EB]"
        >
          Hire Me
        </a>
      </div>
    </header>
  )
}
