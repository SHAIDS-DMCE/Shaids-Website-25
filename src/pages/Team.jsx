import React, { useState } from "react";
import Lottie from "lottie-react";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import MemberCard from "../components/Teams/MemberCard";
import teamAnimation from "../assets/animations/team/team-animation.json";

// Import all the leads data from their separate files
import leads_25_26 from "../data/leads-25-26.js";
import leads_24_25 from "../data/leads-24-25.js";
//import leads_23_24 from "../data/leads-23-24.js";

const Team = () => {
  const [selectedYear, setSelectedYear] = useState("25-26");

  const getTeamMembers = () => {
    switch (selectedYear) {
      case "24-25":
        return leads_24_25;
      
      default:  
        return leads_25_26;
    }
  };

  const teamMembers = getTeamMembers();

  const getButtonClass = (year) => {
    return selectedYear === year
      ? "bg-buttonGradient px-6 py-2 rounded-lg text-white font-Outfit text-center cursor-pointer"
      : "bg-gray-700 px-6 py-2 rounded-lg text-white/80 font-Outfit text-center cursor-pointer hover:bg-gray-600 transition-colors";
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-bgGradient ">
        <Navbar />
        <div className="max-w-[1280px] w-full px-4 mx-auto flex flex-col items-center flex-grow mt-10">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between mb-12">
            <div className="lg:w-[50%] text-center lg:text-left py-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2 font-NordMedium">
                MEET THE <br className="hidden lg:block" />
                <span className="text-[#5D3E98]">TEAM!</span>
              </h1>
              <p className="text-white/80 text-xl lg:text-3xl font-Outfit">
                Our Hive of Innovators
              </p>
            </div>
            <div className="lg:w-[50%] flex justify-center lg:justify-end">
              <Lottie
                animationData={teamAnimation}
                loop={true}
                className="w-[250px] lg:w-[300px] h-[200px] lg:h-[250px]"
              />
            </div>
          </div>

          <div className="w-full flex mt-4 mb-12 justify-center flex-wrap gap-4">
            <button
              onClick={() => setSelectedYear("25-26")}
              className={getButtonClass("25-26")}
            >
              Leads of AY 2025-26
            </button>
            <button
              onClick={() => setSelectedYear("24-25")}
              className={getButtonClass("24-25")}
            >
              Leads of AY 2024-25
            </button>
            
          </div>
          
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Team;
