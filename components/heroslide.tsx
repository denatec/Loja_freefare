"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  "/img/IMG-20260831-WA0003.jpg",
  "/img/frf2.jpg",
  "/img/frf3.jpg",
];

export default function HeroSlide() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-1
        overflow-hidden
      "
    >
      {/* IMAGEM DO SLIDE */}

      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={slides[currentSlide]}
          src={slides[currentSlide]}
          alt={`Banner ${currentSlide + 1}`}
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={{
            opacity: 0.55,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            opacity: {
              duration: 1.4,
              ease: "easeInOut",
            },
            scale: {
              duration: 2,
              ease: "easeOut",
            },
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </AnimatePresence>


      {/* =========================================
          OVERLAY ESCURO
      ========================================= */}

      <div
        className="
          absolute
          inset-0
          z-2
          bg-linear-to-r
          from-[#050816]/90
          via-[#050816]/35
          to-[#050816]/75
        "
      />


      {/* =========================================
          GRADIENTE INFERIOR
      ========================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-3
          h-40
          bg-linear-to-t
          from-[#050816]
          to-transparent
        "
      />
    </div>
  );
}