"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpeningSlide from "@/components/OpeningSlide";
import Slide1 from "@/components/Slide1";
import Slide2 from "@/components/Slide2";
import Slide3 from "@/components/Slide3";
import Slide4 from "@/components/Slide4";
import Slide5 from "@/components/Slide5";
import Slide6 from "@/components/Slide6";
import Slide7 from "@/components/Slide7";
import Slide8 from "@/components/Slide8";
import Slide9 from "@/components/Slide9";
import Slide10 from "@/components/Slide10";
import Slide11 from "@/components/Slide11";
import Slide12 from "@/components/Slide12";
import FinalSlide from "@/components/FinalSlide";

const TOTAL_SLIDES = 13;

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection(1);
      setCurrentSlide((s) => s + 1);
    }
  }, [currentSlide]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((s) => s - 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  // Touch swipe
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const touchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const touchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) goNext();
        else goPrev();
      }
    };

    window.addEventListener("touchstart", touchStart, { passive: true });
    window.addEventListener("touchend", touchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchend", touchEnd);
    };
  }, [goNext, goPrev]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  if (!started) {
    return <OpeningSlide onBegin={() => setStarted(true)} />;
  }

  const slideProps = { slideNumber: currentSlide + 1, totalSlides: TOTAL_SLIDES };

  const slides = [
    <Slide1 key="s1" {...slideProps} />,
    <Slide2 key="s2" {...slideProps} />,
    <Slide3 key="s3" {...slideProps} />,
    <Slide4 key="s4" {...slideProps} />,
    <Slide5 key="s5" {...slideProps} />,
    <Slide6 key="s6" {...slideProps} />,
    <Slide7 key="s7" {...slideProps} />,
    <Slide8 key="s8" {...slideProps} />,
    <Slide9 key="s9" {...slideProps} />,
    <Slide10 key="s10" {...slideProps} />,
    <Slide11 key="s11" {...slideProps} />,
    <Slide12 key="s12" {...slideProps} />,
    <FinalSlide key="final" {...slideProps} />,
  ];

  return (
    <div className="relative w-screen h-[100dvh] overflow-hidden bg-[#121212]">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-50 h-0.5 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-[#1DB954] to-[#FF8FB1]"
          animate={{ width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Slide area */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="absolute bottom-6 left-0 right-0 z-50 flex items-center justify-between px-4">
        {/* Prev */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goPrev}
          disabled={currentSlide === 0}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentSlide ? 1 : -1);
                setCurrentSlide(i);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "bg-[#1DB954] w-5 h-1.5"
                  : "bg-white/20 w-1.5 h-1.5"
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goNext}
          disabled={currentSlide === TOTAL_SLIDES - 1}
          className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center text-black disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
          style={{ boxShadow: "0 0 20px rgba(29,185,84,0.4)" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
