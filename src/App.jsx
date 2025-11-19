import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Channels from './components/Channels'
import Movies from './components/Movies'
import Pricing from './components/Pricing'
import Support from './components/Support'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      {/* Neon edge frame */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 rounded-[2rem] mx-4 my-4 ring-1 ring-blue-400/20"/>
        <div className="absolute inset-0 rounded-[2rem] mx-4 my-4 shadow-[0_0_80px_rgba(59,130,246,0.15)_inset]"/>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Channels />
        <Movies />
        <Pricing />
        <Support />
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} BlueFlame IPTV. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#pricing" className="hover:text-white">Plans</a>
            <a href="#support" className="hover:text-white">Help</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
