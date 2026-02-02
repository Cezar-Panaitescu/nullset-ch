"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SessionPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const router = useRouter();

  const handleBooking = (type: string) => {
    router.push(`/buchen?session=${type}`);
  };

  const sessionTypes = [
    {
      id: "coaching",
      title: "1:1 Coaching",
      subtitle: "Individuelle Betreuung",
      price: "60 CHF / h",
      features: ["Persönliche Fragen klären", "Optimierung der Lernstrategie", "Deep Dive in komplexe Themen"],
      popular: true,
      gradient: "from-math-blue to-math-green"
    },
    {
      id: "exam",
      title: "Prüfungsvorbereitung",
      subtitle: "Gezielte Vorbereitung",
      price: "150 CHF / 2.5h Intensiv-Block",
      features: ["Simulation von Prüfungen", "Korrektur & Feedback", "Personalisierte Unterlagen", "Fokus auf Schwachstellen"],
      popular: false,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "group",
      title: "Gruppen-Session",
      subtitle: "Lernen im Team",
      price: "30 CHF / p.P.",
      features: ["Max. 4 Personen", "Gemeinsames Lösen von Aufgaben", "Peer-Learning Effekt", "Preis pro Stunde"],
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
                Beliebt
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
                  onClick={() => handleBooking('gruppen-1')}
                  className="px-6 py-3 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 text-black font-bold tracking-widest hover:brightness-110 shadow-[0_0_20px_rgba(255,165,0,0.3)] transition-all text-sm"
                >
                  1 STUNDE
                </button>
                <button 
                  onClick={() => handleBooking('gruppen-2')}
                  className="px-6 py-3 rounded-full bg-linear-to-r from-math-orange to-math-red text-white font-bold tracking-widest hover:brightness-110 shadow-[0_0_20px_rgba(255,100,0,0.3)] transition-all text-sm"
                >
                  2 STUNDEN
                </button>
              </>
            ) : (
              <button 
                onClick={() => {
                   if (selectedType === 'coaching') handleBooking('1-1');
                   if (selectedType === 'exam') handleBooking('prufungsvorbereitung');
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

    </main>
  );
}
