import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
export default function Faculty() {
  const mentors = [
    { name: "Dr.Sanjay Madhukarrao Patil", image: "https://ik.imagekit.io/igsnxowfs/faculty/hod.jpg?updatedAt=1760495359170" , exp: "Professor & HOD" },
    { name: "Dr.Preeti Nitin Jain", image: "https://ik.imagekit.io/igsnxowfs/faculty/pretty.jpg?updatedAt=1760495358975", exp: "Assistant Professor" },
    {
      name: "Mr.Anil Satyadeo Londhe",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/Anil-sir.jpeg?updatedAt=1760495358583",
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Deepti Jeetu Janjani",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/Deepti-maam.jpeg?updatedAt=1760495358712",
      exp: "Assistant Professor",
    },
    { name: "Mrs. Anjali Devi Milind Patil", image: "https://ik.imagekit.io/igsnxowfs/faculty/Anjali-maam.jpeg?updatedAt=1760495358743%27%27", exp: "Assistant Professor" },
    {
      name: "Mrs.Irin Anna Solomone",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/irin.jpg?updatedAt=1760495359032" ,
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Poonam Amit Kamble",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/poonam.jpg?updatedAt=1760495359116" ,
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Aarti Raman Sonawane",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/arti.jpg?updatedAt=1760495359178" ,
      exp: "Assistant Professor",
    },

    {
      name: "Mrs.  Swati Sankesh Parhad ",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/Swati.jpeg?updatedAt=1760495359013" ,
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Aparna Tiwari",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/Aparna%20Tiwari.jpg?updatedAt=1760495238311%27",
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Sphurti V Atram",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/Sphurti_Atram.jpg?updatedAt=1760495237100",
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Minakshi Umate",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/Minakshi_U.jpg?updatedAt=1760495236676",
      exp: "Assistant Professor",
    },
    {
      name: "Mrs. Oyendrila Samantha",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/Oyendrila_S.jpg?updatedAt=1760495236160",
      exp: "Assistant Professor",
    },
     {
      name: "Mrs. Shubhangi Katke",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/Shubhangi_Katke.jpg?updatedAt=1760495236309",
      exp: "Assistant Professor",
    },
     {
      name: "Mrs. Yashika .S.Vadnerkar ",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/Yashika_V.jpg?updatedAt=1760495236302",
      exp: "Assistant Professor",
    },
     {
      name: "Mrs. Aruna Divekar",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/Aruna_A.jpg?updatedAt=1760495236083",
      exp: "Assistant Professor",
    },
     {
      name: "Mrs.Shikha Singh",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/Shikha_s.jpeg?updatedAt=1760495237392",
      exp: "Assistant Professor",
    },
     {
      name: "Mrs. Mridul Saxena",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/Mridul_S.jpg?updatedAt=1760495236060",
      exp: "Assistant Professor",
    },
     {
      name: "Mrs. Aparna Raut",
      image: "https://ik.imagekit.io/igsnxowfs/faculty/Aparna%20Raut.jpg?updatedAt=1760495235669",
      exp: "Assistant Professor",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-bgGradient flex flex-col items-center  justify-center min-h-screen h-full py-20 px-4 ">
        {/* Heading */}
        <h1 className="text-white text-2xl font-NordBold md:text-3xl font-bold text-center mb-12 ">
          FACULTY & MENTORS
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 font-Outfit md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-16">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Responsive Circle Images */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Centered Name */}
              <h6 className="mt-2 text-sm sm:text-base text-white text-center font-semibold">
                {mentor.name}
              </h6>
              {/* Experience */}
              <p className="text-xs sm:text-sm text-gray-300 text-center">
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
