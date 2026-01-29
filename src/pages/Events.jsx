// dev/swaravaj_event-page
import React from "react";
import "react-multi-carousel/lib/styles.css";
import EventButton from "../components/Events/EventButton1";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import mile1 from "../assets/images/mile1.json";
import technitudeAnimation from "../assets/images/mile.json";
import wrkshop from "../assets/images/wrkshop.json";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function EventsPage() {
  const navigate = useNavigate();

  const handleTechnitudeClick = () => navigate("/technitude");
  const handleMilestoneClick = () => navigate("/milestone");
  const handleWorkshopClick = () => navigate("/workshop");

  return (
    <>
      <Navbar show={true} />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-5 left-20 z-50 flex items-center text-white hover:text-[#b19eff] transition-colors"
      >
        <ArrowLeft className="w-6 h-6 mr-2" />
      </button>

      <div className="bg-bgGradient flex flex-col justify-center min-h-screen h-full">
        <div className="p-10 pb-5">

          {/* Mobile View */}
          <div className="flex flex-col items-center gap-6 sm:hidden text-center mt-10">
            <h2 className="text-white text-2xl font-NordBold">
              Welcome to SHAIDS Events Hub!
            </h2>

            <div className="grid grid-cols-1 gap-5">
              <EventButton
                heading="Technitude"
                animationData={technitudeAnimation}
                onClick={handleTechnitudeClick}
                className="h-[200px] w-[200px] rounded-tr-[80px]"
                sizeClass="h-[150px] w-[150px]"
                headingPosition="bottom"
              />
              <EventButton
                heading="Milestone"
                animationData={mile1}
                onClick={handleMilestoneClick}
                className="h-[200px] w-[200px] rounded-bl-[80px]"
                sizeClass="h-[150px] w-[150px]"
                headingPosition="top"
              />
              <EventButton
                heading="Workshop"
                animationData={wrkshop}
                onClick={handleWorkshopClick}
                className="h-[200px] w-[200px] rounded-tl-[80px]"
                sizeClass="h-[150px] w-[150px]"
                headingPosition="bottom"
              />
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:flex items-center gap-10 p-10 mb-10 justify-center mt-10">
            <div className="flex flex-col gap-4 max-w-lg">
              <h1 className="text-white text-5xl font-NordBold">
                Welcome to <span className="text-[#A576DF]">SHAIDS Events Hub!</span>
              </h1>
              <h4 className="text-white text-2xl font-NordBold">
                Explore. Innovate. Connect
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-6xl">
              <EventButton
                heading="Technitude"
                animationData={technitudeAnimation}
                onClick={handleTechnitudeClick}
                className="h-[330px] w-[275px] rounded-tr-[138px] mt-[100px]"
                sizeClass="h-[250px] w-[250px]"
                headingPosition="bottom"
              />

              <div className="grid gap-5">
                <EventButton
                  heading="Milestone"
                  animationData={mile1}
                  onClick={handleMilestoneClick}
                  className="h-[255px] w-[225px] rounded-bl-[138px]"
                  sizeClass="h-[180px] w-[180px]"
                  headingPosition="top"
                />
                <EventButton
                  heading="Workshop"
                  animationData={wrkshop}
                  onClick={handleWorkshopClick}
                  className="h-[255px] w-[225px] rounded-tl-[138px]"
                  sizeClass="h-[180px] w-[180px]"
                  headingPosition="bottom"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
