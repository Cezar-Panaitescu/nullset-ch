"use client";

import Link from "next/link";
import { useState } from "react";

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
  summary: { title: string; file: string };
  quiz: { title: string; file: string };
  singleQuiz?: boolean;
  customQuizFile?: string;
}

// --- DATA CONFIGURATION ---
// "color" used for dynamic arbitrary values
const courseModules: CourseModule[] = [
  {
    id: "module-1",
    title: "Block 1: Logik & Mengen",
    // Color: White (#FFFFFF)
    borderColor: "border-[#FFFFFF]",
    glowColor: "shadow-[#FFFFFF]/20",
    textColor: "text-[#FFFFFF]",
    bgColor: "bg-[#FFFFFF]",
    stripeColor: "bg-[#FFFFFF]",
    weeks: [
      {
        number: 1,
        topic: "Logik & Wahrheitstafeln, Beweismethoden, Quantoren",
        hasManim: false,
        manimTitle: "Induktion Visualisiert",
      },
      {
        number: 2,
        topic: "Vollständige Induktion, Mengenoperationen, Negation",
        hasManim: false,
      },
    ],
    summary: { title: "Zusammenfassung 1", file: "Zusammenfassung_Wochen_1_und_2.pdf" },
    quiz: { title: "Schnellübung 1", file: "quiz_01.pdf" },
  },
  {
    id: "module-2",
    title: "Block 2: Reelle & Komplexe Zahlen",
    // Color: StripeEmerald (#00FF9A)
    borderColor: "border-[#00FF9A]",
    glowColor: "shadow-[#00FF9A]/20",
    textColor: "text-[#00FF9A]",
    bgColor: "bg-[#00FF9A]",
    stripeColor: "bg-[#00FF9A]",
    weeks: [
      {
        number: 3,
        topic: "Injektivität/Surjektivität, Umkehrfunktion, Partialbruchzerlegung",
        hasManim: false,
        manimTitle: "Epsilon-Definition",
      },
      {
        number: 4,
        topic: "Komplexe Zahlen, Supremum/Infimum, Geometrische Orte",
        hasManim: false,
      },
    ],
    summary: { title: "Zusammenfassung 2", file: "Zusammenfassung_Wochen_3_und_4.pdf" },
    quiz: { title: "Schnellübung 2", file: "quiz_02.pdf" },
    singleQuiz: true,
    customQuizFile: "Schnellubung_2_zum_mitschreiben.pdf",
  },
  {
    id: "module-3",
    title: "Block 3: Folgen & Reihen",
    // Color: AzureSingularity (#00C4FF)
    borderColor: "border-[#00C4FF]",
    glowColor: "shadow-[#00C4FF]/20",
    textColor: "text-[#00C4FF]",
    bgColor: "bg-[#00C4FF]",
    stripeColor: "bg-[#00C4FF]",
    weeks: [
      {
        number: 5,
        topic: "Folgenkonvergenz, Monotonie-Kriterium, Rekursive Folgen",
        hasManim: true,
        customVideo: "https://www.youtube.com/embed/q5qG_9shW14?si=PH8_g53S1vxVNjXa&vq=hd1080",
      },
      {
        number: 6,
        topic: "Reihenkonvergenz, Potenzreihen, Konvergenzradius",
        hasManim: false,
      },
    ],
    summary: { title: "Zusammenfassung 3", file: "Zusammenfassung_Wochen_5_und_6.pdf" },
    quiz: { title: "Schnellübung 3", file: "quiz_03.pdf" },
  },
  {
    id: "module-4",
    title: "Block 4: Topologie & Stetigkeit",
    // Color: MagentaPulse (#E15AF0)
    borderColor: "border-[#E15AF0]",
    glowColor: "shadow-[#E15AF0]/20",
    textColor: "text-[#E15AF0]",
    bgColor: "bg-[#E15AF0]",
    stripeColor: "bg-[#E15AF0]",
    weeks: [
      {
        number: 7,
        topic: "ϵ−δ-Stetigkeit, Offene Mengen, Abgeschlossene Mengen",
        hasManim: false,
      },
      {
        number: 8,
        topic: "Funktionsgrenzwerte, Kompaktheit, Zwischenwertsatz",
        hasManim: false,
      },
    ],
    summary: { title: "Zusammenfassung 4", file: "Zusammenfassung_Wochen_7_und_8.pdf" },
    quiz: { title: "Schnellübung 4", file: "quiz_04.pdf" },
  },
  {
    id: "module-5",
    title: "Block 5: Differentialrechnung",
    // Color: AmberCore (#FFC857)
    borderColor: "border-[#FFC857]",
    glowColor: "shadow-[#FFC857]/20",
    textColor: "text-[#FFC857]",
    bgColor: "bg-[#FFC857]",
    stripeColor: "bg-[#FFC857]",
    weeks: [
      {
        number: 9,
        topic: "Differenzenquotient, Ableitungsregeln, Kettenregel",
        hasManim: false,
      },
      {
        number: 10,
        topic: "Mittelwertsatz, Regel von L'Hospital, Umkehrsatz",
        hasManim: false,
      },
    ],
    summary: { title: "Zusammenfassung 5", file: "Zusammenfassung_Wochen_9_und_10.pdf" },
    quiz: { title: "Schnellübung 5", file: "quiz_05.pdf" },
    singleQuiz: true,
  },
  {
    id: "module-6",
    title: "Block 6: Höhere Ableitungen, Taylor, Integrale",
    // Color: CrimsonDrift (#FF3B3B)
    borderColor: "border-[#FF3B3B]",
    glowColor: "shadow-[#FF3B3B]/20",
    textColor: "text-[#FF3B3B]",
    bgColor: "bg-[#FF3B3B]",
    stripeColor: "bg-[#FF3B3B]",
    weeks: [
      {
        number: 11,
        topic: "Taylorreihen, Lokale Extrema, Höhere Ableitungen",
        hasManim: false,
      },
      {
        number: 12,
        topic: "Riemann-Summen, Hauptsatz der Analysis, Stammfunktionen",
        hasManim: false,
      },
    ],
    summary: { title: "Zusammenfassung 6", file: "Zusammenfassung_Wochen_11_und_12.pdf" },
    quiz: { title: "Schnellübung 6", file: "quiz_06.pdf" },
  },
  {
    id: "module-7",
    title: "Block 7: Integrationsmethoden",
    // Color: UltravioletVoid (#8C4BFF)
    borderColor: "border-[#8C4BFF]",
    glowColor: "shadow-[#8C4BFF]/20",
    textColor: "text-[#8C4BFF]",
    bgColor: "bg-[#8C4BFF]",
    stripeColor: "bg-[#8C4BFF]",
    weeks: [
      {
        number: 13,
        topic: "Partielle Integration, Substitutionsregel, Differentialgleichungen",
        hasManim: false,
      },

    ],
    summary: { title: "Zusammenfassung 7", file: "Zusammenfassung_Wochen_13.pdf" },
    quiz: { title: "Schnellübung 7", file: "quiz_07.pdf" },
    singleQuiz: true,
  },
];


