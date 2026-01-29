

import { Link } from "react-router-dom";
import "../styles/theme.css";
import { ArrowLeft, BookOpen, Lightbulb, Award, Pen, Users, GraduationCap } from "lucide-react";

const features = [
    {
        icon: Pen,
        title: "Student Stories",
        description: "Compelling narratives from students sharing their journeys, challenges, and triumphs throughout their academic life."
    },
    {
        icon: Award,
        title: "Academic Excellence",
        description: "Highlighting scholarly achievements, research breakthroughs, and academic milestones of our community members."
    },
    {
        icon: Lightbulb,
        title: "Creative Expressions",
        description: "A platform for artistic talents including poetry, artwork, photography, and creative writing from our students."
    },
    {
        icon: Users,
        title: "Community Voices",
        description: "Interviews, opinion pieces, and discussions that reflect the diverse perspectives within our institution."
    },
    {
        icon: GraduationCap,
        title: "Innovations & Milestones",
        description: "Documenting technological innovations, project showcases, and significant milestones achieved by students."
    },
    {
        icon: BookOpen,
        title: "Campus Chronicles",
        description: "Coverage of events, festivals, workshops, and memorable moments that define our campus culture."
    }
];

export default function MagazinePage() {
    return (
        <div className="min-h-screen navy-gradient relative overflow-hidden">
            <div className="grain-overlay" />

            <div className="absolute top-20 left-10 w-72 h-72 bg-[#4a90d9]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6dd5ed]/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4a90d9]/5 rounded-full blur-[150px] pointer-events-none" />

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
                            <BookOpen className="w-4 h-4 text-[#6dd5ed] animate-icon-bounce" />
                            <span className="text-sm text-gray-400">Student Publication</span>
                        </div>
                    </div>

                    <h1 className="opacity-0 animate-fade-in-up delay-200 text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 relative">
                        <span className="achievements-title achievements-letter">
                            MAGAZINE
                        </span>
                        <div className="achievements-title-glow" />
                    </h1>

                    <p className="opacity-0 animate-fade-in-up delay-300 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
                        Our student magazine is a celebration of creativity, achievement, and the vibrant
                        voices that make up our college community. Each edition captures the essence of
                        student life, academic pursuits, and the inspiring journeys of our peers.
                    </p>
                </div>

                <div className="opacity-0 animate-fade-in-up delay-400 glass-card p-8 sm:p-12 mb-16">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-white mb-4">About Our Magazine</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                The SHAIDS Magazine has been the voice of our student community for years,
                                serving as a platform for expression, documentation, and celebration of achievements.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                From thought-provoking articles to stunning visual content, our magazine
                                showcases the multifaceted talents of our student body while preserving
                                the memories and milestones that define each academic session.
                            </p>
                        </div>
                        <div className="w-full lg:w-80 h-56 glass-card bg-gradient-to-br from-[#4a90d9]/20 to-[#6dd5ed]/10 flex items-center justify-center">
                            <div className="text-center">
                                <div className="animate-icon-float">
                                    <BookOpen className="w-16 h-16 text-[#6dd5ed]/60 mx-auto mb-4 animate-icon-pulse" />
                                </div>
                                <span className="text-gray-500 text-sm">Latest Edition Preview</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8 opacity-0 animate-fade-in-up delay-500">
                    <h2 className="text-2xl font-bold text-white text-center mb-2">What We Cover</h2>
                    <p className="text-gray-500 text-center">Explore the diverse content within our pages</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`opacity-0 animate-fade-in-up glass-card-3d glass-card-hover p-6 relative`}
                            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                        >
                            <div className="card-shine" />
                            <div className="card-reflection" />
                            <div className="icon-container mb-4 relative z-10">
                                <div className="icon-ring">
                                    <div className="icon-ring-inner" />
                                </div>
                                <div className="icon-core">
                                    <feature.icon className="w-6 h-6 text-[#6dd5ed]" />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2 relative z-10">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed relative z-10">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center opacity-0 animate-fade-in delay-600" style={{ animationDelay: "1.2s" }}>
                    <div className="inline-flex flex-col items-center glass-card px-8 py-6">
                        <span className="text-gray-500 text-sm mb-2">Stay Updated</span>
                        <p className="text-gray-400 text-sm">New editions released every semester</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
