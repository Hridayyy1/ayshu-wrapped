"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SlideWrapper from "./SlideWrapper";

const lines = [
  { text: "Not because you're perfect.", delay: 0.3 },
  { text: "Not because you always know what to say.", delay: 0.5 },
  { text: "Not because you never overthink.", delay: 0.7 },
  { text: "But because you're you.", delay: 1.0, special: true },
  { text: 'The girl who says\n"I\'m sleepy."', delay: 1.4 },
  { text: 'The girl who tells me\n"Ghar jaa."', delay: 1.7 },
  { text: "The girl who loves Chibi.", delay: 2.0 },
  { text: "The girl who worries more than she should.", delay: 2.3 },
  { text: "The girl who cares more than she realizes.", delay: 2.6 },
  { text: "The girl I'd choose again.", delay: 3.0, highlight: true },
  { text: "And again.", delay: 3.2, highlight: true },
  { text: "And again.", delay: 3.4, highlight: true },
];

export default function FinalSlide({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) {
  const [showMummy, setShowMummy] = useState(false);
  const router = useRouter();

  return (
    <SlideWrapper label="Wrapped 2026" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="absolute inset-0 bg-[#121212]" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(255,143,177,0.12) 0%, rgba(29,185,84,0.05) 60%, transparent 80%)"
      }} />

      {/* Floating hearts */}
      {["❤️", "💕", "🥹", "❤️", "💗"].map((h, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl pointer-events-none select-none"
          style={{
            left: `${10 + i * 18}%`,
            bottom: "10%",
          }}
          animate={{
            y: [0, -80, -160],
            opacity: [0, 0.8, 0],
            x: [0, (i % 2 === 0 ? 10 : -10)],
          }}
          transition={{
            duration: 4,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          {h}
        </motion.span>
      ))}

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-16 overflow-y-auto max-h-screen">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="text-center mb-8"
        >
          <h2 className="text-fluid-3xl font-black text-white">Thank You</h2>
          <p className="text-4xl mt-1">❤️</p>
        </motion.div>

        <div className="space-y-3 mb-10">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: line.delay }}
              className={`whitespace-pre-line leading-snug ${
                line.special
                  ? "text-fluid-lg font-black text-[#FF8FB1] glow-pink"
                  : line.highlight
                  ? "text-fluid-lg font-bold text-[#1DB954]"
                  : "text-fluid-base text-white"
              }`}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.0 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(29,185,84,0.4)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/chat")}
            className="btn-primary text-fluid-base"
          >
            Chat With Hridu AI ❤️
          </motion.button>
        </motion.div>
      </div>

      {/* Easter egg: hidden button */}
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          onClick={() => setShowMummy(true)}
          className="absolute bottom-6 right-6 z-20 text-xs text-[#B3B3B3]/40 hover:text-[#FF8FB1] transition-colors font-medium"
          style={{ fontSize: "10px" }}
        >
          Mummy se milwa de? 🥹
        </motion.button>
      </AnimatePresence>

      {/* Mummy modal */}
      <AnimatePresence>
        {showMummy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setShowMummy(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ ease: "backOut" }}
              className="bg-[#1E1E1E] p-8 rounded-2xl border border-[#FF8FB1]/20 max-w-xs w-full mx-6 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-white font-bold text-fluid-lg mb-4">Mummy Se Milwa De 🥹</p>
              <div className="mb-4">
                <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#1DB954] to-[#FF8FB1] loading-bar"
                    initial={{ width: "0%" }}
                    animate={{ width: "1%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
              </div>
              <p className="text-[#B3B3B3] text-sm">Status: Loading... 1%</p>
              <p className="text-3xl mt-3">😭❤️</p>
              <button
                onClick={() => setShowMummy(false)}
                className="mt-4 text-[#B3B3B3] text-xs underline"
              >
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideWrapper>
  );
}