export default function AnalysisPage() {
  const [openVideo, setOpenVideo] = useState<number | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 relative z-10">
      
      {/* --- 1. TOP BAR --- */}
      <div className="fixed top-0 left-0 w-full px-6 py-3 flex justify-between items-center text-xs font-mono text-gray-500 bg-black/80 backdrop-blur-md border-b border-surface-light z-50">
        
        {/* --- NEW LOGO SECTION --- */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
             <img 
               src="/images/neon-icon.png" 
               alt="Nullset Logo" 
               className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110" 
             />
             <span className="text-white font-bold tracking-wider group-hover:text-math-blue transition-colors">NULLSET</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
           <span>ONLINE</span>
           <span className="w-2 h-2 rounded-full bg-math-green animate-pulse"></span>
        </div>
      </div>

      {/* --- HEADER --- */}
      <div className="mt-24 max-w-6xl w-full mx-auto mb-16">
        <Link href="/" className="text-xs font-mono text-gray-500 hover:text-white mb-4 block">
          &lt; ZURÜCK ZUR ÜBERSICHT
        </Link>
        <div className="flex items-center gap-4 mb-4">
           <div className="w-12 h-12 rounded-xl bg-math-blue/10 border border-math-blue/30 flex items-center justify-center text-math-blue">
              <span className="text-2xl font-serif italic">∫</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Analysis I</h1>
        </div>
        <p className="text-gray-400 max-w-2xl text-lg">
          Übungsmaterialien für das Herbstsemester 2025. Organisiert nach Themenblöcken und Zusammenfassungen.
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
                              <div>
                                 <h3 className="text-white font-bold text-lg flex items-center gap-3">
                                    {week.topic}
                                    {week.hasManim && (
                                       <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black border border-math-green/30 text-math-green text-[10px] font-mono uppercase tracking-wider">
                                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                          Animation
                                       </span>
                                    )}
                                 </h3>
                                 
                                 {/* Action Buttons for the Week */}
                                 <div className="flex flex-wrap gap-3 mt-3">
                                    {/* Button: Empty PDF */}
                                    <a 
                                      href={`https://files.nullset.ch/all_pdfs/Ubung_${week.number}_zum_mitschreiben.pdf`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 px-3 py-1.5 rounded border border-gray-600 text-gray-400 text-xs font-mono hover:border-white hover:text-white transition-colors"
                                    >
                                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                       MITSCHREIBEN
                                    </a>

                                    {/* Button: Full PDF */}
                                    <a 
                                      href={`https://files.nullset.ch/all_pdfs/Ubung_${week.number}_vollstandig.pdf`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={dynamicStyle}
                                      className={`flex items-center gap-2 px-3 py-1.5 rounded bg-gray-800 text-gray-200 text-xs font-mono border border-transparent hover:bg-(--hover-bg) hover:border-(--hover-color) hover:text-white transition-colors`}
                                    >
                                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                       VOLLSTÄNDIG
                                    </a>
                                    
                                    {/* Manim Link (if exists) */}
                                    {/* Video/Manim Button (Accordion Toggle) */}
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

                   {/* --- FOOTER: SUMMARY & QUIZ --- */}
                   <div className="bg-black/30 p-4 border-t border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-4">
                      
                      {/* Left: Summary Download */}
                      <a 
                        href={`https://files.nullset.ch/zusammenfassung/${module.summary.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-3 px-4 py-3 rounded ${module.borderColor} border border-dashed hover:border-solid hover:bg-white/5 hover:text-white transition-all group`}
                      >
                         <div className={`p-1.5 rounded-full ${module.bgColor} text-black`}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                         </div>
                         <span className={`text-sm font-bold ${module.textColor} group-hover:text-white`}>{module.summary.title}</span>
                      </a>

                      {/* Right: Schnellübung (Split Container) */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 rounded border border-white/10 bg-white/5">
                         
                         {/* Label */}
                         <div className="flex items-center gap-3 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="text-sm font-mono font-bold">{module.quiz.title}</span>
                         </div>

                         {/* Action Buttons */}
                         <div className="flex gap-2 w-full sm:w-auto justify-center">
                            {module.singleQuiz ? (
                               /* Single Button for Blocks 2, 5 & 7 */
                               <a 
                                 href={`https://files.nullset.ch/schnellubung/${module.customQuizFile || `Schnellubung_${index + 1}.pdf`}`} 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 style={dynamicStyle}
                                 className={`flex items-center gap-2 px-2 py-1.5 rounded bg-gray-800 text-gray-200 text-[10px] font-mono border border-transparent hover:bg-(--hover-bg) hover:border-(--hover-color) hover:text-white transition-colors uppercase tracking-wider`}
                               >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                  PDF DOWNLOAD
                               </a>
                            ) : (
                               /* Split Buttons for other blocks */
                               <>
                                <a 
                                  href={`https://files.nullset.ch/schnellubung/Schnellubung_${index + 1}_zum_mitschreiben.pdf`} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-2 py-1.5 rounded border border-gray-600 text-gray-400 text-[10px] font-mono hover:border-white hover:text-white transition-colors uppercase tracking-wider"
                                >
                                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                   Mitschreiben
                                </a>

                                <a 
                                  href={`https://files.nullset.ch/schnellubung/Schnellubung_${index + 1}_vollstandig.pdf`} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  style={dynamicStyle}
                                  className={`flex items-center gap-2 px-2 py-1.5 rounded bg-gray-800 text-gray-200 text-[10px] font-mono border border-transparent hover:bg-(--hover-bg) hover:border-(--hover-color) hover:text-white transition-colors uppercase tracking-wider`}
                                >
                                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                   Vollständig
                                </a>
                               </>
                            )}
                         </div>
                      </div>

                   </div>
               </div>
            </div>
          </div>
        )})}

      </div>
    </main>
  );
}