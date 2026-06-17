"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SlideWrapper from "./SlideWrapper";
import Stars from "./Stars";

const lines = [
  "Well, there's this girl...",
  "She's smart, and fun, and...",
  "Pretty?",
  "Beautiful.",
  "She's got these eyes that just...",
  "And this hair, wow.",
  "And her smile? Ah...",
  "But she's the princess.",
  "To even have a chance,\nI'd have to be...",
  "Hey.",
  "Can you make me a prince?",
];

export default function Slide10({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <SlideWrapper label="Wrapped 2026" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="absolute inset-0 bg-deep-blue" />
      <Stars count={100} />

      {/* Magic carpet glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64" style={{
        background: "linear-gradient(to top, rgba(29,185,84,0.04), transparent)"
      }} />

      <div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 py-20 cursor-pointer"
        onClick={() => setRevealed(true)}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[#1DB954] text-xs font-bold tracking-widest uppercase mb-8"
        >
          ✨ A Whole New World
        </motion.p>

        {/* Script lines */}
        <div className="max-w-sm w-full space-y-3 mb-8">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.18 }}
              className={`leading-snug whitespace-pre-line ${
                line === "Beautiful."
                  ? "text-fluid-xl font-black text-[#FF8FB1] glow-pink"
                  : line === "Pretty?"
                  ? "text-fluid-lg text-[#B3B3B3] italic"
                  : line === "Hey."
                  ? "text-fluid-xl font-black text-white"
                  : line === "Can you make me a prince?"
                  ? "text-fluid-lg font-bold text-[#1DB954]"
                  : "text-white text-fluid-base"
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-[#B3B3B3] text-xs italic mb-8 text-center"
        >
          — Hridu, attempting to be Aladdin for Ayshu 🥹
        </motion.p>

        {/* Easter egg prompt */}
        <AnimatePresence>
          {!revealed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <p className="text-[#B3B3B3] text-xs">✨ tap anywhere ✨</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reveal */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "backOut" }}
              className="max-w-sm w-full p-5 rounded-2xl bg-[#FF8FB1]/10 border border-[#FF8FB1]/30 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-white text-fluid-base leading-relaxed">
                &ldquo;The funny thing is...<br />
                I never needed to become a prince.<br />
                <span className="text-[#FF8FB1] font-bold">You already chose me.</span>&rdquo;
              </p>
              <p className="text-[#B3B3B3] text-xs mt-3">❤️</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideWrapper>
  );
}
