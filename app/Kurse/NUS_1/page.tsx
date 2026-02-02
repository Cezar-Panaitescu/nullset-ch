"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useAdmin } from "../../context/AdminContext";

// --- TYPES ---
interface Week {
  number: number;
  topic: string;
  hasManim: boolean;
  manimTitle?: string;
  customVideo?: string;
}

interface CourseModule {
  id: string;
  title: string;
  borderColor: string;
  glowColor: string;
  textColor: string;
  bgColor: string;
  stripeColor: string;
  weeks: Week[];
  singleQuiz?: boolean;
  customQuizFile?: string;
}

// --- DATA CONFIGURATION ---
const courseModules: CourseModule[] = [
  {
    id: "module-1",
    title: "Block 1: Das konstante elektrische Feld",
    // Color: Blue (#58C4DD)
    borderColor: "border-[#58C4DD]",
    glowColor: "shadow-[#58C4DD]/20",
    textColor: "text-[#58C4DD]",
    bgColor: "bg-[#58C4DD]",
    stripeColor: "bg-[#58C4DD]",
    weeks: [
      {
        number: 1,
        topic: "Mathematische Grundlagen: Linienintegrale, Flächenintegrale, Koordinatensysteme",
        hasManim: false,
      },
      {
        number: 2,
        topic: "Elektrische Ladungen, Die elektrische Spannung, Das Gaussche Gesetz",
        hasManim: false,
      },
      {
        number: 3,
        topic: "Elektrische Polarisation, Die Kapazität, Energie im Kondensator",
        hasManim: false,
      },
    ],
  },
  {
    id: "module-2",
    title: "Block 2: Der elektrische Strom",
    // Color: Gold (#F0AC5F)
    borderColor: "border-[#F0AC5F]",
    glowColor: "shadow-[#F0AC5F]/20",
    textColor: "text-[#F0AC5F]",
    bgColor: "bg-[#F0AC5F]",
    stripeColor: "bg-[#F0AC5F]",
    weeks: [
      {
        number: 4,
        topic: "Elektrischer Strom, Widerstände, Leistung",
        hasManim: false,
      },
      {
        number: 5,
        topic: "Spannungsquellen, Kirchhoffsche Regeln, Strom/Spannungsteiler",
        hasManim: false,
      },
      {
        number: 6,
        topic: "Reale Quellen, Leistung, Umfangreiche Netzwerke",
        hasManim: false,
      },
    ],
  },
  {
    id: "module-repetition",
    title: "Repetition",
    // Color: Holographic Silver (#E2E8F0)
    borderColor: "border-[#E2E8F0]",
    glowColor: "shadow-[#E2E8F0]/20",
    textColor: "text-[#E2E8F0]",
    bgColor: "bg-[#E2E8F0]",
    stripeColor: "bg-[#E2E8F0]",
    weeks: [
      {
        number: 7,
        topic: "Umfassende Wiederholung der bisherigen Themen",
        hasManim: false,
      },
    ],
  },
  {
    id: "module-3",
    title: "Block 3: Stromleitungsmechanismen",
    // Color: Teal (#83C167)
    borderColor: "border-[#83C167]",
    glowColor: "shadow-[#83C167]/20",
    textColor: "text-[#83C167]",
    bgColor: "bg-[#83C167]",
    stripeColor: "bg-[#83C167]",
    weeks: [
      {
        number: 8,
        topic: "Stromleitung in Vakuum, Flüssigkeit, Halbleitern",
        hasManim: false,
      },
    ],
  },
  {
    id: "module-4",
    title: "Block 4: Das konstante Magnetfeld",
    // Color: Red (#FC6255)
    borderColor: "border-[#FC6255]",
    glowColor: "shadow-[#FC6255]/20",
    textColor: "text-[#FC6255]",
    bgColor: "bg-[#FC6255]",
    stripeColor: "bg-[#FC6255]",
    weeks: [
      {
        number: 9,
        topic: "Das Magnetfeld, Lorentzkraft, Magnetischer Fluss",
        hasManim: false,
      },
      {
        number: 10,
        topic: "Magnetische Polarisation, Magnetisches Ersatzschaltbild, Die Induktivität",
        hasManim: false,
      },
      {
        number: 11,
        topic: "Induktion, Gegeninduktion, Magnetische Kopplung",
        hasManim: false,
      },
    ],
  },
  {
    id: "module-5",
    title: "Block 5: Das veränderliche Magnetfeld",
    // Color: Purple (#9A72AC)
    borderColor: "border-[#9A72AC]",
    glowColor: "shadow-[#9A72AC]/20",
    textColor: "text-[#9A72AC]",
    bgColor: "bg-[#9A72AC]",
    stripeColor: "bg-[#9A72AC]",
    weeks: [
      {
        number: 12,
        topic: "Sinusgrößen, Generatoren, 3-Phasen Wechselstrom",
        hasManim: false,
      },
      {
        number: 13,
        topic: "Transformatoren, Widerstandstransformation, Ersatzschaltbilder",
        hasManim: false,
      },
    ],
  }
];



