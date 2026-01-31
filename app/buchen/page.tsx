"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Link from "next/link";

// Maps parameters to specific Calendly URLs
const CALENDLY_URLS: Record<string, string> = {
  "1-1": "https://calendly.com/cezar-panaitescu71/1-1-coaching",
  "prufungsvorbereitung": "https://calendly.com/cezar-panaitescu71/prufungsvorbereitung",
  "gruppen-1": "https://calendly.com/cezar-panaitescu71/gruppen-session-1-stunde",
  "gruppen-2": "https://calendly.com/cezar-panaitescu71/gruppen-session-2-stunden"
};

function BookingContent() {
  const searchParams = useSearchParams();
  const sessionType = searchParams.get("session");
  const calendlyUrl = sessionType ? CALENDLY_URLS[sessionType] : null;
  const [isLoading, setIsLoading] = useState(true);

  if (!calendlyUrl) {
    return (
       <div className="flex flex-col items-center justify-center min-h-[50vh] text-center pt-24">
         <h2 className="text-xl font-bold text-white mb-4">Keine Session ausgewählt</h2>
         <Link href="/Session" className="text-cyan-400 hover:underline">Zurück zur Auswahl</Link>
       </div>
    );
  }

  const fullCalendlyUrl = `${calendlyUrl}?background_color=050505&text_color=ffffff&primary_color=00A0E0`;

  return (
    <div className="w-full h-full min-h-screen pt-24 pb-12 px-4 flex flex-col items-center">
      {/* Back Link */}
      <div className="w-full max-w-4xl mb-6 flex justify-start">
        <Link 
          href="/Session" 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-mono"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          ZURÜCK
        </Link>
      </div>

      {/* Calendly Widget Container */}
      <div className="w-full max-w-[1200px] h-[1000px] relative">
        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black text-center">
            <div className="w-12 h-12 border-2 border-surface-light border-t-math-blue rounded-full animate-spin mb-6"></div>
            <div className="text-white font-bold text-lg mb-2">Kalender wird geladen</div>
            <div className="text-gray-500 text-sm">
              Dauert zu lange?{' '}
              <a 
                href={calendlyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-math-blue hover:underline"
              >
                Direkten Link verwenden
              </a>
            </div>
          </div>
        )}

        {/* Iframe */}
        <iframe
          src={fullCalendlyUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Calendly Booking"
          style={{ border: 'none', minWidth: '320px' }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Suspense fallback={<div className="text-white text-center pt-32">Laden...</div>}>
        <BookingContent />
      </Suspense>
    </main>
  );
}