import React from 'react';
import certificacionesImg from '../../images/certificaciones.webp';
import clientesImg from '../../images/nuestros clientes.webp';
import Image from './Image';

// ==========================================
// 1. EMBLEMA M MAINDSTEEL (3D GOLD CHISELED EMBLEM)
// ==========================================
export const GoldMaindsteelEmblem: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 100 }) => {
  return (
    <div
      style={{ width: size, height: size * 0.82 }}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      id="gold-maindsteel-emblem"
    >
      <svg
        viewBox="0 0 200 164"
        className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)] filter brightness-105"
      >
        <defs>
          {/* Rich Gold Linear Gradients */}
          <linearGradient id="goldLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff8db" />
            <stop offset="25%" stopColor="#fae082" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="75%" stopColor="#f5d47a" />
            <stop offset="100%" stopColor="#b8860b" />
          </linearGradient>
          <linearGradient id="goldDark" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b8860b" />
            <stop offset="35%" stopColor="#785108" />
            <stop offset="70%" stopColor="#543805" />
            <stop offset="100%" stopColor="#2c1a02" />
          </linearGradient>
          <linearGradient id="goldMid" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#fff3c4" />
            <stop offset="25%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#fae082" />
            <stop offset="85%" stopColor="#996515" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
          <linearGradient id="goldSpecular" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#fae082" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#b8860b" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 3D Sculpted Facets of Maindsteel M Logo */}
        {/* Left Outer Leg Bottom Facet */}
        <polygon points="20,118 64,44 86,58 48,138" fill="url(#goldDark)" />
        {/* Left Outer Leg Top Specular Facet */}
        <polygon points="64,44 86,16 112,68 86,58" fill="url(#goldLight)" />
        {/* Left Lower Chamfer */}
        <polygon points="20,118 48,138 68,134 40,112" fill="url(#goldMid)" />

        {/* Left Inner Incline Ribbon */}
        <polygon points="86,58 112,68 96,128 72,116" fill="url(#goldLight)" />
        {/* Center Peak Under-fold */}
        <polygon points="100,102 120,68 138,98 116,132" fill="url(#goldDark)" />

        {/* Right Inner Incline Ribbon */}
        <polygon points="112,68 138,16 160,54 138,98" fill="url(#goldLight)" />
        {/* Right Outer Leg Facet */}
        <polygon points="138,58 160,54 184,118 156,138" fill="url(#goldDark)" />
        {/* Right Lower Chamfer */}
        <polygon points="156,138 184,118 166,112 142,132" fill="url(#goldMid)" />
        
        {/* Top Connecting Chiseled Ridge */}
        <polygon points="86,16 100,2 124,2 138,16 112,68" fill="url(#goldMid)" />
        <polygon points="100,2 112,38 124,2" fill="url(#goldLight)" />

        {/* High specular highlight lines */}
        <polyline
          points="20,118 64,44 86,16 100,2 124,2 138,16 160,54 184,118"
          fill="none"
          stroke="#fffbe8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <polyline
          points="48,138 72,116 116,132 156,138"
          fill="none"
          stroke="#fae082"
          strokeWidth="1.5"
          opacity="0.75"
        />
      </svg>
    </div>
  );
};

