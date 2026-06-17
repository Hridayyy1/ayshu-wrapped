"use client";

import { motion } from "framer-motion";
import SlideWrapper from "./SlideWrapper";

export default function Slide12({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) {
  return (
    <SlideWrapper label="Wrapped 2026" slideNumber={slideNumber} totalSlides={totalSlides}>
      {/* Warm gradient */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 0%, #2d1b00 0%, #1a0f00 40%, #121212 100%)"
      }} />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(251,191,36,0.08) 0%, transparent 70%)"
      }} />

      {/* Sun glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40" style={{
        background: "radial-gradient(ellipse, rgba(251,191,36,0.2) 0%, transparent 70%)",
        filter: "blur(20px)"
      }} />

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 text-center py-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-8"
        >
          ☀️ A Quote That Says It All
        </motion.p>

        {/* The quote */}
        <div className="space-y-4 mb-10">
          {[
            "She came in and she was like",
            "a shot of espresso.",
            "Like being bathed in sunlight.",
            "She had this sense of play and fun\nthat was incredibly exciting.",
          ].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.25 }}
              className={`leading-snug whitespace-pre-line ${
                line === "a shot of espresso."
                  ? "text-fluid-2xl font-black text-yellow-400 glow-white"
                  : line === "Like being bathed in sunlight."
                  ? "text-fluid-xl font-bold text-white"
                  : "text-fluid-base text-[#B3B3B3]"
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent mb-8"
        />

        {/* Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.7 }}
          className="space-y-3"
        >
          <p className="text-[#B3B3B3] text-fluid-sm italic">
            That&apos;s probably the closest I&apos;ve ever heard someone describe
          </p>
          <p className="text-white font-bold text-fluid-lg">
            how I feel about Ayshu.
          </p>
          <p className="text-yellow-400 text-2xl mt-4">☀️</p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
