import { InlineMath } from 'react-katex';
import Link from "next/link";



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
         <div className="group p-6 rounded-xl bg-surface/30 border border-surface-light hover:border-math-blue/50 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 mb-4 bg-math-blue/10 rounded-lg flex items-center justify-center text-math-blue border border-math-blue/20">
               {/* Icon: Eye/Graph */}
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-math-blue transition-colors">Visuelle Erklärungen</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
               Komplexe Konzepte werden durch Plots und <span className="text-white font-mono text-xs">MANIM</span>-Videos animiert. Siehe Mathe in Bewegung.
            </p>
         </div>

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

        <div className="relative group rounded-2xl border border-surface-light bg-surface overflow-hidden">
           {/* Background Glow */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-math-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

           <div className="flex flex-col md:flex-row">
              {/* Left: Content */}
              <div className="p-8 md:p-12 md:w-3/5 z-10 flex flex-col justify-between h-full">
                 <div>
                    <div className="inline-flex items-center gap-2 mb-4">
                       <span className="px-2 py-1 rounded bg-math-blue/10 text-math-blue text-xs font-mono border border-math-blue/20">Aktuell</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                       Analysis I
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                       Der Einstieg in die höhere Mathematik. Folgen, Reihen, Differential- und Integralrechnung.
                    </p>
                    
                    <div className="bg-black/40 border border-white/5 rounded p-4 mb-8">
                       <div className="text-xs font-mono text-math-green mb-1">STATUS-BERICHT</div>
                       <div className="text-sm text-gray-300">
                          "Serie 9 Lösungen sind online. Neues Manim-Video zur Taylor-Entwicklung."
                       </div>
                    </div>
                 </div>

                 <div className="flex flex-wrap gap-4">
                    {/* OPTION A: Primary Action -> Links to the Analysis Timeline Page */}
                    <Link 
                        href="/Analysis_1" 
                        className="px-6 py-3 bg-math-blue text-black font-bold rounded hover:brightness-130 transition-all duration-200 ease-in-out inline-flex items-center justify-center"
                    >
                        KURS ÖFFNEN
                    </Link>

                    {/* OPTION B: Quiz Action -> Remains a button for now (or link to /quiz) */}
                    <button className="px-6 py-3 border border-surface-light text-white font-bold rounded hover:bg-math-magenta/20 hover:border-math-magenta transition-all duration-300 ease-in-out flex items-center gap-2">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                       QUIZ STARTEN
                    </button>
                 </div>
              </div>

              {/* Right: Visual Abstract - Epsilon Delta */}
              <div className="md:w-2/5 min-h-[300px] bg-black border-l border-surface-light flex items-center justify-center relative overflow-hidden group-hover:border-math-blue/50 transition-colors">
                 
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
                       {/* Area Fill */}
                       <rect x="25" y="110" width="280" height="40" className="fill-current opacity-10" />
                       {/* Lines */}
                       <line x1="25" y1="110" x2="305" y2="110" stroke="currentColor" strokeWidth="1" />
                       <line x1="25" y1="150" x2="305" y2="150" stroke="currentColor" strokeWidth="1" />
                       {/* Labels */}
                       <foreignObject x="265" y="90" width="40" height="20">
                          <div className="text-ath-magenta text-[10px] bg-black px-0.5 rounded">
                             <InlineMath math="L+\varepsilon" />
                          </div>
                       </foreignObject>
                       <foreignObject x="265" y="152" width="40" height="20">
                          <div className="text-math-magenta text-[10px] bg-black px-0.5 rounded">
                             <InlineMath math="L-\varepsilon" />
                          </div>
                       </foreignObject>
                       
                       {/* L Label on Axis */}
                       <foreignObject x="20" y="122" width="20" height="20">
                          <div className="text-math-magenta text-[10px] text-right bg-black px-0.5 rounded">
                             <InlineMath math="L" />
                          </div>
                       </foreignObject>
                       {/* L Line Tick */}
                       <line x1="38" y1="130" x2="42" y2="130" stroke="currentColor" strokeWidth="1" />
                    </g>

                    {/* --- Delta Interval (Green) --- */}
                    <g className="text-math-green">
                       {/* Dashed Lines */}
                       <line x1="92" y1="230" x2="92" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
                       <line x1="180" y1="230" x2="180" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
                       {/* Interval Bar */}
                       <line x1="92" y1="225" x2="180" y2="225" stroke="currentColor" strokeWidth="1" />
                       <line x1="92" y1="222" x2="92" y2="228" stroke="currentColor" strokeWidth="1" />
                       <line x1="180" y1="222" x2="180" y2="228" stroke="currentColor" strokeWidth="1" />
                       {/* Label */}
                       <foreignObject x="130" y="230" width="20" height="20">
                           <div className="text-math-green text-[12px] flex justify-center bg-black px-0.5 rounded">
                              <InlineMath math="\delta" />
                           </div>
                       </foreignObject>
                       <foreignObject x="126" y="190" width="20" height="20">
                           <div className="text-gray-400 text-[10px] flex justify-center bg-black px-0.5 rounded">
                              <InlineMath math="x_0" />
                           </div>
                       </foreignObject>
                    </g>

                    {/* --- Curve (Blue) --- */}
                    {/* Approximated Cubic Path through calculated points 
                        x0 (136, 130)
                        Left part: from x=-0.2 to x=1.18
                        Right part: from x=1.22 to x=3.2
                    */}
                    <path d="M 25 210 Q 80 170 134 132" stroke="var(--color-math-blue)" strokeWidth="2" fill="none" />
                    <path d="M 138 128 Q 220 70 290 60" stroke="var(--color-math-blue)" strokeWidth="2" fill="none" />

                    {/* Hole at (x0, L) */}
                    <circle cx="136" cy="130" r="3" fill="black" stroke="var(--color-math-blue)" strokeWidth="1.5" />
                    <foreignObject x="155" y="125" width="50" height="20">
                        <div className="text-math-blue text-[10px] bg-black px-0.5 rounded">
                           <InlineMath math="(x_0, L)" />
                        </div>
                    </foreignObject>

                    {/* --- f(x0) Point (Red) --- */}
                    {/* Offset y by ~ -70px (visual approximation of +0.9 in user coords) */}
                    <circle cx="136" cy="60" r="3" className="fill-math-red" />
                    <foreignObject x="105" y="47" width="30" height="20">
                        <div className="text-math-red text-[10px] text-right bg-black px-0.5 rounded">
                           <InlineMath math="f(x_0)" />
                        </div>
                    </foreignObject>

                 </svg>
              </div>
           </div>
        </div>
      </div>

      {/* --- 5. ABOUT ME SECTION --- */}
      <div className="w-full max-w-6xl mb-24">
         <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-surface-light grow"></div>
             <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Über Mich</span>
             <div className="h-px bg-surface-light grow"></div>
         </div>

         <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-surface/30 p-8 rounded-2xl border border-surface-light hover:border-math-blue/30 transition-colors">
            {/* Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500">
               <img src="/images/Me.jpeg" alt="Cezar Panaitescu" className="w-full h-full object-cover" />
               <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Text */}
            <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Hi, ich bin Cezar.</h3>
                <p className="text-gray-400 leading-relaxed">
                    Ich studiere Elektrotechnik (5. Semester) an der ETH. Weil Mathe in Vorlesungen oft abstrakt bleibt, habe ich <span className="text-white font-semibold">Nullset</span> gestartet: Ein persönliches Projekt mit dem Ziel, die neuesten Technologien von heute einzusetzen, um komplexe Zusammenhänge der Mathematik greifbar zu machen.
                </p>
                <p className="text-gray-400 leading-relaxed">
                    Als ehemaliger Hilfsassistent für <span className="text-math-orange">Netzwerke und Schaltungen 1</span> und <Link href="/Analysis_1" className="text-math-blue hover:text-math-blue/80 hover:underline transition-all">Analysis 1</Link> (betreut: 100+ Studierende) weiß ich: Klick macht es erst, wenn man die Intuition sieht. Deshalb setze ich auf computergenerierte Animationen (Manim) und direktes visuelles Feedback durch Latex Plots.
                </p>
                <p className="text-gray-400 leading-relaxed">
                    Ab Frühling 2026 unterrichte ich als TA für Signale & Systeme II. Privat bin ich oft im Gym, beim Schwimmen oder höre Hörbücher bei langen Spaziergängen.
                </p>
            </div>
         </div>
      </div>


      {/* --- CONSTRUCTION DISCLAIMER --- */}
      <div className="w-full max-w-2xl mx-auto mb-12 text-center">
        <div className="p-4 rounded-lg border border-white/5 text-gray-300 text-xs font-mono leading-relaxed">
           Diese Website ist noch am Bauen. Features werden schrittweise veröffentlicht.
           <br/>
           Vorschläge und Feedback sind jederzeit willkommen an <a href="mailto:cpanaitescu@ethz.ch" className="text-gray-400 hover:text-math-blue underline decoration-gray-700 underline-offset-4 transition-colors">cpanaitescu@ethz.ch</a>
        </div>
      </div>

    </main>
  );
}