import React from 'react';

interface UserBubbleProps {
  content: string;
  timestamp?: string;
}

export const UserBubble: React.FC<UserBubbleProps> = ({ content, timestamp }) => {
  return (
    <div className="flex flex-col items-end gap-1 mb-4 select-text">
      <div className="flex items-center gap-1.5 text-[10px] text-[#E5A824]/90 uppercase tracking-widest font-mono-tech mr-1 font-semibold">
        <span>Cliente / OEM Buyer</span>
        {timestamp && <span className="text-neutral-500">· {timestamp}</span>}
      </div>
      {/* Solid Gold Right Bubble */}
      <div className="max-w-[90%] sm:max-w-[78%] bg-[#E5A824] hover:bg-[#F1B434] text-black font-bold px-4 py-2.5 rounded-2xl rounded-tr-xs shadow-[0_4px_16px_rgba(229,168,36,0.3)] border border-[#F1B434] transition-all">
        <p className="text-xs sm:text-sm font-sans tracking-tight leading-snug break-words">
          {content}
        </p>
      </div>
    </div>
  );
};
