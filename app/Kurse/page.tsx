"use client";

import Link from "next/link";
import { InlineMath } from 'react-katex';

export default function KursePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 relative z-10 text-white">
      <div className="mt-32 w-full max-w-6xl mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Verfügbare <span className="text-transparent bg-clip-text bg-linear-to-r from-math-blue to-math-green">Kurse</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Wähle einen Kurs aus, um Zusammenfassungen, Erklärungen und Quizzes zu sehen.
        </p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* Analysis I Card - Minimalist Hero Style */}
        <div className="group relative block w-full">
            <div className="relative group rounded-2xl border border-surface-light bg-surface overflow-hidden hover:border-math-blue/50 transition-all hover:shadow-[0_0_30px_rgba(0,160,224,0.1)] h-full">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left: Content */}
                    <div className="p-8 md:w-3/5 flex flex-col justify-between">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-math-blue transition-colors">
                            Analysis I
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                            Der Einstieg in die höhere Mathematik. Folgen, Reihen, Differential- und Integralrechnung.
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                             {/* OPTION A: Primary Action -> Links to the Analysis Timeline Page */}
                             <Link 
                                 href="/Kurse/Analysis_1" 
                                 className="px-5 py-2.5 bg-math-blue text-black text-sm font-bold rounded hover:brightness-130 transition-all duration-200 ease-in-out inline-flex items-center justify-center"
                             >
                                 KURS ÖFFNEN
                             </Link>
         
                             {/* OPTION B: Quiz Action -> Remains a button for now (or link to /quiz) */}
                             <button className="px-5 py-2.5 border border-surface-light text-white text-sm font-bold rounded hover:bg-math-magenta/20 hover:border-math-magenta transition-all duration-300 ease-in-out flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                QUIZ STARTEN
                             </button>
                        </div>
                    </div>

                    {/* Right: Mini Visual Abstract */}
                    <div className="md:w-2/5 h-48 md:h-auto bg-black border-t md:border-t-0 md:border-l border-surface-light relative overflow-hidden flex items-center justify-center">
                        <svg viewBox="0 0 320 250" className="w-full h-full p-6" preserveAspectRatio="xMidYMid meet">
                             {/* Definitions for arrowheads */}
                            <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#9ca3af" />
                            </marker>
                            </defs>

                            {/* --- Axes --- */}
                            <g className="stroke-gray-400" strokeWidth="1.5">
                            {/* X Axis */}
                            <line x1="20" y1="210" x2="300" y2="210" markerEnd="url(#arrow)" />
                            {/* Y Axis */}
                            <line x1="40" y1="230" x2="40" y2="20" markerEnd="url(#arrow)" />
                            </g>

                            {/* --- Epsilon Band (Magenta) --- */}
                            <g className="text-math-magenta">
                            <rect x="25" y="110" width="280" height="40" className="fill-current opacity-10" />
                            <line x1="25" y1="110" x2="305" y2="110" stroke="currentColor" strokeWidth="1" />
                            <line x1="25" y1="150" x2="305" y2="150" stroke="currentColor" strokeWidth="1" />
                            </g>

                            {/* --- Delta Interval (Green) --- */}
                            <g className="text-math-green">
                            <line x1="92" y1="230" x2="92" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
                            <line x1="180" y1="230" x2="180" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
                            <line x1="92" y1="225" x2="180" y2="225" stroke="currentColor" strokeWidth="1" />
                            </g>

                            {/* --- Curve (Blue) --- */}
                            <path d="M 25 210 Q 80 170 134 132" stroke="var(--color-math-blue)" strokeWidth="2" fill="none" />
                            <path d="M 138 128 Q 220 70 290 60" stroke="var(--color-math-blue)" strokeWidth="2" fill="none" />

                            {/* Hole at (x0, L) */}
                            <circle cx="136" cy="130" r="3" fill="black" stroke="var(--color-math-blue)" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Netzwerke und Schaltungen I Card */}
        <div className="group relative block w-full">
            <div className="relative group rounded-2xl border border-surface-light bg-surface overflow-hidden hover:border-math-blue/50 transition-all hover:shadow-[0_0_30px_rgba(0,160,224,0.1)] h-full">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left: Content */}
                    <div className="p-8 md:w-3/5 flex flex-col justify-between">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-math-blue transition-colors">
                            Netzwerke und Schaltungen I
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                            Grundlagen der Elektrotechnik. Maschen- und Knotenregel, komplexe Wechselstromrechnung.
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                             {/* OPTION A: Link to Course (Placeholder) */}
                             <Link 
                                 href="#" 
                                 className="px-5 py-2.5 bg-math-blue text-black text-sm font-bold rounded hover:brightness-130 transition-all duration-200 ease-in-out inline-flex items-center justify-center"
                             >
                                 KURS ÖFFNEN
                             </Link>
         
                             {/* OPTION B: Quiz Action */}
                             <button className="px-5 py-2.5 border border-surface-light text-white text-sm font-bold rounded hover:bg-math-magenta/20 hover:border-math-magenta transition-all duration-300 ease-in-out flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                QUIZ STARTEN
                             </button>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="md:w-2/5 h-48 md:h-auto bg-black border-t md:border-t-0 md:border-l border-surface-light relative overflow-hidden flex items-center justify-center">
                        <img 
                            src="/images/Netzwerke_und_Schaltungen I.png" 
                            alt="Netzwerke und Schaltungen I Visual" 
                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </div>
        
        {/* Signale und Systeme II Card */}
        <div className="group relative block w-full opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="relative group rounded-2xl border border-surface-light bg-surface overflow-hidden hover:border-math-blue/50 transition-all hover:shadow-[0_0_30px_rgba(0,160,224,0.1)] h-full">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left: Content */}
                    <div className="p-8 md:w-3/5 flex flex-col justify-between">
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 mb-2">
                                <span className="px-2 py-1 rounded bg-math-purple/10 text-math-purple text-xs font-mono border border-math-purple/20">
                                    Coming Soon
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-math-blue transition-colors">
                            Signals and Systems II
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                            Time and frequency domain analysis, Modelling, Discrete Systems
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-3 grayscale opacity-60 pointer-events-none select-none items-start">
                             {/* OPTION A: Link to Course (Disabled) */}
                             <span 
                                 className="px-5 py-2.5 bg-surface-light border border-white/10 text-gray-400 text-sm font-bold rounded inline-flex items-center justify-center cursor-not-allowed"
                             >
                                 COMING SOON
                             </span>
                             {/* OPTION B: Quiz Action */}
                             <button className="px-5 py-2.5 border border-surface-light text-white text-sm font-bold rounded hover:bg-math-magenta/20 hover:border-math-magenta transition-all duration-300 ease-in-out flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                START QUIZ
                             </button>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="md:w-2/5 h-48 md:h-auto bg-black border-t md:border-t-0 md:border-l border-surface-light relative overflow-hidden flex items-center justify-center">
                        <img 
                            src="/images/Signals_and_Systems_2.png" 
                            alt="Signale und Systeme II Visual" 
                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </div>

      </div>
    </main>
  );
}