export default function NUS1Page() {
  const { isAdmin } = useAdmin();
  const [openVideo, setOpenVideo] = useState<number | null>(null);
  const [uploadingState, setUploadingState] = useState<Record<string, boolean>>({});

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent, blockId: string, weekNumber: number, type: 'empty' | 'full') => {
    e.preventDefault();
    const uploadKey = `${weekNumber}-${type}`;
    
    // Set uploading state for this specific button
    setUploadingState(prev => ({ ...prev, [uploadKey]: true }));

    const file = e.dataTransfer.files[0];
    if (!file) {
        setUploadingState(prev => ({ ...prev, [uploadKey]: false }));
        return;
    }

    // 1. Auto-rename the file (e.g. Ubung_Woche_1_mitschreiben.pdf)
    const suffix = type === 'empty' ? 'mitschreiben' : 'vollstandig';
    const newFileName = `Ubung_Woche_${weekNumber}_${suffix}.pdf`;

    try {
      // 2. WORKER URL
      const workerUrl = "https://r2-upload-helper.cezar-panaitescu71.workers.dev";
      
      const response = await fetch(`${workerUrl}/${newFileName}`, {
        method: 'PUT',
        headers: {
          'X-Custom-Auth': 'YOUR_SECRET_PASSWORD_123', // Must match the Worker password
          'Content-Type': file.type
        },
        body: file
      });

      if (response.ok) {
        alert(`✅ Success! Linked ${newFileName} to this button.`);
      } else {
        alert('❌ Upload failed.');
      }
    } catch (error) {
      console.error(error);
      alert('❌ Error: Check console for details.');
    } finally {
        setUploadingState(prev => ({ ...prev, [uploadKey]: false }));
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 relative z-10">
      

      {/* --- HEADER --- */}
      <div className="mt-24 max-w-6xl w-full mx-auto mb-16">
        <Link href="/Kurse" className="text-xs font-mono text-gray-300 hover:text-white mb-4 block">
          &lt; ZURÜCK ZU DEN KURSEN
        </Link>
        <div className="flex items-center gap-4 mb-4">
           <div className="w-12 h-12 rounded-xl bg-math-orange/10 border border-math-orange/30 flex items-center justify-center text-math-orange">
              <span className="text-2xl font-serif italic">⚡</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Netzwerke und Schaltungen I</h1>
        </div>
        <p className="text-gray-400 max-w-2xl text-lg">
          Grundlagen der Schaltungstechnik und Netzwerkanalyse.
        </p>
      </div>

      {/* --- TIMELINE CONTENT --- */}
      <div className="max-w-6xl w-full mx-auto space-y-16">
        
        {courseModules.map((module, index) => {
           // Extract the hex color from the class string (e.g. "border-[#FFFFFF]" -> "#FFFFFF")
           const moduleColor = module.borderColor.match(/\[(.*?)\]/)?.[1] || "#FFFFFF";
           // Append alpha for background (30% opacity = 4D) for readability with white text
           const hoverBgColor = moduleColor + "4D";
           
           const dynamicStyle = { 
             "--hover-color": moduleColor,
             "--hover-bg": hoverBgColor 
           } as React.CSSProperties;


           // Special Divider Style for Repetition (Week 7)
           if (module.id === 'module-repetition') {
             return (
               <div key={module.id} className="relative pl-8 py-8">
                  {/* Continuous Connector Line through the empty space */}
                  <div className="absolute left-[41px] -top-8 h-[calc(100%+4rem)] w-0.5 bg-dashed border-r-2 border-white/10 z-0"></div>

                  <div className="relative z-10 flex items-center gap-6">
                     <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center bg-black">
                        <span className="font-mono text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">7</span>
                     </div>
                     
                     <div className="h-px border-t-2 border-dashed border-white/30 grow"></div>
                     
                     <div className="text-right">
                        <h3 className="text-lg font-bold text-white uppercase tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Repetition</h3>
                        <p className="text-sm text-gray-300 font-mono">Umfassende Wiederholung</p>
                     </div>
                  </div>
               </div>
             )
           }

            return (
           <div key={module.id} className="relative pl-8">
             
             {/* Connector Line */}
             {index !== courseModules.length - 1 && (
                <div className="absolute left-[41px] top-full h-16 w-0.5 bg-surface-light z-0"></div>
             )}

            {/* --- THE BLOCK CARD --- */}
            <div className={`relative z-10 bg-surface/40 border ${module.borderColor} rounded-2xl overflow-hidden backdrop-blur-sm transition-all hover:shadow-2xl ${module.glowColor} hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] flex`}>
               
               {/* --- LEFT STRIPE --- */}
               <div className={`w-[9mm] ${module.stripeColor} shrink-0`}></div>

               {/* Main Content Area */}
               <div className="grow">
                   {/* Header */}
                   <div className={`px-6 py-4 border-b border-white/5 bg-black/20 flex justify-between items-center`}>
                      <h2 className={`font-bold text-lg ${module.textColor} tracking-wide`}>
                        {module.title}
                      </h2>
                      <div className={`px-2 py-0.5 rounded text-[10px] font-mono border ${module.borderColor} ${module.textColor} bg-black/50`}>
                        {module.weeks.length === 1 
                          ? `WOCHE ${module.weeks[0].number}`
                          : `WOCHEN ${module.weeks[0].number}-${module.weeks[module.weeks.length-1].number}`
                        }
                      </div>
                   </div>

                   {/* The Weeks */}
                   <div className="p-6 space-y-8">
                      {module.weeks.map((week) => (
                        <div key={week.number} className="group">
                           <div className="flex items-start gap-4 mb-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm font-bold bg-black border ${module.borderColor} ${module.textColor}`}>
                                 {week.number}
                              </div>
                              <div className="overflow-hidden">
                                 <h3 className="text-white font-bold text-lg flex flex-wrap items-center gap-3 wrap-break-word">
                                    <span className="wrap-break-word">{week.topic}</span>
                                    {week.hasManim && (
                                       <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black border border-math-green/30 text-math-green text-[10px] font-mono uppercase tracking-wider shrink-0">
                                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                          Animation
                                       </span>
                                    )}
                                 </h3>
                                 
                                 {/* Action Buttons for the Week */}
                                 <div className="flex flex-wrap gap-3 mt-3">
                                    {/* Link: Empty PDF */}
                                    <a 
                                      href={`https://files.nullset.ch/nus-1/Ubung_Woche_${week.number}_mitschreiben.pdf`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onDragOver={isAdmin ? handleDragOver : undefined}
                                      onDrop={isAdmin ? (e) => handleDrop(e, module.id, week.number, 'empty') : undefined}
                                      className={`flex items-center gap-2 px-3 py-1.5 rounded border border-gray-600 text-gray-300 text-xs font-mono hover:bg-white/5 transition-colors ${uploadingState[`${week.number}-empty`] ? 'animate-pulse bg-blue-500/20 text-blue-200 border-blue-500' : ''}`}
                                    >
                                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                       {uploadingState[`${week.number}-empty`] ? 'UPLOADING...' : 'MITSCHREIBEN'}
                                       {isAdmin && <div className="w-1.5 h-1.5 rounded-full bg-green-500 ml-1"></div>}
                                    </a>

                                    {/* Link: Full PDF */}
                                    <a 
                                      href={`https://files.nullset.ch/nus-1/Ubung_Woche_${week.number}_vollstandig.pdf`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={dynamicStyle}
                                      onDragOver={isAdmin ? handleDragOver : undefined}
                                      onDrop={isAdmin ? (e) => handleDrop(e, module.id, week.number, 'full') : undefined}
                                      className={`flex items-center gap-2 px-3 py-1.5 rounded bg-gray-800 text-gray-300 text-xs font-mono border border-transparent hover:brightness-125 transition-all ${uploadingState[`${week.number}-full`] ? 'animate-pulse bg-blue-500/20 text-blue-200 border-blue-500' : ''}`}
                                    >
                                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                       {uploadingState[`${week.number}-full`] ? 'UPLOADING...' : 'VOLLSTÄNDIG'}
                                       {isAdmin && <div className="w-1.5 h-1.5 rounded-full bg-green-500 ml-1"></div>}
                                    </a>
                                    
                                    {/* Manim Link (if exists) */}
                                    {(week.customVideo || week.hasManim) && (
                                       <button 
                                          onClick={() => setOpenVideo(openVideo === week.number ? null : week.number)}
                                          className={`flex items-center gap-2 px-3 py-1.5 rounded border border-math-green/30 ${openVideo === week.number ? 'bg-math-green text-black' : 'text-math-green hover:bg-math-green hover:text-black'} text-xs font-mono transition-colors`}
                                       >
                                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                          {openVideo === week.number ? 'Video schließen' : 'Video ansehen'}
                                       </button>
                                    )}
                                 </div>

                                 {/* Accordion Content (Video Player) */}
                                 {openVideo === week.number && week.customVideo && (
                                    <div className="mt-4 w-full max-w-3xl animate-in fade-in slide-in-from-top-2 duration-300">
                                       <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                                          <iframe 
                                             width="100%" 
                                             height="100%" 
                                             src={week.customVideo} 
                                             title="Video player" 
                                             frameBorder="0" 
                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                             referrerPolicy="strict-origin-when-cross-origin" 
                                             allowFullScreen
                                          ></iframe>
                                       </div>
                                    </div>
                                 )}
                                 </div>
                              </div>

                           {/* Divider */}
                           {week !== module.weeks[module.weeks.length-1] && (
                              <div className="h-px w-full bg-white/5 ml-12 mt-6"></div>
                           )}
                        </div>
                      ))}
                   </div>

               </div>
            </div>
          </div>
        )})}

      </div>
    </main>
  );
}
