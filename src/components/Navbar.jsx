import { useState } from "react"
import { Link } from "react-router-dom"

const LOGO = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c8671fa2-2465-4069-88ca-8b2a12bf859a/image-1768971461430.png?width=8000&height=8000&resize=contain"

export function Navbar({ show }) {
  const [menu, setMenu] = useState(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between backdrop-blur-md transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`} style={{ background: 'transparent', borderBottom: 'none' }}>
      <Link to="/" className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-lg" style={{ border: '2px solid rgba(76,195,230,0.5)', boxShadow: '0 0 20px rgba(76,195,230,0.3)' }}>
          <img src={LOGO} alt="SHAIDS Logo" className="w-full h-full object-cover" />
        </div>
        <span className="font-semibold text-lg sm:text-xl tracking-wide font-sora" style={{ color: '#4CC3E6' }}>SHAIDS</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {[
          { name: "Home", path: "/" },
          { name: "Contact", path: "#" }
        ].map(i => (
          <Link key={i.name} to={i.path} className="text-sm tracking-wide transition-colors relative group font-sora font-medium" style={{ color: '#C7D2E0' }}>
            <span className="hover:text-white">{i.name}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4CC3E6] to-[#6FD7F2] group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>
      <button className="md:hidden p-2" style={{ color: '#C7D2E0' }} onClick={() => setMenu(!menu)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menu ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>
      {menu && (
        <div className="absolute top-full left-0 right-0 bg-[#020617]/95 backdrop-blur-xl border-t border-white/10 p-4 md:hidden flex flex-col gap-4">
          <Link to="/" className="text-sm font-sora py-2" style={{ color: '#C7D2E0' }} onClick={() => setMenu(false)}>Home</Link>
          <Link to="#" className="text-sm font-sora py-2" style={{ color: '#C7D2E0' }} onClick={() => setMenu(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
