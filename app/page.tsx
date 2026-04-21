import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import BookingSystem from "@/components/sections/BookingSystem";
import Gallery, { Location } from "@/components/sections/Gallery";
import Preloader, { CustomCursor } from "@/components/sections/Preloader";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Preloader />
      <CustomCursor />
      <Navbar />
      
      <Hero />

      {/* Divisor dorado entre secciones */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <Services />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <BookingSystem />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <Gallery />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <Location />

      {/* Footer premium */}
      <footer className="bg-black text-white relative overflow-hidden">

        {/* Fondo geométrico del footer */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(212,175,55,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Línea dorada superior */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)" }}
          />
          {/* Destello diagonal */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" preserveAspectRatio="none">
            <line x1="0" y1="100%" x2="100%" y2="0" stroke="#D4AF37" strokeWidth="1" />
          </svg>
          {/* Anillo decorativo */}
          <div className="absolute -bottom-1/2 -right-1/4 w-[60vw] h-[60vw] border border-[#D4AF37]/[0.05] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-16">

            <div className="md:col-span-2">
              {/* Logo en texto elegante */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#D4AF37]/70" />
                <h3 className="font-playfair text-3xl text-[#D4AF37] uppercase tracking-widest">Expressive</h3>
              </div>
              <p className="font-montserrat text-xs text-gray-500 max-w-xs leading-relaxed mb-8">
                Elevando los estándares de la belleza en Arequipa a través de tecnología avanzada y rituales curados de bienestar.
              </p>
              {/* Línea decorativa dorada */}
              <div className="w-16 h-px bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
            </div>

            <div>
              <h4 className="font-montserrat text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/80 mb-6 font-bold">Navegación</h4>
              <ul className="font-montserrat text-xs space-y-4 text-gray-500">
                <li><a href="#services" className="hover:text-[#D4AF37] transition-colors duration-300">Servicios</a></li>
                <li><a href="#gallery"  className="hover:text-[#D4AF37] transition-colors duration-300">Galería</a></li>
                <li><a href="#booking"  className="hover:text-[#D4AF37] transition-colors duration-300">Reservar Cita</a></li>
                <li><a href="#ubicacion" className="hover:text-[#D4AF37] transition-colors duration-300">Ubicación</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/80 mb-6 font-bold">Contacto</h4>
              <ul className="font-montserrat text-xs space-y-4 text-gray-500">
                <li>Pasaje Santa Cruz 205, Cayma</li>
                <li>951 108 796</li>
                <li>Arequipa, Perú</li>
              </ul>
            </div>
          </div>

          {/* Línea divisora inferior */}
          <div
            className="w-full h-px mb-8"
            style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)" }}
          />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-montserrat text-[9px] uppercase tracking-[0.4em] text-gray-700">
              © {new Date().getFullYear()} Expressive · Estética Facial & Corporal
            </p>
            <div className="flex items-center gap-2 opacity-50">
              <div className="w-4 h-px bg-[#D4AF37]" />
              <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
              <div className="w-4 h-px bg-[#D4AF37]" />
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/51951108796" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-tr from-[#BF953F] to-[#FCF6BA] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] z-[50] hover:scale-110 transition-transform duration-300 group"
      >
        <svg fill="#111" viewBox="0 0 24 24" className="w-8 h-8 group-hover:scale-110 transition-transform shadow-sm">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </main>
  );
}
