import { Instagram, Linkedin, Github } from "lucide-react"

const LOGO = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c8671fa2-2465-4069-88ca-8b2a12bf859a/image-1768971461430.png?width=8000&height=8000&resize=contain"

export function Footer({ show = true }) {
  return (
    <footer className={`relative z-10 transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative overflow-hidden bg-transparent">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-16">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col gap-4 md:max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-lg" style={{ border: '2px solid rgba(76,195,230,0.4)', boxShadow: '0 0 20px rgba(76,195,230,0.2)' }}>
                  <img src={LOGO} alt="SHAIDS Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-xl sm:text-2xl tracking-wide font-sora font-semibold" style={{ color: '#4CC3E6' }}>SHAIDS</span>
              </div>
              <p className="text-sm leading-relaxed font-sora font-light" style={{ color: '#9FB1C8' }}>
                 in AI & Data Science through innovation.<br className="hidden sm:block" />Join us in learning and collaboration.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3 md:gap-4 font-sora">
              <div className="md:text-right">
                <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wide mb-1 md:mb-2" style={{ color: '#C7D2E0' }}>DATTA MEGHE COLLEGE OF ENGINEERING</p>
                <p className="text-xs md:text-sm leading-relaxed font-light" style={{ color: '#7A8CA6' }}>SEC-3, AIROLI, NAVI MUMBAI<br />MAHARASHTRA – 400708, INDIA</p>
              </div>
                <div className="flex items-center gap-5 mt-2 w-full md:w-auto justify-center md:justify-end">
                  <a 
                    href="https://github.com/SHAIDS-DMCE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="transition-all duration-300 text-[#7A8CA6] hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  >
                    <Github size={22} className="sm:size-[24px]" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/shaids-dmce/?originalSubdomain=in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="transition-all duration-300 text-[#7A8CA6] hover:text-[#0A66C2] hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.4)]"
                  >
                    <Linkedin size={22} className="sm:size-[24px]" />
                  </a>
                  <a 
                    href="https://www.instagram.com/shaidsdmce/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="transition-all duration-300 text-[#7A8CA6] hover:text-[#E4405F] hover:drop-shadow-[0_0_8px_rgba(228,64,95,0.4)]"
                  >
                    <Instagram size={22} className="sm:size-[24px]" />
                  </a>
                </div>
            </div>
          </div>
              <div className="mt-8 md:mt-10 pt-4 md:pt-6 text-center" style={{ borderTop: '1px solid rgba(76,195,230,0.15)' }}>
                <span 
                  className="inline-block text-[11px] sm:text-xs font-sora mb-1 opacity-80" 
                  style={{ color: '#C7D2E0' }}
                >
                  Our Developers!
                </span>
                <p className="text-[10px] sm:text-xs font-sora" style={{ color: '#7A8CA6' }}>© 2026 DMCE SHAIDS. All rights reserved.</p>
              </div>
        </div>
      </div>
    </footer>
  )
}
