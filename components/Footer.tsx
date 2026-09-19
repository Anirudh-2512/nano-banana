export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-16 md:pt-24 pb-28 sm:pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 border-b border-white/5 pb-12">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-500">
              <path d="M20 2L15 18H25L20 38L25 22H15L20 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <span className="text-lg sm:text-xl font-black bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              NANO BANANA
            </span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            Crafting the future of freshness. Cold-pressed, never heated, and delivered directly from our pressery to your doorstep.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/40">Shop</h4>
          <ul className="flex flex-col gap-4 text-white/70">
            <li><a href="#" className="hover:text-orange-400 transition-colors">Juices</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Bundles</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Subscriptions</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Gift Cards</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/40">Support</h4>
          <ul className="flex flex-col gap-4 text-white/70">
            <li><a href="#" className="hover:text-orange-400 transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/40">Newsletter</h4>
          <p className="text-white/40 text-sm mb-6">Stay fresh. Join our juice list for exclusive drops.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-orange-500 transition-colors"
            />
            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-500 hover:text-white transition-colors">
              JOIN
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-white/20 text-xs">
        <p>© 2026 Nano Banana. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white/40">Privacy Policy</a>
          <a href="#" className="hover:text-white/40">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
