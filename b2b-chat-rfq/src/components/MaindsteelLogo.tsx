import React from 'react';

export const MaindsteelLogo: React.FC<{ className?: string }> = ({ className = 'h-9' }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Faceted Metallic Chevron Icon + Car Badge in circle */}
      <div className="flex items-center gap-1">
        <svg
          viewBox="0 0 60 48"
          className="w-10 h-8 drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left angular faceted steel chevron */}
          <path
            d="M8 40L22 8H30L16 40H8Z"
            fill="url(#steel_grad_1)"
          />
          <path
            d="M16 40L30 8H35L21 40H16Z"
            fill="url(#steel_grad_2)"
          />
          <path
            d="M4 36L16 40L13 44L2 40L4 36Z"
            fill="#8E929B"
          />
          {/* Circular car emblem badge */}
          <circle cx="44" cy="18" r="14" stroke="#E5E7EB" strokeWidth="2" fill="#0D0E12" />
          {/* Stylized sports car profile inside the circle */}
          <path
            d="M36 21C36.5 18 38.5 15.5 42 15L45 15C47.5 15 49.5 17 50.5 19L52 20C52.5 20.5 53 21.2 53 22L53 23C53 23.5 52.5 24 52 24L51 24C51 24.8 50.3 25.5 49.5 25.5C48.7 25.5 48 24.8 48 24L40 24C40 24.8 39.3 25.5 38.5 25.5C37.7 25.5 37 24.8 37 24L36 24C35.5 24 35 23.5 35 23L35 22C35 21.5 35.5 21 36 21Z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.3"
          />
          <line x1="39" y1="18.5" x2="43.5" y2="18.5" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="45" y1="18.5" x2="48" y2="18.5" stroke="#FFFFFF" strokeWidth="1" />

          <defs>
            <linearGradient id="steel_grad_1" x1="8" y1="8" x2="30" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.5" stopColor="#C4C8D4" />
              <stop offset="1" stopColor="#7E8391" />
            </linearGradient>
            <linearGradient id="steel_grad_2" x1="16" y1="8" x2="35" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F3F4F6" />
              <stop offset="0.6" stopColor="#9CA3AF" />
              <stop offset="1" stopColor="#4B5563" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-tight">
        <span className="text-white text-sm sm:text-base font-black tracking-[0.18em] uppercase font-sans">
          MAINDSTEEL
        </span>
        <span className="text-neutral-300 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-normal -mt-0.5">
          Automotive
        </span>
      </div>
    </div>
  );
};
