import { InlineMath } from 'react-katex';
import Link from "next/link";
import HeroCarousel from './components/HeroCarousel';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 relative z-10">
      

      {/* --- 2. BRAND HERO: The Mission Statement --- */}
      <div className="mt-32 w-full max-w-4xl text-center mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-math-blue/30 bg-math-blue/10 text-math-blue text-xs font-mono tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-math-blue"></span>
          PLATTFORM V1.0
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Mathematik, <br/>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-math-blue to-math-green">
            intuitiv & visuell.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
          Eine Ressourcen-Plattform für <strong>Universitätsstudenten</strong> und alle, die höhere Mathematik lernen wollen. Fokus auf Intuition.
        </p>
      </div>

      {/* --- 3. THE TRINITY: Your 3 Pillars --- */}
      <div className="w-full max-w-6xl mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
         
         {/* Pillar 1: Visuals */}
         {/* Pillar 1: Visuals */}
         <Link href="/Kurse" className="group p-6 rounded-xl bg-surface/30 border border-surface-light hover:border-math-blue/50 transition-all hover:-translate-y-1 block">
            <div className="w-12 h-12 mb-4 bg-math-blue/10 rounded-lg flex items-center justify-center text-math-blue border border-math-blue/20">
               {/* Icon: Eye/Graph */}
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-math-blue transition-colors">Visuelle Erklärungen</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
               Komplexe Konzepte werden durch Plots und <span className="text-white font-mono text-xs">MANIM</span>-Videos animiert. Siehe Mathe in Bewegung.
            </p>
         </Link>

         {/* Pillar 2: PDFs */}
         <div className="group p-6 rounded-xl bg-surface/30 border border-surface-light hover:border-math-green/50 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 mb-4 bg-math-green/10 rounded-lg flex items-center justify-center text-math-green border border-math-green/20">
               {/* Icon: Document */}
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-math-green transition-colors">Zusammenfassungen</h3>
         <p className="text-gray-400 text-sm leading-relaxed">
            PDFs, die den Inhalt mit sauberem Latex zusammenfassen.
         </p>
         </div>

         {/* Pillar 3: Quizzes */}
         <div className="group p-6 rounded-xl bg-surface/30 border border-surface-light hover:border-math-purple/50 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 mb-4 bg-math-purple/10 rounded-lg flex items-center justify-center text-math-purple border border-math-purple/20">
               {/* Icon: Brain/Lightning */}
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-math-purple transition-colors">Interaktive Quizzes</h3>
<p className="text-gray-400 text-sm leading-relaxed">
   Vom bloßen Auswendiglernen zum echten Begreifen. Teste deine Theoriesicherheit direkt im Browser.
</p>
         </div>

      </div>

      {/* --- 4. FEATURED COURSE (Analysis) --- */}
      <div className="w-full max-w-6xl mb-12">
         <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-surface-light grow"></div>
             <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Im Fokus</span>
             <div className="h-px bg-surface-light grow"></div>
         </div>

        <HeroCarousel />
      </div>

      {/* --- 5. ABOUT ME SECTION --- */}
      <div className="w-full max-w-6xl mb-24">
         <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-surface-light grow"></div>
             <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Über Mich</span>
             <div className="h-px bg-surface-light grow"></div>
         </div>

         <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-surface/30 p-8 rounded-2xl border border-surface-light hover:border-math-blue/30 transition-colors">
            
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500">
               <img src="/images/Me.jpeg" alt="Cezar Panaitescu" className="w-full h-full object-cover" />
               <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
            
            
            <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Hi, ich bin Cezar.</h3>
                <p className="text-gray-400 leading-relaxed">
                    Ich studiere Elektrotechnik (5. Semester) an der ETH. Weil Mathe in Vorlesungen oft abstrakt bleibt, habe ich <span className="text-white font-semibold">Nullset</span> gestartet: Ein persönliches Projekt mit dem Ziel, die neuesten Technologien von heute einzusetzen, um komplexe Zusammenhänge der Mathematik greifbar zu machen.
                </p>
                <p className="text-gray-400 leading-relaxed">
                    Als ehemaliger Hilfsassistent für <span className="text-math-orange">Netzwerke und Schaltungen 1</span> und <Link href="/Kurse/Analysis_1" className="text-math-blue hover:text-math-blue/80 hover:underline transition-all">Analysis 1</Link> (betreut: 100+ Studierende) weiß ich: Klick macht es erst, wenn man die Intuition sieht. Deshalb setze ich auf computergenerierte Animationen (Manim) und direktes visuelles Feedback durch Latex Plots.
                </p>
                <p className="text-gray-400 leading-relaxed">
                    Ab Frühling 2026 unterrichte ich als TA für Signals & Systems II. Privat bin ich oft im Gym, beim Schwimmen oder höre Hörbücher bei langen Spaziergängen.
                </p>
            </div>
         </div>
      </div>


      {/* --- CONSTRUCTION DISCLAIMER --- */}
      <div className="w-full max-w-2xl mx-auto mb-12 text-center">
        <div className="p-4 rounded-lg border border-white/5 text-gray-300 text-xs font-mono leading-relaxed">
           Diese Website ist noch am Bauen. Features werden schrittweise veröffentlicht.
           <br/>
           Vorschläge und Feedback sind jederzeit willkommen – nutze dazu gerne das <Link href="/Kontakt" className="text-gray-400 hover:text-math-blue underline decoration-gray-700 underline-offset-4 transition-colors">Kontaktformular</Link>.
        </div>
      </div>

    </main>
  );
}