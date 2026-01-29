import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Background } from "../components/Background"

const LOGO = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c8671fa2-2465-4069-88ca-8b2a12bf859a/image-1768971461430.png?width=8000&height=8000&resize=contain"

const CARDS = [
  { title: "Technical Growth", desc: "Explore AI and Data Science with workshops, hackathons, and expert talks.", type: "neural" },
  { title: "Cultural Creativity", desc: "Showcase talents through events, exhibitions, and talent shows.", type: "wave" },
  { title: "Sports & Fitness", desc: "Stay active with tournaments and fitness activities.", type: "energy" },
  { title: "Community Building", desc: "Join a network of like-minded peers for collaboration and support.", type: "network" },
]

function Reactor({ hovered, booted }) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    const ctx = c.getContext('2d'); if (!ctx) return
    c.width = 560; c.height = 560
    let t = 0, bp = 0, id
    const draw = () => {
      ctx.clearRect(0, 0, 560, 560); t += 0.008
      if (booted && bp < 1) bp += 0.015
      const cx = 280, cy = 280, hb = hovered !== null ? 0.3 : 0, pulse = Math.sin(t * 2) * 0.15 + 0.85
      const og = ctx.createRadialGradient(cx, cy, 80, cx, cy, 140)
      og.addColorStop(0, `rgba(76,195,230,${0.1 * bp * pulse})`); og.addColorStop(1, 'rgba(111,215,242,0)')
      ctx.fillStyle = og; ctx.beginPath(); ctx.arc(cx, cy, 140, 0, Math.PI * 2); ctx.fill()
      for (let r = 0; r < 4; r++) {
        const rad = 40 + r * 22, segs = 8 + r * 4, rot = t * (r % 2 === 0 ? 1 : -1) * (0.3 + r * 0.1), op = bp * (0.4 + hb * 0.3) * pulse
        ctx.strokeStyle = `rgba(76,195,230,${op * 0.3})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(cx, cy, rad, 0, Math.PI * 2); ctx.stroke()
        for (let i = 0; i < segs; i++) {
          const a = (i / segs) * Math.PI * 2 + rot, sl = (Math.PI * 2) / segs * 0.6
          ctx.strokeStyle = `rgba(88,200,232,${op * 0.6})`; ctx.lineWidth = r === 1 ? 3 : 2
          ctx.beginPath(); ctx.arc(cx, cy, rad, a - sl / 2, a + sl / 2); ctx.stroke()
          if (r < 3) { ctx.fillStyle = `rgba(127,217,242,${op * 0.8})`; ctx.beginPath(); ctx.arc(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad, 2, 0, Math.PI * 2); ctx.fill() }
        }
      }
      const ig = ctx.createRadialGradient(cx, cy, 0, cx, cy, 35)
      ig.addColorStop(0, `rgba(255,255,255,${0.9 * bp * pulse})`); ig.addColorStop(0.3, `rgba(127,217,242,${(0.7 + hb) * bp * pulse})`)
      ig.addColorStop(0.6, `rgba(76,195,230,${(0.5 + hb * 0.5) * bp * pulse})`); ig.addColorStop(1, `rgba(26,44,70,${0.3 * bp})`)
      ctx.fillStyle = ig; ctx.beginPath(); ctx.arc(cx, cy, 35, 0, Math.PI * 2); ctx.fill()
      ctx.strokeStyle = `rgba(127,217,242,${0.8 * bp * pulse})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI * 2); ctx.stroke()
      for (let i = 0; i < 3; i++) { const a = (i / 3) * Math.PI * 2 - t * 0.5; ctx.save(); ctx.translate(cx, cy); ctx.rotate(a); ctx.fillStyle = `rgba(255,255,255,${0.6 * bp * pulse})`; ctx.beginPath(); ctx.moveTo(18, 0); ctx.lineTo(10, -4); ctx.lineTo(10, 4); ctx.closePath(); ctx.fill(); ctx.restore() }
      id = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(id)
  }, [hovered, booted])
  return <canvas ref={ref} className="w-[140px] h-[140px] md:w-[180px] md:h-[180px]" />
}

