import React, { useState } from "react";
import { Download } from "lucide-react";
import papers from "../data/academics"; // Import the data file
import Lottie from "lottie-react";
import academic from "../assets/academic.json";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const semesters = Object.keys(papers); // Extract semester names from the keys

const App = () => {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the papers based on the selected semester and search query
  let filteredPapers = [];

if (selectedSemester && !searchQuery) {
  // Only semester selected
  filteredPapers = papers[selectedSemester] || [];
}

if (!selectedSemester && searchQuery) {
  // Only search (global search)
  const all = Object.values(papers).flat();
  filteredPapers = all.filter((paper) =>
    paper.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

if (selectedSemester && searchQuery) {
  // Both selected
  filteredPapers = (papers[selectedSemester] || []).filter((paper) =>
    paper.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

  return (
    <div className="flex flex-col min-h-screen
bg-[linear-gradient(180deg,#0B1220_0%,#0F1A2E_40%,#020617_100%)] text-white">
       <Navbar show={true} />

      {/* DESIGNED HERO HEADER */}
<header className="relative overflow-hidden bg-transparent backdrop-blur-sm">

  {/* glow blobs */}
  <div className="absolute inset-0">
    <div className="absolute -top-40 -left-40 w-[600px] h-[600px]
      bg-[#4CC3E6]/20 rounded-full blur-[160px]"></div>

    <div className="absolute top-10 right-[-120px] w-[500px] h-[500px]
      bg-[#6FD7F2]/10 rounded-full blur-[140px]"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 py-28
  flex flex-col items-center text-center">

    <div className="mb-4 px-5 py-1.5 rounded-full
      bg-white/5 border border-white/10
      text-sm tracking-wide text-[#6FD7F2]">
      Academic Portal
    </div>

    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
      Academic <span className="text-[#4CC3E6]">Resources</span>
    </h1>

    <p className="mt-5 text-lg text-[#C7D2E0] max-w-2xl">
      All your semester-wise notes, question papers and academic
      materials — organised beautifully in one place.
    </p>

    <div className="mt-8 w-28 h-[3px]
      bg-gradient-to-r from-[#4CC3E6] to-[#6FD7F2]
      rounded-full"></div>

    <div className="mt-12 w-[240px]">
      <Lottie animationData={academic} loop />
    </div>
  </div>
</header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-6 py-12 flex-grow">
        {/* Filters */}
        <div className="relative -mt-24 z-20
max-w-4xl mx-auto
flex flex-col md:flex-row items-center gap-6
bg-[#0F1A2E]
border border-[ rgba(255,255,255,0.15) ]
rounded-3xl px-10 py-8
shadow-[0_25px_80px_rgba(79,195,247,0.25)]">
          {/* Semester Selector */}
          <select
            className="w-full md:w-[240px] px-6 py-4 text-lg bg-[#101B30] border border-[rgba(255,255,255,0.15)] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#4CC3E6]"
            onChange={(e) => setSelectedSemester(e.target.value || null)}
            value={selectedSemester || ""}
          >
            <option value="">Select Semester</option>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>
          
  <input
    type="text"
    placeholder="Search subjects..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-full md:flex-1 px-6 py-4 text-lg rounded-xl bg-[#101B30] border border-[rgba(255,255,255,0.15)] text-white placeholder-[#9FB1C8] focus:outline-none focus:ring-2 focus:ring-[#4CC3E6]"
  />
</div>


        

        {/* Papers */}
        <div className="relative max-w-6xl mx-auto
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
gap-8 md:gap-10 mt-20">
          {filteredPapers.map((paper, index) => (
            <div
  key={index}
  className="group relative overflow-hidden rounded-3xl
  border border-white/10 bg-white/5 backdrop-blur-xl
  p-8 min-h-[200px] shadow-xl transition-all duration-500 
  hover:-translate-y-4 hover:shadow-[0_30px_80px_rgba(139,92,246,0.45)]
  animate-[float_6s_ease-in-out_infinite]"
>
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-400/10 pointer-events-none"></div>
               <div className="relative z-10 flex justify-between items-center mb-2 md:mb-4">
                <h3 className="text-2xl font-bold tracking-wide
bg-gradient-to-r from-purple-300 to-cyan-300
bg-clip-text text-transparent">
                  {paper.subject}
                </h3>
                
                <a
  href={paper.downloadUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-full bg-white/10
  hover:bg-purple-600 hover:scale-110
  transition-all duration-300"
>
                  <Download className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div> 

        {/* No Papers Found */}
        {filteredPapers.length === 0 && selectedSemester && (
          <div className="text-center py-12">
            <p className="text-gray-400">
              No question papers found for the selected semester or search
              query.
            </p>
          </div>
        )}
      </main>

      {/* Footer at the Bottom */}
      <Footer />
    </div>
  );
};

export default App;
