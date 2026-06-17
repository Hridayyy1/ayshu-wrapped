"use client";

import { motion } from "framer-motion";
import SlideWrapper from "./SlideWrapper";

export default function Slide2({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) {
  const messages = [
    { rank: "🥇", text: "I'm sleepy", count: "∞ times", bg: "from-yellow-500/10 to-transparent" },
    { rank: "🥈", text: "Ninni 🥹", count: "every night", bg: "from-slate-400/10 to-transparent" },
    { rank: "🥉", text: "Come hereee 🥹", count: "always", bg: "from-amber-700/10 to-transparent" },
  ];

  return (
    <SlideWrapper label="Wrapped 2026" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="absolute inset-0 bg-[#121212]" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 70% 30%, rgba(255,143,177,0.1) 0%, transparent 60%)"
      }} />

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-20">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[#FF8FB1] text-sm font-bold tracking-widest uppercase mb-2">In Heavy Rotation</p>
          <h2 className="text-fluid-3xl font-black text-white leading-none">
            Most Played<br />Messages
          </h2>
        </motion.div>

        <div className="space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
              className={`rounded-2xl p-5 bg-gradient-to-r ${msg.bg} border border-white/5 backdrop-blur-sm`}
              style={{ background: i === 0 ? "rgba(255,215,0,0.08)" : i === 1 ? "rgba(192,192,192,0.06)" : "rgba(205,127,50,0.06)" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{msg.rank}</span>
                  <div>
                    <p className="text-white font-bold text-fluid-lg">&ldquo;{msg.text}&rdquo;</p>
                    <p className="text-[#B3B3B3] text-xs mt-0.5">{msg.count}</p>
                  </div>
                </div>
                {/* Mini waveform */}
                <div className="flex items-end gap-0.5 h-6">
                  {[3,5,4,6,3,5,4,3].map((h, j) => (
                    <motion.div
                      key={j}
                      className="w-1 rounded-full bg-[#FF8FB1]"
                      style={{ height: h * 3 }}
                      animate={{ scaleY: [1, 0.4, 1] }}
                      transition={{ duration: 0.8, delay: j * 0.1, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special mention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 p-4 rounded-xl border border-[#FF8FB1]/20 bg-[#FF8FB1]/5"
        >
          <p className="text-xs text-[#FF8FB1] font-bold tracking-widest uppercase mb-1">Special Mention</p>
          <p className="text-white font-bold text-fluid-base italic">&ldquo;Ghar jaa.&rdquo;</p>
          <p className="text-[#B3B3B3] text-xs mt-1">Still waiting for Hridu to actually leave</p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
