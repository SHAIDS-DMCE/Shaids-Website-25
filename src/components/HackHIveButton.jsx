import React from "react";
import { useNavigate } from "react-router-dom";

const HackHiveButton = () => {
  const navigate = useNavigate();

  const stars = [
    { id: 1, top: "-12px", left: "50%", delay: "0s" },
    { id: 2, top: "20%", left: "-12px", delay: "0.3s" },
    { id: 3, top: "50%", right: "-12px", delay: "0.6s" },
    { id: 4, bottom: "-12px", left: "50%", delay: "0.9s" },
    { id: 5, top: "-6px", left: "25%", delay: "1.2s" },
    { id: 6, bottom: "-6px", right: "25%", delay: "1.5s" },
  ];

  return (
    <div className="relative inline-block p-4 group">
      {/* Animated Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute z-0 pointer-events-none"
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            bottom: star.bottom,
            // These keyframes MUST exist in your index.css
            animation: `star-pop 2.5s infinite ease-in-out ${star.delay}`,
            filter: "drop-shadow(0 0 8px #fffdef) drop-shadow(0 0 16px rgba(168,85,247,0.8))"
          }}
        >
          <svg viewBox="0 0 784 816" className="w-4 h-auto fill-[#fffdef]">
            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
          </svg>
        </div>
      ))}

      {/* Main Button */}
      <button
        onClick={() => navigate("/hackhive")}
        style={{ animation: "border-glow 3s ease-in-out infinite" }}
        className="relative z-10 w-full h-14 min-w-[200px] flex justify-center items-center px-8 
                   rounded-full cursor-pointer transition-all duration-500 transform 
                   hover:scale-105 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-700 
                   border-4 border-purple-400/50 backdrop-blur-md shadow-lg"
      >
        <span 
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          className="font-black text-lg sm:text-xl text-white tracking-widest uppercase
                     drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] 
                     group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] transition-all"
        >
          HACKHIVE
        </span>
      </button>
    </div>
  );
};

export default HackHiveButton;