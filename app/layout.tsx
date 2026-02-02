import type { Metadata } from "next";
// 1. Import Inter and STIX Two Text
import { Inter, STIX_Two_Text, JetBrains_Mono } from "next/font/google";
import "katex/dist/katex.min.css"; // Import KaTeX CSS globally
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AdminProvider } from "./context/AdminContext";

// 2. Configure Inter (The UI/Body)
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// 3. Configure STIX Two Text (The Math/Serif)
const stixTwoText = STIX_Two_Text({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "variable", // STIX Two has variable weights
});

// 4. Configure JetBrains Mono (The Code)
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nullset",
  description: "The Mathematical Void",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${stixTwoText.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <AdminProvider>
            <Navbar />
            {children}
            <Footer />
        </AdminProvider>
      </body>
    </html>
  );
}