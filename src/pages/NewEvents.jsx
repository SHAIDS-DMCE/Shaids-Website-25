"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Cpu, Zap, Star, Code, ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
// Generate 12 placeholders for the grid
const generateImages = (count) => Array(count).fill("/api/placeholder/600/400");

const EVENTS = [
    {
        id: "technitude",
        title: "TECHNITUDE",
        icon: Cpu,
        color: "text-purple-400",
        bg: "bg-purple-900",
        border: "border-purple-500",
        description: "Technitude is a high-energy, two-day technical event packed with fun, challenges, and exciting competitions!",
        images: generateImages(12),
        cover: "/api/placeholder/800/800"
    },
    {
        id: "milestone",
        title: "MILESTONE",
        icon: Trophy,
        color: "text-yellow-400",
        bg: "bg-yellow-900",
        border: "border-yellow-500",
        description: "Milestone is the annual event of our college, bringing together students, faculty, and industry professionals.",
        images: generateImages(12),
        cover: "/api/placeholder/800/800"
    },
    {
        id: "hackive",
        title: "HACKIVE",
        icon: Code,
        color: "text-green-400",
        bg: "bg-green-900",
        border: "border-green-500",
        description: "A 24-hour hackathon that pushes boundaries. Build, break, and create the future.",
        badge: "COMING SOON",
        images: generateImages(12),
        cover: "/api/placeholder/800/800"
    },
    {
        id: "workshops",
        title: "WORKSHOPS",
        icon: Star,
        color: "text-blue-400",
        bg: "bg-blue-900",
        border: "border-blue-500",
        description: "Hands-on learning sessions where theory meets practice and skills are honed to perfection.",
        images: generateImages(12),
        cover: "/api/placeholder/800/800"
    },
    {
        id: "beyond",
        title: "BEYOND BYTES",
        icon: Zap,
        color: "text-pink-400",
        bg: "bg-pink-900",
        border: "border-pink-500",
        description: "A community-driven two-day workshop created to encourage learning, innovation, and connection.",
        images: generateImages(12),
        cover: "/api/placeholder/800/800"
    },
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [expandedId, setExpandedId] = useState(null);

    const rotation = activeIndex * -72;
    const activeEvent = EVENTS[activeIndex];
    const isExpanded = !!expandedId;

    const handleExpand = () => {
        setExpandedId(activeEvent.id);
    };

    const handleBack = () => {
        setExpandedId(null);
    };

    return (
        <div>
            <Navbar show={true} />
            <section className="relative min-h-screen bg-[#0a0e17] overflow-hidden flex flex-col">

                {/* Background Glow - Dim when expanded */}
                <motion.div
                    animate={{ opacity: isExpanded ? 0.3 : 1 }}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none transition-all duration-1000"
                >
                    <div key={activeIndex} className={`absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] opacity-20 ${activeEvent.bg.replace('900', '500')}`} />
                </motion.div>

                {/* Main Content Area */}
                <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col">

                    {/* Navigation / Header (Hidden when expanded) */}
                    {!isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-8 left-6 md:left-12 z-50 pointer-events-none"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-blue-200 text-sm backdrop-blur-sm pointer-events-auto">
                                <Calendar className="w-4 h-4" />
                                <span>Celebrating Community</span>
                            </div>
                        </motion.div>
                    )}

                    <div className="flex-1 grid md:grid-cols-2 gap-12 items-center relative w-full h-full min-h-screen">

                        {/* Left Content (Text) - Fades out on expand */}
                        <AnimatePresence>
                            {!isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="pt-20 md:pt-0 z-20 pl-4 md:pl-12"
                                >
                                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8">
                                        SHAIDS<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                                            EVENTS
                                        </span>
                                    </h1>

                                    <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed mb-12">
                                        Join us for engaging workshops, inspiring seminars, and exclusive networking opportunities. Empower your future in AI & Data Science with SHAIDS.
                                    </p>

                                    {/* Pagination Dots */}
                                    <div className="flex items-center gap-6">
                                        {EVENTS.map((event, index) => (
                                            <button
                                                key={event.id}
                                                onClick={() => setActiveIndex(index)}
                                                className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-500 transform ${index === activeIndex
                                                    ? `${event.border} ${event.color} scale-110 shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white/10`
                                                    : "border-white/10 text-gray-600 hover:border-white/30 hover:text-white bg-white/5"
                                                    }`}
                                            >
                                                <event.icon className="w-6 h-6" />
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Right Content - Carousel / Expanded View */}
                        {/* 
                Structure Logic:
                The "Wheel" exists when !isExpanded.
                The "Detail View" exists when isExpanded.
                The Active Bubble is a shared layoutID component that swaps between parents.
             */}

                        <div className="relative h-full flex items-center justify-center w-full">
                            {/* CAROUSEL MODE */}
                            {!isExpanded && (
                                <div className="relative h-[800px] flex items-center justify-center w-full perspective-[2000px] translate-x-[20%] md:translate-x-[40%]">
                                    <motion.div
                                        animate={{ rotate: rotation + 180 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 30 }}
                                        className="relative w-[700px] h-[700px] rounded-full flex items-center justify-center"
                                        style={{ transformOrigin: "center" }}
                                    >
                                        {/* Decorative ring */}
                                        <div className={`absolute inset-0 rounded-full border border-white/5 border-dashed spin-slow transition-opacity duration-500 ${isExpanded ? 'opacity-0' : 'opacity-20'}`} />

                                        {EVENTS.map((event, index) => {
                                            const angle = index * 72;
                                            const rad = (angle * Math.PI) / 180;
                                            const offsetRadius = 450;
                                            const x = Math.cos(rad) * offsetRadius;
                                            const y = Math.sin(rad) * offsetRadius;
                                            const isActive = index === activeIndex;

                                            return (
                                                <motion.div
                                                    key={event.id}
                                                    className="absolute flex items-center justify-center"
                                                    style={{ x, y }}
                                                >
                                                    <motion.div
                                                        animate={{
                                                            rotate: -(rotation + 180),
                                                            scale: isActive ? 1 : 0.5,
                                                            opacity: isActive ? 1 : 0
                                                        }}
                                                        transition={{ type: "spring", stiffness: 100, damping: 30 }}
                                                        className="relative flex items-center justify-center"
                                                    >
                                                        {/* ACTIVE BUBBLE (Shared Layout Source) */}
                                                        {isActive && (
                                                            <motion.div
                                                                layoutId={`event-bubble-${event.id}`}
                                                                onClick={handleExpand}
                                                                className={`w-[600px] h-[600px] rounded-full border-2 overflow-hidden cursor-pointer relative group ${event.border}`}
                                                                style={{ borderRadius: "50%" }} // Explicitly enforce circle shape
                                                            >
                                                                {/* Image Background */}
                                                                <div className="absolute inset-0 bg-black">
                                                                    <img src={event.cover} alt={event.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                                                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/80`} />
                                                                </div>

                                                                {/* Content */}
                                                                <motion.div
                                                                    layoutId={`event-content-${event.id}`}
                                                                    className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center"
                                                                >
                                                                    <event.icon className={`w-20 h-20 mb-6 ${event.color} drop-shadow-lg`} />
                                                                    <h2 className="text-5xl font-bold uppercase text-white mb-4 drop-shadow-lg tracking-wide">{event.title}</h2>
                                                                    <motion.button
                                                                        layoutId={`explore-btn-${event.id}`}
                                                                        className="px-8 py-3 bg-white text-black font-bold rounded-full mt-4 hover:scale-105 transition-transform"
                                                                    >
                                                                        EXPLORE
                                                                    </motion.button>
                                                                </motion.div>
                                                            </motion.div>
                                                        )}
                                                    </motion.div>
                                                </motion.div>
                                            )
                                        })}
                                    </motion.div>
                                </div>
                            )}

                            {/* DETAIL MODE (The Page) */}
                            <AnimatePresence>
                                {isExpanded && activeEvent && (
                                    <motion.div
                                        className="fixed inset-0 z-50 bg-[#0a0e17] overflow-y-auto"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {/* Expanded Header (Bubble becomes header) */}
                                        <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
                                            <motion.div
                                                layoutId={`event-bubble-${activeEvent.id}`}
                                                className={`absolute inset-0 w-full h-full ${activeEvent.border}`}
                                                style={{ borderRadius: "0px", borderWidth: 0 }} // Explicitly enforce square shape
                                            >
                                                {/* Expanded Image Background */}
                                                <div className="absolute inset-0 bg-black">
                                                    <img src={activeEvent.cover} alt={activeEvent.title} className="w-full h-full object-cover opacity-40" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-black/60" />
                                                </div>

                                                {/* Expanded Content */}
                                                <motion.div
                                                    layoutId={`event-content-${activeEvent.id}`}
                                                    className="absolute inset-0 flex flex-col items-center justify-center text-center pt-20"
                                                >
                                                    <activeEvent.icon className={`w-24 h-24 mb-6 ${activeEvent.color} drop-shadow-2xl`} />
                                                    <h1 className="text-7xl md:text-9xl font-black uppercase text-white mb-6 drop-shadow-2xl tracking-tighter">
                                                        {activeEvent.title}
                                                    </h1>
                                                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl px-6 leading-relaxed">
                                                        {activeEvent.description}
                                                    </p>
                                                </motion.div>
                                            </motion.div>

                                            {/* Back Button */}
                                            <button
                                                onClick={handleBack}
                                                className="absolute top-8 left-8 z-50 flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
                                            >
                                                <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 backdrop-blur-md">
                                                    <ArrowLeft className="w-6 h-6" />
                                                </div>
                                                <span className="font-medium tracking-wide">Back to Events</span>
                                            </button>
                                        </div>

                                        {/* Staggered Grid Content */}
                                        <div className="container mx-auto px-6 py-20">
                                            <motion.div
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3, duration: 0.8 }}
                                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                            >
                                                {activeEvent.images.map((img, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 30 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: i * 0.1 }}
                                                        className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/5 cursor-pointer"
                                                    >
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                                        {/* Placeholder Image */}
                                                        <div className={`w-full h-full bg-gradient-to-br from-white/10 to-transparent group-hover:scale-110 transition-transform duration-700 ${activeEvent.bg}`} />

                                                        <div className="absolute bottom-6 left-6 right-6">
                                                            <h4 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">Moment {i + 1}</h4>
                                                            <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                                                Capturing the energy and innovation.
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    );
}
