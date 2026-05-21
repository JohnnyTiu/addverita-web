import {
  BookOpen,
  Briefcase,
  CheckCircle,
  Coffee,
  FileSignature,
  Film,
  Gavel,
  Lightbulb,
  MessageSquareQuote,
  PenTool,
  Presentation,
  Scale,
  Trophy,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

export type ActivityCategory = 
  | "Formación jurídica"
  | "Habilidades profesionales"
  | "Práctica jurídica"
  | "Liderazgo y participación ciudadana";

export type ActivityItem = {
  icon?: LucideIcon;
  title: string;
  text: string;
};

export type Activity = {
  slug: string;
  title: string;
  category: ActivityCategory;
  shortDescription: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  formatTitle: string;
  formatDescription: string;
  benefits: ActivityItem[];
  examplesTitle: string;
  examples: string[];
};

export const categories = [
  "Formación jurídica",
  "Habilidades profesionales",
  "Práctica jurídica",
  "Liderazgo y participación ciudadana",
] as const;

export const activities: Activity[] = [
  // 1. Formación jurídica
  {
    slug: "cafe-juridico",
    title: "Café Jurídico",
    category: "Formación jurídica",
    shortDescription: "Conversaciones para pensar el Derecho fuera del aula.",
    longDescription: "Te invitamos a un espacio donde conocerás la realidad del ejercicio profesional del Derecho, descubriendo las diferencias entre la vida universitaria y el mundo laboral, a través de experiencias reales, mitos, consejos y aprendizajes prácticos para futuros abogados.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Grupo de estudiantes conversando en una mesa",
    formatTitle: "No es una clase tradicional",
    formatDescription: "Es una reunión donde se pueda hablar de Derecho de manera clara, práctica y cercana. Avanza hacia discusión, contraste de posturas y herramientas útiles.",
    benefits: [
      { icon: Coffee, title: "Ambiente cercano", text: "Conversación seria sin perder naturalidad." },
      { icon: Users, title: "Comunidad", text: "Conecta con estudiantes de distintos ciclos." },
      { icon: MessageSquareQuote, title: "Criterio", text: "Aprende a sostener una postura con mejores razones." },
    ],
    examplesTitle: "Ejemplos de temas",
    examples: [
      "¿Cómo funciona realmente el Estado?",
      "Democracia y participación ciudadana.",
      "Derechos y obligaciones de los jóvenes.",
      "Corrupción y transparencia.",
      "Reformas legales importantes.",
      "Sistema electoral.",
      "Participación política sin pertenecer a un partido."
    ],
  },
  {
    slug: "club-analisis-casos",
    title: "Club de análisis de casos reales",
    category: "Formación jurídica",
    shortDescription: "Análisis profundo de noticias y casos reales actuales.",
    longDescription: "Un espacio para aterrizar la teoría legal en la realidad cotidiana a través del estudio de noticias, sentencias recientes y eventos de impacto nacional.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Estudiantes analizando documentos",
    formatTitle: "Dinámica del Club",
    formatDescription: "Presentamos un caso actual, explicamos los hechos e identificamos los derechos afectados para analizar posibles responsabilidades.",
    benefits: [
      { icon: BookOpen, title: "Identificación de derechos", text: "Reconoce qué derechos están en juego." },
      { icon: CheckCircle, title: "Análisis de delitos", text: "Evalúa responsabilidades legales objetivamente." },
      { icon: Lightbulb, title: "Búsqueda de soluciones", text: "Discute y propone resoluciones al conflicto." },
    ],
    examplesTitle: "Actividades comunes",
    examples: [
      "Presentación del caso y sus hechos.",
      "Identificación de derechos afectados.",
      "Análisis de posibles delitos.",
      "Debate sobre responsabilidades.",
      "Discusión de posibles soluciones."
    ],
  },
  {
    slug: "cine-foro-juridico",
    title: "Cine, foro jurídico",
    category: "Formación jurídica",
    shortDescription: "Aprendizaje del Derecho a través del cine y documentales.",
    longDescription: "Analiza conflictos jurídicos y derechos vulnerados presentados en películas, relacionando las historias de la pantalla con temas legales reales.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Proyector de cine",
    formatTitle: "Dinámica del Foro",
    formatDescription: "Vemos una película, documental o fragmento, analizamos el conflicto central y debatimos sobre las implicaciones jurídicas de las acciones de los personajes.",
    benefits: [
      { icon: Film, title: "Análisis fílmico", text: "Detecta problemas legales en la trama." },
      { icon: Scale, title: "Debate de derechos", text: "Discute los derechos vulnerados en la historia." },
      { icon: MessageSquareQuote, title: "Conexión con la realidad", text: "Relaciona la ficción con leyes reales." },
    ],
    examplesTitle: "Enfoque de análisis",
    examples: [
      "Ver película o documental.",
      "Analizar el conflicto jurídico principal.",
      "Debatir los derechos vulnerados.",
      "Relacionar la historia con temas legales actuales."
    ],
  },

  // 2. Habilidades profesionales
  {
    slug: "oratoria-juridica",
    title: "Clases de oratoria jurídica",
    category: "Habilidades profesionales",
    shortDescription: "Aprende a hablar con seguridad, claridad y proyección.",
    longDescription: "La habilidad de hablar en público es vital para un abogado. Estas clases están diseñadas para perder el miedo y dominar técnicas de persuasión, proyección de voz y lenguaje corporal.",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Persona hablando frente a un micrófono",
    formatTitle: "Metodología Práctica",
    formatDescription: "Se enseña una técnica breve, se realizan ejercicios, preparas una mini exposición, practicas frente al grupo y recibes retroalimentación constructiva.",
    benefits: [
      { icon: Presentation, title: "Seguridad al hablar", text: "Pierde el miedo escénico frente al juez o público." },
      { icon: Video, title: "Lenguaje corporal", text: "Domina tus gestos y presencia física." },
      { icon: MessageSquareQuote, title: "Improvisación", text: "Aprende a responder con lógica bajo presión." },
    ],
    examplesTitle: "Contenidos del curso",
    examples: [
      "Cómo ordenar una exposición.",
      "Cómo proyectar la voz.",
      "Cómo evitar muletillas.",
      "Cómo defender una postura.",
      "Técnicas para hablar en público."
    ],
  },
  {
    slug: "laboratorio-escritura",
    title: "Laboratorio de escritura jurídica",
    category: "Habilidades profesionales",
    shortDescription: "Mejora tu redacción legal sin depender del copiar y pegar.",
    longDescription: "Talleres prácticos de redacción jurídica donde aprenderás a estructurar memoriales, contratos y ensayos legales con precisión, claridad y buena ortografía.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Persona escribiendo en una libreta",
    formatTitle: "Talleres de Redacción",
    formatDescription: "Se acabó el 'copiar y pegar'. Te enseñaremos a redactar documentos desde cero, entendiendo la estructura y finalidad de cada escrito legal.",
    benefits: [
      { icon: PenTool, title: "Redacción propia", text: "Escribe con tus propias palabras." },
      { icon: FileSignature, title: "Precisión técnica", text: "Uso correcto de la terminología legal." },
      { icon: CheckCircle, title: "Revisión cruzada", text: "Retroalimentación en tus documentos." },
    ],
    examplesTitle: "Documentos a redactar",
    examples: [
      "Redacción de memoriales.",
      "Ensayos jurídicos y opiniones legales.",
      "Argumentos para debate.",
      "Contratos simples y actas.",
      "Solicitudes y recursos básicos."
    ],
  },
  {
    slug: "competencia-objeciones",
    title: "Competencia de objeciones",
    category: "Habilidades profesionales",
    shortDescription: "Agilidad mental para reaccionar ante preguntas incorrectas.",
    longDescription: "Inspirada en audiencias orales reales, esta competencia entrena a los estudiantes para reaccionar rápidamente y objetar argumentos débiles o interrogatorios engañosos.",
    image: "https://images.unsplash.com/photo-1505664173615-04b1f4175525?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Juez con un mallete",
    formatTitle: "Dinámica de la Competencia",
    formatDescription: "Un estudiante interroga, otro responde y un tercero debe objetar en el momento exacto. Un moderador (juez) decide si la objeción es 'Ha lugar' o 'No ha lugar'.",
    benefits: [
      { icon: Trophy, title: "Rapidez mental", text: "Piensa y reacciona en fracciones de segundo." },
      { icon: Scale, title: "Dominio procesal", text: "Aplica reglas de evidencia e interrogatorio." },
      { icon: Briefcase, title: "Simulación real", text: "Prepara para audiencias reales y juicios orales." },
    ],
    examplesTitle: "Roles de la actividad",
    examples: [
      "Estudiante que interroga.",
      "Estudiante que responde.",
      "Estudiante que objeta.",
      "Moderador que decide si procede."
    ],
  },
  {
    slug: "reto-contratos",
    title: "Reto de contratos mal hechos",
    category: "Habilidades profesionales",
    shortDescription: "Detecta errores y trampas en contratos legales.",
    longDescription: "Una actividad analítica donde se entrega un contrato lleno de errores intencionales, ambigüedades y trampas. El reto es detectarlos antes de que tu 'cliente' lo firme.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Contrato con una lupa encima",
    formatTitle: "Búsqueda del error",
    formatDescription: "Trabajando en equipo o de forma individual, los participantes deberán revisar cláusula por cláusula para identificar las fallas legales.",
    benefits: [
      { icon: CheckCircle, title: "Atención al detalle", text: "Entrena tu ojo clínico para documentos." },
      { icon: FileSignature, title: "Seguridad jurídica", text: "Evita que un contrato perjudique a una de las partes." },
      { icon: Lightbulb, title: "Corrección", text: "Propón la redacción correcta para arreglar el error." },
    ],
    examplesTitle: "Errores a detectar",
    examples: [
      "Falta de datos o firmas.",
      "Cláusulas ambiguas.",
      "Fechas contradictorias.",
      "Obligaciones incompletas.",
      "Penalizaciones mal redactadas.",
      "Objeto del contrato poco claro."
    ],
  },

  // 3. Práctica jurídica
  {
    slug: "simulaciones-audiencias",
    title: "Simulaciones de audiencias",
    category: "Práctica jurídica",
    shortDescription: "Aplica la teoría legal asumiendo roles en juicios simulados.",
    longDescription: "La mejor manera de aprender Derecho es practicándolo. Organizamos simulaciones de audiencias donde asumirás diferentes roles del sistema judicial para resolver un caso práctico.",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Sala de tribunal",
    formatTitle: "Roles y Práctica",
    formatDescription: "Te asignaremos un rol (Juez, Fiscal, Defensa, Testigo, etc.) y un caso. Deberás estudiar la ley y defender los intereses de tu posición siguiendo el debido proceso.",
    benefits: [
      { icon: Gavel, title: "Aplicación práctica", text: "Lleva la teoría del libro a la sala de audiencias." },
      { icon: Users, title: "Empatía de roles", text: "Entiende el juicio desde diferentes perspectivas." },
      { icon: Presentation, title: "Exposición oral", text: "Defiende tus argumentos frente a un tribunal." },
    ],
    examplesTitle: "Tipos de simulación",
    examples: [
      "Audiencia penal.",
      "Audiencia civil.",
      "Juicio oral.",
      "Debate constitucional."
    ],
  },
  {
    slug: "simulacion-mediacion",
    title: "Simulación de mediación",
    category: "Práctica jurídica",
    shortDescription: "Resuelve conflictos pacíficamente sin llegar a juicio.",
    longDescription: "No todos los problemas deben resolverse en un juzgado. Esta actividad te enseñará a ser un mediador imparcial, facilitando el diálogo entre partes enfrentadas.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Personas dándose la mano en una mesa",
    formatTitle: "Resolución Alternativa",
    formatDescription: "Se te presentará un caso de disputa civil, vecinal o laboral. Deberás guiar a las partes para que encuentren un punto de acuerdo beneficioso para ambas.",
    benefits: [
      { icon: Users, title: "Habilidades blandas", text: "Desarrolla paciencia, escucha activa y empatía." },
      { icon: Scale, title: "Justicia rápida", text: "Aprende mecanismos ágiles de resolución." },
      { icon: Briefcase, title: "Liderazgo", text: "Toma el control de la conversación para guiar al acuerdo." },
    ],
    examplesTitle: "Casos de mediación",
    examples: [
      "Conflicto entre vecinos.",
      "Deuda entre compañeros.",
      "Problema laboral.",
      "Conflicto familiar."
    ],
  },
  {
    slug: "negociacion-juridica",
    title: "Negociación jurídica",
    category: "Práctica jurídica",
    shortDescription: "A veces se gana negociando, no peleando.",
    longDescription: "Una excelente habilidad para cualquier abogado corporativo o litigante. Dos partes con información confidencial e intereses opuestos deben llegar a un acuerdo estratégico.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Reunión de negocios",
    formatTitle: "Estrategia y Comunicación",
    formatDescription: "Cada grupo recibe información parcial. Deberán utilizar tácticas de negociación para maximizar los beneficios de su cliente cediendo lo menos posible.",
    benefits: [
      { icon: Lightbulb, title: "Estrategia", text: "Aprende a ceder inteligentemente." },
      { icon: MessageSquareQuote, title: "Comunicación asertiva", text: "Evita que las emociones rompan el trato." },
      { icon: CheckCircle, title: "Resultados", text: "Se evalúa la calidad del acuerdo alcanzado." },
    ],
    examplesTitle: "Escenarios posibles",
    examples: [
      "Compraventa de empresas.",
      "Resolución de contrato de arrendamiento.",
      "Disputa comercial por exclusividad.",
      "Separación de bienes."
    ],
  },

  // 4. Liderazgo y participación ciudadana
  {
    slug: "debates-estudiantiles",
    title: "Debates estudiantiles",
    category: "Liderazgo y participación ciudadana",
    shortDescription: "Defiende posturas sobre temas jurídicos, políticos o sociales.",
    longDescription: "Espacios de confrontación intelectual donde los estudiantes deben investigar y defender una postura asignada, incluso si personalmente no están de acuerdo con ella.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Estudiantes en un aula universitaria",
    formatTitle: "Desarrollo del debate",
    formatDescription: "Dos equipos debaten un tema polémico con reglas de tiempo estrictas. Fomenta el respeto, la tolerancia y la capacidad de refutar con evidencia.",
    benefits: [
      { icon: Presentation, title: "Mejora la argumentación", text: "Defiende ideas de forma lógica y estructurada." },
      { icon: Lightbulb, title: "Pensamiento crítico", text: "Cuestiona las posturas comunes y profundiza." },
      { icon: Users, title: "Debate con respeto", text: "Enseña a defender ideas sin ataques personales." },
    ],
    examplesTitle: "Ejemplos de debates",
    examples: [
      "¿Debe regularse con más fuerza el contenido en redes sociales?",
      "¿La prisión preventiva se usa correctamente?",
      "¿Debe reformarse el sistema electoral?",
      "¿Debe modernizarse la educación jurídica?"
    ],
  },
  {
    slug: "foro-propuestas",
    title: "Foro estudiantil de propuestas",
    category: "Liderazgo y participación ciudadana",
    shortDescription: "Proponiendo soluciones a problemas reales de nuestra sociedad.",
    longDescription: "Un espacio constructivo donde no solo se discuten los problemas, sino que se exige a los estudiantes estructurar, presentar y defender propuestas de solución viables legalmente.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Persona escribiendo ideas en un pizarrón",
    formatTitle: "De la queja a la acción",
    formatDescription: "Cada estudiante o grupo presenta un problema social o universitario y expone una reforma o proyecto de ley que podría solucionarlo, sometiéndolo a críticas constructivas.",
    benefits: [
      { icon: Lightbulb, title: "Proactividad", text: "Cambia la mentalidad hacia la búsqueda de soluciones." },
      { icon: Scale, title: "Viabilidad legal", text: "Asegura que las propuestas respeten la Constitución." },
      { icon: Presentation, title: "Impacto social", text: "Fomenta la verdadera participación ciudadana juvenil." },
    ],
    examplesTitle: "Temas de propuesta",
    examples: [
      "Mejoras para la educación superior.",
      "Iniciativas de seguridad ciudadana.",
      "Fomento a la cultura de legalidad.",
      "Protección de derechos estudiantiles."
    ],
  },
  {
    slug: "torneo-argumentacion",
    title: "Torneo de argumentación",
    category: "Liderazgo y participación ciudadana",
    shortDescription: "Competencia amistosa para encontrar al mejor orador.",
    longDescription: "Un torneo estructurado con llaves de eliminación directa donde equipos de estudiantes se enfrentan argumentando a favor y en contra de temas complejos bajo el escrutinio de un jurado.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Equipo de personas celebrando o colaborando",
    formatTitle: "Dinámica de Competencia",
    formatDescription: "Se asigna un tema al azar, un equipo defiende, otro ataca. El jurado evalúa claridad, respeto, dominio del tema y refutación. Los mejores avanzan a la final.",
    benefits: [
      { icon: Trophy, title: "Sana competencia", text: "Motiva la preparación exhaustiva." },
      { icon: MessageSquareQuote, title: "Capacidad de respuesta", text: "Evalúa la rapidez para desarmar el argumento rival." },
      { icon: CheckCircle, title: "Reconocimiento", text: "Premios simbólicos, diplomas y becas de clase." },
    ],
    examplesTitle: "Criterios de evaluación",
    examples: [
      "Argumentación estructurada.",
      "Claridad de exposición.",
      "Respeto al oponente.",
      "Dominio de la base legal del tema."
    ],
  },
  {
    slug: "podcast-capsulas",
    title: "Podcast y cápsulas informativas",
    category: "Liderazgo y participación ciudadana",
    shortDescription: "Comunicando el Derecho al público general en redes sociales.",
    longDescription: "Actividad creativa donde los estudiantes aprenden a simplificar el lenguaje técnico legal para crear contenido educativo digerible para la sociedad.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1500&q=80",
    imageAlt: "Micrófono de podcast en un estudio",
    formatTitle: "Derecho para todos",
    formatDescription: "Diseñamos guiones, grabamos y editamos videos de 1 minuto, Reels o episodios de podcast cortos explicando leyes o respondiendo dudas legales comunes.",
    benefits: [
      { icon: Video, title: "Habilidades digitales", text: "Pierde el miedo a la cámara y mejora la edición." },
      { icon: PenTool, title: "Síntesis legal", text: "Resume leyes complejas en frases sencillas." },
      { icon: Users, title: "Proyección profesional", text: "Comienza a construir tu marca personal." },
    ],
    examplesTitle: "Ejemplos de contenido",
    examples: [
      "¿Qué derechos tengo como consumidor?",
      "¿Qué pasa si firmo algo sin leer?",
      "Explicando el debido proceso legal.",
      "Mito o realidad jurídica."
    ],
  }
];
