"use client";

import Link from "next/link";
import { useAdmin } from "../context/AdminContext";

export default function Footer() {
  const { login, logout, isAdmin } = useAdmin();
  return (
    <div className="w-full flex justify-center">
      <footer className="w-full max-w-6xl mt-12 py-8 border-t border-surface-light flex justify-between items-center text-gray-400 text-sm font-mono px-6 md:px-12">
         <div>
            Nullset // 2025
         </div>
         <div className="flex gap-4 items-center">
             <Link href="/Kontakt" className="hover:text-math-blue transition-colors">KONTAKT</Link>
             <a href="https://www.linkedin.com/in/cezar-panaitescu-5007932a7/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-colors">LINKEDIN</a>
             <button onClick={isAdmin ? logout : login} className={`hover:text-white transition-colors text-xs ${isAdmin ? 'text-green-500 font-bold' : 'opacity-20'}`}>
                {isAdmin ? 'ADM' : 'Adm.'}
             </button>
         </div>
      </footer>
    </div>
  );
}
