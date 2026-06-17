"use client";

import { motion } from "framer-motion";
import SlideWrapper from "./SlideWrapper";

export default function Slide1({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) {
  const items = [
    { icon: "📱", label: "Platform", value: "Bumble", accent: "#1DB954" },
    { icon: "👆", label: "First Swipe", value: "🏆 Ayshu", accent: "#FF8FB1" },
    { icon: "💬", label: "First Message", value: "🏆 Hridu", accent: "#1DB954" },
    { icon: "💕", label: "Best Decision", value: "Both ❤️", accent: "#FF8FB1" },
  ];

  return (
    <SlideWrapper label="Wrapped 2026" slideNumber={slideNumber} totalSlides={totalSlides}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#121212]" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 30% 20%, rgba(29,185,84,0.12) 0%, transparent 60%)"
      }} />

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[#1DB954] text-sm font-bold tracking-widest uppercase mb-2">Your Story Started With</p>
          <h2 className="text-fluid-3xl font-black text-white leading-none">
            Match Of The Year
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="track-card p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-[#B3B3B3] text-fluid-base">{item.label}</span>
              </div>
              <span className="font-bold text-fluid-base" style={{ color: item.accent }}>
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 text-center text-[#B3B3B3] text-fluid-sm italic"
        >
          Without that swipe, this Wrapped wouldn&apos;t exist. 🥹
        </motion.p>
      </div>
    </SlideWrapper>
  );
}
