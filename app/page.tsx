import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import BookingSystem from "@/components/sections/BookingSystem";
import Gallery, { Location } from "@/components/sections/Gallery";
import Preloader, { CustomCursor } from "@/components/sections/Preloader";
import Footer from "@/components/sections/Footer";

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

      <Footer />
    </main>
  );
}
