import Link from "next/link";
import { services } from "@/lib/services";

const faq = [
  {
    q: "¿Dónde está ubicado el consultorio estético Expressive?",
    a: "Estamos en Pasaje Santa Cruz 205, Int. 305, en el distrito de Cayma, Arequipa, a pocos pasos de la Av. Cayma.",
  },
  {
    q: "¿Expressive es un salón de belleza o un consultorio estético?",
    a: "Somos un consultorio y salón de estética especializado en tratamientos faciales y corporales: botox, lipopapada, plasma rico en plaquetas, reducción de medidas y más. No ofrecemos servicios de peluquería.",
  },
  {
    q: "¿Cuánto cuestan los tratamientos?",
    a: "Los precios van desde S/ 50 en limpieza facial hasta S/ 600 en botox de 3 zonas. Cada tratamiento tiene su precio publicado en la sección de servicios.",
  },
  {
    q: "¿Cuál es el horario de atención?",
    a: "Atendemos de lunes a viernes de 9:00 a. m. a 6:00 p. m. y los sábados de 10:00 a. m. a 1:00 p. m.",
  },
  {
    q: "¿Cómo reservo una cita?",
    a: "Puedes agendar en línea desde esta web eligiendo el día y la hora, o escribirnos por WhatsApp al 951 108 796.",
  },
];

// Nombres en minúscula para usarlos dentro de una frase
const labels: Record<string, string> = {
  "reduccion-de-medidas-arequipa": "reducción de medidas",
  "aumento-de-gluteos-arequipa": "aumento de glúteos sin cirugía",
  "lipopapada-enzimatica-arequipa": "lipopapada enzimática",
  "botox-arequipa": "botox",
  "plasma-rico-en-plaquetas-arequipa": "plasma rico en plaquetas (PRP)",
  "tratamiento-post-lipo-arequipa": "tratamiento post-lipo",
  "vitamina-c-endovenosa-arequipa": "vitamina C endovenosa",
  "limpieza-facial-arequipa": "limpieza facial profunda",
  "tratamiento-alopecia-arequipa": "tratamiento para la alopecia",
};

const highlights = [
  { title: "Evaluación personalizada", text: "Cada tratamiento empieza con una evaluación de tu piel y tus objetivos." },
  { title: "Resultados naturales", text: "Buscamos realzar tu belleza sin perder tu expresión." },
  { title: "Ambiente privado", text: "Un espacio cómodo y discreto en Cayma, pensado para ti." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function About() {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="nosotros">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-16 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#D4AF37]/60" />
            <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-semibold">Nosotros</span>
            <div className="w-8 h-px bg-[#D4AF37]/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-black tracking-tight">
            Tu Consultorio Estético en Cayma, Arequipa
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 font-montserrat text-sm md:text-base text-gray-600 leading-[1.9] mb-20">
          <p>
            Expressive es un consultorio estético y salón de estética facial y corporal ubicado en Cayma, Arequipa.
            Combinamos tecnología avanzada con atención cercana para que cada tratamiento se adapte a ti y logres
            resultados naturales.
          </p>
          <p>
            Realizamos{" "}
            {services.map((s, i) => (
              <span key={s.slug}>
                <Link href={`/tratamientos/${s.slug}`} className="text-black underline decoration-[#D4AF37]/50 underline-offset-4 hover:text-[#D4AF37] transition-colors">
                  {labels[s.slug] ?? s.title}
                </Link>
                {i < services.length - 2 ? ", " : i === services.length - 2 ? " y " : ""}
              </span>
            ))}
            . Si buscas un centro de estética en Arequipa donde te expliquen cada paso y te acompañen en todo el
            proceso, te esperamos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {highlights.map((h) => (
            <div key={h.title} className="border border-gray-100 p-8 text-center">
              <div className="w-2 h-2 rotate-45 mx-auto mb-6 bg-[#D4AF37]" />
              <h3 className="font-playfair text-xl text-black mb-3">{h.title}</h3>
              <p className="font-montserrat text-sm text-gray-500 leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>

        <h2 className="font-playfair text-3xl md:text-4xl text-black text-center mb-12">Preguntas frecuentes</h2>
        <div className="max-w-3xl mx-auto divide-y divide-gray-100 border-y border-gray-100">
          {faq.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none font-montserrat text-sm md:text-base font-bold text-black">
                {f.q}
                <span className="text-[#D4AF37] text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 font-montserrat text-sm text-gray-600 leading-[1.8]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