function Circuits({ hovered, booted }) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    const ctx = c.getContext('2d'); if (!ctx) return
    const resize = () => { c.width = c.offsetWidth * 2; c.height = c.offsetHeight * 2 }
    resize(); window.addEventListener('resize', resize)
    let bp = 0, vp = 0, hp = [0, 0, 0, 0], pa = [0, 0, 0, 0], id
    const pts = Array.from({ length: 16 }, (_, i) => ({ p: (i % 4) / 4, s: 0.005, l: Math.floor(i / 4) }))
    const draw = () => {
      const w = c.width, h = c.height; ctx.clearRect(0, 0, w, h)
      if (booted) { if (bp < 1) bp += 0.02; if (bp > 0.3 && vp < 1) vp += 0.03; if (vp > 0.5) hp = hp.map(p => Math.min(p + 0.04, 1)); if (vp >= 1) pa = pa.map((p, i) => hp[i] >= 1 ? Math.min(p + 0.05, 1) : p) }
      const cx = w / 2, cy = h / 2, cr = 70, cw = w * 0.36, ch = h * 0.26, mx = w * 0.015, my = h * 0.015
      const ty = my + ch / 2, by = h - my - ch / 2, ll = cx - cr - 50, rl = cx + cr + 50, lp = mx + cw, rp = w - mx - cw
      const routes = [{ lx: ll, px: lp, cy: ty, coreY: cy - cr }, { lx: rl, px: rp, cy: ty, coreY: cy - cr }, { lx: ll, px: lp, cy: by, coreY: cy + cr }, { lx: rl, px: rp, cy: by, coreY: cy + cr }]
      routes.forEach((r, i) => {
        const isH = hovered === i, op = bp * (isH ? 0.8 : 0.4), lw = isH ? 2 : 1.5
        ctx.lineCap = 'square'
        if (vp > 0) { ctx.strokeStyle = `rgba(76,195,230,${op * 0.6})`; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(cx, r.coreY); ctx.lineTo(cx + (r.lx - cx) * Math.min(vp * 2, 1), r.coreY); ctx.stroke()
          if (vp > 0.5) { const v = (vp - 0.5) * 2; ctx.strokeStyle = `rgba(76,195,230,${op})`; ctx.beginPath(); ctx.moveTo(r.lx, r.coreY); ctx.lineTo(r.lx, r.coreY + (r.cy - r.coreY) * v); ctx.stroke()
            if (v >= 1) { ctx.fillStyle = `rgba(88,200,232,${op * 1.2})`; ctx.beginPath(); ctx.arc(r.lx, r.coreY, isH ? 4 : 3, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(r.lx, r.cy, isH ? 4 : 3, 0, Math.PI * 2); ctx.fill() } } }
        if (hp[i] > 0) { ctx.strokeStyle = `rgba(76,195,230,${op})`; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(r.lx, r.cy); ctx.lineTo(r.lx + (r.px - r.lx) * hp[i], r.cy); ctx.stroke() }
        if (pa[i] > 0) { const po = pa[i] * (isH ? 1 : 0.7); ctx.fillStyle = `rgba(111,215,242,${po})`; ctx.beginPath(); ctx.arc(r.px, r.cy, isH ? 6 : 5, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = `rgba(111,215,242,${po * 0.5})`; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(r.px, r.cy, isH ? 10 : 8, 0, Math.PI * 2); ctx.stroke() }
      })
      pts.forEach(pt => {
        const r = routes[pt.l]; if (pa[pt.l] < 1) return
        pt.p += pt.s * (hovered === pt.l ? 1.5 : 1); if (pt.p > 1) pt.p = 0
        const points = [{ x: cx, y: r.coreY }, { x: r.lx, y: r.coreY }, { x: r.lx, y: r.cy }, { x: r.px, y: r.cy }]
        let tl = 0; const sl = points.slice(0, -1).map((p, i) => { const l = Math.abs(points[i + 1].x - p.x) + Math.abs(points[i + 1].y - p.y); tl += l; return l })
        let target = tl * pt.p, acc = 0, px = points[0].x, py = points[0].y
        for (let i = 0; i < sl.length; i++) { if (acc + sl[i] >= target) { const t = (target - acc) / sl[i]; px = points[i].x + (points[i + 1].x - points[i].x) * t; py = points[i].y + (points[i + 1].y - points[i].y) * t; break }; acc += sl[i] }
        const isH = hovered === pt.l; ctx.fillStyle = `rgba(127,217,242,${isH ? 0.95 : 0.75})`; ctx.beginPath(); ctx.arc(px, py, isH ? 4 : 3, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = `rgba(255,255,255,${(isH ? 0.95 : 0.75) * 0.8})`; ctx.beginPath(); ctx.arc(px, py, (isH ? 4 : 3) * 0.4, 0, Math.PI * 2); ctx.fill()
      })
      id = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [hovered, booted])
    return <canvas ref={ref} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
  }

function CardBg({ type, active }) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    const ctx = c.getContext('2d'); if (!ctx) return
    c.width = 200; c.height = 200; let t = 0, id
    const op = active ? 0.4 : 0.2
    const draw = () => {
      ctx.clearRect(0, 0, 200, 200); t += 0.02
      if (type === 'neural') {
        const nodes = [[40, 40], [160, 40], [100, 100], [40, 160], [160, 160]]
        nodes.forEach(([x, y], i) => { nodes.forEach(([x2, y2], j) => { if (j > i) { ctx.strokeStyle = `rgba(76,195,230,${op * 0.5})`; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y2); ctx.stroke() } }); ctx.fillStyle = `rgba(127,217,242,${op})`; ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fill() })
      } else if (type === 'wave') {
        for (let w = 0; w < 3; w++) { ctx.beginPath(); for (let x = 0; x <= 200; x += 5) { const y = 100 + Math.sin(x * 0.03 + t + w * 0.5) * (25 + w * 10); x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y) }; ctx.strokeStyle = `rgba(76,195,230,${op * (1 - w * 0.25)})`; ctx.lineWidth = 2; ctx.stroke() }
      } else if (type === 'energy') {
        for (let i = 0; i < 3; i++) { const h = 30 + (Math.sin(t * 3 + i * 1.5) * 0.5 + 0.5) * 60; ctx.fillStyle = `rgba(88,200,232,${op})`; ctx.fillRect(50 + i * 40, 170 - h, 25, h) }
      } else {
        const clusters = [[50, 50], [150, 50], [100, 100], [50, 150], [150, 150]]
        clusters.forEach(([x, y], i) => { clusters.forEach(([x2, y2], j) => { if (j > i) { ctx.strokeStyle = `rgba(76,195,230,${op * 0.3})`; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y2); ctx.stroke() } }); ctx.fillStyle = `rgba(88,200,232,${op})`; ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill() })
      }
      id = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(id)
  }, [type, active])
  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-30" />
}

