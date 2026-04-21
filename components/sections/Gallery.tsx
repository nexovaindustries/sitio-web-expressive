"use client";

import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/img1.jpg", alt: "Tratamiento Facial", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
    { src: "/img2.jpg", alt: "Estética Corporal", colSpan: "", rowSpan: "" },
    { src: "/img3.jpg", alt: "Bienestar", colSpan: "", rowSpan: "" },
    { src: "/img4.jpg", alt: "Cuidado de Piel", colSpan: "md:col-span-2", rowSpan: "" },
  ];

  return (
    <section className="py-32 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="mb-20 text-center">
          <span className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-gold font-semibold mb-4 block">Visualización</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-black tracking-tight">Viviendo la Experiencia</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden group rounded-2xl aspect-square ${img.colSpan} ${img.rowSpan} reveal`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-montserrat text-[10px] uppercase tracking-[0.3em] border border-white/30 px-6 py-2">Ver Detalle</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section className="py-32 bg-[#FDFDFD]" id="ubicacion">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 reveal">
          <span className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-gold font-semibold mb-4 block">Encuéntranos</span>
          <h2 className="font-playfair text-4xl text-black mb-8">Nuestra Ubicación</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-gold">location_on</span>
              <div>
                <p className="font-montserrat text-sm font-bold">Arequipa, Cayma</p>
                <p className="font-montserrat text-sm text-gray-500">Pasaje Santa Cruz 205</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-gold">call</span>
              <div>
                <p className="font-montserrat text-sm font-bold">Teléfono de Atención</p>
                <p className="font-montserrat text-sm text-gray-500">951 108 796</p>
              </div>
            </div>
          </div>
          <a 
             href="https://www.google.com/maps/search/?api=1&query=Pasaje+Santa+Cruz+205,+Cayma,+Arequipa" 
             target="_blank"
             className="inline-block mt-10 px-8 py-4 border border-gold text-gold font-montserrat text-[10px] uppercase tracking-widest hover:bg-gold hover:text-white transition-all"
          >
            Abrir en Google Maps
          </a>
        </div>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Pasaje+Santa+Cruz+205,+Cayma,+Arequipa"
          target="_blank"
          className="flex-1 w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl relative reveal-right hover:scale-[1.02] transition-transform duration-500 block group"
        >
          <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-10 pointer-events-none">
             <span className="bg-white text-black px-6 py-2 rounded-full font-montserrat text-[10px] uppercase tracking-widest shadow-xl pointer-events-none">Abrir en Google Maps</span>
          </div>
          <iframe 
            src="https://maps.google.com/maps?q=Pasaje%20Santa%20Cruz%20205,%20Cayma,%20Arequipa&t=&z=17&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, pointerEvents: "none" }} 
            allowFullScreen 
            loading="lazy" 
          ></iframe>
        </a>
      </div>
    </section>
  );
}