// ==========================================
// 2. MEDALLA PRODUCTOS 100% MEXICANOS (GOLD EMBOSSED COIN)
// ==========================================
export const GoldMedallionMexico: React.FC<{ size?: number; className?: string }> = ({
  size = 110,
  className = ''
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-full select-none inline-flex items-center justify-center p-1.5 bg-gradient-to-b from-[#ffd700] via-[#d4af37] to-[#785108] shadow-[0_8px_24px_rgba(212,175,55,0.35),0_2px_8px_rgba(0,0,0,0.6)] ${className}`}
      id="gold-medallion-mexico"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <radialGradient id="goldCoinBrushed" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff9db" />
            <stop offset="35%" stopColor="#fae082" />
            <stop offset="70%" stopColor="#d4af37" />
            <stop offset="90%" stopColor="#b8860b" />
            <stop offset="100%" stopColor="#6b4408" />
          </radialGradient>
          <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffbe8" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#fae082" />
            <stop offset="100%" stopColor="#543805" />
          </linearGradient>
          <filter id="goldReliefMap" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="3" dy="4" stdDeviation="3" floodColor="#3d2602" floodOpacity="0.75" />
          </filter>
        </defs>

        {/* Outer Gold Coin Body */}
        <circle cx="100" cy="100" r="96" fill="url(#goldRimGrad)" stroke="#785108" strokeWidth="2" />
        <circle cx="100" cy="100" r="90" fill="url(#goldCoinBrushed)" />

        {/* Concentric Bevel Rings */}
        <circle cx="100" cy="100" r="88" fill="none" stroke="#fff9db" strokeWidth="1.5" opacity="0.85" />
        <circle cx="100" cy="100" r="74" fill="none" stroke="#785108" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="72" fill="none" stroke="#fae082" strokeWidth="1.2" opacity="0.8" />

        {/* Traditional Filigree Scroll Ring */}
        <g stroke="#785108" strokeWidth="1.6" fill="none" opacity="0.8">
          <path d="M 100,16 C 108,18 114,24 120,20 C 126,16 134,18 140,24 C 146,30 154,32 160,40 C 166,48 174,52 178,60 C 182,68 186,76 186,84" />
          <path d="M 186,116 C 186,124 182,132 178,140 C 174,148 166,152 160,160 C 154,168 146,170 140,176 C 134,182 126,184 120,180 C 114,176 108,182 100,184" />
          <path d="M 100,184 C 92,182 86,176 80,180 C 74,184 66,182 60,176 C 54,170 46,168 40,160 C 34,152 26,148 22,140 C 18,132 14,124 14,116" />
          <path d="M 14,84 C 14,76 18,68 22,60 C 26,52 34,48 40,40 C 46,32 54,30 60,24 C 66,18 74,16 80,20 C 86,24 92,18 100,16" />
          
          <circle cx="100" cy="20" r="2.5" fill="#543805" />
          <circle cx="148" cy="38" r="2.5" fill="#543805" />
          <circle cx="178" cy="80" r="2.5" fill="#543805" />
          <circle cx="178" cy="120" r="2.5" fill="#543805" />
          <circle cx="148" cy="162" r="2.5" fill="#543805" />
          <circle cx="100" cy="180" r="2.5" fill="#543805" />
          <circle cx="52" cy="162" r="2.5" fill="#543805" />
          <circle cx="22" cy="120" r="2.5" fill="#543805" />
          <circle cx="22" cy="80" r="2.5" fill="#543805" />
          <circle cx="52" cy="38" r="2.5" fill="#543805" />
        </g>

        {/* Center Brushed Gold Basin */}
        <circle cx="100" cy="100" r="70" fill="url(#goldCoinBrushed)" />

        {/* Radial Lathe Lines */}
        <g stroke="#fae082" strokeWidth="0.5" opacity="0.4">
          <line x1="100" y1="32" x2="100" y2="168" />
          <line x1="32" y1="100" x2="168" y2="100" />
          <line x1="52" y1="52" x2="148" y2="148" />
          <line x1="52" y1="148" x2="148" y2="52" />
        </g>

        {/* Relief Map of Mexico in Solid Gold with shadow */}
        <path
          d="M 52,64 
             L 56,76 L 62,88 L 68,102 L 66,108 L 60,98 L 54,80 L 50,68 Z
             M 64,74 
             L 74,70 L 88,72 L 96,78 L 102,86 L 106,94 L 118,94 L 126,98 L 134,104 L 144,104 L 152,108 L 156,118 L 150,126 L 140,126 L 134,116 L 124,118 L 116,128 L 108,134 L 98,126 L 90,118 L 84,106 L 76,96 L 68,84 Z"
          fill="#fae082"
          stroke="#785108"
          strokeWidth="1.8"
          strokeLinejoin="round"
          filter="url(#goldReliefMap)"
        />

        {/* Top-left specular gleam on map */}
        <path
          d="M 64,74 L 74,70 L 88,72 L 96,78 L 102,86 L 98,90 L 86,82 L 72,78 Z"
          fill="#ffffff"
          opacity="0.85"
        />
      </svg>
    </div>
  );
};

// ==========================================
// 3. MEDALLA POLÍTICA DE CALIDAD (GOLD CHECKMARK COIN)
// ==========================================
export const GoldMedallionQuality: React.FC<{ size?: number; className?: string }> = ({
  size = 110,
  className = ''
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-full select-none inline-flex items-center justify-center p-1.5 bg-gradient-to-b from-[#ffd700] via-[#d4af37] to-[#785108] shadow-[0_8px_24px_rgba(212,175,55,0.35),0_2px_8px_rgba(0,0,0,0.6)] ${className}`}
      id="gold-medallion-quality"
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <radialGradient id="qualityGoldGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff9db" />
            <stop offset="35%" stopColor="#fae082" />
            <stop offset="70%" stopColor="#d4af37" />
            <stop offset="90%" stopColor="#b8860b" />
            <stop offset="100%" stopColor="#6b4408" />
          </radialGradient>
          <linearGradient id="check3DGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff8db" />
            <stop offset="40%" stopColor="#fae082" />
            <stop offset="80%" stopColor="#b8860b" />
            <stop offset="100%" stopColor="#543805" />
          </linearGradient>
          <filter id="checkReliefGold" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="3" dy="4" stdDeviation="3" floodColor="#3d2602" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* Outer Gold Coin Body */}
        <circle cx="100" cy="100" r="96" fill="#d4af37" stroke="#785108" strokeWidth="2" />
        <circle cx="100" cy="100" r="90" fill="url(#qualityGoldGrad)" />

        {/* Concentric Bevel Rings */}
        <circle cx="100" cy="100" r="88" fill="none" stroke="#fff8db" strokeWidth="1.5" opacity="0.85" />
        <circle cx="100" cy="100" r="74" fill="none" stroke="#785108" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="72" fill="none" stroke="#fae082" strokeWidth="1.2" opacity="0.8" />

        {/* Filigree Pattern */}
        <g stroke="#785108" strokeWidth="1.6" fill="none" opacity="0.8">
          <path d="M 100,16 C 108,18 114,24 120,20 C 126,16 134,18 140,24 C 146,30 154,32 160,40 C 166,48 174,52 178,60 C 182,68 186,76 186,84" />
          <path d="M 186,116 C 186,124 182,132 178,140 C 174,148 166,152 160,160 C 154,168 146,170 140,176 C 134,182 126,184 120,180 C 114,176 108,182 100,184" />
          <path d="M 100,184 C 92,182 86,176 80,180 C 74,184 66,182 60,176 C 54,170 46,168 40,160 C 34,152 26,148 22,140 C 18,132 14,124 14,116" />
          <path d="M 14,84 C 14,76 18,68 22,60 C 26,52 34,48 40,40 C 46,32 54,30 60,24 C 66,18 74,16 80,20 C 86,24 92,18 100,16" />
        </g>

        {/* Center Basin */}
        <circle cx="100" cy="100" r="70" fill="url(#qualityGoldGrad)" />

        {/* Inner Raised Ring Holding Checkmark */}
        <circle
          cx="100"
          cy="100"
          r="48"
          fill="none"
          stroke="#785108"
          strokeWidth="6"
          filter="url(#checkReliefGold)"
        />
        <circle
          cx="100"
          cy="100"
          r="48"
          fill="none"
          stroke="url(#check3DGold)"
          strokeWidth="4"
        />

        {/* Bold 3D Sculpted Metallic Gold Checkmark */}
        <path
          d="M 76,102 L 92,118 L 132,74 L 140,82 L 92,132 L 68,110 Z"
          fill="url(#check3DGold)"
          stroke="#543805"
          strokeWidth="1.5"
          filter="url(#checkReliefGold)"
        />
        {/* Specular Edge Highlight */}
        <path
          d="M 68,110 L 76,102 L 92,118 L 132,74 L 140,82"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};

// ==========================================
// 4. MEDALLA DE AUTO (GOLD AUTOMOTIVE COIN)
// ==========================================
export const GoldMedallionCar: React.FC<{ size?: number; className?: string }> = ({
  size = 120,
  className = ''
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-full select-none inline-flex items-center justify-center p-1 bg-gradient-to-br from-[#ffd700] via-[#d4af37] to-[#543805] shadow-[0_8px_25px_rgba(212,175,55,0.4)] ${className}`}
      id="gold-medallion-car"
    >
      <svg viewBox="0 0 220 220" className="w-full h-full">
        <defs>
          <radialGradient id="brushedCoinGold" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#fff9db" />
            <stop offset="30%" stopColor="#fae082" />
            <stop offset="65%" stopColor="#d4af37" />
            <stop offset="90%" stopColor="#b8860b" />
            <stop offset="100%" stopColor="#543805" />
          </radialGradient>
          <linearGradient id="carBodyGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffdf0" />
            <stop offset="35%" stopColor="#fae082" />
            <stop offset="65%" stopColor="#b8860b" />
            <stop offset="100%" stopColor="#3d2602" />
          </linearGradient>
          <filter id="car3DDropGold" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="3" dy="5" stdDeviation="3" floodColor="#000000" floodOpacity="0.75" />
          </filter>
        </defs>

        {/* Outer Heavy Beveled Rim */}
        <circle cx="110" cy="110" r="106" fill="#d4af37" stroke="#543805" strokeWidth="2.5" />
        <circle cx="110" cy="110" r="100" fill="url(#brushedCoinGold)" />
        <circle cx="110" cy="110" r="98" fill="none" stroke="#fff9db" strokeWidth="1.5" opacity="0.85" />
        <circle cx="110" cy="110" r="90" fill="none" stroke="#785108" strokeWidth="1.5" />

        {/* Chamfered Slanted Pedestal Ramp */}
        <polygon
          points="52,142 168,124 168,138 52,156"
          fill="#785108"
          filter="url(#car3DDropGold)"
        />
        <polygon
          points="52,142 168,124 162,122 56,140"
          fill="#fae082"
          opacity="0.9"
        />

        {/* Embossed Sports Car Silhouette in 3D Relief */}
        {/* Wheels */}
        <circle cx="78" cy="132" r="15" fill="#1e1303" stroke="#d4af37" strokeWidth="2" filter="url(#car3DDropGold)" />
        <circle cx="78" cy="132" r="10" fill="#b8860b" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="144" cy="120" r="16" fill="#1e1303" stroke="#d4af37" strokeWidth="2" filter="url(#car3DDropGold)" />
        <circle cx="144" cy="120" r="11" fill="#b8860b" stroke="#ffffff" strokeWidth="1.5" />

        {/* Car Aerodynamic Body */}
        <path
          d="M 60,132 
             C 60,126 66,118 78,118 
             C 86,118 90,124 94,126 
             L 106,124 
             C 114,106 126,94 142,94 
             C 152,94 160,98 166,104 
             L 168,112 
             C 168,112 174,116 172,122 
             L 164,124 
             C 160,112 144,110 134,118 
             L 94,126 
             C 90,120 74,120 68,130 
             Z"
          fill="url(#carBodyGradGold)"
          stroke="#543805"
          strokeWidth="1.5"
          filter="url(#car3DDropGold)"
        />

        {/* Roof & Cockpit Glass */}
        <path
          d="M 108,120 
             C 116,106 128,98 142,98 
             C 148,98 154,100 158,105 
             L 146,118 
             Z"
          fill="#2c1a02"
          stroke="#d4af37"
          strokeWidth="1"
        />

        {/* Highlight Specular Edge along Shoulder */}
        <path
          d="M 64,126 C 72,120 86,118 102,122 L 140,116 C 154,114 166,116 170,122"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Laser Engraved "AURUM AUTOMOTIVE" */}
        <text
          x="110"
          y="178"
          textAnchor="middle"
          fontSize="9"
          fontWeight="800"
          letterSpacing="0.25em"
          fill="#543805"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          AURUM
        </text>
        <text
          x="110"
          y="188"
          textAnchor="middle"
          fontSize="6"
          fontWeight="600"
          letterSpacing="0.2em"
          fill="#785108"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          AUTOMOTIVE
        </text>
      </svg>
    </div>
  );
};

// ==========================================
// 5. CERTIFICACIONES STACK
// Asociación de Internet.mx | Grupo MAEN | IATF 16949
// ==========================================
export const CertificacionesStack: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`} id="certificaciones-stack">
      <Image src={certificacionesImg} alt="Certificaciones" className="w-[85%] max-w-[280px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" />
    </div>
  );
};

// ==========================================
// 6. NUESTROS CLIENTES BANNER
// Marelli | Izawa | Tachi-S México | COMPAS | Gestamp | Kasai
// ==========================================
export const NuestrosClientesBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`w-full bg-[#0d0f14] rounded-xl border border-zinc-800 p-6 sm:p-8 shadow-2xl ${className}`}
      id="nuestros-clientes-banner"
    >
      <div className="flex justify-center items-center w-full min-h-[140px]">
        <Image 
          src={clientesImg} 
          alt="Nuestros Clientes" 
          className="w-[95%] max-w-[900px] h-auto object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500" 
        />
      </div>
    </div>
  );
};

// ==========================================
// 7. CAPACIDAD TECNOLÓGICA VISUAL
// ==========================================
export const CapacidadTecnologicaVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <Image
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=80"
        alt="Capacidad Tecnológica Maindsteel"
        className="w-full h-full object-cover filter brightness-[0.38] contrast-125"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-zinc-900/60 to-[#0a0b0e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)]" />
    </div>
  );
};

