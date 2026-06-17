"use client";

import { motion } from "framer-motion";
import SlideWrapper from "./SlideWrapper";

const searches = [
  { rank: "1", text: "Let's Play Uno", icon: "🎮" },
  { rank: "2", text: "Nutella Doughnut", icon: "🍩" },
  { rank: "3", text: "Malekumassala", icon: "🤲" },
  { rank: "4", text: "146 Other Things", icon: "📊" },
  { rank: "5", text: "Mummy Se Milwa De", icon: "🥹" },
  { rank: "6", text: "Jainslim Babies", icon: "👶" },
];

export default function Slide9({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) {
  return (
    <SlideWrapper label="Wrapped 2026" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="absolute inset-0 bg-[#121212]" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 40% 60%, rgba(29,185,84,0.08) 0%, transparent 60%)"
      }} />

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-16">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <p className="text-[#1DB954] text-sm font-bold tracking-widest uppercase mb-1">The Origin Stories</p>
          <h2 className="text-fluid-3xl font-black text-white">Relationship<br />Lore 📖</h2>
        </motion.div>

        {/* Search bar mockup */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-4 p-3 rounded-xl bg-[#2a2a2a] border border-white/10 flex items-center gap-2"
        >
          <svg className="w-4 h-4 text-[#B3B3B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-[#B3B3B3] text-sm">Top Searches of 2026...</span>
        </motion.div>

        <div className="space-y-2">
          {searches.map((s, i) => (
            <motion.div
              key={i}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
            >
              <span className="text-[#B3B3B3] text-sm font-mono w-5 shrink-0">{s.rank}</span>
              <div className="w-8 h-8 rounded-lg bg-[#1E1E1E] flex items-center justify-center text-base shrink-0 border border-white/5">
                {s.icon}
              </div>
              <span className="text-white font-medium text-fluid-base">{s.text}</span>
              <svg className="w-4 h-4 text-[#B3B3B3] ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-5 text-center text-[#B3B3B3] text-xs italic"
        >
          Every inside joke has a story. These ones are legendary. 🏆
        </motion.p>
      </div>
    </SlideWrapper>
  );
}
