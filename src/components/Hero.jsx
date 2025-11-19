import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-slate-950"/>
        <div className="absolute inset-0 opacity-60">
          <Spline scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.25),transparent_60%)]"/>
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]">
          <div className="absolute -inset-20 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.27),transparent_60%)] blur-3xl"/>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="py-20 lg:py-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-200 ring-1 ring-blue-400/20">
            Ultra-fast • 4K Ready • 24/7 Uptime
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Stream the future with a blue-flame glow
          </h1>
          <p className="mt-5 text-blue-200/90 text-lg max-w-xl">
            A premium IPTV experience with a neon-fast interface, electric-blue highlights, and crystal-clear channels. Designed to feel modern, responsive, and powerful.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-[0_0_30px_rgba(59,130,246,0.4)] ring-1 ring-blue-300/30 transition-colors">Start Watching</a>
            <a href="#channels" className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-blue-100 font-medium ring-1 ring-white/10 transition-colors">Explore Channels</a>
          </div>
        </div>
        <div className="hidden lg:block"/>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-slate-950"/>
    </section>
  )
}

export default Hero
