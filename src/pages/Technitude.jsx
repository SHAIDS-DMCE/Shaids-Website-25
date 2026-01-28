import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Technitude = () => {
  const reelURL =
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/Technitude%2023.mp4?updatedAt=1760882689861";

  const image1url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img1.jpg?updatedAt=1760585740567";
  const image3url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img3.jpg?updatedAt=1760585741816";
  const image5url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img5.jpg?updatedAt=1760585741911";
  const image6url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img6.jpg?updatedAt=1760585742263";
  const image7url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img7.jpg?updatedAt=1760585741049";
  const image8url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img8.jpg?updatedAt=1760585741730";
  const image9url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img9.jpg?updatedAt=1760585741221";
  const image10url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img10.jpg?updatedAt=1760585741276";

  // Opens the video directly in a new tab
  const openReelInNewTab = () => {
    window.open(reelURL, "_blank");
  };

  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Button clicked! This is a log message.");
    Navigate(-1);
  };
  
  return (
    <>
    <Navbar show={true}/>
    {/* Back Button to Events Page */}
      <button
        onClick={() => navigate("/events")}
        className="fixed top-4 left-20 sm:left-30 z-50 flex items-center text-white hover:text-[#b19eff] transition-colors"
      >
        <ArrowLeft className="w-8 h-8 mr-3" />
        <span className="hidden sm:inline font-Outfit"></span>
      </button>
      <div className="bg-bgGradient min-h-screen flex flex-col items-center w-full overflow-hidden">
            <h1 className="text-purple-400 text-3xl sm:text-4xl md:text-6xl mt-16 text-center font-NordBold mb-6">
          Technitude
        </h1>

        <p className="text-white text-center sm:text-left font-Outfit max-w-3xl md:max-w-6xl mb-8 px-4 leading-relaxed">
          Technitude is a high-energy, two-day technical event packed with fun,
          challenges, and exciting competitions! It’s where technology meets
          thrill, bringing together students to test their skills, compete in
          unique tech-based games, and enjoy an electrifying atmosphere.
        </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-6xl px-4 mb-12">
        <img
          src={image10url}
          alt="Technitude Main Event"
          className="w-full sm:w-[76%] h-80 sm:h-[24rem] md:h-[28rem] object-cover rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-500 border border-purple-400"
        />

        <div onClick={openReelInNewTab} className="w-full sm:w-[40%] cursor-pointer">
          <video
            src={reelURL}
            loop
            muted
            autoPlay
            controls
            playsInline
            className="w-full h-80 sm:h-[24rem] md:h-[28rem] object-cover rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-500 border border-purple-400"
          />
        </div> 
      </div>

      <div
  className="
    grid 
    grid-cols-2 
    sm:grid-cols-3 
    lg:grid-cols-4 
    auto-rows-[140px] 
    sm:auto-rows-[160px] 
    md:auto-rows-[180px]
    gap-3 
    w-full 
    max-w-6xl 
    px-4 
    mb-14 
    [grid-auto-flow:dense]
  "
>

        <div className="col-span-2 row-span-2 rounded-lg overflow-hidden border border-purple-400">
          <img src={image1url} alt="Technitude Event 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>

        <div className="rounded-lg overflow-hidden border border-purple-400">
          <img src={image9url} alt="Technitude Event 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>

        <div className="rounded-lg overflow-hidden border border-purple-400">
          <img src={image3url} alt="Technitude Event 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="col-span-2 rounded-lg overflow-hidden border border-purple-400">
          <img src={image5url} alt="Technitude Event 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>

        <div className="rounded-lg overflow-hidden border border-purple-400">
          <img src={image6url} alt="Technitude Event 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>

        <div className="col-span-2 rounded-lg overflow-hidden border border-purple-400">
          <img src={image7url} alt="Technitude Event 7" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>

        <div className="rounded-lg overflow-hidden border border-purple-400">
          <img src={image8url} alt="Technitude Event 8" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Technitude;