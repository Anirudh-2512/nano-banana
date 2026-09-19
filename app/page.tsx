"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductTextOverlays from "@/components/ProductTextOverlays";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, Activity, Droplets, Zap } from "lucide-react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = products[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <main 
      className="min-h-screen transition-colors duration-1000"
      style={{ background: currentProduct.gradient }}
    >
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProduct.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Hero Scrollytelling Section */}
          <div className="relative">
            <ProductBottleScroll product={currentProduct} />
            <ProductTextOverlays product={currentProduct} />
          </div>

          {/* Details Section */}
          <section id="freshness" className="relative z-10 py-16 md:py-32 bg-white text-black rounded-t-[48px] md:rounded-t-[100px] -mt-16 md:-mt-32">
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-orange-500 mb-4">
                    Product Insight
                  </h3>
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 leading-[0.9]">
                    {currentProduct.detailsSection.title}
                  </h2>
                  <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 md:mb-12">
                    {currentProduct.detailsSection.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3 sm:gap-8 border-t border-neutral-100 pt-8 md:pt-12">
                    {currentProduct.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl sm:text-3xl font-black text-black">{stat.val}</div>
                        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-400 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-square bg-neutral-100 rounded-3xl overflow-hidden relative group order-first md:order-last"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-300 font-black text-xl sm:text-2xl uppercase tracking-tighter rotate-12 group-hover:scale-110 transition-transform duration-700">
                    Product Image Placeholder
                  </div>
                  {/* Image would go here: <img src={currentProduct.folderPath + "/hero.webp"} /> */}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Production Section */}
          <section className="relative z-10 py-16 md:py-32 bg-neutral-50 text-black">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <div className="inline-flex gap-3 sm:gap-4 p-2 bg-white rounded-full shadow-sm mb-8 md:mb-12">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"><Zap size={18} /></div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500"><Droplets size={18} /></div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500"><Activity size={18} /></div>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 leading-[0.9]">
                  {currentProduct.freshnessSection.title}
                </h2>
                <p className="text-base sm:text-xl text-neutral-600 leading-relaxed">
                  {currentProduct.freshnessSection.description}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Buy Now Section */}
          <section id="shop" className="relative z-10 py-16 md:py-32 bg-neutral-950 text-white clip-path-slant overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-12">
                <div>
                  <h2 className="text-5xl sm:text-6xl md:text-9xl font-black tracking-tighter leading-none mb-6">
                    GET THE <br /> <span className="text-orange-500">EXPERIENCE.</span>
                  </h2>
                  <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 md:mb-12">
                    {currentProduct.buyNowSection.processingParams.map((param, i) => (
                      <span key={i} className="px-3 sm:px-4 py-2 border border-white/20 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                        {param}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-12 rounded-3xl border border-white/10 w-full md:w-[450px]">
                  <div className="flex justify-between items-start mb-6 sm:mb-8">
                    <div>
                      <h4 className="text-white/40 font-bold uppercase tracking-widest text-xs mb-1">Pricing</h4>
                      <div className="text-4xl sm:text-5xl font-black">{currentProduct.buyNowSection.price}</div>
                      <div className="text-white/40 text-sm mt-1">{currentProduct.buyNowSection.unit}</div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 sm:mb-12">
                    <div className="flex gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0" />
                      <p className="text-white/70">{currentProduct.buyNowSection.deliveryPromise}</p>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex-shrink-0" />
                      <p className="text-white/70">{currentProduct.buyNowSection.returnPolicy}</p>
                    </div>
                  </div>

                  <button className="w-full py-5 sm:py-6 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg sm:text-xl rounded-2xl transition-all active:scale-95 shadow-[0_20px_40px_rgba(249,115,22,0.2)]">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Next Flavor CTA */}
          <div className="p-5 sm:p-12 md:p-24 bg-white">
            <button
              onClick={nextProduct}
              className="w-full group relative overflow-hidden rounded-[24px] sm:rounded-[40px] aspect-[4/3] sm:aspect-[21/9] flex items-center justify-center"
            >
              <div
                className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
                style={{ background: products[(currentIndex + 1) % products.length].gradient }}
              />
              <div className="relative z-10 text-center px-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-white/60 mb-2 sm:mb-4 block">Next Flavor</span>
                <h3 className="text-3xl sm:text-5xl md:text-8xl font-black text-white uppercase tracking-tighter">
                  {products[(currentIndex + 1) % products.length].name}
                </h3>
                <div className="mt-4 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4 text-white font-bold opacity-100 sm:opacity-0 transition-opacity translate-y-2 sm:translate-y-4 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 duration-500">
                  <span className="text-sm sm:text-base">DISCOVER NOW</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <Footer />

      {/* Navigation Controls */}
      <div className="hidden sm:flex fixed inset-y-0 left-0 items-center z-40 px-6">
        <button
          onClick={prevProduct}
          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 transition-all active:scale-90"
        >
          <ChevronLeft size={32} />
        </button>
      </div>

      <div className="hidden sm:flex fixed inset-y-0 right-0 items-center z-40 px-6">
        <button
          onClick={nextProduct}
          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 transition-all active:scale-90"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Bottom Menu Pill */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-40 w-full px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:pb-10 sm:px-0">
        <div className="flex items-center justify-center gap-1 sm:gap-2 p-1.5 sm:p-2 bg-black/40 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl w-fit mx-auto">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(i)}
              className={`px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all ${
                currentIndex === i
                  ? "bg-white text-black scale-105"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {p.id}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
