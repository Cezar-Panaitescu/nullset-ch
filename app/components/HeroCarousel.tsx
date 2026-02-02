"use client";

import { useState } from "react";
import Link from "next/link";
import { InlineMath } from 'react-katex';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "signals",
      title: "Signals and Systems II",
      badge: "Coming Soon",
      description: "Time and frequency domain analysis, Modelling, Discrete Systems",
      statusTitle: "PREVIEW",
      statusText: "\"Course starts on the 23rd of February 2026.\"",
      primaryAction: { text: "COMING SOON", href: "#", disabled: true },
      secondaryAction: { text: "START QUIZ", disabled: true },
      visual: "signals-image"
    },
    {
      id: "analysis",
      title: "Analysis I",
      badge: "Aktuell",
      description: "Der Einstieg in die höhere Mathematik. Folgen, Reihen, Differential- und Integralrechnung.",
      statusTitle: "STATUS-BERICHT",
      statusText: "\"Serie 9 Lösungen sind online. Neues Manim-Video zur Taylor-Entwicklung.\"",
      primaryAction: { text: "KURS ÖFFNEN", href: "/Kurse/Analysis_1" },
      secondaryAction: { text: "QUIZ STARTEN" },
      visual: "epsilon-delta" // formatting flag
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative group rounded-2xl border border-surface-light bg-surface overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-math-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        {/* Carousel Controls */}
        <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-math-blue/20 hover:border-math-blue transition-all backdrop-blur-sm"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-math-blue/20 hover:border-math-blue transition-all backdrop-blur-sm"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        <div className="flex flex-col md:flex-row min-h-[450px]">
            {/* Left: Content */}
            <div className="p-8 md:p-12 md:w-3/5 z-10 flex flex-col justify-between h-full pl-16">
                <div>
                <div className="inline-flex items-center gap-2 mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${slide.badge === 'Coming Soon' ? 'bg-math-purple/10 text-math-purple border-math-purple/20' : 'bg-math-blue/10 text-math-blue border-math-blue/20'}`}>
                        {slide.badge}
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight animate-in fade-in slide-in-from-left-4 duration-300 key={slide.id}">
                    {slide.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {slide.description}
                </p>
                
                <div className="bg-black/40 border border-white/5 rounded p-4 mb-8">
                    <div className="text-xs font-mono text-math-green mb-1">{slide.statusTitle}</div>
                    <div className="text-sm text-gray-300">
                        {slide.statusText}
                    </div>
                </div>
                </div>

                <div className={`flex flex-wrap gap-4 ${slide.primaryAction.disabled ? 'grayscale opacity-60 pointer-events-none' : ''}`}>
                {/* OPTION A: Primary Action */}
                <Link 
                    href={slide.primaryAction.href} 
                    className={`px-6 py-3 bg-math-blue text-black font-bold rounded hover:brightness-130 transition-all duration-200 ease-in-out inline-flex items-center justify-center ${slide.primaryAction.disabled ? 'cursor-not-allowed' : ''}`}
                >
                    {slide.primaryAction.text}
                </Link>

                {/* OPTION B: Quiz Action */}
                <button className="px-6 py-3 border border-surface-light text-white font-bold rounded hover:bg-math-magenta/20 hover:border-math-magenta transition-all duration-300 ease-in-out flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    {slide.secondaryAction.text}
                </button>
                </div>
            </div>

            {/* Right: Visual Abstract */}
            <div className="md:w-2/5 min-h-[300px] bg-black border-l border-surface-light flex items-center justify-center relative overflow-hidden group-hover:border-math-blue/50 transition-colors">
                
                {slide.visual === 'epsilon-delta' && (
                    <svg viewBox="0 0 320 250" className="w-full h-full p-4 max-w-[400px]" preserveAspectRatio="xMidYMid meet">
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
                        <foreignObject x="305" y="205" width="20" height="20">
                            <div className="text-gray-400 text-[10px] bg-black px-0.5 rounded">
                                <InlineMath math="x" />
                            </div>
                        </foreignObject>
                        {/* Y Axis */}
                        <line x1="40" y1="230" x2="40" y2="20" markerEnd="url(#arrow)" />
                        <foreignObject x="30" y="0" width="20" height="20">
                            <div className="text-gray-400 text-[10px] bg-black px-0.5 rounded">
                                <InlineMath math="y" />
                            </div>
                        </foreignObject>
                    </g>

                    {/* --- Epsilon Band (Magenta) --- */}
                    <g className="text-math-magenta">
                        <rect x="25" y="110" width="280" height="40" className="fill-current opacity-10" />
                        <line x1="25" y1="110" x2="305" y2="110" stroke="currentColor" strokeWidth="1" />
                        <line x1="25" y1="150" x2="305" y2="150" stroke="currentColor" strokeWidth="1" />
                        <foreignObject x="0" y="120" width="25" height="20">
                            <div className="text-math-magenta text-[10px]">
                                <InlineMath math="L+\varepsilon" />
                            </div>
                        </foreignObject>
                    </g>

                    {/* --- Delta Interval (Green) --- */}
                    <g className="text-math-green">
                        <line x1="92" y1="230" x2="92" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
                        <line x1="180" y1="230" x2="180" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
                        <line x1="92" y1="225" x2="180" y2="225" stroke="currentColor" strokeWidth="1" />
                        <foreignObject x="120" y="235" width="50" height="20">
                            <div className="text-math-green text-[10px]">
                                <InlineMath math="U_\delta(x_0)" />
                            </div>
                        </foreignObject>
                    </g>

                    {/* --- Curve (Blue) --- */}
                    <path d="M 25 210 Q 80 170 134 132" stroke="var(--color-math-blue)" strokeWidth="2" fill="none" />
                    <path d="M 138 128 Q 220 70 290 60" stroke="var(--color-math-blue)" strokeWidth="2" fill="none" />

                    {/* Hole at (x0, L) */}
                    <circle cx="136" cy="130" r="3" fill="black" stroke="var(--color-math-blue)" strokeWidth="1.5" />
                    </svg>
                )}

                {slide.visual === 'signals-image' && (
                    <img 
                        src="/images/Signals_and_Systems_2.png" 
                        alt="Signale und Systeme II" 
                        className="w-full h-full object-contain p-8 animate-in fade-in zoom-in duration-500"
                    />
                )}
            </div>
        </div>
    </div>
  );
}
