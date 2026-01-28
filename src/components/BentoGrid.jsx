import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const BentoCard = ({ title, subtitle, bgImage, className, delay = 0, isLogo = false, opacity = "", onClick, customOverlay = null, isHighlighted = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[10px] md:rounded-xl p-4 md:p-6 flex flex-col justify-end min-h-[120px] md:min-h-[160px] cursor-pointer bg-blue-800/[0.12] md:bg-blue-900/[0.08] backdrop-blur-xl border ${isHighlighted ? 'border-blue-400/40 shadow-[0_0_20px_rgba(37,99,235,0.15)]' : 'border-blue-500/15'} ${className}`}
    >
      {bgImage && (
        <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
          <motion.img 
            src={bgImage} 
            alt={title} 
            className={`${isLogo ? 'w-2/3 h-2/3 object-contain opacity-30 brightness-[1.1]' : `w-full h-full object-cover ${opacity || 'opacity-30'}`} group-hover:opacity-50 saturate-[1.4] group-hover:scale-105 transition-all duration-1000`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-[#020617]/60 md:from-[#020617]/60 ${isLogo ? 'via-transparent' : 'via-blue-950/40 md:via-blue-950/40'} to-transparent`} />
          <div className="absolute inset-0 bg-blue-600/5" />
          {customOverlay}
        </div>
      )}
      <div className={`absolute inset-0 rounded-[10px] md:rounded-xl border border-white/0 group-hover:border-blue-400/30 transition-all duration-1000 ${isHighlighted ? 'border-blue-400/20' : ''} group-hover:shadow-[0_0_30px_rgba(37,99,235,0.1),inset_0_0_20px_rgba(37,99,235,0.1)]`} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-gradient-to-br from-blue-600/[0.08] via-transparent to-blue-400/[0.08]" />
      
        <div className="relative z-10 w-full text-center">
        <motion.h3 
          variants={{
            hover: { 
              y: -5,
              color: "#60a5fa",
              transition: { duration: 0.4 }
            }
          }}
          className={`text-lg md:text-2xl font-bold tracking-[0.15em] text-white/90 font-outfit uppercase ${isHighlighted ? 'text-blue-200' : ''}`}
        >
          {title}
        </motion.h3>
        <motion.p 
          variants={{
            hover: { 
              y: -3,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.1 }
            }
          }}
          className="mt-1 md:mt-2 text-[9px] md:text-[11px] text-slate-400 font-sora tracking-[0.2em] transition-all duration-500 uppercase leading-relaxed opacity-60"
        >
          {subtitle}
        </motion.p>
          <motion.div 
            variants={{
              hover: { 
                width: "4rem",
                backgroundColor: "#22d3ee",
                transition: { duration: 0.6 }
              }
            }}
            className={`mt-3 md:mt-5 w-6 h-[1px] ${isHighlighted ? 'bg-cyan-400' : 'bg-cyan-500/30'} transition-all duration-1000 mx-auto`} 
          />
      </div>
    </motion.div>
  )
}

export default function BentoGrid({ onAboutClick }) {
    const navigate = useNavigate();

    return (
      <section className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-24 py-16 md:py-24 bg-transparent overflow-hidden">
        <div className="max-w-[1300px] mx-auto flex flex-col gap-8 lg:gap-12">
          
          <div className="grid grid-cols-12 gap-3 md:gap-5">
          {/* Row 1: About Us (Tall) + Team/Faculty stack */}
            <BentoCard 
              title="About Us" 
              subtitle="Who we are & what we build"
              bgImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c8671fa2-2465-4069-88ca-8b2a12bf859a/image-1768971461430.png"
              isLogo={true}
              className="col-span-6 row-span-2 lg:col-span-7"
              delay={0.1}
              onClick={() => navigate('/about-us')}
            />
          <BentoCard 
            title="Team" 
            subtitle="The brains behind SHAIDS"
            bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
            className="col-span-6 lg:col-span-5"
            delay={0.2}
            onClick={() => navigate('/team')}
          />
            <BentoCard 
              title="Faculty" 
              subtitle="Our academic mentors"
              bgImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
              className="col-span-6 lg:col-span-5 lg:order-3"
              delay={0.3}
              onClick={() => navigate('/faculty')}
            />

            {/* Row 3: Magazine & Achievements (Moved up for mobile flow) */}
                <BentoCard 
                  title="MAGAZINE" 
                  subtitle="Insights, Stories & Highlights"
                  bgImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
                  className="col-span-5 lg:col-span-5 lg:order-6"
                  delay={0.6}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = "https://c-users-hp-r3f-animated-book-slider.vercel.app/";
                  }}
                  customOverlay={<div className="absolute inset-0 bg-blue-600/10 pointer-events-none" />}
                />
            <BentoCard 
              title="ACHIEVEMENTS" 
              subtitle="Milestones & Success"
              bgImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/dea7b64c-74cc-475f-9976-fc7e3506d90e/image-1769189468896.png?width=8000&height=8000&resize=contain"
              className="col-span-7 lg:col-span-7 lg:order-7"
              delay={0.7}
              onClick={() => navigate('/achievements')}
            />

            {/* Row 4: Events & HackHive (Moved down for mobile flow) */}
            <BentoCard 
              title="Events" 
              subtitle="Knowledge & Networking"
              bgImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/dea7b64c-74cc-475f-9976-fc7e3506d90e/image-1769189360473.png?width=8000&height=8000&resize=contain"
              className="col-span-7 lg:col-span-7 lg:order-4 border-blue-400/20"
              delay={0.4}
              onClick={() => navigate('/events')}
            />
            <BentoCard 
                title="HackHive 2026" 
                subtitle="Our flagship hackathon"
                bgImage="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c8671fa2-2465-4069-88ca-8b2a12bf859a/image-1769174716871.png?width=8000&height=8000&resize=contain"
                className="col-span-5 lg:col-span-5 lg:order-5"
                isHighlighted={true}
                delay={0.5}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open("https://www.hackhive.dev", "_blank");
                }}
              />
            
            {/* Row 5: Academics (Full Width, Visually Separated) */}
            <BentoCard 
              title="Academics" 
              subtitle="Excellence in AI & DS"
              bgImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
              className="col-span-12 lg:col-span-12 lg:order-8 mt-2 lg:mt-0"
              delay={0.8}
              onClick={() => navigate('/academics')}
            />
        </div>
      </div>
    </section>
  )
}
