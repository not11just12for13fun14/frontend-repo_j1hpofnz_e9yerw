import { Film, Tv, Headphones, ShieldCheck, Zap, LifeBuoy, Sparkles } from "lucide-react";

export default function Sections() {
  return (
    <>
      {/* Channels */}
      <section id="channels" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Live Channels</h2>
            <p className="mt-3 text-blue-200/80">Sports, news, and entertainment from around the world with instant zapping.</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Tv, title: 'Sports in 4K', desc: 'Ultra-smooth 60fps action with zero buffering.' },
              { icon: Headphones, title: 'Premium Audio', desc: 'Dolby Atmos and DTS for immersive sound.' },
              { icon: ShieldCheck, title: 'Secure Streams', desc: 'Encrypted delivery for reliable playback.' },
              { icon: Zap, title: 'Fast Zapping', desc: 'Switch channels with near‑instant response.' },
              { icon: Sparkles, title: 'Neon UI', desc: 'A sleek, glow‑edged interface that feels fast.' },
              { icon: Film, title: 'Catch‑up', desc: 'Rewind live TV and never miss a moment.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="group rounded-2xl border border-blue-500/20 bg-slate-900/60 p-6 shadow-[0_0_25px_rgba(37,99,235,0.25)] transition-colors hover:bg-slate-900/80">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-blue-200/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none relative mt-16 h-px w-full">
          <div className="absolute inset-x-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        </div>
      </section>

      {/* Movies */}
      <section id="movies" className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">On‑Demand Movies</h2>
              <p className="mt-3 max-w-2xl text-blue-200/80">A curated library of blockbusters and hidden gems in neon‑lit clarity.</p>
            </div>
            <a href="#pricing" className="hidden rounded-xl border border-blue-500/40 bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-50 hover:bg-blue-600/30 sm:block">View Plans</a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-[linear-gradient(180deg,rgba(15,23,42,0.7),rgba(15,23,42,0.9))] p-4">
                <div className="aspect-[16/10] w-full rounded-xl bg-slate-800/50" />
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-white/90">Neon Movie {i + 1}</p>
                    <p className="text-xs text-blue-300/70">Sci‑Fi • 4K</p>
                  </div>
                  <span className="rounded-lg bg-blue-600/30 px-2 py-1 text-xs text-blue-50">New</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none relative mt-16 h-px w-full">
          <div className="absolute inset-x-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, Premium Pricing</h2>
            <p className="mt-3 text-blue-200/80">Choose a plan that fits your viewing habits. Cancel anytime.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[ 
              { name: 'Starter', price: '$9/mo', features: ['100+ Channels', 'HD Streaming', 'Email Support']},
              { name: 'Pro', price: '$19/mo', featured: true, features: ['300+ Channels', '4K Streaming', 'Movies Library', 'Priority Support']},
              { name: 'Elite', price: '$29/mo', features: ['500+ Channels', '4K + HDR', 'Full Library', 'VIP Support']},
            ].map((p, i) => (
              <div key={i} className={`${p.featured ? 'border-blue-400/50 shadow-[0_0_45px_rgba(59,130,246,0.35)]' : 'border-blue-500/20'} relative rounded-2xl border bg-slate-900/60 p-6`}>
                {p.featured && (
                  <div className="absolute -top-3 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]">Most Popular</div>
                )}
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-3xl font-bold text-blue-100">{p.price}</p>
                <ul className="mt-4 space-y-2 text-blue-200/80">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 font-semibold text-white hover:from-blue-500 hover:to-indigo-500">Choose {p.name}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none relative mt-16 h-px w-full">
          <div className="absolute inset-x-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        </div>
      </section>

      {/* Support */}
      <section id="support" className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">We’re here to help</h2>
            <p className="mt-3 text-blue-200/80">24/7 support from real humans. Quick responses, hassle‑free setup.</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: LifeBuoy, title: 'Live Chat', desc: 'Get instant answers to your questions.' },
              { icon: ShieldCheck, title: 'Secure Account', desc: 'Your data is protected with best practices.' },
              { icon: Sparkles, title: 'Setup Wizard', desc: 'Guided install for any device in minutes.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="rounded-2xl border border-blue-500/20 bg-slate-900/60 p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/30 text-blue-50">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-blue-200/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
