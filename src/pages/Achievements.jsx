
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/theme.css";
import { BookOpen, Trophy, Sparkles, Star } from "lucide-react";

function FlipCard({
  title,
  description,
  href,
  icon: Icon,
  delay,
}) {
  return (
    <Link to={href} className={`flip-card w-full sm:w-80 h-72 opacity-0 animate-fade-in-up ${delay}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front glass-card flex flex-col items-center justify-center p-8">
          <div className="w-16 h-16 rounded-full bg-[#4a90d9]/20 flex items-center justify-center mb-6 animate-icon-float">
            <Icon className="w-8 h-8 text-[#6dd5ed] animate-icon-pulse" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-wider">{title}</h3>
          <div className="mt-4 flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#4a90d9]/50"
              />
            ))}
          </div>
        </div>
        <div className="flip-card-back glass-card-3d flex flex-col items-center justify-center p-8">
          <div className="card-shine" />
          <div className="card-reflection" />
          <p className="text-center text-gray-300 leading-relaxed relative z-10 text-sm">
            {description}
          </p>
          <div className="mt-6 px-6 py-2 rounded-full bg-[#4a90d9]/20 border border-[#4a90d9]/30 relative z-10 animate-explore-btn">
            <span className="text-[#6dd5ed] text-sm font-medium">Explore</span>
          </div>
          <div className="absolute top-4 right-4 animate-icon-float">
            <Sparkles className="w-5 h-5 text-[#4a90d9]/50 animate-icon-spin-glow" />
          </div>
          <div className="absolute bottom-4 left-4 animate-icon-bounce">
            <Star className="w-4 h-4 text-[#6dd5ed]/30 animate-icon-pulse" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen navy-gradient relative overflow-hidden">
      <div className="grain-overlay" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4a90d9]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#6dd5ed]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="text-center mb-16">
          <div className="opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <Trophy className="w-4 h-4 text-[#6dd5ed] animate-icon-bounce" />
              <span className="text-sm text-gray-400 animate-text-shimmer">Celebrating Excellence</span>
            </div>
          </div>

          <h1 className="opacity-0 animate-fade-in-up delay-100 text-5xl sm:text-7xl font-black text-white tracking-tight mb-6 text-3d">
            SHAIDS
            <span className="block text-[#6dd5ed] text-3d-cyan">ACHIEVERS</span>
          </h1>

          <p className="opacity-0 animate-fade-in-up delay-200 max-w-xl mx-auto text-gray-400 text-lg leading-relaxed">
            Celebrating the remarkable achievements of our college community.
            Discover inspiring stories, awards, and recognitions that showcase
            the excellence within our institution.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full max-w-3xl">
          <FlipCard
            title="MAGAZINE"
            description="Explore our student magazine featuring captivating stories, academic highlights, creative expressions, and the voices that shape our community."
            href="/magazine"
            icon={BookOpen}
            delay="delay-300"
          />
          <FlipCard
            title="OTHER ACHIEVEMENTS"
            description="Discover awards, competition victories, certifications, research publications, sports achievements, and cultural recognitions of our students."
            href="/other-achievements"
            icon={Trophy}
            delay="delay-400"
          />
        </div>

        <div className="mt-20 opacity-0 animate-fade-in delay-500">
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#4a90d9]/50" />
            <span>Hover to explore</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#4a90d9]/50" />
          </div>
        </div>
      </div>
    </div>
  );
}
