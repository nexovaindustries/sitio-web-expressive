import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { CustomCursor } from "@/components/sections/Preloader";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const goldGradient = "linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  const title = `${service.heading} | Expressive Consultorio Estético`;
  const path = `/tratamientos/${service.slug}`;
  return {
    title,
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_PE",
      url: path,
      siteName: site.name,
      title,
      description: service.metaDescription,
      images: [{ url: "/foto1.jpg", alt: `${service.title} en Expressive, Arequipa` }],
    },
  };
}

export default async function TreatmentPage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const url = `${site.url}/tratamientos/${service.slug}`;
  const whatsapp = `https://wa.me/51951108796?text=${encodeURIComponent(
    `Hola, quisiera información sobre ${service.title} en Expressive.`
  )}`;
  const others = services.filter((s) => s.slug !== service.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.heading,
      serviceType: service.title,
      description: service.metaDescription,
      url,
      areaServed: { "@type": "City", name: "Arequipa" },
      provider: { "@id": `${site.url}/#negocio` },
      offers: {
        "@type": "Offer",
        price: service.price.replace(/[^\d.]/g, ""),
        priceCurrency: "PEN",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
        { "@type": "ListItem", position: 2, name: "Tratamientos", item: `${site.url}/#services` },
        { "@type": "ListItem", position: 3, name: service.title, item: url },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <CustomCursor />
      <Navbar />

      {/* Encabezado */}
      <section className="bg-black text-white relative overflow-hidden pt-40 pb-24 px-6 md:px-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(212,175,55,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
          <nav className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Inicio</Link>
            <span className="mx-3">/</span>
            <Link href="/#services" className="hover:text-[#D4AF37] transition-colors">Tratamientos</Link>
          </nav>
          <span className="font-montserrat text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[#D4AF37] font-semibold">
            Consultorio Estético en Cayma
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl leading-tight tracking-tight mt-6 mb-8">{service.heading}</h1>
          <p className="font-montserrat text-sm md:text-base text-white/60 leading-[1.8] max-w-2xl mx-auto mb-10">
            {service.desc}
          </p>
          <p className="font-playfair text-4xl text-[#D4AF37] mb-2">{service.price}</p>
          <p className="font-montserrat text-[10px] uppercase tracking-widest text-white/40 mb-12">{service.details}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/#booking"
              className="px-10 py-4 text-black font-montserrat text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
              style={{ background: goldGradient }}
            >
              Agendar cita
            </Link>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-[10px] uppercase tracking-widest text-[#D4AF37] border-b border-[#D4AF37]/50 pb-1 hover:text-white transition-colors"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="bg-white py-24 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-black mb-6">¿En qué consiste?</h2>
          <p className="font-montserrat text-sm md:text-base text-gray-600 leading-[1.9] mb-16">{service.intro}</p>

          <h2 className="font-playfair text-3xl md:text-4xl text-black mb-8">Beneficios</h2>
          <ul className="space-y-4 mb-16">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-4 font-montserrat text-sm md:text-base text-gray-600">
                <span className="mt-2 w-2 h-2 rotate-45 shrink-0" style={{ background: goldGradient }} />
                {b}
              </li>
            ))}
          </ul>

          <h2 className="font-playfair text-3xl md:text-4xl text-black mb-8">Preguntas frecuentes</h2>
          <div className="space-y-8 mb-16">
            {service.faq.map((f) => (
              <div key={f.q} className="border-b border-gray-100 pb-8">
                <h3 className="font-montserrat text-sm md:text-base font-bold text-black mb-3">{f.q}</h3>
                <p className="font-montserrat text-sm text-gray-600 leading-[1.8]">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="bg-black text-white p-10 md:p-12 text-center">
            <h2 className="font-playfair text-2xl md:text-3xl mb-4">Agenda tu evaluación</h2>
            <p className="font-montserrat text-sm text-white/60 leading-relaxed mb-8">
              Pasaje Santa Cruz 205, Int. 305, Cayma, Arequipa
              <br />
              Lunes a viernes: 9:00 a. m. – 6:00 p. m.
              <br />
              Sábados: 10:00 a. m. – 1:00 p. m.
            </p>
            <Link
              href="/#booking"
              className="inline-block px-10 py-4 text-black font-montserrat text-[10px] uppercase tracking-widest hover:brightness-110 transition-all"
              style={{ background: goldGradient }}
            >
              Reservar cita
            </Link>
          </div>
        </div>
      </section>

      {/* Otros tratamientos */}
      <section className="bg-white pb-28 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-16" />
          <h2 className="font-playfair text-3xl text-black text-center mb-12">Otros tratamientos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/tratamientos/${s.slug}`}
                className="border border-gray-100 p-6 hover:border-[#D4AF37]/60 transition-colors"
              >
                <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] block mb-2">{s.category}</span>
                <span className="font-playfair text-lg text-black">{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
