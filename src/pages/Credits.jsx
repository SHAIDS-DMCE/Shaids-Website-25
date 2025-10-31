import React from "react";
import aayush from "../assets/images/credits/ayush.jpg";
import bhargav from "../assets/images/credits/Bhargav.png";
import dhanush from "../assets/images/credits/Dhanush.jpg";
import divesh from "../assets/images/credits/divesh.jpg";
import nachiket from "../assets/images/credits/nachiket.jpg";
import rutuja from "../assets/images/credits/photo.jpg";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import { Instagram, GitHub, LinkedIn } from "@mui/icons-material";

const creators = [
  {
    id: 1,
    name: "Ayush Bhosale",
    image: "https://ik.imagekit.io/igsnxowfs/credits/ayush.jpg?updatedAt=1760495479216",
    instagram: "https://www.instagram.com/ayush._.bhosale/",
    linkedin: "https://www.linkedin.com/in/ayush-bhosale-207ba7250/",
  },
  {
    id: 5,
    name: "Divesh Dalvi ",
    role: " Shaids Tech Lead",
    image: "https://ik.imagekit.io/igsnxowfs/credits/divesh-tech-head.jpg?updatedAt=1760926560244",
    instagram: "https://www.instagram.com/dalvi.divesh/",
    linkedin: "https://www.linkedin.com/in/divesh-dalvi/",
  },
  {
    id: 6,
    name: "Dhanushkar Guin",
    image: "https://ik.imagekit.io/igsnxowfs/credits/Dhanush.jpg?updatedAt=1760495475709",
    instagram: "https://www.instagram.com/dhanu._.exe",
    linkedin: "https://www.linkedin.com/in/dhanushkar-guin-aba4212b5/",
  },
  {
    id: 2,
    name: "Nachiket Patil",
    image: "https://ik.imagekit.io/igsnxowfs/credits/nachiket.jpg?updatedAt=1760495477652",
    instagram: "https://www.instagram.com/nachiket_26_/",
    linkedin: "https://www.linkedin.com/in/nachiket-patil-a610212b1/",
  },
  {
    id: 4,
    name: "Rutuja Sawant",
    image: "https://ik.imagekit.io/igsnxowfs/credits/photo.jpg?updatedAt=1760495479666",
    instagram: "https://www.instagram.com/rutujasawant._/",
    linkedin: "https://www.linkedin.com/in/rutuja-sawant-3b77aa270/",
  },
  {
    id: 3,
    name: "Bhargav Gajare",
    image: "https://ik.imagekit.io/igsnxowfs/credits/Bhargav.png?updatedAt=1760495482216",
    instagram: "https://www.instagram.com/probablybhargav",
    linkedin: "https://www.linkedin.com/in/bhargavsg/",
  },
];

function CreatorCard({ name, role, image, instagram, linkedin }) {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 flex flex-col items-center justify-center text-center transform transition-all hover:scale-105 cursor-pointer shadow-lg">
      {/* Profile Image or Initial */}
      <div className="w-24 h-24 rounded-full bg-purple-700/50 mb-4 overflow-hidden flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={`${name}'s profile`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-purple-200 text-3xl font-bold">{name[0]}</span>
        )}
      </div>

      {/* Name & Role */}
      <h3 className="text-white font-medium text-lg">{name}</h3>
      <p className="text-purple-200 text-sm">{role}</p>

      {/* Social Links */}
      <div className="flex space-x-2 mt-2">
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <Instagram className="text-white cursor-pointer" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedIn className="text-white cursor-pointer" />
          </a>
        )}
      </div>
    </div>
  );
}

function Credits() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-bgGradient py-24 px-8 sm:px-16 lg:px-24 flex flex-col items-center">
        <div className="max-w-screen-lg w-full">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">MEET THE</span>

              <span className="text-purple-500"> CREATORS</span>
              <br />
              <span className="text-white">OF WEBSITE</span>
            </h1>
          </div>

          {/* Creator Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-12">
            {creators.map((creator) => (
              <CreatorCard
                key={creator.id}
                name={creator.name}
                role={creator.role}
                image={creator.image}
                instagram={creator.instagram}
                linkedin={creator.linkedin}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Credits;