// ==========================================
// 8. MANUFACTURA A LA ALTURA VISUAL
// ==========================================
export const ManufacturaAlaAlturaVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <Image
        src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=80"
        alt="Manufactura a la altura Maindsteel"
        className="w-full h-full object-cover filter brightness-[0.4] contrast-120"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15),transparent_70%)]" />
    </div>
  );
};

// ==========================================
// MAIN BRAND LOGO (GOLD ORIGINAL VERSION)
// ==========================================
export const MaindsteelLogo: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({
  className = '',
  size = 'md'
}) => {
  const iconSize = size === 'sm' ? 'h-7 w-7' : size === 'lg' ? 'h-11 w-11' : 'h-9 w-9';
  const textTitle = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const textSub = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';

  return (
    <div className={`flex items-center gap-3 select-none cursor-pointer ${className}`} id="brand-logo-container">
      {/* 3D Sculpted Gold Emblem */}
      <div className={`relative ${iconSize} flex items-center justify-center flex-shrink-0`}>
        <GoldMaindsteelEmblem size={size === 'sm' ? 28 : size === 'lg' ? 44 : 36} />
      </div>

      <div className="flex flex-col leading-tight">
        <span className={`font-black tracking-wider text-white uppercase font-sans ${textTitle}`}>
          MAIND<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f5d47a] to-[#d4af37]">STEEL</span>
        </span>
        <span className={`tracking-[0.25em] text-[#d4af37] font-semibold uppercase ${textSub}`}>
          AUTOMOTIVE
        </span>
      </div>
    </div>
  );
};

// ==========================================
// UNIVERSAL GOLD MEDALLION EXPORT
// ==========================================
export const GoldMedallion: React.FC<{
  type: 'machinery' | 'warranty' | 'origin' | 'quality';
  size?: number;
  className?: string;
}> = ({ type, size = 96, className = '' }) => {
  if (type === 'origin') {
    return <GoldMedallionMexico size={size} className={className} />;
  }
  if (type === 'quality') {
    return <GoldMedallionQuality size={size} className={className} />;
  }
  if (type === 'warranty') {
    return <GoldMaindsteelEmblem size={size} className={className} />;
  }
  return <GoldMedallionCar size={size} className={className} />;
};

// Aliases for compatibility
export const SilverMaindsteelEmblem = GoldMaindsteelEmblem;
export const SilverMedallionMexico = GoldMedallionMexico;
export const SilverMedallionQuality = GoldMedallionQuality;
export const SilverMedallionCar = GoldMedallionCar;

export const ClientLogosSection: React.FC = () => {
  return <NuestrosClientesBanner />;
};
