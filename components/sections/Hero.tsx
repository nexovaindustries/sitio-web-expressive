"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black px-6">

      {/* Shader animado de fondo */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#1A0A00", "#3B2000", "#0D0D0D", "#2A1500", "#000000"]}
        speed={0.15}
        distortion={0.4}
        swirl={0.1}
      />

      {/* Overlay oscuro para asegurar legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Geometría dorada encima del shader */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">

        {/* Anillo exterior */}
        <div className="absolute -top-[18%] -right-[14%] w-[90vw] h-[90vw] border border-[#D4AF37]/[0.10] rounded-full animate-[spin_100s_linear_infinite]" />

        {/* Anillo medio — giro inverso */}
        <div className="absolute -bottom-[22%] -left-[12%] w-[68vw] h-[68vw] border border-[#D4AF37]/[0.12] rounded-full animate-[spin_75s_linear_infinite_reverse]" />

        {/* Anillo interior centrado */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32vw] h-[32vw] border border-[#D4AF37]/[0.08] rounded-full" />

        {/* Diamante de fondo */}
        <div
          className="absolute top-1/2 left-1/2 opacity-[0.06]"
          style={{
            width: "min(600px, 80vw)",
            height: "min(600px, 80vw)",
            border: "1px solid #D4AF37",
            transform: "translate(-50%, -50%) rotate(45deg)",
          }}
        />

        {/* Línea diagonal */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="#D4AF37" strokeWidth="1.2" />
        </svg>

        {/* Línea horizontal superior */}
        <div className="absolute top-[17%] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

        {/* Línea horizontal inferior */}
        <div className="absolute bottom-[13%] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

        {/* Ornamentos de esquina */}
        <div className="absolute top-10 left-10 md:top-14 md:left-16">
          <div className="w-10 h-px bg-[#D4AF37]/60" />
          <div className="w-px h-10 bg-[#D4AF37]/60" />
        </div>
        <div className="absolute top-10 right-10 md:top-14 md:right-16 flex flex-col items-end">
          <div className="w-10 h-px bg-[#D4AF37]/60" />
          <div className="w-px h-10 bg-[#D4AF37]/60 self-end" />
        </div>
        <div className="absolute bottom-10 left-10 md:bottom-14 md:left-16 flex flex-col-reverse">
          <div className="w-10 h-px bg-[#D4AF37]/60" />
          <div className="w-px h-10 bg-[#D4AF37]/60" />
        </div>
        <div className="absolute bottom-10 right-10 md:bottom-14 md:right-16 flex flex-col-reverse items-end">
          <div className="w-10 h-px bg-[#D4AF37]/60" />
          <div className="w-px h-10 bg-[#D4AF37]/60 self-end" />
        </div>

        {/* Líneas verticales laterales */}
        <div className="absolute top-1/2 left-10 md:left-16 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-[#D4AF37]/70" />
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />
        </div>
        <div className="absolute top-1/2 right-10 md:right-16 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-[#D4AF37]/70" />
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-5xl mx-auto text-center relative z-10 py-24 md:py-32">

        <div className="reveal mb-8">
          <div className="inline-flex items-center gap-4">
            <div className="w-8 h-px bg-[#D4AF37]/70" />
            <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-semibold">
              Belleza & Especialización
            </span>
            <div className="w-8 h-px bg-[#D4AF37]/70" />
          </div>
        </div>

        <h1 className="font-playfair text-5xl sm:text-6xl md:text-[8rem] leading-[1] tracking-[-0.02em] text-white mb-6">
          <span className="block overflow-hidden pb-4">
            <span className="block reveal">Expressive</span>
          </span>
        </h1>

        <h2 className="font-playfair text-2xl md:text-4xl italic overflow-hidden mb-12">
          <span className="block reveal text-gradient-gold pb-2" style={{ animationDelay: "0.2s" }}>
            Estética Facial & Corporal
          </span>
        </h2>

        <p
          className="reveal font-montserrat text-sm md:text-base text-white/60 leading-[1.8] max-w-xl mx-auto mb-14"
          style={{ animationDelay: "0.4s" }}
        >
          Descubre el equilibrio perfecto entre ciencia avanzada y estética holística.
          En Expressive, cada tratamiento es un ritual diseñado para elevar tu esencia natural.
        </p>

        <div className="reveal flex flex-col md:flex-row items-center justify-center gap-6" style={{ animationDelay: "0.6s" }}>
          <a
            href="#services"
            className="group relative px-10 py-5 bg-[#D4AF37] text-black font-montserrat text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 hover:bg-white"
          >
            <span className="relative z-10">Explorar Rituales</span>
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
          </a>
          <a
            href="#booking"
            className="relative z-10 font-montserrat text-[10px] uppercase tracking-[0.3em] text-white/70 border-b border-white/30 pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
          >
            Reservar Cita
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
          <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
        </div>
      </div>
    </section>
  );
}
