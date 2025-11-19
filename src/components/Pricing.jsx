import { Check, Zap } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 9,
    features: ['100+ Channels', 'HD Quality', 'Email Support'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: 14,
    features: ['200+ Channels', '4K Ready', 'Multi-device', 'Priority Support'],
    highlight: true,
  },
  {
    name: 'Elite',
    price: 19,
    features: ['350+ Channels', '4K + Dolby', 'VOD Library', '24/7 Premium Support'],
    highlight: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"/>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Pricing</h2>
          <p className="mt-3 text-blue-200/80">Transparent plans with neon speed and support.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-slate-900 to-slate-950 ${t.highlight ? 'shadow-[0_0_40px_rgba(59,130,246,0.35)] ring-blue-400/30' : ''}`}>
              {t.highlight && (
                <div className="absolute -top-3 right-6 px-2 py-1 rounded-md text-[10px] uppercase tracking-wide bg-blue-600 text-white ring-1 ring-blue-300/40">
                  Best Value
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="absolute -inset-2 rounded-xl bg-blue-500/20 blur"/>
                  <span className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 ring-1 ring-white/10">
                    <Zap className="w-5 h-5 text-white"/>
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{t.name}</h3>
                  <p className="text-blue-200/70 text-sm">Everything you need</p>
                </div>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">${t.price}</span>
                <span className="text-blue-200/60">/mo</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-blue-100">
                    <Check className="w-4 h-4 text-blue-400"/> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full px-4 py-2 rounded-xl font-medium ring-1 transition-colors ${t.highlight ? 'bg-blue-600 hover:bg-blue-500 text-white ring-blue-300/40' : 'bg-white/5 hover:bg-white/10 text-blue-100 ring-white/10'}`}>Choose {t.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
