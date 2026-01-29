import { useEffect, useRef, useState } from "react"
import { AboutPage } from "../../pages/AboutPage"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useLenis } from "lenis/react"
import { useNavigate } from "react-router-dom"
import BentoGrid from "../BentoGrid"
import { Navbar } from "../Navbar"
import { Footer } from "../Footer"

const LOGO = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c8671fa2-2465-4069-88ca-8b2a12bf859a/image-1768971461430.png?width=8000&height=8000&resize=contain"
const COLORS = [{ r: 76, g: 195, b: 230 }, { r: 111, g: 215, b: 242 }, { r: 85, g: 191, b: 217 }, { r: 79, g: 175, b: 209 }, { r: 88, g: 200, b: 232 }, { r: 127, g: 217, b: 242 }, { r: 76, g: 195, b: 230 }]

const createBlobs = (w, h, r, s) => COLORS.map((c, i) => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * s, vy: (Math.random() - 0.5) * s, r: r + Math.random() * r * 0.6, c, p: i * (Math.PI / 4.5) }))

const drawBlobs = (ctx, blobs, w, h, ps, bg) => {
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h)
  blobs.forEach(b => {
    b.x += b.vx; b.y += b.vy
    if (b.x < 0 || b.x > w) b.vx *= -1
    if (b.y < 0 || b.y > h) b.vy *= -1
    b.p += ps
    const pulse = Math.sin(b.p) * 0.3 + 0.85
    const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r * pulse)
    g.addColorStop(0, `rgba(${b.c.r},${b.c.g},${b.c.b},0.8)`)
    g.addColorStop(0.5, `rgba(${b.c.r},${b.c.g},${b.c.b},0.3)`)
    g.addColorStop(1, `rgba(${b.c.r},${b.c.g},${b.c.b},0)`)
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(b.x, b.y, b.r * pulse, 0, Math.PI * 2); ctx.fill()
  })
}

function TechBg({ booted }) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    const ctx = c.getContext('2d'); if (!ctx) return
    const resize = () => { c.width = c.offsetWidth * 2; c.height = c.offsetHeight * 2 }
    resize(); window.addEventListener('resize', resize)
    let t = 0, bp = 0, id
    const circuits = []
    const generate = () => {
      circuits.length = 0; const w = c.width, h = c.height, g = 60
      for (let i = 0; i < 20; i++) {
        const sx = Math.floor(Math.random() * (w / g)) * g, sy = Math.floor(Math.random() * (h / g)) * g, segs = []
        let cx = sx, cy = sy
        for (let j = 0; j < 3 + Math.floor(Math.random() * 3); j++) { const len = (1 + Math.floor(Math.random() * 2)) * g; if (j % 2 === 0) { const dx = (Math.random() > 0.5 ? 1 : -1) * len; if (cx + dx > 0 && cx + dx < w) { segs.push({ dx, dy: 0 }); cx += dx } } else { const dy = (Math.random() > 0.5 ? 1 : -1) * len; if (cy + dy > 0 && cy + dy < h) { segs.push({ dx: 0, dy }); cy += dy } } }
        if (segs.length) circuits.push({ sx, sy, segs, off: Math.random(), sp: 0.001 + Math.random() * 0.001 })
      }
    }
    generate()
      const draw = () => {
        const w = c.width, h = c.height; ctx.clearRect(0, 0, w, h); t += 0.016
        if (booted && bp < 1) bp += 0.01
        
        if (window.innerWidth > 768) {
          const glow = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, 300)
          glow.addColorStop(0, `rgba(76,195,230,${0.1 * bp})`); glow.addColorStop(1, 'rgba(26,44,70,0)')
          ctx.fillStyle = glow; ctx.fillRect(0, 0, w, h)
        }
        
        circuits.forEach(ci => {
        const op = 0.08 * bp; ctx.strokeStyle = `rgba(76,195,230,${op})`; ctx.lineWidth = 1; ctx.lineCap = 'square'
        ctx.beginPath(); ctx.moveTo(ci.sx, ci.sy)
        let cx = ci.sx, cy = ci.sy, total = 0
        ci.segs.forEach(s => { cx += s.dx; cy += s.dy; ctx.lineTo(cx, cy); total += Math.abs(s.dx) + Math.abs(s.dy) }); ctx.stroke()
        if (total > 0 && bp > 0.3) {
          ci.off += ci.sp; if (ci.off > 1) ci.off = 0
          let target = ci.off * total, acc = 0, px = ci.sx, py = ci.sy
          for (const s of ci.segs) { const len = Math.abs(s.dx) + Math.abs(s.dy); if (acc + len >= target) { const tt = (target - acc) / len; px += s.dx * tt; py += s.dy * tt; break }; acc += len; px += s.dx; py += s.dy }
          ctx.fillStyle = `rgba(127,217,242,${0.3 * bp})`; ctx.beginPath(); ctx.arc(px, py, 2, 0, Math.PI * 2); ctx.fill()
        }
        ctx.fillStyle = `rgba(88,200,232,${op * 1.5})`; ctx.beginPath(); ctx.arc(ci.sx, ci.sy, 2, 0, Math.PI * 2); ctx.fill()
      })
      id = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [booted])
  return <canvas ref={ref} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
}

