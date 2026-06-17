"use client";

import { motion } from "framer-motion";
import SlideWrapper from "./SlideWrapper";

const tracks = [
  { num: "01", title: "Gehra Hua", vibe: "late nights & feels", color: "#1DB954" },
  { num: "02", title: "Treat You Better", vibe: "Hridu's personal anthem for you", color: "#FF8FB1" },
  { num: "03", title: "Intentions", vibe: "self explanatory 🥹", color: "#a78bfa" },
  { num: "04", title: "There's Nothing Holdin' Me Back", vibe: "Ayshu being herself", color: "#fbbf24" },
  { num: "05", title: "Barbaad", vibe: "emotions on full volume", color: "#f87171" },
  { num: "06", title: "Khat", vibe: "a love letter in a song", color: "#34d399" },
];

export default function Slide4({ slideNumber, totalSlides }: { slideNumber: number; totalSlides: number }) {
  return (
    <SlideWrapper label="Wrapped 2026" slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="absolute inset-0 bg-[#121212]" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 80%, rgba(29,185,84,0.06) 0%, transparent 60%)"
      }} />

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-16">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-[#1DB954] text-sm font-bold tracking-widest uppercase mb-1">Soundtrack Of Us</p>
          <h2 className="text-fluid-3xl font-black text-white">Top Tracks</h2>
        </motion.div>

        <div className="space-y-2">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.25 + i * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-xl group hover:bg-white/5 transition-colors cursor-default"
            >
              <span className="text-[#B3B3B3] text-sm font-mono w-7 shrink-0">{track.num}</span>

              {/* Album art placeholder */}
              <div
                className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center text-black font-black text-xs"
                style={{ background: `linear-gradient(135deg, ${track.color}, ${track.color}88)` }}
              >
                ♪
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-fluid-base truncate">{track.title}</p>
                <p className="text-[#B3B3B3] text-xs truncate">{track.vibe}</p>
              </div>

              {/* Playing icon */}
              <div className="flex items-end gap-px h-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                {[2,3,2,4,3].map((h, j) => (
                  <motion.div
                    key={j}
                    className="w-0.5 rounded-full"
                    style={{ height: h * 4, background: track.color }}
                    animate={{ scaleY: [1, 0.3, 1] }}
                    transition={{ duration: 0.6, delay: j * 0.1, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 flex items-center justify-center gap-2 text-[#B3B3B3] text-xs"
        >
          <span>🎵</span>
          <span>Each one played at exactly the right moment</span>
          <span>🎵</span>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
