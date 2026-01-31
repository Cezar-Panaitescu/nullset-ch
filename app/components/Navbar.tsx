"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "KONTAKT", href: "/Kontakt" },
    { name: "KURSE", href: "/Kurse" },

  ];

  return (
    // UPDATED: bg-white/[0.02] creates the glass tint. border-white/10 makes the edge visible.
    <div className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center text-xs font-mono text-gray-400 bg-white/2 backdrop-blur-md border-b border-white/10 z-50 transition-all duration-300 hover:bg-white/4">
      
      {/* --- LOGO SECTION --- */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
           <img 
             src="/images/neon-icon.png" 
             alt="Nullset Logo" 
             className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110" 
           />
           {/* Added cyan-400 hover to match your headline style */}
           <span className="text-white font-bold tracking-wider group-hover:text-cyan-400 transition-colors">Nullset</span>
        </Link>
      </div>

      {/* --- NAVIGATION LINKS --- */}
      <nav className="flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name} 
              href={link.href}
              className={`transition-colors tracking-widest relative group ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              {link.name}
              {/* Added a subtle cyan underline animation on hover */}
              <span className={`absolute -bottom-1 left-0 h-px bg-cyan-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>
          );
        })}
        
        {/* Separator */}
        <div className="h-4 w-px bg-white/10 hidden sm:block"></div>

        {/* 1:1 Session Button - Prominent Gradient Style */}
        <Link 
          href="/Session" 
          className="hidden sm:flex relative group items-center justify-center px-5 py-2 rounded-full bg-linear-to-r from-math-blue/80 to-math-green/80 hover:from-math-blue hover:to-math-green text-white font-bold tracking-wide text-xs shadow-lg shadow-math-blue/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-math-blue/40 hover:brightness-110"
        >
          Session buchen
        </Link>
      </nav>
    </div>
  );
}