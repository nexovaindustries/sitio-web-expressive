import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Cormorant_Garamond, Cinzel_Decorative, Pinyon_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
});

export const metadata: Metadata = {
  title: "Expressive - Estética Facial & Corporal",
  description: "Tratamientos de estética facial y corporal de alta gama. Belleza curada, esculpida con arte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
        <style>{`* { cursor: none !important; }`}</style>
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} ${cormorant.variable} ${cinzel.variable} ${pinyon.variable} font-body antialiased selection:bg-gold selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
