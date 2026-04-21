"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Reducción de Medidas",
    desc: "Programa integral para esculpir tu silueta.",
    category: "corporal",
    price: "S/ 500",
    details: "(8 Sesiones)",
  },
  {
    id: 2,
    title: "Aumento de Glúteos",
    desc: "Firmeza y volumen con biotecnología de peptonas.",
    category: "corporal",
    price: "S/ 200",
    details: "(Por Sesión)",
  },
  {
    id: 3,
    title: "Lipopapada Enzimática",
    desc: "Perfilamiento facial avanzado y definición elegante.",
    category: "corporal",
    price: "S/ 250",
    details: "(Por Sesión)",
  },
  {
    id: 4,
    title: "Botox",
    desc: "Elimina arrugas en 3 zonas con resultados naturales.",
    category: "facial",
    price: "S/ 600",
    details: "(Desde 3 zonas)",
  },
  {
    id: 5,
    title: "Plasma Rico en Plaquetas",
    desc: "Bioestimulación cutánea para una piel radiante.",
    category: "facial",
    price: "S/ 100",
    details: "(Por Sesión)",
  },
  {
    id: 6,
    title: "Tratamiento Post-Lipo",
    desc: "Recuperación asistida con drenaje linfático especializado.",
    category: "corporal",
    price: "S/ 500",
    details: "(10 Sesiones)",
  },
  {
    id: 7,
    title: "Vitamina C IV",
    desc: "Refuerzo inmunológico y antioxidante profundo.",
    category: "salud",
    price: "S/ 140",
    details: "(Endovenosa)",
  },
  {
    id: 8,
    title: "Limpieza Facial",
    desc: "Higiene profunda y renovación de tu piel.",
    category: "facial",
    price: "S/ 50",
    details: "(Desde S/ 50)",
  },
  {
    id: 9,
    title: "Alopecia",
    desc: "Tratamiento capilar especializado para frenar la caída.",
    category: "salud",
    price: "S/ 100",
    details: "(Por Sesión)",
  },
];

const categories = ["Todos", "Corporal", "Facial", "Salud", "Rejuvenecimiento"];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredServices = services.filter(
    (s) => activeCategory === "Todos" || s.category === activeCategory.toLowerCase()
  );

  return (
    <section className="py-32 relative z-10" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="mb-20 text-center">
          <span className="font-montserrat text-[10px] uppercase tracking-[0.4em] text-gold font-semibold mb-4 block">Experiencia Curada</span>
          <h2 className="font-playfair text-4xl md:text-6xl text-black tracking-tight mt-6">Nuestros Rituales Estéticos</h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-montserrat text-[10px] uppercase tracking-[0.3em] px-8 py-3 border transition-all duration-400 ${
                activeCategory === cat
                  ? "bg-black text-gold border-black"
                  : "border-gray-200 hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeCategory === "Todos" || activeCategory === "Rejuvenecimiento") && (
            <div className="lg:col-span-2 bg-black p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group overflow-hidden relative reveal">
              <div className="absolute inset-0 bg-gold/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
              <div className="relative z-10 max-w-xl">
                <span className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-gold mb-6 block">Premium Rejuvenation</span>
                <h3 className="font-playfair text-3xl text-white mb-6">Ritual de Juventud</h3>
                <ul className="font-montserrat text-sm text-gray-400 space-y-3">
                  <li className="flex justify-between border-b border-white/10 pb-2"><span>Exosomas</span> <span className="text-gold">S/ 200</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-2"><span>Esperma de Salmón</span> <span className="text-gold">S/ 200</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-2"><span>Vitaminas NCTF 135</span> <span className="text-gold">S/ 200</span></li>
                </ul>
              </div>
              <div className="relative z-10 text-center md:text-right">
                <p className="font-montserrat text-[10px] uppercase tracking-widest text-gray-500 mb-2">Inversión</p>
                <p className="font-playfair text-4xl text-gold">Desde S/ 200</p>
                <a 
                  href="#booking" 
                  onClick={() => window.dispatchEvent(new CustomEvent("selectService", { detail: "Ritual de Juventud (Exosomas)" }))}
                  className="inline-block mt-6 px-8 py-3 bg-gold text-black font-montserrat text-[10px] uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Agendar
                </a>
              </div>
            </div>
          )}

          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-100 p-10 flex flex-col h-full group hover:border-gold/60 transition-all duration-700 reveal"
            >
              <div className="mb-8">
                <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-gold mb-4 block">{service.category}</span>
                <h3 className="font-playfair text-2xl text-black mb-4">{service.title}</h3>
                <p className="font-montserrat text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                <p className="font-montserrat text-[10px] text-gold mt-4 uppercase tracking-widest">{service.details}</p>
              </div>
              <div className="mt-auto border-t border-gray-50 pt-8 flex items-center justify-between">
                <span className="font-playfair text-2xl text-black">{service.price}</span>
                <a 
                  href="#booking" 
                  onClick={() => window.dispatchEvent(new CustomEvent("selectService", { detail: service.title }))}
                  className="text-black hover:text-gold transition-colors"
                >
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
