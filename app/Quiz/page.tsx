"use client";

import Link from "next/link";

export default function QuizPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-32 p-6 relative z-10">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-math-blue/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-math-purple/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Wähle ein Fach
        </h1>
        <p className="text-gray-400 mb-12 text-lg">
          Starte ein Quiz, um dein Wissen zu testen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Analysis 1 */}
          <Link href="/Quiz/Analysis_1" className="group relative">
            <div className="absolute inset-0 bg-linear-to-br from-math-blue/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-surface border border-white/20 rounded-2xl p-8 hover:border-math-blue/50 transition-all duration-300 h-full flex flex-col items-center gap-6 group-hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-math-blue/10 flex items-center justify-center text-math-blue group-hover:scale-110 transition-transform duration-300">
                {/* Integral Icon */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 19a2 2 0 0 0 2 2c2 0 2-2 2-4V7c0-2 0-4 2-4 2 0 2 2 2 4" />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-math-blue transition-colors">Analysis 1</h2>
                <span className="text-xs text-gray-500 font-mono border border-gray-700 rounded px-2 py-0.5">MATHEMATIK</span>
              </div>
            </div>
          </Link>

          {/* Signals and Systems 2 - COMING SOON */}
          <div className="group relative cursor-not-allowed opacity-80">
             <div className="relative bg-surface/60 border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center gap-6">
                <div className="absolute top-4 right-4 px-2 py-0.5 rounded bg-linear-to-r from-math-blue/50 to-math-green/50 text-[10px] text-white font-bold font-mono border border-white/20 shadow-lg shadow-black/20">
                    COMING SOON
                </div>
                <div className="w-16 h-16 rounded-full bg-math-purple/5 flex items-center justify-center text-math-purple/50">
                  {/* Robot Arm Icon (Inline SVG) */}
                  <svg className="w-8 h-8" fill="currentColor" stroke="none" viewBox="0 0 17.647 17.647">
                    <g>
                        <circle cx="2.648" cy="7.546" r="1.11"/>
                        <path d="M5.296,7.546c0-1.46-1.188-2.648-2.648-2.648C1.189,4.898,0,6.086,0,7.546s1.188,2.648,2.648,2.648 C4.108,10.194,5.296,9.006,5.296,7.546z M2.648,9.567c-1.114,0-2.021-0.906-2.021-2.021s0.907-2.021,2.021-2.021 c1.115,0,2.021,0.906,2.021,2.021S3.762,9.567,2.648,9.567z"/>
                        <path d="M5.655,9.221C5.527,9.576,5.324,9.91,5.041,10.194c-0.306,0.305-0.668,0.516-1.052,0.641 l2.896,2.898h-0.56v2.035h5.435v-2.035h-1.596L5.655,9.221z"/>
                        <path d="M17.572,4.686c-0.104-0.104-0.271-0.107-0.376-0.004l-2.418,2.364l-1.78-0.934l-0.467-2.034 l1.192-1.618l3.206,1.073c0.049,0.016,0.099,0.018,0.146,0.007c0.087-0.02,0.162-0.083,0.191-0.175 c0.049-0.139-0.027-0.291-0.166-0.337l-3.391-1.135c-0.11-0.038-0.23,0.001-0.298,0.094l-1.085,1.47l-0.895,0.205l0.126,0.548 L5.294,5.648c0.232,0.297,0.407,0.646,0.497,1.038c0.096,0.42,0.085,0.839-0.014,1.232l6.298-1.447l0.126,0.548L13.154,6.8 l-0.002-0.004L14.7,7.609c0.059,0.03,0.124,0.038,0.184,0.023c0.047-0.011,0.092-0.034,0.126-0.069l2.556-2.501 C17.672,4.96,17.674,4.791,17.572,4.686z"/>
                    </g>
                  </svg>
                </div>
                <div className="text-center">
                   <h2 className="text-xl font-bold text-gray-300 mb-2">Signals and Systems 2</h2>
                  <span className="text-xs text-gray-600 font-mono border border-gray-800 rounded px-2 py-0.5">SYSTEMTHEORIE</span>
                </div>
             </div>
          </div>

          {/* Netzwerke und Schaltungen I - COMING SOON */}
          <div className="group relative cursor-not-allowed opacity-80">
             <div className="relative bg-surface/60 border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center gap-6">
                <div className="absolute top-4 right-4 px-2 py-0.5 rounded bg-linear-to-r from-math-blue/50 to-math-green/50 text-[10px] text-white font-bold font-mono border border-white/20 shadow-lg shadow-black/20">
                    COMING SOON
                </div>
                <div className="w-16 h-16 rounded-full bg-math-orange/5 flex items-center justify-center text-math-orange/50">
                  {/* Lightning Icon */}
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-center">
                   <h2 className="text-xl font-bold text-gray-300 mb-2">Netzwerke und Schaltungen I</h2>
                  <span className="text-xs text-gray-600 font-mono border border-gray-800 rounded px-2 py-0.5">ELEKTROTECHNIK</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}
