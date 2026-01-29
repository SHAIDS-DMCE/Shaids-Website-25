import { useEffect, useRef } from "react"

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

export function Background({ booted = true }) {
  const bgRef = useRef(null)

  useEffect(() => {
    const bg = bgRef.current; if (!bg) return
    const bgCtx = bg.getContext("2d"); if (!bgCtx) return
    bg.width = window.innerWidth; bg.height = window.innerHeight
    const resize = () => { bg.width = window.innerWidth; bg.height = window.innerHeight }
    window.addEventListener('resize', resize)
    const bgBlobs = createBlobs(bg.width, bg.height, 250, 1)
    let id
    const draw = () => { drawBlobs(bgCtx, bgBlobs, bg.width, bg.height, 0.008, "rgba(2, 6, 2,0.02)"); id = requestAnimationFrame(draw) }
    draw()
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
      <canvas ref={bgRef} className="absolute inset-0 w-full h-full" style={{ filter: "blur(60px)", opacity: 0.4 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0F1A2E] to-[#020617]" />
      <div className="hidden md:block absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(76,195,230,0.12)_0%,_transparent_50%)]" />
      <TechBg booted={booted} />
    </div>
  )
}
