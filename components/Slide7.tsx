"use client";

import { motion } from "framer-motion";
import SlideWrapper from "./SlideWrapper";

const moments = [
  { emoji: "🎭", text: "Reenacting movie scenes", detail: "Method actors, honestly" },
  { emoji: "👨‍👩‍👧", text: "Acting like each other's parents", detail: "So much parental energy" },
  { emoji: "😂", text: "Madhur comedy reenactments", detail: "Oscar-worthy performances" },
];

export default function Slide7({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) {
  return (
    <SlideWrapper label="Wrapped 2026" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="absolute inset-0 bg-[#121212]" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 20% 70%, rgba(251,191,36,0.08) 0%, transparent 60%)"
      }} />

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-20">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <p className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-1">Hall Of Fame</p>
          <h2 className="text-fluid-3xl font-black text-white">Funniest<br />Moments</h2>
        </motion.div>

        <div className="space-y-3 mb-6">
          {moments.map((m, i) => (
            <motion.div
              key={i}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.15 }}
              className="p-4 rounded-xl bg-[#1E1E1E] border border-white/5 flex items-start gap-3"
            >
              <span className="text-2xl shrink-0">{m.emoji}</span>
              <div>
                <p className="text-white font-semibold text-fluid-base">{m.text}</p>
                <p className="text-[#B3B3B3] text-xs mt-0.5">{m.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="p-5 rounded-2xl bg-yellow-400/5 border border-yellow-400/20 relative"
        >
          <span className="absolute -top-3 left-4 text-yellow-400 text-4xl font-serif leading-none">&ldquo;</span>
          <p className="text-white font-semibold text-fluid-base italic mt-2">
            Hriday, I will take a bounce. Go wash it and come back.
          </p>
          <p className="text-yellow-400 text-xs mt-2 font-bold">— Ayshu, probably</p>
          <p className="text-[#B3B3B3] text-xs mt-1">Still the funniest thing ever said 😭</p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
