// Tratamientos: alimentan la grilla de Servicios y las páginas /tratamientos/[slug].
export type Service = {
  id: number;
  slug: string;
  title: string;
  desc: string;
  category: "corporal" | "facial" | "salud";
  price: string;
  details: string;
  // Contenido de la página propia del tratamiento (SEO)
  heading: string;
  metaDescription: string;
  intro: string;
  benefits: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    id: 1,
    slug: "reduccion-de-medidas-arequipa",
    title: "Reducción de Medidas",
    desc: "Programa integral para esculpir tu silueta.",
    category: "corporal",
    price: "S/ 500",
    details: "(8 Sesiones)",
    heading: "Reducción de Medidas en Arequipa",
    metaDescription:
      "Programa de reducción de medidas en Arequipa: 8 sesiones para moldear tu silueta. Consultorio estético Expressive en Cayma. Agenda tu evaluación.",
    intro:
      "Nuestro programa de reducción de medidas combina técnicas corporales no invasivas para ayudarte a moldear la silueta y reducir centímetros en abdomen, cintura, piernas y brazos. Antes de empezar evaluamos tu caso para definir las zonas y el plan de sesiones.",
    benefits: [
      "Programa de 8 sesiones con seguimiento",
      "Tratamiento no invasivo, sin cirugía",
      "Plan personalizado según tus zonas a tratar",
      "Complementa una alimentación saludable y actividad física",
    ],
    faq: [
      { q: "¿Cuántas sesiones necesito?", a: "El programa incluye 8 sesiones. En la evaluación inicial te indicamos la frecuencia recomendada para tu caso." },
      { q: "¿Duele?", a: "Es un tratamiento no invasivo y, en general, bien tolerado. Podrás retomar tus actividades normales el mismo día." },
    ],
  },
  {
    id: 2,
    slug: "aumento-de-gluteos-arequipa",
    title: "Aumento de Glúteos",
    desc: "Firmeza y volumen con biotecnología de peptonas.",
    category: "corporal",
    price: "S/ 200",
    details: "(Por Sesión)",
    heading: "Aumento de Glúteos sin Cirugía en Arequipa",
    metaDescription:
      "Aumento de glúteos sin cirugía en Arequipa con peptonas: más firmeza y volumen. Consultorio estético Expressive en Cayma. Desde S/ 200 por sesión.",
    intro:
      "El aumento de glúteos con biotecnología de peptonas es una alternativa sin cirugía para mejorar la firmeza, el tono y el volumen de la zona. Es un procedimiento ambulatorio que se realiza por sesiones, según el resultado que buscas.",
    benefits: [
      "Sin cirugía ni anestesia general",
      "Mejora la firmeza y el tono del glúteo",
      "Procedimiento ambulatorio por sesiones",
      "Evaluación previa para definir el número de sesiones",
    ],
    faq: [
      { q: "¿Cuántas sesiones se recomiendan?", a: "Depende de cada persona. En la evaluación te recomendamos un plan de sesiones según tus objetivos." },
      { q: "¿Puedo hacer vida normal después?", a: "Sí, es un procedimiento ambulatorio. Te daremos indicaciones de cuidado para los días siguientes." },
    ],
  },
  {
    id: 3,
    slug: "lipopapada-enzimatica-arequipa",
    title: "Lipopapada Enzimática",
    desc: "Perfilamiento facial avanzado y definición elegante.",
    category: "corporal",
    price: "S/ 250",
    details: "(Por Sesión)",
    heading: "Lipopapada Enzimática en Arequipa",
    metaDescription:
      "Lipopapada enzimática sin cirugía en Arequipa: reduce la papada y define el contorno facial. Consultorio estético Expressive en Cayma. S/ 250 por sesión.",
    intro:
      "La lipopapada enzimática ayuda a reducir la grasa localizada bajo el mentón y a definir el contorno de la mandíbula sin cirugía. Se aplica en sesiones cortas y es una de las formas más prácticas de perfilar el rostro.",
    benefits: [
      "Reduce la papada sin cirugía",
      "Define el contorno de la mandíbula y el cuello",
      "Sesiones rápidas, sin hospitalización",
      "Resultados progresivos y naturales",
    ],
    faq: [
      { q: "¿Cuántas sesiones necesito?", a: "Varía según la cantidad de grasa localizada. En la evaluación te indicamos un número estimado de sesiones." },
      { q: "¿Hay inflamación después?", a: "Puede haber una inflamación leve y temporal en la zona. Te damos indicaciones para que la recuperación sea cómoda." },
    ],
  },
  {
    id: 4,
    slug: "botox-arequipa",
    title: "Botox",
    desc: "Elimina arrugas en 3 zonas con resultados naturales.",
    category: "facial",
    price: "S/ 600",
    details: "(Desde 3 zonas)",
    heading: "Botox en Arequipa",
    metaDescription:
      "Botox en Arequipa para suavizar arrugas de frente, entrecejo y patas de gallo con resultados naturales. Consultorio estético Expressive en Cayma. Desde S/ 600.",
    intro:
      "La toxina botulínica (botox) suaviza las arrugas de expresión de la frente, el entrecejo y las patas de gallo, con un resultado natural que respeta tus gestos. Es un procedimiento rápido que se realiza en consultorio.",
    benefits: [
      "Tratamiento de 3 zonas: frente, entrecejo y patas de gallo",
      "Resultados naturales, sin perder expresión",
      "Procedimiento rápido, sin tiempo de recuperación",
      "Previene la formación de arrugas más profundas",
    ],
    faq: [
      { q: "¿Cuándo se ven los resultados?", a: "El efecto empieza a notarse en pocos días y se completa alrededor de las dos semanas." },
      { q: "¿Cuánto dura el efecto?", a: "Suele durar varios meses, según cada persona. Te recomendamos cuándo hacer el retoque." },
    ],
  },
  {
    id: 5,
    slug: "plasma-rico-en-plaquetas-arequipa",
    title: "Plasma Rico en Plaquetas",
    desc: "Bioestimulación cutánea para una piel radiante.",
    category: "facial",
    price: "S/ 100",
    details: "(Por Sesión)",
    heading: "Plasma Rico en Plaquetas (PRP) en Arequipa",
    metaDescription:
      "Plasma rico en plaquetas (PRP) en Arequipa para rejuvenecer y dar luminosidad a la piel. Consultorio estético Expressive en Cayma. S/ 100 por sesión.",
    intro:
      "El plasma rico en plaquetas (PRP) usa factores de crecimiento obtenidos de tu propia sangre para estimular la regeneración de la piel. Mejora la textura, la luminosidad y la firmeza del rostro de forma natural.",
    benefits: [
      "Bioestimulación con tu propio plasma",
      "Mejora la textura y la luminosidad de la piel",
      "Ayuda a suavizar líneas finas",
      "Tratamiento natural y bien tolerado",
    ],
    faq: [
      { q: "¿Cuántas sesiones se recomiendan?", a: "Normalmente se recomienda un ciclo de varias sesiones. Lo definimos en tu evaluación." },
      { q: "¿También sirve para el cabello?", a: "Sí, el PRP también se usa en el tratamiento de la caída del cabello. Consulta nuestro tratamiento para alopecia." },
    ],
  },
  {
    id: 6,
    slug: "tratamiento-post-lipo-arequipa",
    title: "Tratamiento Post-Lipo",
    desc: "Recuperación asistida con drenaje linfático especializado.",
    category: "corporal",
    price: "S/ 500",
    details: "(10 Sesiones)",
    heading: "Tratamiento Post-Lipo y Drenaje Linfático en Arequipa",
    metaDescription:
      "Tratamiento post-lipo en Arequipa: 10 sesiones de drenaje linfático para una mejor recuperación. Consultorio estético Expressive en Cayma.",
    intro:
      "Después de una liposucción o lipoescultura, el drenaje linfático especializado ayuda a reducir la inflamación, prevenir fibrosis y mejorar el resultado final. Acompañamos tu recuperación con un programa de 10 sesiones.",
    benefits: [
      "Programa de 10 sesiones de drenaje linfático",
      "Ayuda a reducir la inflamación y los líquidos",
      "Previene la formación de fibrosis",
      "Mejora el resultado de tu cirugía",
    ],
    faq: [
      { q: "¿Cuándo debo empezar?", a: "Generalmente pocos días después de la cirugía, según la indicación de tu cirujano." },
      { q: "¿Es doloroso?", a: "Es un masaje suave y especializado. Adaptamos la presión a tu etapa de recuperación." },
    ],
  },
  {
    id: 7,
    slug: "vitamina-c-endovenosa-arequipa",
    title: "Vitamina C IV",
    desc: "Refuerzo inmunológico y antioxidante profundo.",
    category: "salud",
    price: "S/ 140",
    details: "(Endovenosa)",
    heading: "Vitamina C Endovenosa en Arequipa",
    metaDescription:
      "Vitamina C endovenosa en Arequipa: refuerzo inmunológico y antioxidante. Consultorio estético Expressive en Cayma. S/ 140 por sesión.",
    intro:
      "La vitamina C endovenosa aporta altas dosis de antioxidante directamente al torrente sanguíneo. Es un aliado para reforzar las defensas, combatir el cansancio y cuidar la piel desde adentro.",
    benefits: [
      "Refuerzo del sistema inmunológico",
      "Potente efecto antioxidante",
      "Ayuda a combatir el cansancio",
      "Contribuye a una piel más luminosa",
    ],
    faq: [
      { q: "¿Cuánto dura la sesión?", a: "Aproximadamente entre 30 y 45 minutos, en un ambiente cómodo y privado." },
      { q: "¿Necesito una evaluación previa?", a: "Sí, antes de la aplicación revisamos tu estado de salud para confirmar que el tratamiento es adecuado para ti." },
    ],
  },
  {
    id: 8,
    slug: "limpieza-facial-arequipa",
    title: "Limpieza Facial",
    desc: "Higiene profunda y renovación de tu piel.",
    category: "facial",
    price: "S/ 50",
    details: "(Desde S/ 50)",
    heading: "Limpieza Facial Profunda en Arequipa",
    metaDescription:
      "Limpieza facial profunda en Arequipa desde S/ 50: elimina impurezas y renueva tu piel. Consultorio estético Expressive en Cayma. Agenda tu cita.",
    intro:
      "La limpieza facial profunda elimina impurezas, células muertas y puntos negros, dejando la piel limpia, hidratada y lista para otros tratamientos. Adaptamos cada limpieza a tu tipo de piel.",
    benefits: [
      "Elimina impurezas y puntos negros",
      "Renueva e hidrata la piel",
      "Adaptada a tu tipo de piel",
      "Ideal como mantenimiento mensual",
    ],
    faq: [
      { q: "¿Cada cuánto debo hacerme una limpieza facial?", a: "Para la mayoría de pieles se recomienda una vez al mes como mantenimiento." },
      { q: "¿Puedo maquillarme después?", a: "Es preferible dejar la piel respirar el resto del día. Te damos recomendaciones de cuidado al terminar." },
    ],
  },
  {
    id: 9,
    slug: "tratamiento-alopecia-arequipa",
    title: "Alopecia",
    desc: "Tratamiento capilar especializado para frenar la caída.",
    category: "salud",
    price: "S/ 100",
    details: "(Por Sesión)",
    heading: "Tratamiento para la Alopecia y Caída del Cabello en Arequipa",
    metaDescription:
      "Tratamiento para la alopecia y caída del cabello en Arequipa. Consultorio estético Expressive en Cayma. S/ 100 por sesión. Agenda tu evaluación.",
    intro:
      "Nuestro tratamiento capilar ayuda a frenar la caída del cabello y a estimular el crecimiento de un pelo más fuerte. Evaluamos el estado de tu cuero cabelludo para definir el plan más adecuado.",
    benefits: [
      "Ayuda a frenar la caída del cabello",
      "Estimula el folículo y fortalece el pelo",
      "Plan de sesiones personalizado",
      "Apto para hombres y mujeres",
    ],
    faq: [
      { q: "¿Cuántas sesiones necesito?", a: "Depende del tipo y grado de caída. En la evaluación te proponemos un plan de sesiones." },
      { q: "¿Cuándo se notan los resultados?", a: "El cabello tiene ciclos lentos; los primeros cambios suelen notarse después de algunas semanas de tratamiento." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