function MobileCircuits({ hovered, booted }) {
    const ref = useRef(null)
    useEffect(() => {
      const c = ref.current; if (!c) return
      const ctx = c.getContext('2d'); if (!ctx) return
      const resize = () => { const p = c.parentElement; if (p) { c.width = p.offsetWidth * 2; c.height = p.offsetHeight * 2 } }
      resize(); window.addEventListener('resize', resize)
      let bp = 0, id
      const pts = Array.from({ length: 6 }, (_, i) => ({ p: i / 6, s: 0.003 }))
      const draw = () => {
        const w = c.width, h = c.height; ctx.clearRect(0, 0, w, h)
        if (booted && bp < 1) bp += 0.02
        const cx = w / 2, rs = 280, ry = 140, cardH = 220, gap = 16, startY = rs + 16 + 16
        const cardYs = [0, 1, 2, 3].map(i => startY + (cardH + gap) * i + cardH / 2)
        const sly = ry + 70, ely = cardYs[3] + cardH / 2, op = bp * (hovered !== null ? 0.6 : 0.5)
        ctx.strokeStyle = `rgba(76,195,230,${op})`; ctx.lineWidth = 3; ctx.lineCap = 'round'
        ctx.beginPath(); ctx.moveTo(cx, sly); ctx.lineTo(cx, ely); ctx.stroke()
        ctx.fillStyle = `rgba(88,200,232,${op * 1.3})`; ctx.beginPath(); ctx.arc(cx, sly, 6, 0, Math.PI * 2); ctx.fill()
        cardYs.forEach((y, i) => { const isH = hovered === i, no = bp * (isH ? 1 : 0.6), sz = isH ? 10 : 8; ctx.fillStyle = `rgba(111,215,242,${no})`; ctx.beginPath(); ctx.arc(cx, y, sz, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = `rgba(111,215,242,${no * 0.5})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, y, isH ? 16 : 14, 0, Math.PI * 2); ctx.stroke() })
        if (bp >= 1) pts.forEach(pt => { pt.p += pt.s; if (pt.p > 1) pt.p = 0; const py = sly + (ely - sly) * pt.p; let near = hovered !== null && Math.abs(py - cardYs[hovered]) < 80; ctx.fillStyle = `rgba(127,217,242,${near ? 0.95 : 0.7})`; ctx.beginPath(); ctx.arc(cx, py, near ? 8 : 6, 0, Math.PI * 2); ctx.fill() })
        id = requestAnimationFrame(draw)
      }
      draw()
      return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
    }, [hovered, booted])
      return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none z-[-1]" />
    }

function Card({ card, hovered, idx, booted }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => { if (booted) { const t = setTimeout(() => setVisible(true), 600 + idx * 150); return () => clearTimeout(t) } }, [booted, idx])
  const icons = {
    neural: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    wave: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    energy: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    network: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  }
  const isLeft = idx === 0 || idx === 2
    return (
      <div className="relative rounded-lg overflow-visible h-[110px] md:h-[135px] flex flex-col transition-all duration-500 glass-card" style={{ background: 'rgba(2, 6, 2, 0.9)', border: '1px solid rgba(76, 195, 230, 0.1)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)', transform: visible ? `translateY(${hovered ? '-3px' : '0'})` : 'translateY(15px)', opacity: visible ? 1 : 0, backdropFilter: 'blur(12px)' }}>
        <div className="absolute inset-0 rounded-lg overflow-hidden"><CardBg type={card.type} active={hovered} /></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/20 to-[#020617]/60 rounded-lg" />
      <div className="relative z-10 p-2.5 md:p-4 flex flex-col h-full">
<div className={`mb-1 transition-all duration-300 scale-90 md:scale-100 origin-left`} style={{ color: hovered ? '#6FD7F2' : '#58C8E8' }}>{icons[card.type]}</div>
            <h3 className={`text-[11px] md:text-sm mb-1 transition-colors duration-300 font-outfit font-semibold`} style={{ color: hovered ? '#6FD7F2' : '#FFFFFF' }}>{card.title}</h3>
            <p className={`text-[9px] md:text-xs leading-relaxed mt-auto font-sora font-light`} style={{ color: hovered ? '#C7D2E0' : '#9FB1C8' }}>{card.desc}</p>
        </div>
      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: hovered ? '#6FD7F2' : 'rgba(76,195,230,0.4)' }} />
      <div className={`hidden md:block absolute ${isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 z-30`} style={{ borderColor: hovered ? '#6FD7F2' : 'rgba(76,195,230,0.35)', backgroundColor: hovered ? 'rgba(111,215,242,0.25)' : 'rgba(2, 6, 2,0.95)' }} />
    </div>
  )
}

export function AboutPage() {
  const aboutRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(null)
  const [booted, setBooted] = useState(false)

  const onMove = useCallback((e) => {
    if (!aboutRef.current) return
    const r = aboutRef.current.getBoundingClientRect()
    setMouse({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setBooted(true)
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#020617] overflow-x-hidden">
      <Background booted={true} />
      <Navbar show={true} />
      
      <main className="pt-24 pb-20">
        <section ref={aboutRef} onMouseMove={onMove} className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative group overflow-hidden rounded-[2.5rem] p-1 transition-all duration-500 mb-16" 
              style={{ background: 'transparent', border: 'none', backdropFilter: 'none' }}
            >
              <div className="absolute inset-0 bg-transparent" />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.4rem] pointer-events-none"
                style={{ background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(76,195,230,0.15) 0%, transparent 65%)` }}
              />
              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                <div className="relative shrink-0">
                  <motion.div 
                    whileHover={{ rotate: [0, 5, -5, 0], scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-32 h-32 md:w-44 md:h-44 rounded-3xl overflow-hidden shadow-2xl relative z-10 p-0.5 bg-gradient-to-br from-[#4CC3E6]/40 to-cyan-900/40"
                  >
                    <div className="w-full h-full rounded-[1.4rem] overflow-hidden bg-transparent flex items-center justify-center p-4">
                      <img src={LOGO} alt="SHAIDS Logo" className="w-full h-full object-contain saturate-150" />
                    </div>
                  </motion.div>
                  <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full opacity-50 animate-pulse" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400/80 font-semibold font-sora">About Our Community</span>
                  </motion.div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight font-outfit"
                  >
                    A Student Community <span className="premium-text italic text-cyan-400">for Geeks</span>
                  </motion.h2>
                  <p className="text-base md:text-lg leading-relaxed text-slate-300 font-sora font-light" style={{ maxWidth: '650px' }}>
                    SHAIDS (Student Hive of Artificial Intelligence and Data Science) at DMCE is a dynamic community dedicated to fostering innovation and technical excellence. We empower students to explore cutting-edge technologies, collaborate on impactful projects, and build a strong foundation in the world of AI and Data Science.
                  </p>
                  <div className="mt-10 flex items-center justify-center md:justify-start gap-4 sm:gap-8 font-sora">
                    <div className="flex flex-col items-center md:items-start group/stat">
                      <span className="text-xl sm:text-2xl font-bold text-white mb-0.5 font-sora group-hover/stat:text-cyan-400 transition-colors">2024</span>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-medium">Founded</span>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="flex flex-col items-center md:items-start group/stat">
                      <span className="text-xl sm:text-2xl font-bold text-white mb-0.5 font-sora group-hover/stat:text-cyan-400 transition-colors">100+</span>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-medium">Members</span>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="flex flex-col items-center md:items-start group/stat">
                      <span className="text-xl sm:text-2xl font-bold text-white mb-0.5 font-sora group-hover/stat:text-cyan-400 transition-colors">DMCE</span>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-medium">COMMUNITY</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="relative pt-8">
              <div className="text-center mb-16">
                <div className="inline-block group cursor-default">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-outfit font-bold uppercase tracking-[0.3em] relative">
                    <span className="text-white">explore with us</span>
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 group-hover:w-full transition-all duration-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                  </h2>
                </div>
              </div>

              <div className="hidden md:block relative min-h-[520px]">
                <Circuits hovered={hovered} booted={booted} />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"><Reactor hovered={hovered} booted={booted} /></div>
                {[0, 1, 2, 3].map(i => <div key={i} className={`absolute w-[36%] ${i < 2 ? 'top-[1.5%]' : 'bottom-[1.5%]'} ${i % 2 === 0 ? 'left-[1.5%]' : 'right-[1.5%]'} z-20`} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}><Card card={CARDS[i]} hovered={hovered === i} idx={i} booted={booted} /></div>)}
              </div>
              <div className="md:hidden relative flex flex-col items-center gap-2">
                <MobileCircuits hovered={hovered} booted={booted} />
                <div className="flex justify-center mb-2 relative z-10"><Reactor hovered={hovered} booted={booted} /></div>
                {CARDS.map((c, i) => <div key={i} className="relative z-20 w-[85%]" onTouchStart={() => setHovered(i)} onTouchEnd={() => setHovered(null)}><Card card={c} hovered={hovered === i} idx={i} booted={booted} /></div>)}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer show={true} />
    </div>
  )
}
