

import { Link } from "react-router-dom";
import "../styles/theme.css";
import { ArrowLeft, Trophy, Code, FlaskConical, Dumbbell, Music, Award, Sparkles } from "lucide-react";

const achievements = [
    {
        id: 1,
        title: "Hackathon Winners",
        description: "First place at National Tech Hackathon 2024 with AI-powered urban planning solution.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
        icon: Code,
        gridArea: "hack",
    },
    {
        id: 2,
        title: "Research Publication",
        description: "Groundbreaking ML research in healthcare diagnostics published internationally.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
        icon: FlaskConical,
        gridArea: "research",
    },
    {
        id: 3,
        title: "Sports Champions",
        description: "Inter-university basketball championship winners for three consecutive years.",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
        icon: Dumbbell,
        gridArea: "sports",
    },
    {
        id: 4,
        title: "Cultural Excellence",
        description: "First prize in Regional Cultural Festival with traditional performances.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
        icon: Music,
        gridArea: "culture",
    },
    {
        id: 5,
        title: "Academic Awards",
        description: "Multiple students recognized with prestigious national scholarships.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
        icon: Award,
        gridArea: "academic",
    }
];

function CollageCard({ achievement, index }) {
    return (
        <div
            className="glass-3d-card group opacity-0 animate-fade-in-up"
            style={{
                animationDelay: `${0.2 + index * 0.12}s`,
                gridArea: achievement.gridArea,
            }}
        >
            <div className="glass-3d-card-inner">
                <div className="glass-3d-shine" />
                <div className="glass-3d-reflection" />

                <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                    <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/95 via-[#0a0f1c]/60 to-transparent" />
                </div>

                <div className="glass-3d-edge" />

                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <div className="icon-container mb-3 w-12 h-12">
                        <div className="icon-ring">
                            <div className="icon-ring-inner" />
                        </div>
                        <div className="icon-core">
                            <achievement.icon className="w-5 h-5 text-[#6dd5ed]" />
                        </div>
                        <div className="icon-particles">
                            <Sparkles className="particle particle-1" />
                            <Sparkles className="particle particle-2" />
                            <Sparkles className="particle particle-3" />
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#6dd5ed] transition-colors drop-shadow-lg">{achievement.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed opacity-90">{achievement.description}</p>
                </div>
            </div>
        </div>
    );
}

export default function OtherAchievementsPage() {
    return (
        <div className="min-h-screen navy-gradient relative overflow-hidden">
            <div className="grain-overlay" />

            <div className="absolute top-40 right-20 w-80 h-80 bg-[#4a90d9]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-40 left-20 w-72 h-72 bg-[#6dd5ed]/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#4a90d9]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 px-6 py-12 max-w-6xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[#6dd5ed] transition-colors mb-12 opacity-0 animate-fade-in-up"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </Link>

                <div className="text-center mb-16">
                    <div className="opacity-0 animate-fade-in-up delay-100">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <div className="icon-container-sm">
                                <Trophy className="w-4 h-4 text-[#6dd5ed]" />
                            </div>
                            <span className="text-sm text-gray-400">Recognition & Awards</span>
                        </div>
                    </div>

                    <h1 className="opacity-0 animate-fade-in-up delay-200 text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 relative">
                        <span className="achievements-title achievements-letter">
                            OTHER ACHIEVEMENTS
                        </span>
                        <div className="achievements-title-glow" />
                    </h1>

                    <p className="opacity-0 animate-fade-in-up delay-300 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
                        Celebrating the diverse accomplishments of our students across hackathons,
                        competitions, research, sports, and cultural events.
                    </p>
                </div>

                <div className="collage-grid">
                    {achievements.map((achievement, index) => (
                        <CollageCard key={achievement.id} achievement={achievement} index={index} />
                    ))}
                </div>



                <div className="mt-12 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
                    {["Hackathons", "Research", "Sports", "Cultural", "Academic"].map((tag) => (
                        <span
                            key={tag}
                            className="px-4 py-2 rounded-full glass-card text-sm text-gray-400 hover:text-[#6dd5ed] hover:border-[#4a90d9]/40 transition-colors cursor-pointer"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
