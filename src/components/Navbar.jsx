import { useState } from 'react'
import { Menu, X, FlameKindling } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Channels', href: '#channels' },
    { label: 'Movies', href: '#movies' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Support', href: '#support' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/90 to-transparent"></div>
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-white">
          <span className="relative">
            <span className="absolute -inset-1 rounded-xl bg-blue-500/20 blur-md"></span>
            <span className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 ring-1 ring-white/10 shadow-[0_0_25px_rgba(37,99,235,0.5)]">
              <FlameKindling className="w-6 h-6 text-white" />
            </span>
          </span>
          <span className="font-semibold tracking-tight text-xl">BlueFlame IPTV</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-blue-200 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#pricing" className="ml-2 px-4 py-2 rounded-xl bg-blue-600/90 hover:bg-blue-500 text-white text-sm font-medium shadow-[0_0_20px_rgba(59,130,246,0.35)] ring-1 ring-blue-300/30 transition-colors">Get Started</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg ring-1 ring-white/10 text-blue-100 hover:bg-white/5">
          {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-blue-100 hover:text-white hover:bg-white/5">
                {item.label}
              </a>
            ))}
            <a href="#pricing" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg bg-blue-600/90 text-white text-center font-medium">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
