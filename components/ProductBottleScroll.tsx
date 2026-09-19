"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Product } from "@/data/products";

interface Props {
  product: Product;
}

export default function ProductBottleScroll({ product }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    const TOTAL_FRAMES = product.totalFrames;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      // Padding number with leading zeros (e.g., 1 -> 001)
      const frameNumber = i.toString().padStart(3, "0");
      img.src = `${product.folderPath}/ezgif-frame-${frameNumber}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
        }
      };
      loadedImages[i - 1] = img;
    }
  }, [product.folderPath, product.totalFrames]);

  // Canvas drawing logic
  useEffect(() => {
    const updateCanvas = (progress: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx || images.length < product.totalFrames) return;

      const frameIndex = Math.min(product.totalFrames - 1, Math.floor(progress * product.totalFrames));
      const img = images[frameIndex];

      if (img) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Aspect ratio containment
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      updateCanvas(latest);
    });

    // Initial draw
    updateCanvas(0);

    return () => unsubscribe();
  }, [images, scrollYProgress]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
        <canvas
          ref={canvasRef}
          style={{ width: "100vw", height: "100vh" }}
          className="object-contain"
        />
      </div>
    </div>
  );
}
