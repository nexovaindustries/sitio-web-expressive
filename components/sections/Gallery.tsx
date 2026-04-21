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
    <section className="py-32 bg-white relative overflow-hidden" id="gallery">

      {/* Fondo blanco con geometría dorada */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: "linear-gradient(rgba(212,175,55,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Anillo grande */}
        <div className="absolute -top-[30%] -left-[10%] w-[80vw] h-[80vw] border border-[#D4AF37]/[0.08] rounded-full animate-[spin_120s_linear_infinite]" />
        {/* Línea superior */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)" }}
        />
        {/* Línea inferior */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)" }}
        />
        {/* Ornamentos esquinas */}
        <div className="absolute top-10 left-10 opacity-50">
          <div className="w-8 h-px bg-[#D4AF37]" /><div className="w-px h-8 bg-[#D4AF37]" />
        </div>
        <div className="absolute top-10 right-10 flex flex-col items-end opacity-50">
          <div className="w-8 h-px bg-[#D4AF37]" /><div className="w-px h-8 bg-[#D4AF37] self-end" />
        </div>
        <div className="absolute bottom-10 left-10 flex flex-col-reverse opacity-50">
          <div className="w-8 h-px bg-[#D4AF37]" /><div className="w-px h-8 bg-[#D4AF37]" />
        </div>
        <div className="absolute bottom-10 right-10 flex flex-col-reverse items-end opacity-50">
          <div className="w-8 h-px bg-[#D4AF37]" /><div className="w-px h-8 bg-[#D4AF37] self-end" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#D4AF37]/60" />
            <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-semibold">Visualización</span>
            <div className="w-8 h-px bg-[#D4AF37]/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-black tracking-tight">Viviendo la Experiencia</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden h-64 sm:h-80 md:aspect-square md:h-auto ${img.colSpan} ${img.rowSpan} reveal`}
              style={{
                animationDelay: `${idx * 0.1}s`,
                borderRadius: "16px",
                boxShadow: "0 0 0 1px rgba(212,175,55,0.35), 0 0 20px rgba(212,175,55,0.12), inset 0 0 0 1px rgba(212,175,55,0.15)",
              }}
            >
              {/* Borde dorado degradado superior */}
              <div className="absolute top-0 left-0 right-0 h-px z-10 bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
              {/* Borde dorado degradado inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-px z-10 bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
              {/* Borde dorado degradado izquierdo */}
              <div className="absolute top-0 left-0 bottom-0 w-px z-10 bg-gradient-to-b from-transparent via-[#D4AF37]/70 to-transparent" />
              {/* Borde dorado degradado derecho */}
              <div className="absolute top-0 right-0 bottom-0 w-px z-10 bg-gradient-to-b from-transparent via-[#D4AF37]/70 to-transparent" />
              {/* Ornamento esquina superior izquierda */}
              <div className="absolute top-3 left-3 z-10 opacity-80">
                <div className="w-4 h-px bg-[#D4AF37]" /><div className="w-px h-4 bg-[#D4AF37]" />
              </div>
              {/* Ornamento esquina superior derecha */}
              <div className="absolute top-3 right-3 z-10 flex flex-col items-end opacity-80">
                <div className="w-4 h-px bg-[#D4AF37]" /><div className="w-px h-4 bg-[#D4AF37] self-end" />
              </div>
              {/* Ornamento esquina inferior izquierda */}
              <div className="absolute bottom-3 left-3 z-10 flex flex-col-reverse opacity-80">
                <div className="w-4 h-px bg-[#D4AF37]" /><div className="w-px h-4 bg-[#D4AF37]" />
              </div>
              {/* Ornamento esquina inferior derecha */}
              <div className="absolute bottom-3 right-3 z-10 flex flex-col-reverse items-end opacity-80">
                <div className="w-4 h-px bg-[#D4AF37]" /><div className="w-px h-4 bg-[#D4AF37] self-end" />
              </div>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={idx === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="ubicacion">

      {/* Fondo blanco con detalles geométricos dorados */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 reveal">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#D4AF37]/60" />
            <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-semibold">Encuéntranos</span>
          </div>
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
          className="flex-1 w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl relative reveal-right hover:scale-[1.02] transition-transform duration-500 block group"
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
