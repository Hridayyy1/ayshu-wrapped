"use client";

import { motion } from "framer-motion";
import SlideWrapper from "./SlideWrapper";

const awards = [
  { icon: "🏆", title: "Most Likely To Cry During A Movie", color: "#a78bfa" },
  { icon: "🏆", title: "Cutest Angry Person", color: "#FF8FB1" },
  { icon: "🏆", title: "Disney Princess Energy Award", color: "#fbbf24" },
  { icon: "🏆", title: "Best Human To Yap With Until 5 AM", color: "#1DB954" },
  { icon: "🏆", title: "Most Protective Person", color: "#f87171" },
];

export default function Slide8({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) {
  return (
    <SlideWrapper label="Wrapped 2026" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="absolute inset-0 bg-[#121212]" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 60% 30%, rgba(167,139,250,0.1) 0%, rgba(255,143,177,0.08) 50%, transparent 70%)"
      }} />

      {/* Sparkles */}
      {["✨", "⭐", "✨", "🌟", "✨"].map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-lg pointer-events-none"
          style={{
            top: `${10 + i * 18}%`,
            right: `${5 + (i % 2) * 10}%`,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        >
          {s}
        </motion.span>
      ))}

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-20">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 text-center"
        >
          <p className="text-a78bfa text-sm font-bold tracking-widest uppercase mb-1" style={{ color: "#a78bfa" }}>Award Ceremony</p>
          <h2 className="text-fluid-3xl font-black text-white">Disney Princess<br />Energy ✨</h2>
        </motion.div>

        <div className="space-y-3">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.12 }}
              className="p-3 rounded-xl bg-[#1E1E1E] border border-white/5 flex items-center gap-3 group hover:scale-[1.02] transition-transform"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
                style={{ background: `${award.color}15` }}
              >
                {award.icon}
              </div>
              <p className="text-white font-medium text-fluid-sm">{award.title}</p>
              <div
                className="ml-auto text-xs font-bold px-2 py-1 rounded-full shrink-0"
                style={{ color: award.color, background: `${award.color}15` }}
              >
                Won
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 text-center text-[#B3B3B3] text-xs"
        >
          No contest was held. She won all of these automatically. 👑
        </motion.p>
      </div>
    </SlideWrapper>
  );
}
