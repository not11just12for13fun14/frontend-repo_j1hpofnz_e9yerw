import { Tv, Radio, SatelliteDish, Trophy, Music2, Globe2 } from 'lucide-react'

const categories = [
  { icon: Tv, label: 'Live TV', desc: 'Global networks and local favorites' },
  { icon: Trophy, label: 'Sports', desc: 'Matches, highlights, and replays' },
  { icon: Music2, label: 'Music', desc: 'Concerts and 24/7 music channels' },
  { icon: Radio, label: 'News', desc: 'Breaking news and analysis' },
  { icon: SatelliteDish, label: 'International', desc: 'Worldwide channels & languages' },
  { icon: Globe2, label: 'Documentary', desc: 'Discovery, nature, science' },
]

function Channels() {
  return (
    <section id="channels" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-blue-500/10 blur-3xl"/>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Channels</h2>
          <p className="mt-3 text-blue-200/80">A blazing-fast line-up built for clarity and consistency.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="group relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 ring-1 ring-white/10 p-6 overflow-hidden">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/25 via-transparent to-transparent"/>
              <div className="flex items-start gap-4 relative">
                <div className="relative">
                  <span className="absolute -inset-2 rounded-xl bg-blue-500/20 blur"/>
                  <span className="relative grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 ring-1 ring-white/10">
                    <Icon className="w-6 h-6 text-white"/>
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{label}</h3>
                  <p className="text-sm text-blue-200/80 mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Channels
