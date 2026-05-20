export type Plan = {
  name: string;
  badge: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type Event = {
  title: string;
  type: string;
  date: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/tutorias", label: "Tutorías" },
  { href: "/cafe-juridico", label: "Café Jurídico" },
  { href: "/eventos", label: "Eventos" },
  { href: "/inscripcion", label: "Inscripción" },
  { href: "/contacto", label: "Contacto" },
];

export const stats = [
  { value: "3", label: "Planes flexibles" },
  { value: "+12", label: "Temas jurídicos por ciclo" },
  { value: "90 min", label: "Sesiones prácticas" },
];

export const plans: Plan[] = [
  {
    name: "Plan Mensual",
    badge: "Mayor continuidad",
    price: "Q450",
    description:
      "Acompañamiento semanal para ordenar lecturas, resolver dudas y preparar evaluaciones durante el mes.",
    features: [
      "4 sesiones al mes",
      "Material de apoyo",
      "Seguimiento por WhatsApp",
      "Simulacros de preguntas",
    ],
    highlighted: true,
  },
  {
    name: "Plan Quincenal",
    badge: "Ritmo equilibrado",
    price: "Q250",
    description:
      "Dos sesiones estratégicas para reforzar temas clave antes de clases, parciales o entregas importantes.",
    features: [
      "2 sesiones al mes",
      "Ruta de estudio priorizada",
      "Resolución de casos",
      "Recomendaciones bibliográficas",
    ],
  },
  {
    name: "Clase Individual",
    badge: "Enfoque puntual",
    price: "Q150",
    description:
      "Una sesión personalizada para despejar dudas urgentes o preparar un tema específico con profundidad.",
    features: [
      "1 sesión personalizada",
      "Tema elegido por estudiante",
      "Guía breve de repaso",
      "Modalidad flexible",
    ],
  },
];

export const events: Event[] = [
  {
    title: "Taller de argumentación constitucional",
    type: "Taller",
    date: "Sábado, 6 de junio",
    location: "Online",
    description:
      "Práctica guiada para construir argumentos, identificar problemas jurídicos y defender una postura con claridad.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Documentos jurídicos sobre una mesa",
  },
  {
    title: "Café Jurídico: Derecho penal y medios",
    type: "Conversatorio",
    date: "Jueves, 18 de junio",
    location: "Ciudad de Guatemala",
    description:
      "Una conversación sobre opinión pública, garantías procesales y responsabilidad al comunicar casos penales.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Estudiantes conversando en una mesa",
  },
  {
    title: "Guía práctica para parciales",
    type: "Bootcamp",
    date: "Domingo, 28 de junio",
    location: "Online",
    description:
      "Sesión intensiva para transformar apuntes en esquemas útiles, preguntas probables y respuestas ordenadas.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Computadora con apuntes de estudio",
  },
];

export const cafeTopics = [
  "Debate de casos actuales",
  "Lectura crítica de sentencias",
  "Oratoria y argumentación",
  "Ética profesional",
];

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "TikTok", href: "https://www.tiktok.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];
