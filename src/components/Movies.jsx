import { Film, Sparkles, Star } from 'lucide-react'

const movies = [
  { title: 'Neon Horizon', tag: '4K HDR' },
  { title: 'Quantum Drift', tag: 'New' },
  { title: 'Blue Ember', tag: 'Trending' },
  { title: 'Synthetic Dawn', tag: 'Dolby' },
  { title: 'Cryo City', tag: 'Top Rated' },
  { title: 'Velvet Circuit', tag: 'IMAX' },
]

function Movies() {
  return (
    <section id="movies" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Movies</h2>
            <p className="mt-3 text-blue-200/80">Curated picks with crisp neon visuals.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-blue-200/80">
            <Sparkles className="w-5 h-5"/>
            <span className="text-sm">Hand-picked weekly</span>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((m) => (
            <div key={m.title} className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-5">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-blue-600/20 to-transparent"/>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-xl bg-blue-500/20 blur"/>
                    <span className="relative grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 ring-1 ring-white/10">
                      <Film className="w-6 h-6 text-white"/>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{m.title}</h3>
                    <p className="text-xs text-blue-200/70">Feature film</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-300/80">
                  <Star className="w-4 h-4"/>
                  <span className="text-sm">4.8</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="px-2 py-1 text-[10px] uppercase tracking-wide rounded bg-blue-500/10 text-blue-200 ring-1 ring-blue-400/20">{m.tag}</span>
                <button className="ml-auto px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-blue-100 text-sm ring-1 ring-white/10">Watch</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Movies
