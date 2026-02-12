"use client";

import React, { useState } from "react";

interface DossierEngineProps {
  children: React.ReactNode;
  projectTitle: string;
  projectSubtitle: string;
  projectDate: string;
  accentColorClass?: string; // e.g. "text-amber-500" or "text-red-700"
}

export default function DossierEngine({ 
  children, 
  projectTitle, 
  projectSubtitle,
  projectDate,
  accentColorClass = "text-amber-500" 
}: DossierEngineProps) {
  const [progress, setProgress] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const val = (target.scrollTop / (target.scrollHeight - target.clientHeight)) * 100;
    setProgress(val);
  };

  return (
    <div className="font-sans text-slate-900 antialiased h-screen overflow-hidden print:h-auto print:overflow-visible print:bg-white">
      {/* 1. MALT-STYLE HEADER */}
      <header className="h-[53px] fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-slate-900 px-4 text-white border-b border-slate-800 print:hidden">
        <div className="flex flex-col">
          <h1 className={`text-sm font-black tracking-tight ${accentColorClass} italic leading-none uppercase`}>
            {projectTitle}
          </h1>
          <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mt-0 italic">
            {projectSubtitle}
          </p>
          <p className="text-[8px] text-slate-500 uppercase font-bold tracking-widest mt-0">
            {projectDate}
          </p>
        </div>
        <div className="flex gap-2">
           <span className="text-[8px] font-black bg-slate-800 px-2 py-1 rounded border border-slate-700 text-slate-400 uppercase tracking-tighter">Confidential</span>
           <button onClick={() => window.print()} className={`rounded ${accentColorClass.replace('text', 'bg').replace('700', '900')} px-3 py-1 text-[9px] font-black text-white uppercase`}>PDF</button>
        </div>
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[1px] bg-slate-700 w-full">
           <div 
             className={`h-full ${accentColorClass.replace('text', 'bg')} transition-all duration-300`} 
             style={{ width: `${progress}%` }}
           ></div>
        </div>
      </header>

      {/* 2. MALT-STYLE CONTAINER */}
      <main 
        className="snap-container mt-[53px] mx-auto w-full max-w-[375px] bg-white print:mt-0 print:block print:w-[375px]"
        onScroll={handleScroll}
      >
        {children}
      </main>

      {/* PRINT-ONLY FOOTER (Appears on every page of PDF) */}
      <div className="hidden print:fixed print:bottom-0 print:left-0 print:w-full print:flex print:justify-between print:px-6 print:py-2 print:text-[6px] print:text-slate-400 print:italic print:bg-white print:border-t print:border-slate-100 z-50">
          <span>Project: {projectTitle}</span>
          <span>Digital Dossier Standard 2026 | Junior Legal (5x8)</span>
      </div>
    </div>
  );
}
