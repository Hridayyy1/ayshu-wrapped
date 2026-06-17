# Ayshu Wrapped 2026 ❤️

A Spotify Wrapped-inspired romantic website built with love by Hridu for Ayshu.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion**
- **Anthropic Claude API** (for Hridu AI chatbot)

## Getting Started Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your Anthropic API key.
   Get one at: https://console.anthropic.com

3. **Run the dev server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard

1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"** → Import your GitHub repo
4. Add environment variable:
   - Key: `ANTHROPIC_API_KEY`
   - Value: your API key from https://console.anthropic.com
5. Click **Deploy** ✨

## Features

- 🎵 13 Spotify Wrapped-style slides
- 💕 Smooth slide transitions with Framer Motion
- 📱 Fully mobile-responsive
- ⌨️ Keyboard navigation (arrow keys)
- 👆 Touch swipe support
- 🤖 Hridu AI chatbot powered by Claude
- 🥹 Hidden easter eggs
- ✨ Particle animations, star fields, glow effects

## Structure

```
app/
  page.tsx          → Main wrapped experience (13 slides)
  chat/page.tsx     → Hridu AI chatbot
  api/chat/route.ts → Claude API endpoint
  globals.css       → Design system

components/
  OpeningSlide.tsx  → Landing screen
  Slide1-12.tsx     → Individual slides
  FinalSlide.tsx    → Thank you + easter egg
  Particles.tsx     → Floating particles
  Stars.tsx         → Night sky stars
  SlideWrapper.tsx  → Slide layout wrapper
```

Made with ❤️ by Hridu for Ayshu
