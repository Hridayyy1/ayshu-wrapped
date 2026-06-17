"use client";

import { motion } from "framer-motion";
import SlideWrapper from "./SlideWrapper";
import Stars from "./Stars";

const subgenres = [
  { name: "Yapping", icon: "🗣️" },
  { name: "Life Discussions", icon: "🌙" },
  { name: "Future Plans", icon: "✨" },
  { name: "Cringe Romance", icon: "💕" },
];

export default function Slide5({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) {
  return (
    <SlideWrapper label="Wrapped 2026" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="absolute inset-0 bg-night-sky" />
      <Stars count={70} />

      {/* Moon glow */}
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-white/5 border border-white/10" style={{
        boxShadow: "0 0 40px rgba(255,255,255,0.05)"
      }} />

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-20 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[#1DB954] text-sm font-bold tracking-widest uppercase mb-4"
        >
          Played All Year
        </motion.p>

        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-fluid-3xl font-black text-white mb-2 leading-tight"
        >
          Late Night
        </motion.h2>
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-fluid-3xl font-black text-[#FF8FB1] mb-8 leading-tight"
        >
          Deep Conversations
        </motion.h2>

        {/* Subgenres */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {subgenres.map((g, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-center"
            >
              <span className="text-xl">{g.icon}</span>
              <p className="text-white text-sm font-medium mt-1">{g.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Peak time */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="p-4 rounded-2xl bg-[#1DB954]/10 border border-[#1DB954]/20"
        >
          <p className="text-[#B3B3B3] text-xs uppercase tracking-widest mb-1">Peak Listening Time</p>
          <p className="text-white font-black text-fluid-2xl">5:00 AM</p>
          <p className="text-[#B3B3B3] text-xs mt-1">When the whole world was asleep except you two 🌙</p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
