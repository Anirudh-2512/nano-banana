"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/10 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMenuOpen(false)}>
          <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">
              <path d="M20 2L15 18H25L20 38L25 22H15L20 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-lg sm:text-2xl font-black bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            NANO BANANA
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Shop", "Freshness", "Story", "Support"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-white font-medium transition-colors">
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="relative hidden sm:block px-4 lg:px-6 py-2.5 rounded-full bg-orange-500 text-white text-sm font-bold overflow-hidden group shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-shadow"
          >
            <span className="relative z-10">ORDER NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-black/80 backdrop-blur-2xl border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {["Shop", "Freshness", "Story", "Support"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/80 text-lg font-bold uppercase tracking-widest"
                >
                  {item}
                </Link>
              ))}
              <button className="mt-2 w-full py-4 rounded-full bg-orange-500 text-white font-black uppercase tracking-widest">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
