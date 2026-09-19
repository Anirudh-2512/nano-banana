"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Product } from "@/data/products";

interface Props {
  product: Product;
}

export default function ProductTextOverlays({ product }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Opacity maps for each section
  const opac1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const opac2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.55], [0, 1, 1, 0]);
  const opac3 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
  const opac4 = useTransform(scrollYProgress, [0.9, 0.95, 1], [0, 1, 1]);

  // Y-offset maps
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [100, 0, 0, -100]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.55], [100, 0, 0, -100]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.85], [100, 0, 0, -100]);
  const y4 = useTransform(scrollYProgress, [0.9, 0.95, 1], [100, 0, 0]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {/* Section 1 */}
      <motion.div style={{ opacity: opac1, y: y1 }} className="fixed inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-4">
          {product.section1.title}
        </h2>
        <p className="text-lg sm:text-xl md:text-3xl font-medium text-white/60">
          {product.section1.subtitle}
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div style={{ opacity: opac2, y: y2 }} className="fixed inset-0 flex flex-col items-start justify-center max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4 sm:mb-6">
            {product.section2.title}
          </h2>
          <p className="text-base sm:text-lg md:text-2xl font-light text-white/80 leading-relaxed">
            {product.section2.subtitle}
          </p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div style={{ opacity: opac3, y: y3 }} className="fixed inset-0 flex flex-col items-end justify-center max-w-7xl mx-auto px-6">
        <div className="max-w-xl text-right">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4 sm:mb-6">
            {product.section3.title}
          </h2>
          <p className="text-base sm:text-lg md:text-2xl font-light text-white/80 leading-relaxed">
            {product.section3.subtitle}
          </p>
        </div>
      </motion.div>

      {/* Section 4 */}
      <motion.div style={{ opacity: opac4, y: y4 }} className="fixed inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
          {product.section4.title}
        </h2>
        <p className="text-base sm:text-xl md:text-3xl font-medium text-white/60 mt-4">
            {product.description}
        </p>
      </motion.div>
    </div>
  );
}
