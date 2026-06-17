"use client";

import { motion } from "framer-motion";
import SlideWrapper from "./SlideWrapper";

export default function Slide3({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) {
  return (
    <SlideWrapper label="Wrapped 2026" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="absolute inset-0 bg-[#121212]" />

      {/* Animated glow rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-[#FF8FB1]/20"
          style={{
            width: ring * 220,
            height: ring * 220,
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 3 + ring,
            repeat: Infinity,
            delay: ring * 0.5,
          }}
        />
      ))}

      {/* Glow blob */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 rounded-full" style={{
          background: "radial-gradient(circle, rgba(255,143,177,0.2) 0%, rgba(29,185,84,0.1) 50%, transparent 70%)",
          filter: "blur(40px)"
        }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#1DB954] text-sm font-bold tracking-widest uppercase mb-6"
        >
          #1 Top Artist
        </motion.p>

        {/* AYSHU big text */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
        >
          <h1
            className="font-black tracking-tight leading-none glow-pink"
            style={{
              fontSize: "clamp(4rem, 20vw, 10rem)",
              color: "#FF8FB1",
              WebkitTextStroke: "2px rgba(255,143,177,0.4)",
            }}
          >
            AYSHU
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 space-y-4"
        >
          <div className="flex items-center gap-4 justify-center">
            <div className="text-center">
              <p className="text-[#B3B3B3] text-xs uppercase tracking-widest mb-1">Minutes Occupying My Mind</p>
              <p className="text-fluid-2xl font-black text-white">∞</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-[#B3B3B3] text-xs uppercase tracking-widest mb-1">Streams This Year</p>
              <p className="text-fluid-2xl font-black text-white">All of them</p>
            </div>
          </div>

          <p className="text-[#B3B3B3] text-fluid-sm italic">
            She&apos;s been living rent-free in there since Bumble 🥹
          </p>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "backOut" }}
          className="mt-8 px-5 py-2 rounded-full bg-[#FF8FB1]/10 border border-[#FF8FB1]/30"
        >
          <span className="text-[#FF8FB1] text-sm font-bold">Your #1 Artist for the 365th time</span>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
