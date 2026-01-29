import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import EventButton from "../components/Events/EventButton1";
import { useNavigate } from "react-router-dom";
import mile1 from "../assets/images/mile1.json";
import technitudeAnimation from "../assets/images/mile.json";
import wrkshop from "../assets/images/wrkshop.json";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import LottieAnimation from "../components/HackatonAnimations/LottieAnimation.jsx";
import people from "../assets/people.json";
import Clock from "../assets/Clock.json";
import Exampad from "../assets/Exampad.json";
import Winner from "../assets/Winner.json";
import brainheatersImg from "../assets/Sponsers/brainheaters.jpg";
import brainheatersPDF from "../assets/Sponsers/BrainHeatersBrochure.pdf";
import collegepondImg from "../assets/Sponsers/collegepond.jpg";
export default function Hackathon() {
  const targetDate = new Date("2025-03-27T00:00:00").getTime(); // Set target date (YYYY-MM-DDTHH:MM:SS)
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime()); // Initial time left

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {

        clearInterval(interval); // Stop when countdown reaches 0
        setTimeLeft(0);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [targetDate]);

  // Convert milliseconds into days, hours, minutes, and seconds
  const getTimeComponents = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };
  const sponser = {
    1: {
      name: "Brainheaters",
      logo: brainheatersImg,
      brochure: "",
      website: "https://www.brainheaters.in/",
    },
    2: {
      name: "Collegepond",
      logo: collegepondImg,
      brochure: brainheatersPDF,
      website: "https://collegepond.com/",
    },
  };
  const { days, hours, minutes, seconds } = getTimeComponents(timeLeft);
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#0D112F] text-white p-6">
        {/* Title */}
        <div className="flex items-center justify-center text-center text-4xl md:text-6xl font-NordBold text-[#A576DF] mb-10 md:mb-[40px]">
          <h2>HACKHIVE '25</h2>
        </div>

        {/* Slogan */}
        <div className="flex items-center justify-center text-center font-NordBold text-2xl md:text-3xl leading-[100%] mb-10 md:mb-[40px]">
          <h6>code . build . win</h6>
        </div>

        {/* Countdown Timer */}
        <div className="flex flex-col items-center justify-center text-center mt-6 mb-10 md:mb-[40px]">
          <div className="flex">
            {/* Days */}
            <div className="flex flex-col items-center w-20 md:w-24">
              <div className="h-16 md:h-20 flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-bold text-[#A576DF]">
                  {days}
                </span>
              </div>
              <span className="text-sm md:text-base text-white mt-1">Days</span>
            </div>

            {/* Colon after Days */}
            <div className="flex flex-col items-center justify-center w-6">
              <div className="h-16 md:h-20 flex items-center">
                <span className="text-5xl md:text-6xl font-bold text-[#A576DF]">
                  :
                </span>
              </div>
              <span className="opacity-0 text-sm">.</span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center w-20 md:w-24">
              <div className="h-16 md:h-20 flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-bold text-[#A576DF]">
                  {hours}
                </span>
              </div>
              <span className="text-sm md:text-base text-white mt-1">
                Hours
              </span>
            </div>

            {/* Colon after Hours */}
            <div className="flex flex-col items-center justify-center w-6">
              <div className="h-16 md:h-20 flex items-center">
                <span className="text-5xl md:text-6xl font-bold text-[#A576DF]">
                  :
                </span>
              </div>
              <span className="opacity-0 text-sm">.</span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center w-20 md:w-24">
              <div className="h-16 md:h-20 flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-bold text-[#A576DF]">
                  {minutes}
                </span>
              </div>
              <span className="text-sm md:text-base text-white mt-1">
                Minutes
              </span>
            </div>

            {/* Colon after Minutes */}
            <div className="flex flex-col items-center justify-center w-6">
              <div className="h-16 md:h-20 flex items-center">
                <span className="text-5xl md:text-6xl font-bold text-[#A576DF]">
                  :
                </span>
              </div>
              <span className="opacity-0 text-sm">.</span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center w-20 md:w-24">
              <div className="h-16 md:h-20 flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-bold text-[#A576DF]">
                  {seconds}
                </span>
              </div>
              <span className="text-sm md:text-base text-white mt-1">
                Seconds
              </span>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="flex items-center justify-center text-center px-6 md:px-12 mb-10">
          <p className="text-xl md:text-2xl font-Outfit font-bold text-white max-w-4xl leading-tight">
            Get ready for an electrifying coding sprint where creativity meets
            problem-solving—push boundaries, break barriers, and build the
            future!
          </p>
        </div>

        {/* Three Flex Boxes */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Box 1 - Date & Time */}
          <div className="w-[360px] h-[260px] bg-[#1E223E] flex flex-col items-center justify-center rounded-xl border border-[#A576DF] shadow-lg p-6">
            <p className="text-[#A576DF] text-2xl font-bold">DATE:</p>
            <p className="text-white text-xl">27TH MARCH 2025</p>
            <br />
            <p className="text-[#A576DF] text-2xl font-bold">TIME:</p>
            <p className="text-white text-xl">10 AM TO 7 PM</p>
          </div>

          {/* Box 2 - Prize Pool */}
          <div className="w-[360px] h-[260px] bg-[#1E223E] flex flex-col items-center justify-center rounded-xl border border-[#A576DF] shadow-lg p-6">
            <p className="text-[#A576DF] text-2xl font-bold">PRIZE POOL</p>
            <p className="text-white text-5xl font-bold mt-2">₹ 25,000</p>
          </div>

          {/* Box 3 - Team Size & Registration Fee */}
          <div className="w-[360px] h-[260px] bg-[#1E223E] flex flex-col items-center justify-center rounded-xl border border-[#A576DF] shadow-lg p-6">
            <p className="text-[#A576DF] text-2xl font-bold">Team size:</p>
            <p className="text-white text-xl">2-4 members</p>
            <br />
            <p className="text-[#A576DF] text-2xl font-bold">
              Registration fee:
            </p>
            <p className="text-white text-xl flex flex-col">
              ₹ 300/- per team <span className=" text-center text-gray-500 font-Outfit ">(After Selection)</span>
            </p>
          </div>
        </div>

        {/* Sponsors */}
        <div className="mt-16">
          {/* Heading */}
          <div className="text-center text-[40px] font-Outfit font-bold text-white mb-10">
            Our Sponsors
          </div>

          {/* Sponsors Boxes */}
          <div className="flex flex-wrap justify-center gap-6">
            {Object.entries(sponser).map(([num, item]) => (
              <div
                key={num}
                className="sponsor-box w-[360px] h-[260px] bg-[#1E223E] flex flex-col items-center justify-center rounded-xl shadow-lg p-6 relative overflow-hidden"
              >
                {/* Continuous line container */}
                <div className="continuous-line-container">
                  <div className="continuous-line"></div>
                </div>

                {/* Logo Placeholder */}
                <div
                  className={
                    item.name == "Brainheaters"
                      ? "size-24 bg-black rounded-full flex items-center justify-center overflow-hidden mb-4"
                      : "size-24 bg-white rounded-full flex items-center justify-center overflow-hidden mb-4"
                  }
                >
                  <img
                    src={item.logo}
                    alt={`Sponsor ${item.name}`}
                    className={
                      item.name == "Brainheaters"
                        ? `w-full h-full object-contain`
                        : `w-full h-full object-cover`
                    }
                  />
                </div>

                {/* Sponsor Name */}
                <a
                  className="text-white text-2xl font-bold hover:underline cursor-pointer"
                  href={item.website}
                  target="_blank"
                >
                  {item.name}
                </a>

                {/* Brochure Button */}
{/*                 <a
                  href={item.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-[#A576DF] text-white px-4 py-2 rounded-lg hover:bg-[#8b5fbf] cursor-pointer"
                >
                  View Brochure
                </a> */}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .sponsor-box {
            position: relative;
            overflow: visible;
            transition: transform 0.3s ease-in-out;
          }

          .sponsor-box:hover {
            transform: scale(1.05);
          }

          /* Continuous line container */
          .continuous-line-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            border-radius: inherit;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .sponsor-box:hover .continuous-line-container {
            opacity: 1;
          }

          /* The actual continuous line */
          .continuous-line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            border-radius: inherit;
            box-sizing: border-box;

            /* Gradient for the moving border effect */
            background-image: linear-gradient(
              90deg,
              transparent 0%,
              transparent 25%,
              rgba(255, 255, 255, 0.9) 50%,
              transparent 75%,
              transparent 100%
            );

            /* Making the gradient apply to the border only */
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;

            /* Glowing effect */
            filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))
              drop-shadow(0 0 8px rgba(165, 118, 223, 0.8));

            /* Animation with slower speed */
            background-size: 400% 100%;
            animation: move-continuous-line 5s linear infinite;
          }

          @keyframes move-continuous-line {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
        `}</style>

        {/* timeline */}
        <div className="zigzag-container my-10 px-4">
          {/* Mobile layout: first three nodes in one row, last node centered below */}
          <div className="md:hidden">
            {/* Top row with three nodes */}
            <div className="flex justify-center">
              {/* First node */}
              <div className="flex flex-col items-center mx-2">
                <div className="zigzag-node w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-lg">
                  <LottieAnimation
                    animationPath={people}
                    width={60}
                    height={60}
                  />
                </div>
                <p className="text-xs font-semibold mt-2 text-center w-24">
                  March 12: Teams Submission
                </p>
              </div>

              {/* Second node */}
              <div className="flex flex-col items-center mx-2">
                <div className="zigzag-node w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-lg">
                  <LottieAnimation
                    animationPath={Clock}
                    width={60}
                    height={60}
                  />
                </div>
                <p className="text-xs font-semibold mt-2 text-center w-24">
                  March 22: PPT Deadline
                </p>
              </div>

              {/* Third node */}
              <div className="flex flex-col items-center mx-2">
                <div className="zigzag-node w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-lg">
                  <LottieAnimation
                    animationPath={Exampad}
                    width={60}
                    height={60}
                  />
                </div>
                <p className="text-xs font-semibold mt-2 text-center w-24">
                  March 24: Evaluation
                </p>
              </div>
            </div>

            {/* Bottom row with fourth node centered */}
            <div className="flex justify-center mt-8">
              <div className="flex flex-col items-center">
                <div className="zigzag-node w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-lg">
                  <LottieAnimation
                    animationPath={Winner}
                    width={60}
                    height={60}
                  />
                </div>
                <p className="text-xs font-semibold mt-2 text-center w-40">
                  March 25: Announcement of shortlisted teams
                </p>
              </div>
            </div>
          </div>

          {/* Desktop layout: original zigzag layout */}
          <div className="hidden md:flex justify-center items-center">
            {/* First node */}
            <div className="flex flex-col items-center">
              <div className="zigzag-node w-24 h-24 bg-white rounded-full flex justify-center items-center shadow-lg">
                <LottieAnimation
                  animationPath={people}
                  width={90}
                  height={90}
                />
              </div>
              <p className="text-sm font-semibold mt-2 text-center w-40">
                March 12: Teams Submission of PPT
              </p>
            </div>

            <div className="w-24 h-1 bg-[#A576DF] mt-[-50px]"></div>

            {/* Second node */}
            <div className="flex flex-col items-center">
              <div className="zigzag-node w-24 h-24 bg-white rounded-full flex justify-center items-center shadow-lg">
                <LottieAnimation animationPath={Clock} width={90} height={90} />
              </div>
              <p className="text-sm font-semibold mt-2 text-center w-40">
                March 22: Deadline of PPT submission
              </p>
            </div>

            <div className="w-24 h-1 bg-[#A576DF] mt-[-50px]"></div>

            {/* Third node */}
            <div className="flex flex-col items-center">
              <div className="zigzag-node w-24 h-24 bg-white rounded-full flex justify-center items-center shadow-lg">
                <LottieAnimation
                  animationPath={Exampad}
                  width={90}
                  height={90}
                />
              </div>
              <p className="text-sm font-semibold mt-2 text-center w-40">
                March 24: Teachers will evaluate the video explanations of PPTs
              </p>
            </div>

            <div className="w-24 h-1 bg-[#A576DF] mt-[-50px]"></div>

            {/* Fourth node */}
            <div className="flex flex-col items-center">
              <div className="zigzag-node w-24 h-24 bg-white rounded-full flex justify-center items-center shadow-lg">
                <LottieAnimation
                  animationPath={Winner}
                  width={90}
                  height={90}
                />
              </div>
              <p className="text-sm font-semibold mt-2 text-center w-40">
                March 25: Announcement of shortlisted teams
              </p>
            </div>
          </div>
        </div>

        {/* Register & Problem Statements Buttons */}

        <div className="flex justify-center space-x-6 mt-10">
          <button
            className="glow-button px-6 py-3 bg-[#8133F1] cursor-pointer text-white font-bold text-lg rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScByBl9N08I_UrAEfamENd813U3DfPlJ4MV8IJPN5_04t8m7w/viewform?pli=1",
                "_blank"
              )
            }
          >
            Register Now
          </button>
          <button
            className="glow-button px-6 py-3 bg-[#8133F1] cursor-pointer text-white font-bold text-lg rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => navigate("/problem-statements")}
          >
            Problem Statements
          </button>
        </div>
      </div>

      {/* Add this style tag directly in your component */}
      <style jsx>{`
        .glow-button {
          position: relative;
          animation: button-glow 2s infinite;
        }

        @keyframes button-glow {
          0% {
            box-shadow: 0 0 5px #8133f1, 0 0 10px #8133f1;
          }
          50% {
            box-shadow: 0 0 20px #8133f1, 0 0 30px #a576df;
          }
          100% {
            box-shadow: 0 0 5px #8133f1, 0 0 10px #8133f1;
          }
        }
      `}</style>
    </>
  );
}
