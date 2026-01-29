"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function KontaktPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");
  const [logs, setLogs] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const simulateTransmission = async (formData: FormData) => {
    setFormState("sending");
    setLogs([]);

    const addLog = (text: string) => {
      setLogs(prev => [...prev, text]);
    };

    // Calculate fake size
    const content = Array.from(formData.values()).join("");
    const bytes = new TextEncoder().encode(content).length + 128; // + header overhead

    addLog(`> Verbindung zum Server wird hergestellt...`);
    await new Promise(r => setTimeout(r, 800));
    
    addLog(`> Verbindung hergestellt. Handshake authentifiziert.`);
    await new Promise(r => setTimeout(r, 600));

    addLog(`> Sende Nachricht (${bytes} Bytes)...`);
    await new Promise(r => setTimeout(r, 1000));

    // Random routing
    const randomIP = () => Array.from({length: 4}, () => Math.floor(Math.random() * 256)).join(".");
    
    addLog(`> Routing: ${randomIP()} [USER_EDGE]`);
    await new Promise(r => setTimeout(r, 500));
    
    addLog(`> Routing: 129.132.0.0 [ETH_ZURICH_GATEWAY]`);
    await new Promise(r => setTimeout(r, 600));

    addLog(`> Routing: 104.47.0.0 [OUTLOOK_DATACENTER_WEST_EUROPE]`);
    await new Promise(r => setTimeout(r, 700));

    addLog(`> Paket zugestellt.`);
    await new Promise(r => setTimeout(r, 500));

    // Actual Submission
    try {
      const response = await fetch("https://formspree.io/f/xnjjpwje", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormState("success");
      } else {
        addLog(`> FEHLER: Übertragung gescheitert.`);
        setFormState("idle"); // or error state, but letting them retry is fine
      }
    } catch (e) {
      addLog(`> FEHLER: Netzwerk nicht erreichbar.`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    simulateTransmission(formData);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 relative z-10 text-white">
      <div className="mt-32 w-full max-w-4xl text-center mb-12">

        
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Kontakt
        </h1>
        
        <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
          Ich freue mich über Feedback, Fragen oder Zusammenarbeit.
        </p>
      </div>

      {/* TERMINAL CONTACT FORM */}
      <div className="w-full max-w-2xl mb-12">
        {/* Simplified Gradient Frame (thinner, no shadow) */}
        <div className="p-px rounded-lg bg-linear-to-r from-math-blue/50 to-math-green/50">
          <div className="bg-[#050505] rounded-lg p-6 font-mono text-[#e0e0e0] relative overflow-hidden min-h-[600px] flex flex-col">
             
             {/* Header */}
             <div className="border-b border-[#333] pb-4 mb-6">
                <div className="text-lg font-bold text-white flex items-center gap-2">
                   <span className="text-math-green">{">"}</span> {formState === "idle" ? "INITIALISIERE_KONTAKT" : "UEBERTRAGUNGS_PROTOKOLL"}<span className="animate-[blink_1s_step-end_infinite]">_</span>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                   {formState === "idle" ? "// Feedback direkt an Cezar senden" : "// Route wird verfolgt..."}
                </div>
             </div>

             {/* MODE: IDLE (FORM) */}
             {formState === "idle" && (
               <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                   {/* Name */}
                   <div className="space-y-2">
                      <label className="block text-sm text-gray-500">var name =</label>
                      <input 
                        type="text" 
                        name="name" 
                        placeholder='"Dein Name"'
                        required
                        className="w-full bg-linear-to-r from-math-blue/10 to-math-green/10 border border-math-blue/30 text-math-blue p-3 text-sm focus:outline-none focus:border-math-blue transition-colors placeholder-math-blue/30 caret-math-blue"
                      />
                   </div>

                   {/* Email */}
                   <div className="space-y-2">
                      <label className="block text-sm text-gray-500">var email =</label>
                      <input 
                        type="email" 
                        name="email" 
                        placeholder='"email@beispiel.de"'
                        required
                        className="w-full bg-linear-to-r from-math-blue/10 to-math-green/10 border border-math-blue/30 text-math-blue p-3 text-sm focus:outline-none focus:border-math-blue transition-colors placeholder-math-blue/30 caret-math-blue"
                      />
                   </div>

                   {/* Category */}
                   <div className="space-y-2">
                      <label className="block text-sm text-gray-500">var kategorie =</label>
                      <div className="relative">
                          <select 
                            name="category"
                            required
                            defaultValue=""
                            className="w-full bg-linear-to-r from-math-blue/10 to-math-green/10 border border-math-blue/30 text-math-blue p-3 text-sm focus:outline-none focus:border-math-blue transition-colors appearance-none cursor-pointer"
                          >
                             <option value="" disabled>Kategorie auswählen...</option>
                             <option value="Frage">"Frage"</option>
                             <option value="Feedback">"Feedback"</option>
                             <option value="Zusammenarbeit">"Zusammenarbeit"</option>
                             <option value="Sonstiges">"Sonstiges"</option>
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-math-blue text-xs">▼</div>
                      </div>
                   </div>

                   {/* Subject */}
                   <div className="space-y-2">
                      <label className="block text-sm text-gray-500">var betreff =</label>
                      <input 
                        type="text" 
                        name="subject" 
                        placeholder='"Betreff"'
                        required
                        className="w-full bg-linear-to-r from-math-blue/10 to-math-green/10 border border-math-blue/30 text-math-blue p-3 text-sm focus:outline-none focus:border-math-blue transition-colors placeholder-math-blue/30 caret-math-blue"
                      />
                   </div>

                   {/* Message */}
                   <div className="space-y-2">
                      <label className="block text-sm text-gray-500">func nachricht() {"{"}</label>
                      <textarea 
                        name="message" 
                        rows={5}
                        placeholder='return "Schreibe deine Nachricht hier...";'
                        required
                        className="w-full bg-linear-to-r from-math-blue/10 to-math-green/10 border border-math-blue/30 text-math-blue p-3 text-sm focus:outline-none focus:border-math-blue transition-colors placeholder-math-blue/30 caret-math-blue"
                      ></textarea>
                      <div className="text-gray-500 text-sm">{"}"}</div>
                   </div>

                   {/* Submit */}
                   <button 
                     type="submit" 
                     className="w-full bg-linear-to-r from-math-blue to-math-green border border-transparent text-black py-3 font-bold uppercase tracking-widest hover:opacity-90 hover:shadow-[0_0_20px_rgba(0,160,224,0.4)] transition-all duration-300 mt-4"
                   >
                      NACHRICHT_SENDEN()
                   </button>
               </form>
             )}

             {/* MODE: SENDING/SUCCESS (LOGS) */}
             {formState !== "idle" && (
                <div className="flex flex-col h-full font-mono text-sm space-y-2">
                   {logs.map((log, i) => (
                      <div key={i} className={`animate-[fadeIn_0.1s_ease-out] ${log.includes("Paket zugestellt") ? "text-[#FF00FF] font-bold" : "text-white"}`}>
                         {log}
                      </div>
                   ))}
                   {formState === "success" && (
                      <div className="mt-8 animate-[fadeIn_0.5s_ease-out]">
                         <div className="p-px rounded-xl bg-linear-to-r from-math-blue to-math-green shadow-[0_0_30px_rgba(0,160,224,0.3)]">
                            <div className="bg-surface rounded-xl p-8 text-center backdrop-blur-sm">
                               <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-r from-math-blue/20 to-math-green/20 mb-4">
                                  <svg className="w-6 h-6 text-math-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                               </div>
                               
                               <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r from-math-blue to-math-green tracking-tight">
                                  ERFOLG
                               </h3>
                               
                               <p className="text-gray-400 mb-6 font-sans">
                                  Nachricht erfolgreich an Server übermittelt.
                               </p>
                               
                               <button 
                                 onClick={() => setFormState("idle")}
                                 className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 hover:border-math-blue/50 transition-all text-gray-300"
                               >
                                  Weitere Nachricht senden
                               </button>
                            </div>
                         </div>
                      </div>
                   )}
                </div>
             )}

          </div>
        </div>
      </div>

      {/* 
      <div className="w-full max-w-2xl grid gap-4">
        
        <a href="mailto:cpanaitescu@ethz.ch" className="group p-6 rounded-2xl bg-surface/30 border border-surface-light hover:border-math-blue/50 transition-all hover:-translate-y-1 flex items-center justify-between">
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-math-blue/10 flex items-center justify-center text-math-blue">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="text-left">
                    <div className="text-xs text-gray-400 font-mono mb-1">EMAIL</div>
                    <div className="text-lg text-white font-bold group-hover:text-math-blue transition-colors">cpanaitescu@ethz.ch</div>
                </div>
            </div>
            <div className="text-gray-500 group-hover:translate-x-1 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
        </a>

        
        <a href="https://www.linkedin.com/in/cezar-panaitescu-5007932a7/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-surface/30 border border-surface-light hover:border-[#0077b5]/50 transition-all hover:-translate-y-1 flex items-center justify-between">
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div className="text-left">
                    <div className="text-xs text-gray-400 font-mono mb-1">LINKEDIN</div>
                    <div className="text-lg text-white font-bold group-hover:text-[#0077b5] transition-colors">Cezar Panaitescu</div>
                </div>
            </div>
             <div className="text-gray-500 group-hover:translate-x-1 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
        </a>

        
        <a href="https://www.instagram.com/cezarpanaitescu/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-surface/30 border border-surface-light hover:border-[#E1306C]/50 transition-all hover:-translate-y-1 flex items-center justify-between">
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div className="text-left">
                    <div className="text-xs text-gray-400 font-mono mb-1">INSTAGRAM</div>
                    <div className="text-lg text-white font-bold group-hover:text-[#E1306C] transition-colors">@cezarpanaitescu</div>
                </div>
            </div>
             <div className="text-gray-500 group-hover:translate-x-1 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
        </a>
      </div>
      */}
    </main>
  );
}
