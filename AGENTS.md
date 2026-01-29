## Project Summary
SHAIDS (Student Hive for Artificial Intelligence & Data Science) is a dynamic community website for students at DMCE, dedicated to fostering innovation and technical excellence in AI and Data Science.

## Tech Stack
- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion, Lenis (Smooth Scroll)
- **Icons**: Lucide React
- **Language**: JavaScript (ESM)

## Architecture
- `src/`: Core application logic and components
- `src/components/`: Reusable UI components (BentoGrid, etc.)
- `public/`: Static assets and logos
- `index.html`: Entry point for Vite

## User Preferences
- **Theme**: Deep midnight blue / dark slate (`#020617`)
- **Bento Background**: Multi-shade blue gradient (`#020617` to `#172554`)
- **Visual Style**: Glassmorphism, cyan glow accents, tech-inspired textures
- **Typography**: Outfit (headings), Sora (body & UI)
- **Layout**: Centered brand identity (logo & mission) on all devices.

## Project Guidelines
- **Bento Grid**: Strictly follow specified layout proportions (Full -> 8:4 -> 6:6 -> Full).
- **Glassmorphism**: Use backdrop-blur (16px+), thin white borders (0.08 alpha), and slight transparency.
- **Motion**: Subtle hover effects (y-offset, glow, gradient shifts) using Framer Motion.
- **Responsiveness**: Support 12-column desktop grid, 2-column tablet, and vertical mobile stack. Brand panel centered on mobile.
- **Mobile Cleanup**: Strictly use `overflow-x: hidden` and `max-width: 100vw` to prevent vertical lines or horizontal overflow.
- **Deployment**: Single root-level Vite project for seamless Vercel/Bun compatibility.

## Common Patterns
- **Cards**: `BentoCard` pattern with relative positioning, z-index management, and overflow hidden for textures.
- **Backgrounds**: Layered CSS gradients and canvas-based tech backgrounds (circuits, data flow).
