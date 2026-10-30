import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Cormorant_Garamond, Cinzel_Decorative, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

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
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [
    "consultorio estético",
    "consultorio estético Arequipa",
    "estética facial y corporal",
    "centro de estética Cayma",
    "botox Arequipa",
    "lipopapada enzimática",
    "plasma rico en plaquetas",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: "/foto1.jpg", alt: "Expressive, consultorio estético en Arequipa" }],
  },
  robots: { index: true, follow: true },
  // Search Console: www.esteticaexpressive.com y sitio-web-expressive.vercel.app
  verification: {
    google: ["2eroeMLykMl2oAYrdSMpYSjFRcNaET0xnpdWJWWI6aU", "_4nViKxV2-WYcC2eJfKMiDPOziWBNLI8PnF6027vwXs"],
  },
};

const services = [
  "Reducción de Medidas",
  "Aumento de Glúteos",
  "Lipopapada Enzimática",
  "Botox",
  "Plasma Rico en Plaquetas",
  "Tratamiento Post-Lipo",
  "Vitamina C IV",
  "Limpieza Facial",
  "Alopecia",
];

// Datos estructurados para búsquedas locales (Google Maps / "cerca de mí")
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${site.url}/#negocio`,
  name: site.name,
  alternateName: "Expressive Consultorio Estético",
  description: site.description,
  url: site.url,
  image: `${site.url}/foto1.jpg`,
  logo: `${site.url}/logo.png`,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: `${site.address.district}, ${site.address.city}`,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: { "@type": "City", name: "Arequipa" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tratamientos de estética facial y corporal",
    itemListElement: services.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} ${cormorant.variable} ${cinzel.variable} ${pinyon.variable} font-body antialiased selection:bg-gold selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
