"use client";

import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

export default function SessionPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCalendlyUrl, setActiveCalendlyUrl] = useState<string | null>(null);

  const CALENDLY_URLS = {
    coaching: "https://calendly.com/cezar-panaitescu71/1-1-coaching",
    exam: "https://calendly.com/cezar-panaitescu71/prufungsvorbereitung",
    group1h: "https://calendly.com/cezar-panaitescu71/gruppen-session-1-stunde",
    group2h: "https://calendly.com/cezar-panaitescu71/gruppen-session-2-stunden"
  };

  const openBookingModal = (url: string) => {
    setActiveCalendlyUrl(url);
    setIsModalOpen(true);
  };

  const sessionTypes = [
    {
      id: "coaching",
      title: "1:1 Coaching",
      subtitle: "Individuelle Betreuung",
      price: "60 CHF / h",
      features: ["Persönliche Fragen klären", "Optimierung der Lernstrategie", "Deep Dive in komplexe Themen"],
      popular: false,
      gradient: "from-math-blue to-math-green"
    },
    {
      id: "exam",
      title: "Prüfungsvorbereitung",
      subtitle: "Gezielte Vorbereitung",
      price: "150 CHF / 2.5h Intensiv-Block",
      features: ["Simulation von Prüfungen", "Korrektur & Feedback", "Personalisierte Unterlagen", "Fokus auf Schwachstellen"],
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "group",
      title: "Gruppen-Session",
      subtitle: "Lernen im Team",
      price: "30 CHF / p.P.",
      features: ["Max. 4 Personen", "Gemeinsames Lösen von Aufgaben", "Peer-Learning Effekt"],
      popular: false,
      gradient: "from-orange-400 to-red-500"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 relative z-10 text-white">
      <div className="mt-32 w-full max-w-4xl text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-math-blue/30 bg-math-blue/10 text-math-blue text-xs font-mono tracking-widest">
           <span className="w-1.5 h-1.5 rounded-full bg-math-blue"></span>
           BUCHUNG
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Wähle deine Session
        </h1>
        
        <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
          Egal ob gezielte Prüfungsvorbereitung oder kontinuierliche Begleitung – finde das Format, das zu dir passt.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {sessionTypes.map((session) => (
          <div 
            key={session.id}
            className={`relative group rounded-2xl bg-surface/40 border border-surface-light p-1 transition-all duration-300 hover:-translate-y-2 ${selectedType === session.id ? 'ring-2 ring-math-blue shadow-[0_0_30px_rgba(0,160,224,0.2)]' : 'hover:border-white/20'}`}
            onClick={() => setSelectedType(session.id)}
          >
            {/* Gradient Border Overlay on Hover */}
            <div className={`absolute inset-0 rounded-2xl bg-linear-to-r ${session.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
            
            {session.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-math-blue to-math-green text-black text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                Most Popular
              </div>
            )}

            <div className="bg-[#050505] rounded-xl h-full p-6 flex flex-col relative z-10">
              <h3 className="text-2xl font-bold text-white mb-1">{session.title}</h3>
              <p className="text-sm text-gray-500 font-mono mb-6">{session.subtitle}</p>
              
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400 mb-8">
                {session.price}
              </div>

              <ul className="space-y-3 mb-8 grow">
                {session.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className={`w-5 h-5 shrink-0 text-${session.id === 'coaching' ? 'math-blue' : 'gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-bold text-sm tracking-widest transition-all ${
                selectedType === session.id 
                  ? `bg-linear-to-r ${session.gradient} text-white shadow-lg` 
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}>
                {selectedType === session.id ? 'AUSGEWÄHLT' : 'AUSWÄHLEN'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Action Area - Only visible when selected */}
      <div className={`fixed bottom-0 left-0 w-full bg-[#050505]/90 backdrop-blur-xl border-t border-white/10 p-6 flex justify-center transform transition-transform duration-500 z-40 ${selectedType ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-sm text-gray-400 font-mono">DEINE AUSWAHL</div>
            <div className="text-xl font-bold text-white">
              {sessionTypes.find(s => s.id === selectedType)?.title}
            </div>
          </div>
          
          <div className="flex gap-4">
            {selectedType === 'group' ? (
              <>
                 <button 
                  onClick={() => openBookingModal(CALENDLY_URLS.group1h)}
                  className="px-6 py-3 rounded-full bg-white/10 text-white font-bold tracking-widest hover:bg-white/20 border border-white/10 transition-all text-sm"
                >
                  1 STUNDE
                </button>
                <button 
                  onClick={() => openBookingModal(CALENDLY_URLS.group2h)}
                  className="px-6 py-3 rounded-full bg-linear-to-r from-math-orange to-math-red text-white font-bold tracking-widest hover:brightness-110 shadow-[0_0_20px_rgba(255,100,0,0.3)] transition-all text-sm"
                >
                  2 STUNDEN
                </button>
              </>
            ) : (
              <button 
                onClick={() => {
                   if (selectedType === 'coaching') openBookingModal(CALENDLY_URLS.coaching);
                   if (selectedType === 'exam') openBookingModal(CALENDLY_URLS.exam);
                }}
                className={`px-8 py-3 rounded-full bg-linear-to-r text-black font-bold tracking-widest hover:brightness-110 shadow-lg transition-all ${
                  selectedType === 'exam' 
                    ? 'from-purple-500 to-pink-500 text-white shadow-[0_0_20px_rgba(192,38,211,0.3)]' 
                    : 'from-math-blue to-math-green shadow-[0_0_20px_rgba(0,160,224,0.3)]'
                }`}
              >
                VERFÜGBARKEIT PRÜFEN
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal Overlay */}
      {isModalOpen && activeCalendlyUrl && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          {/* Backdrop with Blur */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-[5px] transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Container */}
          <div 
            className={`
              relative z-10 w-full md:w-[1200px] max-w-[95vw] h-[80vh] md:h-[80vh] md:max-h-[850px]
              bg-[#050505] border border-surface-light rounded-t-2xl md:rounded-2xl 
              shadow-2xl overflow-y-auto
              
              /* Hide Scrollbar */
              [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
              
              /* Desktop Animation: Fade & Scale */
              animate-in fade-in zoom-in-95 duration-700
              md:zoom-in-95 md:fade-in

              /* Mobile Animation: Slide Up */
              slide-in-from-bottom
            `}
          >
             {/* Close Button */}
             <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

            {/* Calendly Embed */}
            <div className="w-full">
               <div 
                  className="calendly-inline-widget w-full" 
                  data-url={`${activeCalendlyUrl}?background_color=050505&text_color=ffffff&primary_color=00A0E0`}
                  style={{ minWidth: '320px', height: '1000px' }} 
                />
                <Script 
                  type="text/javascript" 
                  src="https://assets.calendly.com/assets/external/widget.js" 
                  async 
                />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
