import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const Milestone = () => {
  const navigate = useNavigate();

  // CDN / URL-based images
  const images = [
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img1.jpg?updatedAt=1760585662454",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img2.jpg?updatedAt=1760585662485",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img3.jpg?updatedAt=1760585669065",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img4.jpg?updatedAt=1760585663196",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img5.jpg?updatedAt=1760585662943",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img6.jpg?updatedAt=1760585663304",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img7.jpg?updatedAt=1760585667003",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img8.jpg?updatedAt=1760585664285",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img9.jpg?updatedAt=1760585663781",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img10.jpg?updatedAt=1760585663499",
  ];

  return (
    <>
      <Navbar show={true}/>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-12 sm:left-20 z-50 flex items-center text-white hover:text-[#b19eff] transition-colors"
      >
        <ArrowLeft className="w-8 h-8 mr-3" />
        <span className="hidden sm:inline font-semibold"></span>
      </button>

      {/* Main Content */}
      <div className="bg-bgGradient min-h-screen flex flex-col items-center px-6 md:px-12 py-20">
        {/* Heading */}
        <h1 className="text-purple-400 text-4xl md:text-6xl font-NordBold mb-6 text-center">
          Milestone
        </h1>

        {/* Description */}
        <p className="text-white text-center font-Outfit max-w-3xl md:max-w-5xl mb-10 leading-relaxed">
          <span className="text-[#A576DF] font-semibold">Milestone</span> is the
          annual event of our college, bringing together students, faculty, and
          industry professionals for a vibrant celebration of innovation, talent,
          and achievement. It features a mix of technical competitions, cultural
          performances, workshops, and guest lectures — providing a platform for
          students to showcase their skills and creativity. The event fosters
          learning, networking, and collaboration, making it a highlight of the
          academic year.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mb-16">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Milestone Event ${index + 1}`}
                loading="lazy"
                className="w-full h-52 object-cover rounded-xl group-hover:opacity-90 transition"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Milestone;
