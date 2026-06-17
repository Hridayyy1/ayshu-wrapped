"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";

interface OpeningSlideProps {
  onBegin: () => void;
}

export default function OpeningSlide({ onBegin }: OpeningSlideProps) {
  return (
    <div className="slide-container flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#121212]" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(29,185,84,0.08) 0%, rgba(255,143,177,0.05) 40%, transparent 70%)"
      }} />

      <Particles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
        {/* Spotify logo mark */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="mb-8"
        >
          <div className="w-16 h-16 rounded-full bg-[#1DB954] flex items-center justify-center shadow-lg" style={{ boxShadow: "0 0 40px rgba(29,185,84,0.5)" }}>
            <svg viewBox="0 0 24 24" className="w-9 h-9 fill-black">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-fluid-5xl font-black tracking-tight mb-2 leading-none"
        >
          <span className="text-white">Ayshu </span>
          <span className="text-[#1DB954]">Wrapped</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-fluid-2xl font-bold text-[#FF8FB1] mb-8"
        >
          2026 ❤️
        </motion.p>

        {/* Subtitle */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-[#B3B3B3] text-fluid-lg space-y-1 mb-12 leading-relaxed"
        >
          <p>A year of conversations,</p>
          <p>inside jokes,</p>
          <p>late night talks,</p>
          <p>and my favorite person.</p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(29,185,84,0.5)" }}
          whileTap={{ scale: 0.97 }}
          onClick={onBegin}
          className="btn-primary text-fluid-base"
        >
          Begin Your Wrapped ✨
        </motion.button>

        {/* Bottom hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-8 text-[#B3B3B3] text-xs"
        >
          Made with ❤️ by Hridu
        </motion.p>
      </div>
    </div>
  );
}
