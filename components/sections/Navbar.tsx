"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#services" },
    { name: "Galería", href: "#gallery" },
    { name: "Agendar Cita", href: "#booking" },
    { name: "Ubicación", href: "#ubicacion" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled ? "bg-white/95 backdrop-blur-md py-4 border-b border-gold/20 shadow-lg" : "py-8"
        }`}
      >
        <div className="flex justify-between items-center px-8 md:px-16 w-full max-w-screen-2xl mx-auto">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Expressive"
                width={200}
                height={50}
                className={`h-10 md:h-12 w-auto object-contain transition-all duration-500 ${
                  isScrolled ? "brightness-0" : "grayscale brightness-0"
                } hover:grayscale-0 hover:brightness-100`}
              />
            </Link>
          </div>

          <div className="hidden md:flex gap-10 font-montserrat tracking-[0.2em] text-[10px] uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black hover:text-gold transition-colors duration-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-black">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-10 right-10 text-black"
        >
          <X size={40} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-playfair text-3xl uppercase tracking-widest text-black hover:text-gold transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
}
