import { Headset, MessageCircleMore, ShieldCheck } from 'lucide-react'

function Support() {
  return (
    <section id="support" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Support</h2>
            <p className="mt-3 text-blue-200/80 max-w-xl">We’re here 24/7 with a fast, friendly team. Get setup help, channel requests, or troubleshooting—any time.</p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="group relative rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-xl bg-blue-500/20 blur"/>
                    <span className="relative grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 ring-1 ring-white/10">
                      <Headset className="w-6 h-6 text-white"/>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Live Chat</h3>
                    <p className="text-sm text-blue-200/80 mt-1">Average response under 2 minutes</p>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-xl bg-blue-500/20 blur"/>
                    <span className="relative grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 ring-1 ring-white/10">
                      <MessageCircleMore className="w-6 h-6 text-white"/>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Community</h3>
                    <p className="text-sm text-blue-200/80 mt-1">Guides and user-powered tips</p>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-xl bg-blue-500/20 blur"/>
                    <span className="relative grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 ring-1 ring-white/10">
                      <ShieldCheck className="w-6 h-6 text-white"/>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Secure & Private</h3>
                    <p className="text-sm text-blue-200/80 mt-1">Encrypted, reliable, no-nonsense privacy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 overflow-hidden">
            <div className="absolute -inset-px bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"/>
            <h3 className="text-white font-semibold">Need help?</h3>
            <p className="text-sm text-blue-200/80 mt-1">Send us a message and we’ll reply quickly.</p>
            <form className="mt-6 space-y-3">
              <input placeholder="Your email" className="w-full px-3 py-2 rounded-lg bg-white/5 text-blue-100 placeholder-blue-300/50 ring-1 ring-white/10 focus:outline-none focus:ring-blue-400/40" />
              <textarea placeholder="How can we help?" rows="4" className="w-full px-3 py-2 rounded-lg bg-white/5 text-blue-100 placeholder-blue-300/50 ring-1 ring-white/10 focus:outline-none focus:ring-blue-400/40" />
              <button type="button" className="w-full px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium ring-1 ring-blue-300/40">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support
