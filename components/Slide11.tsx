"use client";

import { motion } from "framer-motion";
import SlideWrapper from "./SlideWrapper";

const notCards = [
  "A burden",
  "Not enough",
  "Someone who needs fixing",
];

const seeCards = [
  { text: "A hardworking girl", icon: "💪" },
  { text: "A caring daughter", icon: "🌸" },
  { text: "A loving sister", icon: "💛" },
  { text: "A cat mom", icon: "🐱" },
  { text: "A protective girlfriend", icon: "🛡️" },
  { text: "A dreamer", icon: "✨" },
  { text: "A crybaby (but make it cute)", icon: "🥹" },
  { text: "My best friend", icon: "🤝" },
  { text: "My favorite person", icon: "❤️" },
];

export default function Slide11({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) {
  return (
    <SlideWrapper label="Wrapped 2026" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="absolute inset-0 bg-[#121212]" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 30%, rgba(255,143,177,0.1) 0%, transparent 60%)"
      }} />

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-16 overflow-y-auto max-h-screen">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6 text-center"
        >
          <p className="text-[#FF8FB1] text-sm font-bold tracking-widest uppercase mb-1">The Truth</p>
          <h2 className="text-fluid-3xl font-black text-white">What Hridu<br />Sees</h2>
        </motion.div>

        {/* NOT section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          <p className="text-[#B3B3B3] text-xs font-bold uppercase tracking-widest mb-2">Not:</p>
          <div className="space-y-2">
            {notCards.map((text, i) => (
              <motion.div
                key={i}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="p-3 rounded-lg bg-red-500/5 border border-red-500/15 flex items-center gap-3"
              >
                <span className="text-red-400 text-lg">✗</span>
                <p className="text-[#B3B3B3] text-fluid-sm line-through">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* INSTEAD section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-[#FF8FB1] text-xs font-bold uppercase tracking-widest mb-2">Instead:</p>
          <div className="grid grid-cols-1 gap-2">
            {seeCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
                className="p-3 rounded-lg bg-[#FF8FB1]/5 border border-[#FF8FB1]/15 flex items-center gap-3"
              >
                <span className="text-lg shrink-0">{card.icon}</span>
                <p className="text-white font-medium text-fluid-sm">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
