export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-blue-500/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-blue-300/70">© {new Date().getFullYear()} BlueFlame IPTV. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#pricing" className="text-blue-200/80 hover:text-white">Plans</a>
            <a href="#support" className="text-blue-200/80 hover:text-white">Support</a>
            <a href="#" className="text-blue-200/80 hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
