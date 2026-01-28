import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Wrkshop = () => {
  const [year, setYear] = useState(2024);
  const toggleYear = () => setYear((prev) => (prev === 2024 ? 2025 : 2024));
  const navigate = useNavigate();

  // 2024 ImageKit URLs
  const images2024 = [
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Beyond%20Bytes(workshop)/volunteer.jpg?updatedAt=1760585707052",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Beyond%20Bytes(workshop)/ayush%20css.jpg?updatedAt=1760585707075",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Beyond%20Bytes(workshop)/bhumika.jpg?updatedAt=1760585706948",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Beyond%20Bytes(workshop)/chetana.jpg?updatedAt=1760585707017",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Beyond%20Bytes(workshop)/sahil.jpg?updatedAt=1760585706993",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Beyond%20Bytes(workshop)/raaj.jpg?updatedAt=1760585706996",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Beyond%20Bytes(workshop)/volunteer3.jpg?updatedAt=1760585707161",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Beyond%20Bytes(workshop)/volunteer2.jpg?updatedAt=1760585706957",
  ];
  const frame2024 =
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Beyond%20Bytes(workshop)/frame.jpg?updatedAt=1760585707012";

  // 2025 ImageKit URLs
  const images2025 = [
    "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img2.jpg?updatedAt=1761279848759",
    "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img3.jpg?updatedAt=1761279848759",
    "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img4.jpg?updatedAt=1761279849208",
    "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img5.jpg?updatedAt=1761279849052",
    "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img6.jpg?updatedAt=1761279849266",
    "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img7.jpg?updatedAt=1761279849366",
    "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img8.jpg?updatedAt=1761279849196",
    "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img9.jpg?updatedAt=1761279849035",
    "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img10.jpg?updatedAt=1761279848506",
    "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img11.jpg?updatedAt=1761279849201",
    "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img12.jpg?updatedAt=1761279849149",
    "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img13.jpg?updatedAt=1761279848009",
  ];
  const frame2025 =
    "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img1.jpg?updatedAt=1761279848483";

  return (
    <>
      <Navbar show={true} />

      {/* Back Button to Events Page */}
      <button
        onClick={() => navigate("/events")}
        className="fixed top-4 left-6 sm:left-20 z-50 flex items-center text-white hover:text-[#b19eff] transition-colors"
      >
        <ArrowLeft className="w-8 h-8 mr-3" />
        <span className="hidden sm:inline font-Outfit"></span>
      </button>

      <div className="bg-bgGradient min-h-screen flex flex-col items-center p-6 md:p-10">
        <h1 className="text-purple-400 text-4xl md:text-6xl text-center font-NordBold mb-6 mt-10">
          BEYOND BYTES
        </h1>

        <p className="text-white text-center font-Outfit max-w-3xl md:max-w-6xl mb-8">
          Beyond Bytes is an immersive workshop designed to bridge the gap
          between imagination and innovation. Hosted under the visionary Shaids
          Department, this hands-on session dives into cutting-edge technology,
          equipping participants with practical skills and insights. Whether
          you're a budding enthusiast or a seasoned coder, Beyond Bytes offers a
          unique opportunity to explore the latest trends, tools, and techniques
          in technology. Join us to unlock your potential and transform ideas
          into reality!
        </p>

        {/* Toggle Button */}
        <div className="relative flex items-center justify-center mb-10">
          <div
            className="w-40 h-10 bg-gray-700 rounded-full flex items-center cursor-pointer p-1"
            onClick={toggleYear}
          >
            <div
              className={`w-1/2 h-8 bg-purple-500 rounded-full text-white font-Outfit flex items-center justify-center transition-all duration-300 ${
                year === 2025 ? "translate-x-full" : ""
              }`}
            >
              {year}
            </div>
          </div>
        </div>

        {/* 2024 Section */}
        {year === 2024 && (
          <section className="w-full flex flex-col items-center mb-12">
            <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center gap-6 px-4 mb-8">
              <div className="w-full sm:w-[70%] aspect-square max-h-[38rem] rounded-xl border border-purple-400 shadow-lg overflow-hidden">
                <img
                  src={frame2024}
                  alt="Main 2024"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:w-[30%] aspect-[9/16] max-h-[38rem] rounded-xl border border-purple-400 shadow-lg overflow-hidden">
                <video
                  src="https://ik.imagekit.io/igsnxowfs/events/2023-24/Beyond%20Bytes(workshop)/beyond%20bytes%2023-24.mp4?updatedAt=1760809480856"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
              </div>
            </div>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl w-full px-4"
              style={{ gridAutoRows: "200px" }}
            >
              {images2024.map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  className={`object-cover w-full h-full rounded-xl ${
                    i === 0 ? "col-span-2 row-span-2" : ""
                  }`}
                  alt={`2024-${i}`}
                />
              ))}
            </div>
          </section>
        )}

        {/* 2025 Section */}
        {year === 2025 && (
          <section className="w-full flex flex-col items-center mb-20">
            <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center gap-6 px-4 mb-8">
              <div className="w-full sm:w-[70%] aspect-square max-h-[38rem] rounded-xl border border-purple-400 shadow-lg overflow-hidden">
                <img
                  src={frame2025}
                  alt="Main 2025"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full sm:w-[30%] aspect-[9/16] max-h-[38rem] overflow-hidden rounded-xl border border-purple-400 shadow-lg">
                <video
                  src="https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/beyond%20bytes%2024-25.mp4?updatedAt=1760808276207"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
              </div>
            </div>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl w-full px-4"
              style={{ gridAutoRows: "200px" }}
            >
              {images2025.map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  className={`object-cover w-full h-full rounded-xl ${
                    i === 0 ? "col-span-2 row-span-2" : ""
                  }`}
                  alt={`2025-${i}`}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Wrkshop;
