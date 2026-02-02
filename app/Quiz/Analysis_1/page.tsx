"use client";

import Link from "next/link";
import { InlineMath } from 'react-katex';

// Copied configuration from Analysis_1/page.tsx to ensure consistency
// Copied configuration from Analysis_1/page.tsx to ensure consistency
import { useState } from "react";

const quizBlocks = [
  {
    id: "block-1",
    title: "Block 1: Logik & Mengen",
    color: "#FFFFFF", // White
    borderColor: "border-[#FFFFFF]",
    textColor: "text-[#FFFFFF]",
    hoverBg: "hover:bg-[#FFFFFF]", // Changed for selection state handling
    glow: "shadow-[#FFFFFF]/20"
  },
  {
    id: "block-2",
    title: "Block 2: Reelle & Komplexe Zahlen",
    color: "#00FF9A", // Emerald
    borderColor: "border-[#00FF9A]",
    textColor: "text-[#00FF9A]",
    hoverBg: "hover:bg-[#00FF9A]",
    glow: "shadow-[#00FF9A]/20"
  },
  {
    id: "block-3",
    title: "Block 3: Folgen & Reihen",
    color: "#00C4FF", // Azure
    borderColor: "border-[#00C4FF]",
    textColor: "text-[#00C4FF]",
    hoverBg: "hover:bg-[#00C4FF]",
    glow: "shadow-[#00C4FF]/20"
  },
  {
    id: "block-4",
    title: "Block 4: Topologie & Stetigkeit",
    color: "#E15AF0", // Magenta
    borderColor: "border-[#E15AF0]",
    textColor: "text-[#E15AF0]",
    hoverBg: "hover:bg-[#E15AF0]",
    glow: "shadow-[#E15AF0]/20"
  },
  {
    id: "block-5",
    title: "Block 5: Differentialrechnung",
    color: "#FFC857", // Amber
    borderColor: "border-[#FFC857]",
    textColor: "text-[#FFC857]",
    hoverBg: "hover:bg-[#FFC857]",
    glow: "shadow-[#FFC857]/20"
  },
  {
    id: "block-6",
    title: "Block 6: Taylor & Integrale", // Shortened slightly for button fit if needed, but keeping full is better
    fullTitle: "Block 6: Höhere Ableitungen, Taylor, Integrale",
    color: "#FF3B3B", // Crimson
    borderColor: "border-[#FF3B3B]",
    textColor: "text-[#FF3B3B]",
    hoverBg: "hover:bg-[#FF3B3B]",
    glow: "shadow-[#FF3B3B]/20"
  },
  {
    id: "block-7",
    title: "Block 7: Integrationsmethoden",
    color: "#8C4BFF", // Ultraviolet
    borderColor: "border-[#8C4BFF]",
    textColor: "text-[#8C4BFF]",
    hoverBg: "hover:bg-[#8C4BFF]",
    glow: "shadow-[#8C4BFF]/20"
  },
];

export default function AnalysisQuizSelection() {
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);

  const toggleBlock = (id: string) => {
    setSelectedBlocks(prev => 
      prev.includes(id) 
        ? prev.filter(b => b !== id) 
        : [...prev, id]
    );
  };

  const getContinueLink = () => {
    if (selectedBlocks.length === 0) return "#";
    // For now, linking to a session placeholder. In reality, this would pass params to the quiz runner.
    // e.g., /Quiz/Analysis_1/Session?blocks=block-1,block-2
    return `/Quiz/Analysis_1/Session?blocks=${selectedBlocks.join(",")}`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 relative z-10 pb-32">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-math-blue/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-math-purple/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        
        {/* Back Link */}
        <Link href="/Quiz" className="absolute top-0 left-0 text-xs font-mono text-gray-500 hover:text-white transition-colors mb-12">
            &lt; ZURÜCK
        </Link>
        
        {/* Question Header */}
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-16 mt-12 tracking-tight">
          Welche Theorie möchtest du testen?
        </h1>

        {/* Option 1: THE WHOLE THEORY */}
        <Link 
          href="/Quiz/Analysis_1/Whole" 
          className="w-full max-w-md group relative mb-16"
        >
          <div className="absolute inset-0 bg-linear-to-r from-math-blue/20 to-math-green/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative bg-surface border border-white/20 hover:border-math-blue p-6 rounded-xl flex items-center justify-between transition-all duration-300 group-hover:-translate-y-1 shadow-lg shadow-black/40">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-math-blue/20 group-hover:border-math-blue/30 group-hover:text-math-blue transition-colors">
                   <span className="text-2xl font-serif italic">∫</span>
                </div>
                <div className="text-left">
                   <h2 className="text-xl font-bold text-white group-hover:text-math-blue transition-colors">Die ganze Theorie</h2>
                   <p className="text-xs text-gray-400">Alle 7 Blöcke gemischt</p>
                </div>
             </div>
             <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
        </Link>


        {/* Divider text */}
        <div className="w-full h-px bg-white/5 mb-12 relative flex justify-center">
            <span className="bg-background px-4 text-xs font-mono text-gray-600 uppercase tracking-widest absolute -top-2">Oder wähle spezifische Blöcke</span>
        </div>


        {/* Option 2: Individual Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-12">
           {quizBlocks.map((block) => {
             const isSelected = selectedBlocks.includes(block.id);
             return (
             <button 
               key={block.id} 
               onClick={() => toggleBlock(block.id)}
               className={`group relative p-4 rounded-lg border transition-all duration-200 text-left
                  ${isSelected 
                     ? `${block.borderColor} bg-${block.color}/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] scale-[1.02]` 
                     : `border-white/10 bg-surface/80 hover:border-white/30 hover:bg-surface/90`
                  }
               `}
             >
                <div className="flex items-center gap-3">
                   {/* Indicator Dot */}
                   <div className={`w-3 h-3 rounded-full border ${block.borderColor} 
                      ${isSelected ? block.textColor.replace("text-", "bg-") : "bg-transparent"}
                      transition-colors duration-300`}></div>
                   
                   <h3 className={`text-sm font-bold transition-colors ${isSelected ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}>
                      {block.fullTitle || block.title}
                   </h3>
                </div>
                
                {isSelected && (
                  <div className={`absolute top-2 right-2 ${block.textColor}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                )}
             </button>
           )})}
        </div>
        
        {/* Continue Button (Fixed or Inline) */}
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 z-50 ${selectedBlocks.length > 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
             <Link 
                href={getContinueLink()}
                className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform"
             >
                <span>{selectedBlocks.length} {selectedBlocks.length === 1 ? 'Block' : 'Blöcke'} starten</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
             </Link>
        </div>

      </div>
    </main>
  );
}
