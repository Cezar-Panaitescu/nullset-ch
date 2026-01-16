
export default function Footer() {
  return (
    <div className="w-full flex justify-center">
      <footer className="w-full max-w-6xl mt-12 py-8 border-t border-surface-light flex justify-between items-center text-gray-600 text-sm font-mono px-6 md:px-12">
         <div>
            NULLSET // 2025
         </div>
         <div className="flex gap-4">
             <a href="mailto:cpanaitescu@ethz.ch" className="hover:text-math-blue transition-colors">KONTAKT</a>
             <a href="#" className="hover:text-math-blue transition-colors">GITHUB</a>
         </div>
      </footer>
    </div>
  );
}
