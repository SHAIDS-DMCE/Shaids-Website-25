import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Skeleton from "@mui/material/Skeleton";

const MemberCard = ({
  name,
  designation,
  instagramUrl,
  linkedinUrl,
  avatar,
  loading,
}) => {
  return (
    <div className="w-full max-w-[260px] mx-auto group">
      <div
        className="
          relative
          h-[360px]
          rounded-2xl
          overflow-hidden
          bg-white/[0.08]
          backdrop-blur-xl
          border border-white/[0.14]
          transition-shadow duration-500
          group-hover:shadow-[0_32px_64px_rgba(0,0,0,0.45)]
        "
      >
        {/* NOISE TEXTURE */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.045]"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.7\" numOctaves=\"3\"/></filter><rect width=\"120\" height=\"120\" filter=\"url(%23n)\"/></svg>')",
          }}
        />

        {/* IMAGE */}
        <div className="absolute inset-0">
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height="100%" />
          ) : (
            <>
              <img
                src={avatar}
                alt={name}
                className="
                  w-full h-full object-cover
                  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  saturate-[0.9]
                  group-hover:saturate-[1.05]
                "
              />
              <div className="absolute inset-0 shadow-[inset_0_-60px_80px_rgba(0,0,0,0.55)]" />
            </>
          )}
        </div>

        {/* FLOATING GLASS CURTAIN */}
        <div
          className="
            absolute inset-0
            bg-[#0F1A2E]/75
            backdrop-blur-xl
            border-t border-white/[0.12]
            translate-y-[78%]
            group-hover:translate-y-[65%]
            transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            flex flex-col items-center
            justify-start
            pt-4
            px-5
          "
        >
          {/* NAME */}
          <p className="text-white text-lg font-semibold tracking-wide">
            {name}
          </p>

          {/* DETAILS */}
          <div
            className="
              mt-2
              opacity-0 translate-y-2
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-400 delay-200
              text-center
            "
          >
            <p className="text-[#9FB1C8] text-sm">
              {designation}
            </p>

            <div className="flex gap-4 mt-4 justify-center">
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58C8E8] hover:text-[#7FD9F2] transition-colors"
                >
                  <InstagramIcon fontSize="small" />
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58C8E8] hover:text-[#7FD9F2] transition-colors"
                >
                  <LinkedInIcon fontSize="small" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;