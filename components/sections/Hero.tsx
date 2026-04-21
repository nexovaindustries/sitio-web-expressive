"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-white px-6">
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        {/* Soft, luxury ambient light with slow floating animations */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FCF6BA]/30 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#BF953F]/20 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 animate-float-delayed"></div>
        
        {/* Elegant Animated Rings */}
        <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] border-[1px] border-gold/10 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] border-[1px] border-gold/20 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none"></div>

        {/* Minimalist Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>
      </div>

      
      <div className="max-w-5xl mx-auto text-center relative z-10 py-32">
        <div className="reveal mb-8">
          <span className="font-montserrat text-[11px] uppercase tracking-[0.4em] text-gold font-semibold">Belleza & Especialización</span>
        </div>
        
        <h1 className="font-playfair text-6xl md:text-[8rem] leading-[1] tracking-[-0.02em] text-black mb-6">
          <span className="block overflow-hidden pb-4">
            <span className="block reveal">Expressive</span>
          </span>
        </h1>
        <h2 className="font-playfair text-2xl md:text-4xl italic overflow-hidden mb-12">
          <span className="block reveal text-gradient-gold shadow-sm pb-2" style={{ animationDelay: "0.2s" }}>Estética Facial & Corporal</span>
        </h2>
        
        <p className="reveal font-montserrat text-sm md:text-base text-gray-500 leading-[1.8] max-w-xl mx-auto mb-12" style={{ animationDelay: "0.4s" }}>
          Descubre el equilibrio perfecto entre ciencia avanzada y estética holística. En Expressive, cada tratamiento es un ritual diseñado para elevar tu esencia natural.
        </p>
        
        <div className="reveal flex flex-col md:flex-row items-center justify-center gap-6" style={{ animationDelay: "0.6s" }}>
          <a 
            href="#services" 
            className="group relative px-10 py-5 bg-black text-white font-montserrat text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 hover:bg-gold"
          >
            <span className="relative z-10">Explorar Rituales</span>
          </a>
          <a 
            href="#booking" 
            className="relative z-10 font-montserrat text-[10px] uppercase tracking-[0.3em] text-black border-b border-black pb-1 hover:text-gold hover:border-gold transition-all duration-300"
          >
            Reservar Cita
          </a>
        </div>
      </div>

      {/* Floating corner ornaments */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden lg:block opacity-30">
        <div className="w-[1px] h-32 bg-gold"></div>
      </div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block opacity-30">
        <div className="w-[1px] h-32 bg-gold"></div>
      </div>
    </section>
  );
}
