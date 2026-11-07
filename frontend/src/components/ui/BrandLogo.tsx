import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'wordmark' | 'avatar' | 'compact';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'full', className = '' }) => {
  if (variant === 'wordmark') {
    return (
      <span className={`font-['Epilogue'] font-black tracking-tight text-[#33210d] text-2xl md:text-3xl select-none ${className}`}>
        Paisabor
      </span>
    );
  }

  if (variant === 'avatar') {
    return (
      <div className={`relative w-12 h-12 rounded-full overflow-hidden bg-[#fedcbe] border border-[#d2c4ba]/40 flex items-center justify-center shadow-sm shrink-0 ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Colombian Flag Background Slice */}
          <path d="M 50 0 A 50 50 0 0 1 100 50 L 50 50 Z" fill="#FCD116" />
          <path d="M 50 50 L 100 50 A 50 50 0 0 1 85 85 Z" fill="#003893" />
          <path d="M 85 85 A 50 50 0 0 1 50 100 L 50 50 Z" fill="#CE1126" />
          
          {/* Paisa Character Silhouette/Illustration */}
          <circle cx="50" cy="50" r="48" fill="#fcf9f4" fillOpacity="0.85" />
          
          {/* Sombrero Aguadeño */}
          <ellipse cx="50" cy="36" rx="30" ry="8" fill="#e5e2dd" stroke="#33210d" strokeWidth="2.5" />
          <path d="M 32 35 C 32 20, 68 20, 68 35 Z" fill="#f6f3ee" stroke="#33210d" strokeWidth="2.5" />
          <path d="M 32 33 Q 50 37 68 33" stroke="#33210d" strokeWidth="3" fill="none" />
          
          {/* Face & Mustache */}
          <ellipse cx="50" cy="46" rx="14" ry="11" fill="#fedcbe" stroke="#33210d" strokeWidth="2" />
          {/* Eyes */}
          <circle cx="45" cy="43" r="2" fill="#33210d" />
          <circle cx="55" cy="43" r="2" fill="#33210d" />
          {/* Paisa Mustache */}
          <path d="M 40 49 Q 47 47 50 51 Q 53 47 60 49 Q 55 56 50 52 Q 45 56 40 49 Z" fill="#33210d" />
          
          {/* Ruana / Poncho */}
          <path d="M 28 62 L 72 62 L 78 95 L 22 95 Z" fill="#ebe8e3" stroke="#33210d" strokeWidth="2.5" />
          <line x1="50" y1="62" x2="50" y2="95" stroke="#994621" strokeWidth="2" strokeDasharray="3,3" />
          
          {/* Olla de Barro (Clay Pot) */}
          <ellipse cx="50" cy="80" rx="16" ry="12" fill="#994621" stroke="#33210d" strokeWidth="2" />
          <ellipse cx="50" cy="72" rx="11" ry="3.5" fill="#762c08" />
          {/* Mini Flag Ribbon on Pot */}
          <rect x="44" y="80" width="12" height="2" fill="#FCD116" />
          <rect x="44" y="82" width="12" height="1.5" fill="#003893" />
          <rect x="44" y="83.5" width="12" height="1.5" fill="#CE1126" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <BrandLogo variant="avatar" className="w-10 h-10 md:w-11 md:h-11" />
      <div className="flex flex-col">
        <span className="font-['Epilogue'] font-black tracking-tight text-[#33210d] text-2xl leading-none">
          Paisabor
        </span>
        <span className="font-['Work_Sans'] text-[10px] tracking-wider uppercase text-[#994621] font-semibold mt-0.5">
          El Sabor de Casa
        </span>
      </div>
    </div>
  );
};
