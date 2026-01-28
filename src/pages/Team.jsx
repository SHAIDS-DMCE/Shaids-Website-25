import React, { useState } from "react";
import Lottie from "lottie-react";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import MemberCard from "../components/Teams/MemberCard";
import teamAnimation from "../assets/animations/team/team-animation.json";

import leads_25_26 from "../data/leads-25-26.js";
import leads_24_25 from "../data/leads-24-25.js";

const Team = () => {
  const [selectedYear, setSelectedYear] = useState("25-26");

  const teamMembers =
    selectedYear === "24-25" ? leads_24_25 : leads_25_26;

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220]">
      <Navbar show={true} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1A2C46_0%,transparent_55%)]" />

        <div className="relative max-w-[1280px] mx-auto px-6 pt-16 pb-20 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white font-NordMedium">
              MEET THE <br className="hidden lg:block" />
              <span className="text-[#4CC3E6]">TEAM!</span>
            </h1>
            <p className="mt-4 text-lg lg:text-xl text-[#9FB1C8] font-Outfit max-w-xl">
              Our Hive of Innovators
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <Lottie
              animationData={teamAnimation}
              loop
              className="w-[260px] lg:w-[320px]"
            />
          </div>
        </div>
      </section>

      {/* YEAR SELECTOR */}
      <section className="relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 flex justify-center">
          <div className="inline-flex bg-white/[0.06] backdrop-blur-md border border-white/[0.12] rounded-full p-1">
            {["25-26", "24-25"].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`
                  px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    selectedYear === year
                      ? "bg-[#4CC3E6] text-[#0B1220]"
                      : "text-[#C7D2E0] hover:text-white"
                  }
                `}
              >
                AY {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="relative flex-grow mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1A2C46_0%,transparent_60%)]" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="bg-[#0F1A2E]/80 backdrop-blur-xl border border-white/[0.08] rounded-3xl px-6 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {teamMembers.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
