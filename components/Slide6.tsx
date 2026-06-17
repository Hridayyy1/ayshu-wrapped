"use client";

import { motion } from "framer-motion";
import SlideWrapper from "./SlideWrapper";

const members = [
  { emoji: "👸", name: "Ayshu", role: "The Princess", color: "#FF8FB1" },
  { emoji: "🤡", name: "Hridu", role: "The Clown (self-aware)", color: "#1DB954" },
  { emoji: "🐱", name: "Chibi", role: "The Main Character", color: "#fbbf24" },
  { emoji: "🐱", name: "Whisku", role: "The Co-Main Character", color: "#a78bfa" },
];

export default function Slide6({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) {
  return (
    <SlideWrapper label="Wrapped 2026" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="absolute inset-0 bg-[#121212]" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(29,185,84,0.07) 0%, rgba(255,143,177,0.07) 50%, transparent 70%)"
      }} />

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-20">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1DB954]/10 border border-[#1DB954]/20 mb-4">
            <span className="text-[#1DB954] text-xs font-bold tracking-widest uppercase">Premium</span>
          </div>
          <h2 className="text-fluid-3xl font-black text-white">Family Plan</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: "backOut" }}
              className="p-4 rounded-2xl bg-[#1E1E1E] border border-white/5 text-center"
              style={{ borderColor: `${m.color}20` }}
            >
              <div
                className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl"
                style={{ background: `${m.color}15`, border: `2px solid ${m.color}30` }}
              >
                {m.emoji}
              </div>
              <p className="text-white font-bold text-fluid-base">{m.name}</p>
              <p className="text-xs mt-0.5" style={{ color: m.color }}>{m.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Monthly cost */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="p-4 rounded-xl bg-[#FF8FB1]/5 border border-[#FF8FB1]/15 text-center"
        >
          <p className="text-[#B3B3B3] text-xs uppercase tracking-widest mb-1">Monthly Cost</p>
          <p className="text-[#FF8FB1] font-black text-fluid-xl">Emotional Damage</p>
          <p className="text-[#B3B3B3] text-xs mt-1">(Worth every bit of it) 💕</p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
