import React from "react";
import { ArrowLeft } from "lucide-react"; // ✅ Added missing import
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function Faculty() {
  const navigate = useNavigate();

  const mentors = [
    { name: "Dr. Sanjay Madhukarrao Patil", image: "https://ik.imagekit.io/igsnxowfs/faculty/hod.jpg?updatedAt=1760495359170", exp: "Professor & HOD" },
    { name: "Dr. Preeti Nitin Jain", image: "https://ik.imagekit.io/igsnxowfs/faculty/pretty.jpg?updatedAt=1760495358975", exp: "Assistant Professor" },
    { name: "Mr. Anil Satyadeo Londhe", image: "https://ik.imagekit.io/igsnxowfs/faculty/Anil-sir.jpeg?updatedAt=1760495358583", exp: "Assistant Professor" },
    { name: "Mrs. Deepti Jeetu Janjani", image: "https://ik.imagekit.io/igsnxowfs/faculty/Deepti-maam.jpeg?updatedAt=1760495358712", exp: "Assistant Professor" },
    { name: "Mrs. Anjali Devi Milind Patil", image: "https://ik.imagekit.io/igsnxowfs/faculty/Anjali-maam.jpeg?updatedAt=1760495358743", exp: "Assistant Professor" },
    { name: "Mrs. Irin Anna Solomone", image: "https://ik.imagekit.io/igsnxowfs/faculty/irin.jpg?updatedAt=1760495359032", exp: "Assistant Professor" },
    { name: "Mrs. Poonam Amit Kamble", image: "https://ik.imagekit.io/igsnxowfs/faculty/poonam.jpg?updatedAt=1760495359116", exp: "Assistant Professor" },
    // { name: "Mrs. Aarti Raman Sonawane", image: "https://ik.imagekit.io/igsnxowfs/faculty/arti.jpg?updatedAt=1760495359178", exp: "Assistant Professor" },
    // { name: "Mrs. Swati Sankesh Parhad", image: "https://ik.imagekit.io/igsnxowfs/faculty/Swati.jpeg?updatedAt=1760495359013", exp: "Assistant Professor" },
    { name: "Mrs. Aparna Tiwari", image: "https://ik.imagekit.io/igsnxowfs/faculty/Aparna%20Tiwari.jpg?updatedAt=1760495238311", exp: "Assistant Professor" },
    { name: "Mrs. Sphurti V Atram", image: "https://ik.imagekit.io/igsnxowfs/faculty/Sphurti_Atram.jpg?updatedAt=1760495237100", exp: "Assistant Professor" },
    { name: "Mrs. Minakshi Umate", image: "https://ik.imagekit.io/igsnxowfs/faculty/Minakshi_U.jpg?updatedAt=1760495236676", exp: "Assistant Professor" },
    { name: "Mrs. Oyendrila Samantha", image: "https://ik.imagekit.io/igsnxowfs/faculty/Oyendrila_S.jpg?updatedAt=1760495236160", exp: "Assistant Professor" },
    { name: "Mrs. Shubhangi Katke", image: "https://ik.imagekit.io/igsnxowfs/faculty/Shubhangi_Katke.jpg?updatedAt=1760495236309", exp: "Assistant Professor" },
    { name: "Mrs. Yashika S. Vadnerkar", image: "https://ik.imagekit.io/igsnxowfs/faculty/Yashika_V.jpg?updatedAt=1760495236302", exp: "Assistant Professor" },
    { name: "Mrs. Aruna Divekar", image: "https://ik.imagekit.io/igsnxowfs/faculty/Aruna_A.jpg?updatedAt=1760495236083", exp: "Assistant Professor" },
    { name: "Mrs. Shikha Singh", image: "https://ik.imagekit.io/igsnxowfs/faculty/Shikha_s.jpeg?updatedAt=1760495237392", exp: "Assistant Professor" },
    { name: "Mrs. Mridul Saxena", image: "https://ik.imagekit.io/igsnxowfs/faculty/Mridul_S.jpg?updatedAt=1760495236060", exp: "Assistant Professor" },
    { name: "Mrs. Aparna Raut", image: "https://ik.imagekit.io/igsnxowfs/faculty/Aparna%20Raut.jpg?updatedAt=1760495235669", exp: "Assistant Professor" },
  ];

  return (
    <>
      <Navbar show={true} />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-20 z-50 flex items-center text-white hover:text-primary-cyan transition-colors"
      >
        <ArrowLeft className="w-8 h-8 mr-3" />
        <span className="hidden sm:inline font-semibold"></span>
      </button>

      {/* Faculty Section */}
      <div className="bg-gradient-to-br from-midnight-navy via-deep-indigo to-dark-slate-blue flex flex-col items-center justify-center min-h-screen h-full py-20 px-4">
        <h1 className="text-white text-3xl md:text-4xl font-NordBold text-center mb-12">
          FACULTY & MENTORS
        </h1>

        {/* Top 3 Faculty - Pyramid Layout */}
        <div className="flex flex-col items-center justify-center mb-16 w-full">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center justify-center w-full px-4">
            {/* Left Faculty - Preeti */}
            <div className="flex flex-col items-center bg-steel-blue-tint/40 backdrop-blur-sm border border-primary-cyan/30 p-4 rounded-2xl hover:bg-steel-blue-tint/60 hover:border-soft-aqua/60 transition-all duration-300 shadow-lg shadow-primary-cyan/10 w-full max-w-xs order-2 md:order-1">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-soft-aqua shadow-lg shadow-soft-aqua/50">
                <img
                  src={mentors[1].image}
                  alt={mentors[1].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h6 className="mt-3 text-white text-sm sm:text-base text-center font-semibold leading-tight">
                {mentors[1].name}
              </h6>
              <p className="mt-1 text-xs sm:text-sm text-text-light-blue-gray text-center">
                {mentors[1].exp}
              </p>
            </div>

            {/* Center Faculty - HOD */}
            <div className="flex flex-col items-center bg-steel-blue-tint/40 backdrop-blur-sm border border-primary-cyan/30 p-4 rounded-2xl hover:bg-steel-blue-tint/60 hover:border-soft-aqua/60 transition-all duration-300 shadow-lg shadow-primary-cyan/10 w-full max-w-xs order-1 md:order-2 md:-translate-y-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-soft-aqua shadow-lg shadow-soft-aqua/50">
                <img
                  src={mentors[0].image}
                  alt={mentors[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h6 className="mt-3 text-white text-sm sm:text-base text-center font-semibold leading-tight">
                {mentors[0].name}
              </h6>
              <p className="mt-1 text-xs sm:text-sm text-text-light-blue-gray text-center">
                {mentors[0].exp}
              </p>
            </div>

            {/* Right Faculty - Anil */}
            <div className="flex flex-col items-center bg-steel-blue-tint/40 backdrop-blur-sm border border-primary-cyan/30 p-4 rounded-2xl hover:bg-steel-blue-tint/60 hover:border-soft-aqua/60 transition-all duration-300 shadow-lg shadow-primary-cyan/10 w-full max-w-xs order-3">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-soft-aqua shadow-lg shadow-soft-aqua/50">
                <img
                  src={mentors[2].image}
                  alt={mentors[2].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h6 className="mt-3 text-white text-sm sm:text-base text-center font-semibold leading-tight">
                {mentors[2].name}
              </h6>
              <p className="mt-1 text-xs sm:text-sm text-text-light-blue-gray text-center">
                {mentors[2].exp}
              </p>
            </div>
          </div>
        </div>

        {/* Remaining Faculty in Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-12 lg:px-16 w-full">
          {mentors.slice(3).map((mentor, index) => (
            <div
              key={index + 3}
              className="flex flex-col items-center bg-steel-blue-tint/40 backdrop-blur-sm border border-primary-cyan/30 p-4 rounded-2xl hover:bg-steel-blue-tint/60 hover:border-soft-aqua/60 transition-all duration-300 shadow-lg shadow-primary-cyan/10 h-full"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-soft-aqua shadow-lg shadow-soft-aqua/50 flex-shrink-0">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h6 className="mt-3 text-white text-sm sm:text-base text-center font-semibold leading-tight">
                {mentor.name}
              </h6>
              <p className="mt-1 text-xs sm:text-sm text-text-light-blue-gray text-center">
                {mentor.exp}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