let heroAnimationPlayed = false
if (typeof window !== 'undefined') {
  const nav = performance.getEntriesByType("navigation")[0]
  if (nav && nav.type === 'reload') {
    sessionStorage.removeItem('heroAnimationPlayed')
  }
  heroAnimationPlayed = sessionStorage.getItem('heroAnimationPlayed') === 'true'
}

export default function NewHero() {
  const canvasRef = useRef(null)
  const bgRef = useRef(null)
  const [phase, setPhase] = useState(heroAnimationPlayed ? 'fullscreen' : 'opening')
  const [angle, setAngle] = useState(heroAnimationPlayed ? 0 : -70)
  const [scale, setScale] = useState(heroAnimationPlayed ? 6 : 1)
  const [lapOp, setLapOp] = useState(heroAnimationPlayed ? 0 : 1)
  const [show, setShow] = useState(heroAnimationPlayed)
  const [bright, setBright] = useState(heroAnimationPlayed ? 5 : 1)
  const [flash, setFlash] = useState(0)
  const lenis = useLenis()
  const navigate = useNavigate()

  useEffect(() => {
    if (!show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [show])

  const handleAboutClick = () => {
    navigate('/about')
  }

  const handleScrollDown = () => {
    if (lenis) {
      lenis.scrollTo('#bento-section', {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })
    }
  }

  useEffect(() => {
    const start = Date.now(); let id, zs = null
    const eO = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
    const eIO = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    const anim = () => {
      const el = Date.now() - start
      if (phase === 'opening') { const p = Math.min((el - 500) / 2000, 1); if (p < 0) { id = requestAnimationFrame(anim); return }; setAngle(-70 + 70 * eO(p)); if (p >= 1) { setPhase('paused'); setTimeout(() => setPhase('zooming'), 1500) }; id = requestAnimationFrame(anim) }
      else if (phase === 'zooming') { if (!zs) zs = Date.now(); const p = Math.min((Date.now() - zs) / 1800, 1), ep = eIO(p); setScale(1 + ep * 5); setLapOp(Math.max(0, 1 - ep * 1.2)); setBright(1 + ep * 4); const pk = 0.7; setFlash(p < pk ? eIO(p / pk) * 0.9 : 0.9 * (1 - eIO((p - pk) / (1 - pk)))); if (p >= 1) { setPhase('fullscreen'); setFlash(0); heroAnimationPlayed = true; sessionStorage.setItem('heroAnimationPlayed', 'true'); setTimeout(() => setShow(true), 100); return }; id = requestAnimationFrame(anim) }
    }
    id = requestAnimationFrame(anim)
    return () => cancelAnimationFrame(id)
  }, [phase])

  useEffect(() => {
    const c = canvasRef.current, bg = bgRef.current; if (!c || !bg) return
    const ctx = c.getContext("2d"), bgCtx = bg.getContext("2d"); if (!ctx || !bgCtx) return
    c.width = 400; c.height = 250; bg.width = window.innerWidth; bg.height = window.innerHeight
    const resize = () => { bg.width = window.innerWidth; bg.height = window.innerHeight }
    window.addEventListener('resize', resize)
    const sBlobs = createBlobs(400, 250, 80, 1.5), bgBlobs = createBlobs(bg.width, bg.height, 250, 1)
    let id
    const draw = () => { drawBlobs(ctx, sBlobs, 400, 250, 0.012, "rgba(2, 6, 2,0.08)"); drawBlobs(bgCtx, bgBlobs, bg.width, bg.height, 0.008, "rgba(2, 6, 2,0.02)"); id = requestAnimationFrame(draw) }
    draw()
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <div className={`min-h-screen w-full bg-[#020617] overflow-x-hidden ${!show ? 'h-screen overflow-hidden' : ''}`}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
        <canvas ref={bgRef} className="absolute inset-0 w-full h-full" style={{ filter: "blur(60px)", opacity: 0.4 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0F1A2E] to-[#020617]" />
        <div className="hidden md:block absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(76,195,230,0.12)_0%,_transparent_50%)]" />
        <TechBg booted={show} />
      </div>

      <Navbar show={show} />

      <section className="relative min-h-screen flex items-center justify-center pt-12 w-full overflow-hidden">
        {phase !== 'fullscreen' && (
          <div className="z-20" style={{ perspective: '1000px', transform: `scale(${scale})`, opacity: lapOp }}>
            <div className="relative w-[220px] h-[145px] md:w-[340px] md:h-[220px] rounded-t-lg overflow-hidden" style={{ transform: `rotateX(${angle}deg)`, transformOrigin: 'bottom center', background: 'linear-gradient(180deg, #1A2C46 0%, #0F1A2E 2%, #020617 100%)', boxShadow: '0 -2px 30px rgba(76,195,230,0.2)' }}>
              <div className="absolute inset-2 rounded-sm overflow-hidden bg-[#0F1A2E]" style={{ filter: `brightness(${bright})` }}>
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full scale-150" style={{ filter: "blur(15px)" }} />
                <div className="absolute inset-0 flex items-center justify-center"><div className="w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg" style={{ border: '2px solid rgba(76,195,230,0.5)', boxShadow: '0 0 30px rgba(76,195,230,0.3)' }}><img src={LOGO} alt="SHAIDS Logo" className="w-full h-full object-cover" /></div></div>
                <div className="absolute inset-0 bg-white" style={{ opacity: Math.max(0, (bright - 2) / 3) }} />
              </div>
            </div>
            <div className="w-[220px] md:w-[340px] h-2" style={{ background: 'linear-gradient(180deg, #1A2C46 0%, #2a3f5f 50%, #1A2C46 100%)' }} />
            <div className="w-[245px] -ml-3 md:w-[380px] md:-ml-5 h-3 rounded-b-lg" style={{ transform: 'rotateX(70deg)', transformOrigin: 'top center', background: 'linear-gradient(180deg, #1A2C46 0%, #2a3f5f 20%, #1A2C46 100%)', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}><div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[40px] md:w-[60px] h-1 rounded-sm" style={{ background: 'rgba(122,140,166,0.5)' }} /></div>
          </div>
        )}
        <div className="fixed inset-0 z-40 pointer-events-none" style={{ background: 'white', opacity: flash }} />
        <div className={`absolute inset-0 flex flex-col items-center justify-center z-30 transition-opacity duration-1000 w-full max-w-none pointer-events-none ${show ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-4 sm:mb-6 font-outfit font-semibold overflow-hidden">
              <motion.span 
                className="inline-block text-white text-glow-animate"
                initial={{ y: 100, opacity: 0 }}
                animate={show ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                Welcome to
              </motion.span>
              <span className="inline-block w-2 sm:w-4 md:w-6 lg:w-8" />
              <motion.span 
                className="relative inline-block cyan-text-glow-animate"
                style={{ color: '#4CC3E6' }}
                initial={{ y: 100, opacity: 0 }}
                animate={show ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              >
                SHAIDS
              </motion.span>
            </h1>
            <motion.p 
              className="text-xs sm:text-sm md:text-lg lg:text-xl tracking-[0.2em] sm:tracking-[0.3em] uppercase max-w-xs sm:max-w-none mx-auto sub-text-glow-animate font-sora font-light" 
              style={{ color: '#C7D2E0', letterSpacing: '0.25em' }}
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={show ? { opacity: 1, letterSpacing: "0.25em" } : {}}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              Student Hive of Artificial Intelligence & Data Science
            </motion.p>
          </div>
        </div>
        
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-40 flex flex-col items-center group"
            initial={{ opacity: 0, y: -10 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            onClick={handleScrollDown}
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.3, 1, 0.3] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ 
                y: 0, 
                opacity: 1,
                transition: { duration: 0.3 } 
              }}
              className="relative flex items-center justify-center p-3"
            >
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 blur-xl rounded-full transition-all duration-500" />
              <ArrowDown 
                size={28} 
                className="text-cyan-400/40 group-hover:text-cyan-400 transition-all duration-500 drop-shadow-[0_0_0px_rgba(34,211,238,0)] group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" 
              />
            </motion.div>
          </motion.div>
        </section>

        <div id="bento-section">
          <BentoGrid onAboutClick={handleAboutClick} />
        </div>

      <Footer show={show} />
    </div>
  )
}
