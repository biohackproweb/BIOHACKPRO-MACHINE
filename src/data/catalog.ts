// BioHackPro — Catálogo completo de máquinas
// Fuente única de verdad. Genera home, categorías, catálogo y fichas.

export type FamilySlug =
  | "crioterapia"
  | "hiperbaricas"
  | "fotobiomodulacion"
  | "hipoxia"
  | "multitecnologia"
  | "neuroacustica"
  | "pemf-ondas-choque"
  | "hidrogeno"
  | "diagnostico-rehabilitacion";

export type Tier = "flagship" | "specialized" | "complementary";

export interface Family {
  slug: FamilySlug;
  name: string;
  tagline: string;
  description: string;
  tier: 1 | 2 | 3;
}

export interface Spec {
  label: string;
  value: string;
}

export interface MachineBenefit {
  title: string;
  text: string;
}

/** Contenido ampliado opcional para fichas de producto */
export interface MachineContent {
  badge?: string;
  lead?: string;
  paragraphs?: string[];
  pillars?: string[];
  businessBenefits?: MachineBenefit[];
  sectorsTitle?: string;
  sectors?: string[];
  /** Nombres de archivo en src/assets (sin ruta), p. ej. cryo-paradox-1.png */
  gallery?: string[];
}

export interface Machine {
  slug: string;
  name: string;
  family: FamilySlug;
  tier: Tier;
  tagline: string;
  description: string;
  priceFrom: number; // EUR
  specs: Spec[];
  highlights: string[];
  featured?: boolean;
  content?: MachineContent;
}

export const FAMILIES: Family[] = [
  {
    slug: "crioterapia",
    name: "Crioterapia",
    tagline: "Frío extremo controlado",
    description:
      "Cabinas eléctricas, flotación criosensorial y baños de inmersión fría profesionales. Tecnología seca y húmeda para recuperación deportiva, longevidad y rendimiento.",
    tier: 1,
  },
  {
    slug: "hiperbaricas",
    name: "Cámaras Hiperbáricas",
    tagline: "Oxigenoterapia de alta presión",
    description:
      "Cámaras monoplaza presurizadas a 2 ATA con flujo de oxígeno de 15 a 30 l/min. Recuperación celular, regeneración tisular y rendimiento cognitivo.",
    tier: 1,
  },
  {
    slug: "fotobiomodulacion",
    name: "Fotobiomodulación",
    tagline: "Luz roja, infrarroja y NIR",
    description:
      "Camas, paneles y cascos con longitudes de onda terapéuticas calibradas. Regeneración mitocondrial, salud cutánea y optimización cerebral.",
    tier: 1,
  },
  {
    slug: "hipoxia",
    name: "Hipoxia / Altitud",
    tagline: "Entrenamiento de altura simulado",
    description:
      "Hipoxia-hiperoxia intermitente adaptativa con grado médico. Mejora la respuesta mitocondrial, la resistencia y la salud cardiovascular.",
    tier: 1,
  },
  {
    slug: "multitecnologia",
    name: "Multitecnología",
    tagline: "Plataformas integradas",
    description:
      "Sistemas que combinan múltiples tecnologías de bioactivación en una sola sesión: PBM, PEMF, MHI y VAT trabajando en sinergia.",
    tier: 1,
  },
  {
    slug: "neuroacustica",
    name: "Neuroacústica & Recovery",
    tagline: "Vibración acústica VAT",
    description:
      "Mobiliario terapéutico con vibración acústica controlada. Estados profundos de relajación, recuperación parasimpática y meditación guiada.",
    tier: 2,
  },
  {
    slug: "pemf-ondas-choque",
    name: "PEMF & Ondas de choque",
    tagline: "Electromagnetismo y mecanotransducción",
    description:
      "Pulso electromagnético, ondas focales, radiales y láser de alta intensidad. Equipos de fisioterapia avanzada y regeneración tisular.",
    tier: 2,
  },
  {
    slug: "hidrogeno",
    name: "Hidrógeno molecular",
    tagline: "Antioxidante celular selectivo",
    description:
      "Generadores y concentradores de H2 y H2/O2 con desinfección UVC. Modulación oxidativa y soporte mitocondrial.",
    tier: 2,
  },
  {
    slug: "diagnostico-rehabilitacion",
    name: "Diagnóstico & Rehabilitación",
    tagline: "Medición y recuperación de precisión",
    description:
      "Escáneres 3D, analizadores corporales, robots de rehabilitación, presoterapia y mobiliario clínico. La base de cualquier programa profesional.",
    tier: 3,
  },
];

export const MACHINES: Machine[] = [
  // ───── Crioterapia ─────
  {
    slug: "cryo-paradox",
    name: "CRYO PARADOX",
    family: "crioterapia",
    tier: "flagship",
    tagline: "Cabina eléctrica de crioterapia de cuerpo completo",
    description:
      "Con PARADOX® redefinimos la crioterapia de cuerpo completo: la primera cabina eléctrica de segunda generación que activa los mecanismos fisiológicos de manera más segura, eficiente y accesible para todos.",
    priceFrom: 89000,
    specs: [
      { label: "Tipo", value: "Cabina eléctrica" },
      { label: "Temperatura", value: "−110 ºC" },
      { label: "Sesión", value: "2–3 min" },
      { label: "Tecnología", value: "Sin nitrógeno líquido" },
      { label: "Origen", value: "Fabricada en Alemania" },
      { label: "Control", value: "Tecnología IA · Monitoreo 24/7" },
    ],
    highlights: [
      "Recuperación deportiva",
      "Medicina preventiva",
      "Biohacking",
      "Wellness premium",
    ],
    featured: true,
    content: {
      badge: "Fabricada en Alemania con tecnología IA",
      lead: "El futuro de la crioterapia ya está aquí",
      pillars: [
        "Sin complicaciones, sin consumos extremos, sin límites",
        "Mantenimiento online y monitoreo 24/7 de la correcta funcionalidad",
      ],
      businessBenefits: [
        { title: "Eficiencia", text: "Sin costes de instalación" },
        { title: "Rentabilidad", text: "Rápido retorno de la inversión" },
        { title: "Control", text: "Mantenimiento online 24/7" },
        { title: "Innovación", text: "Diferenciación competitiva" },
      ],
      sectorsTitle: "¿En qué sectores se puede instalar?",
      sectors: [
        "Longevidad y medicina preventiva",
        "Recuperación y rendimiento deportivo",
        "Biohacking y optimización humana",
        "Wellness y bienestar integral",
        "Antiaging",
      ],
      gallery: [
        "cryoparadox2.jpg",
        "cryoparadox3.jpg",
        "cryoparadox4.jpg",
        "cryoparadox5.jpg",
        "cryoparadox6.jpg",
        "cryoparadox7.jpg",
      ],
    },
  },
  {
    slug: "sensocryo",
    name: "SENSOCRYO",
    family: "crioterapia",
    tier: "specialized",
    tagline: "Flotación criosensorial en seco",
    description:
      "Experiencia de flotación criosensorial en seco. Combina frío localizado, presión suave y aislamiento sensorial para un reset profundo del sistema nervioso.",
    priceFrom: 13900,
    specs: [
      { label: "Modelo", value: "CLINIC y LOUNGE" },
      { label: "Fuente de Alimentación", value: "220V" },
      { label: "Programas", value: "Recargar / Relajar / Activar / Arcoiris" },
      { label: "Dimensiones", value: "2.300 x 1.100 x 570 mm" },
      { label: "Peso neto del equipo", value: "220 kg (incl. Spa_Complete: 274 kg)" },
      { label: "Peso Máximo usuario", value: "210 Kg." },
      {
        label: "Consumo máximo de energía",
        value: "2.830 vatios (Spa_Completo: 150 vatios / Refrigeración por aire: 100 vatios)",
      },
    ],
    highlights: ["Reset parasimpático", "Recuperación sensorial"],
  },
  {
    slug: "nexgen-polar-core",
    name: "NEXGEN POLAR CORE",
    family: "crioterapia",
    tier: "complementary",
    tagline: "Crioterapia y compresión para recuperación diaria",
    description:
      "La unidad esencial diseñada para la recuperación diaria, uso doméstico y postoperatorios. Portabilidad y facilidad de uso sin configuraciones complejas.",
    priceFrom: 7490,
    specs: [
      {
        label: "Tipo de terapia",
        value: "Crioterapia continua combinada con compresión neumática básica",
      },
      {
        label: "Rango de presión",
        value: "Presión estática fija o preajustada (Baja / Media)",
      },
      {
        label: "Control de temperatura",
        value: "Flujo constante de agua helada mediante circuito integrado estándar",
      },
      {
        label: "Interfaz de usuario",
        value: "Panel táctil minimalista con indicadores LED fijos",
      },
      {
        label: "Conectividad",
        value: "1 puerto de acople rápido para manguera de un solo canal",
      },
      {
        label: "Accesorios incluidos",
        value: "Funda anatómica estándar (Rodilla o almohadilla Universal)",
      },
      {
        label: "Uso principal",
        value: "Hogar, fisioterapia de mantenimiento y rehabilitación postoperatoria doméstica",
      },
    ],
    highlights: ["Uso doméstico", "Portabilidad", "Postoperatorio"],
  },
  {
    slug: "nexgen-polar-elite",
    name: "NEXGEN POLAR ELITE",
    family: "crioterapia",
    tier: "complementary",
    tagline: "Estándar clínico con compresión programable",
    description:
      "El estándar clínico diseñado para centros de fisioterapia y deportistas exigentes. Sensores digitales avanzados para optimizar el drenaje linfático con precisión.",
    priceFrom: 9590,
    specs: [
      {
        label: "Tipo de terapia",
        value: "Crioterapia de alta precisión con compresión neumática activa programable",
      },
      { label: "Rango de presión", value: "Regulable de 15 a 75 mmHg" },
      {
        label: "Control de temperatura",
        value: "Sensor de control dinámico digital en tiempo real",
      },
      {
        label: "Interfaz de usuario",
        value: "Pantalla táctil interactiva a color con lectura digital de datos",
      },
      {
        label: "Conectividad",
        value: "1 puerto de acople rápido de alta resistencia para manguera reforzada",
      },
      {
        label: "Accesorios incluidos",
        value: "Fundas ergonómicas texturizadas de alta transferencia térmica",
      },
      {
        label: "Uso principal",
        value: "Clínicas de fisioterapia, medicina deportiva y centros de alto rendimiento",
      },
    ],
    highlights: ["Control digital", "Drenaje linfático", "Uso clínico"],
  },
  {
    slug: "nexgen-polar-nba",
    name: "NEXGEN POLAR NBA",
    family: "crioterapia",
    tier: "complementary",
    tagline: "Crioterapia intensiva bilateral · grado profesional",
    description:
      "La joya de la corona. Equipo de potencia industrial certificado bajo las exigencias del baloncesto profesional y los viajes constantes de las franquicias de élite.",
    priceFrom: 10590,
    specs: [
      {
        label: "Tipo de terapia",
        value: "Crioterapia intensiva acelerada con compresión neumática activa bilateral",
      },
      {
        label: "Rango de presión",
        value: "Regulable de 15 a 75 mmHg con motor de compresión de alta potencia",
      },
      {
        label: "Control de temperatura",
        value: "Doble bomba de flujo continuo acelerado para enfriamiento masivo inmediato",
      },
      {
        label: "Interfaz de usuario",
        value: "Pantalla táctil avanzada con software inteligente y perfiles de atletas pregrabados",
      },
      {
        label: "Conectividad",
        value: "2 puertos simultáneos (conexión dual) para tratamiento en dos zonas",
      },
      {
        label: "Accesorios incluidos",
        value: "Botas de pierna doble grado militar + maletín rígido con ruedas de transporte",
      },
      {
        label: "Uso principal",
        value: "Vestuarios profesionales, banquillos en competición y recuperación en ruta",
      },
    ],
    highlights: ["Conexión dual", "Equipos NBA", "Recuperación en ruta"],
  },

  // ───── Hiperbáricas ─────
  {
    slug: "nexgen-o2-orion",
    name: "NEXGEN O2 ORION",
    family: "hiperbaricas",
    tier: "flagship",
    tagline: "Cámara hiperbárica monoplaza sentado",
    description:
      "Cámara hiperbárica monoplaza con presurización a 2 ATA y concentrador de oxígeno integrado de 15 l/min. Modelo de entrada de la gama Nexgen O2.",
    priceFrom: 54900,
    specs: [
      { label: "Capacidad", value: "1 persona, sentado" },
      { label: "Presión máxima", value: "2,0 ATA" },
      { label: "Sistema", value: "All-in-one (compresor, concentrador O₂, enfriador, purificador)" },
      { label: "Puerta", value: "Corredera con 2 ventanas de policarbonato" },
      { label: "Alimentación", value: "100% eléctrica · 220 V" },
    ],
    highlights: ["Monoplaza", "Concentrador integrado"],
  },
  {
    slug: "nexgen-o2-zenith",
    name: "NEXGEN O2 ZENITH",
    family: "hiperbaricas",
    tier: "flagship",
    tagline: "Cámara hiperbárica monoplaza premium",
    description:
      "Evolución del modelo Orion con acabados premium, panel táctil avanzado y mayor confort en sesiones largas.",
    priceFrom: 69900,
    specs: [
      { label: "Capacidad", value: "1 persona, sentado" },
      { label: "Presión máxima", value: "2,0 ATA · 10 niveles" },
      { label: "Flujo O₂", value: "15 l/min (mascarilla con reservorio)" },
      { label: "Materiales", value: "Fibra de carbono + policarbonato aeroespacial" },
      { label: "Confort", value: "Sillón ergonómico con masaje integrado" },
      { label: "Alimentación", value: "100% eléctrica · 220 V" },
    ],
    highlights: ["Confort premium", "Panel táctil"],
    featured: true,
  },
  {
    slug: "nexgen-o2-zenith-pro-dual",
    name: "NEXGEN O2 ZENITH PRO DUAL",
    family: "hiperbaricas",
    tier: "flagship",
    tagline: "Cámara hiperbárica top con doble concentrador",
    description:
      "Tope de gama Nexgen O2. Doble concentrador para 30 l/min sostenidos y sistema BIBS para entrega precisa de oxígeno mediante mascarilla.",
    priceFrom: 79900,
    specs: [
      { label: "Capacidad", value: "1 persona, sentado" },
      { label: "Presión máxima", value: "2,0 ATA · 10 niveles" },
      { label: "Flujo O₂", value: "15 o 30 l/min seleccionables" },
      { label: "Entrega O₂", value: "Mascarilla con reservorio o sistema BIBS" },
      { label: "Materiales", value: "Fibra de carbono + policarbonato aeroespacial" },
      { label: "Confort", value: "Sillón ergonómico con masaje integrado" },
    ],
    highlights: ["Doble concentrador", "BIBS profesional"],
    featured: true,
  },

  // ───── Fotobiomodulación ─────
  {
    slug: "nexgen-red-26000",
    name: "NEXGEN RED 26000",
    family: "fotobiomodulacion",
    tier: "flagship",
    tagline: "Cama-techo IR + NIR de cuerpo completo",
    description:
      "Cama-techo de fotobiomodulación con 26.000 LEDs y 4 longitudes de onda calibradas. Seis programas terapéuticos preconfigurados.",
    priceFrom: 16900,
    specs: [
      { label: "LEDs", value: "26.880" },
      { label: "Longitudes de onda", value: "633 / 660 / 850 / 940 nm" },
      { label: "Potencia", value: "4.500 W" },
      { label: "Dimensiones", value: "2.145 × 1.060 × 910 mm" },
      { label: "Peso", value: "260 kg" },
      { label: "Alimentación", value: "220 V" },
      { label: "Formato", value: "Cama-techo cuerpo completo IR + NIR" },
    ],
    highlights: ["Cuerpo completo", "6 programas"],
  },
  {
    slug: "nexgen-red-45000",
    name: "NEXGEN RED 45000",
    family: "fotobiomodulacion",
    tier: "flagship",
    tagline: "Cama-techo de máxima densidad lumínica",
    description:
      "La cama-techo más potente de la gama. 45.000 LEDs distribuidos en 5 longitudes de onda para tratamientos profundos y de alta densidad.",
    priceFrom: 32900,
    specs: [
      { label: "LEDs", value: "45.000" },
      { label: "Longitudes de onda", value: "5 (IR + NIR)" },
      { label: "Programas", value: "6" },
      { label: "Formato", value: "Cama-techo" },
    ],
    highlights: ["Máxima densidad", "5 longitudes de onda"],
    featured: true,
  },
  {
    slug: "nexgen-brain",
    name: "NEXGEN BRAIN",
    family: "fotobiomodulacion",
    tier: "specialized",
    tagline: "Casco de fotobiomodulación cerebral",
    description:
      "Casco de fotobiomodulación transcraneal no invasiva con longitudes de onda 810 y 1070 nm. Diseñado para optimización cognitiva.",
    priceFrom: 3490,
    specs: [
      { label: "Longitudes de onda", value: "810 + 1070 nm" },
      { label: "Aplicación", value: "Transcraneal no invasiva" },
    ],
    highlights: ["Optimización cerebral", "No invasivo"],
  },
  {
    slug: "casco-l-352",
    name: "CASCO L-352",
    family: "fotobiomodulacion",
    tier: "complementary",
    tagline: "Fotobiomodulación capilar 352 lasers",
    description:
      "Casco capilar de fotobiomodulación con 352 lasers a 650 nm. Estimulación del folículo piloso.",
    priceFrom: 1190,
    specs: [
      { label: "Lasers", value: "352" },
      { label: "Longitud de onda", value: "650 nm" },
    ],
    highlights: ["Salud capilar"],
  },
  {
    slug: "casco-l-552",
    name: "CASCO L-552",
    family: "fotobiomodulacion",
    tier: "complementary",
    tagline: "Casco capilar 352 lasers + 200 LEDs",
    description:
      "Versión avanzada del casco capilar con 352 lasers y 200 LEDs combinados, todos a 650 nm.",
    priceFrom: 1250,
    specs: [
      { label: "Lasers", value: "352" },
      { label: "LEDs", value: "200" },
      { label: "Longitud de onda", value: "650 nm" },
    ],
    highlights: ["Densidad lumínica capilar"],
  },
  {
    slug: "bm-beautymed",
    name: "BM BEAUTYMED",
    family: "fotobiomodulacion",
    tier: "complementary",
    tagline: "Panel con soporte eléctrico regulable",
    description:
      "Panel de luz roja con soporte eléctrico regulable en altura incluido. Listo para cabinas de estética y wellness.",
    priceFrom: 2690,
    specs: [
      { label: "LEDs", value: "480 × 5 W" },
      { label: "Potencia LED", value: "2.400 W" },
      { label: "Consumo", value: "850 W" },
      { label: "Longitudes de onda", value: "430 / 610 / 630 / 660 / 810 / 830 / 850 nm" },
      { label: "Programas", value: "9" },
      { label: "Dimensiones", value: "1.635 × 300 × 75 mm" },
      { label: "Peso", value: "18 kg" },
      { label: "Vida útil LEDs", value: "50.000 h" },
      { label: "Soporte", value: "Brazo telescópico 360° (manual o eléctrico opcional)" },
    ],
    highlights: ["Soporte incluido"],
  },
  {
    slug: "nexgen-red-s5-1500",
    name: "PANEL NEXGEN RED S5-1500",
    family: "fotobiomodulacion",
    tier: "complementary",
    tagline: "Panel 300 LEDs · 5 longitudes de onda",
    description:
      "Panel compacto de fotobiomodulación con 300 LEDs y 5 longitudes de onda. Seis programas terapéuticos.",
    priceFrom: 1290,
    specs: [
      { label: "LEDs", value: "300" },
      { label: "Longitudes de onda", value: "5" },
      { label: "Programas", value: "6" },
      { label: "Medidas", value: "90 × 30 × 6,5 cm" },
    ],
    highlights: ["Compacto", "6 programas"],
  },
  {
    slug: "nexgen-red-s5-3000",
    name: "PANEL NEXGEN RED S5-3000",
    family: "fotobiomodulacion",
    tier: "complementary",
    tagline: "Panel 600 LEDs · 5 longitudes de onda",
    description: "Panel de fotobiomodulación con 600 LEDs y 5 longitudes de onda. Seis programas.",
    priceFrom: 2290,
    specs: [
      { label: "LEDs", value: "600" },
      { label: "Longitudes de onda", value: "5" },
      { label: "Programas", value: "6" },
      { label: "Medidas", value: "180 × 30 × 6,5 cm" },
    ],
    highlights: ["Cobertura corporal"],
  },
  {
    slug: "nexgen-red-s7-300",
    name: "PANEL NEXGEN RED S7-300",
    family: "fotobiomodulacion",
    tier: "complementary",
    tagline: "Panel localizado 7 longitudes de onda",
    description: "Panel localizado con 60 LEDs y 7 longitudes de onda. 11 programas terapéuticos.",
    priceFrom: 690,
    specs: [
      { label: "LEDs", value: "60" },
      { label: "Longitudes de onda", value: "7" },
      { label: "Programas", value: "11" },
      { label: "Medidas", value: "27 × 23 × 6,5 cm" },
    ],
    highlights: ["Tratamiento localizado"],
  },
  {
    slug: "nexgen-red-s7-3500",
    name: "PANEL NEXGEN RED S-7 3500",
    family: "fotobiomodulacion",
    tier: "complementary",
    tagline: "Panel 600 LEDs · 7 longitudes de onda",
    description:
      "Panel con 600 LEDs y 7 longitudes de onda calibradas. 11 programas para uso clínico.",
    priceFrom: 2590,
    specs: [
      { label: "LEDs", value: "600" },
      { label: "Longitudes de onda", value: "7" },
      { label: "Programas", value: "11" },
      { label: "Medidas", value: "150 × 42 × 6,5 cm" },
    ],
    highlights: ["7 longitudes de onda"],
  },
  {
    slug: "nexgen-red-s7-6000",
    name: "PANEL NEXGEN RED S-7 6000",
    family: "fotobiomodulacion",
    tier: "complementary",
    tagline: "Panel XL 1200 LEDs · 7 longitudes de onda",
    description:
      "Panel de cobertura corporal con 1200 LEDs y 7 longitudes de onda. 11 programas profesionales.",
    priceFrom: 4590,
    specs: [
      { label: "LEDs", value: "1200" },
      { label: "Longitudes de onda", value: "7" },
      { label: "Programas", value: "11" },
      { label: "Medidas", value: "180 × 60 × 6,5 cm" },
    ],
    highlights: ["Cobertura XL"],
  },
  {
    slug: "photon-red-t-3000",
    name: "PANEL PHOTON RED T-3000",
    family: "fotobiomodulacion",
    tier: "complementary",
    tagline: "Panel premium negro 600 × 5W",
    description: "Panel de fotobiomodulación premium con acabado negro y 600 diodos de 5W.",
    priceFrom: 1590,
    specs: [
      { label: "Diodos", value: "600 × 5W" },
      { label: "Acabado", value: "Negro" },
      { label: "Medidas", value: "168 × 50 × 18 cm" },
    ],
    highlights: ["Acabado premium"],
  },

  // ───── Hipoxia ─────
  {
    slug: "hypoxbreath-med",
    name: "HYPOXBREATH MED",
    family: "hipoxia",
    tier: "flagship",
    tagline: "Hipoxia intermitente con CE médico MDR",
    description:
      "Equipo de hipoxia-hiperoxia intermitente adaptativa con certificación CE médica MDR. Diseñado para uso clínico y supervisión profesional.",
    priceFrom: 24900,
    specs: [
      { label: "Tecnología", value: "Hipoxia-hiperoxia intermitente adaptativa" },
      { label: "Monitorización", value: "Ajuste en tiempo real según FC y SpO₂" },
      { label: "Certificación", value: "CE médico MDR" },
      { label: "Uso", value: "Clínico supervisado" },
    ],
    highlights: ["Grado médico", "Uso clínico"],
    featured: true,
  },
  {
    slug: "hypoxbreath-advanced",
    name: "HYPOXBREATH ADVANCED",
    family: "hipoxia",
    tier: "flagship",
    tagline: "Hipoxia adaptativa con conectividad nube",
    description:
      "Versión avanzada con conectividad cloud incluida el primer año. Seguimiento longitudinal y protocolos personalizados.",
    priceFrom: 25490,
    specs: [
      { label: "Tecnología", value: "Hipoxia-hiperoxia intermitente adaptativa" },
      { label: "Monitorización", value: "Ajuste en tiempo real según FC y SpO₂" },
      { label: "Conectividad", value: "Plataforma cloud · 1er año incluido" },
      { label: "Retroalimentación", value: "BIO en tiempo real" },
    ],
    highlights: ["Conectividad cloud", "Protocolos personalizados"],
  },

  // ───── Multitecnología ─────
  {
    slug: "qvita",
    name: "QVITA",
    family: "multitecnologia",
    tier: "flagship",
    tagline: "Plataforma multitecnológica de bioactivación",
    description:
      "Pieza singular que combina cuatro tecnologías de bioactivación —PBM, PEMF, MHI y VAT— en una única plataforma. Sesiones sinérgicas en un solo dispositivo.",
    priceFrom: 34900,
    specs: [
      { label: "Tecnologías integradas", value: "PBM (IR+NIR) + PEMF + H₂ (HIT) + VAT" },
      { label: "Aplicación", value: "Bioactivación mitocondrial multitecnología" },
      { label: "Formato", value: "Plataforma integrada de sesión única" },
      { label: "Beneficios", value: "Estrés oxidativo, microcirculación, recuperación" },
    ],
    highlights: ["4 tecnologías en 1", "Sesiones sinérgicas"],
    featured: true,
  },

  // ───── Neuroacústica ─────
  {
    slug: "nexgen-neuro-sillon",
    name: "NEXGEN NEURO SILLÓN",
    family: "neuroacustica",
    tier: "specialized",
    tagline: "Sillón VAT para recuperación profunda",
    description:
      "Sillón ergonómico con tecnología de vibración acústica (VAT) para relajación parasimpática y recuperación neurológica.",
    priceFrom: 6950,
    specs: [
      { label: "Tecnología", value: "VAT" },
      { label: "Formato", value: "Sillón ergonómico" },
    ],
    highlights: ["Vibración acústica", "Reset parasimpático"],
  },
  {
    slug: "nexgen-neuro-chaise-lounge",
    name: "NEXGEN NEURO CHAISE LOUNGE",
    family: "neuroacustica",
    tier: "specialized",
    tagline: "Chaise lounge VAT premium",
    description:
      "Versión chaise lounge del sistema VAT, con mayor superficie de contacto y postura semireclinada para sesiones extendidas.",
    priceFrom: 7690,
    specs: [
      { label: "Tecnología", value: "VAT" },
      { label: "Formato", value: "Chaise lounge" },
    ],
    highlights: ["Sesiones extendidas", "Mayor superficie VAT"],
  },

  // ───── PEMF & Ondas de choque ─────
  {
    slug: "pemf-100",
    name: "PEMF 100",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "Pulso electromagnético · 5 programas",
    description: "Equipo de pulso electromagnético con 5 programas preconfigurados.",
    priceFrom: 2290,
    specs: [
      { label: "Tecnología", value: "PEMF" },
      { label: "Programas", value: "5" },
    ],
    highlights: ["PEMF entry"],
  },
  {
    slug: "pemf-500",
    name: "PEMF 500",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "Pulso electromagnético · 8 programas",
    description: "Equipo PEMF avanzado con 8 programas para uso clínico.",
    priceFrom: 2590,
    specs: [
      { label: "Tecnología", value: "PEMF" },
      { label: "Programas", value: "8" },
    ],
    highlights: ["8 programas"],
  },
  {
    slug: "longest-lgt-2500s-plus",
    name: "LONGEST LGT-2500S PLUS",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "Ondas de choque radiales + vibración",
    description: "Equipo de ondas de choque radiales con vibración mecánica integrada.",
    priceFrom: 9900,
    specs: [
      { label: "Tipo de onda", value: "Radial" },
      { label: "Extras", value: "Masaje vibratorio integrado" },
      { label: "Aplicaciones", value: "Traumatología, estética, uroginecología" },
      { label: "Certificación", value: "FDA approved" },
    ],
    highlights: ["Radial + vibración"],
  },
  {
    slug: "longest-lgt-2500x-plus",
    name: "LONGEST LGT-2500X PLUS",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "Ondas de choque focales premium",
    description:
      "Equipo de ondas de choque focales para tratamiento de tejidos profundos. Aplicaciones en traumatología, estética y uroginecología.",
    priceFrom: 10900,
    specs: [
      { label: "Tipo de onda", value: "Focal" },
      { label: "Aplicaciones", value: "Traumatología, estética, uroginecología" },
      { label: "Tratamiento", value: "Tejidos profundos" },
    ],
    highlights: ["Prestaciones reforzadas"],
  },
  {
    slug: "emfocus-ii",
    name: "EMFOCUS II",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "Ondas de choque focales",
    description: "Equipo de ondas focales para tratamiento de tejidos profundos.",
    priceFrom: 9900,
    specs: [{ label: "Tipo de onda", value: "Focal" }],
    highlights: ["Tratamiento profundo"],
  },
  {
    slug: "emfocus-v",
    name: "EMFOCUS V",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "Ondas de choque focales versión V",
    description: "Versión V del EMFOCUS, con configuración optimizada para clínica.",
    priceFrom: 9900,
    specs: [{ label: "Tipo de onda", value: "Focal" }],
    highlights: ["Configuración clínica"],
  },
  {
    slug: "fisiobox-focal-radial-vibrador",
    name: "FISIOBOX · Focales + Radiales + Vibrador",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "Estación modular focal + radial",
    description: "Combinación de ondas focales, radiales y vibrador en una sola estación modular.",
    priceFrom: 13900,
    specs: [{ label: "Módulos", value: "Focal + Radial + Vibrador" }],
    highlights: ["Modular"],
  },
  {
    slug: "fisiobox-radial-magneto-vibrador",
    name: "FISIOBOX · Radiales + Magneto + Vibrador",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "Radiales + magnetoterapia + vibrador",
    description: "Estación con radiales, magnetoterapia y vibrador integrados.",
    priceFrom: 13900,
    specs: [{ label: "Módulos", value: "Radial + Magneto + Vibrador" }],
    highlights: ["Radial + magneto"],
  },
  {
    slug: "fisiobox-pemf-magneto",
    name: "FISIOBOX · PEMF + Magneto",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "PEMF + magnetoterapia",
    description: "Estación con PEMF y magnetoterapia.",
    priceFrom: 13900,
    specs: [{ label: "Módulos", value: "PEMF + Magneto" }],
    highlights: ["PEMF + magneto"],
  },
  {
    slug: "fisiobox-tecar-radiales-electroterapia",
    name: "FISIOBOX · TECAR + Radiales + Electroterapia",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "TECAR + radiales + electroterapia",
    description: "Estación de fisioterapia con TECAR, radiales y electroterapia.",
    priceFrom: 13900,
    specs: [{ label: "Módulos", value: "TECAR + Radial + Electro" }],
    highlights: ["TECAR clínica"],
  },
  {
    slug: "fisiobox-tecar-magneto-cold-laser",
    name: "FISIOBOX · TECAR + Magneto + Cold Laser",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "TECAR + magneto + cold laser",
    description: "Estación con TECAR, magnetoterapia y cold laser combinados.",
    priceFrom: 13900,
    specs: [{ label: "Módulos", value: "TECAR + Magneto + Cold Laser" }],
    highlights: ["3 tecnologías"],
  },
  {
    slug: "fisiobox-laser-alta-magneto",
    name: "FISIOBOX · Láser Alta Intensidad + Magneto",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "Láser HILT + magnetoterapia",
    description: "Estación con láser de alta intensidad y magnetoterapia.",
    priceFrom: 14900,
    specs: [{ label: "Módulos", value: "HILT + Magneto" }],
    highlights: ["HILT clínico"],
  },
  {
    slug: "fisiobox-laser-alta-radiales",
    name: "FISIOBOX · Láser Alta Intensidad + Radiales",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "Láser HILT + ondas radiales",
    description: "Estación con láser de alta intensidad y ondas radiales.",
    priceFrom: 14900,
    specs: [{ label: "Módulos", value: "HILT + Radial" }],
    highlights: ["HILT + radial"],
  },

  // ───── Hidrógeno ─────
  {
    slug: "nexgen-h2-4200",
    name: "NEXGEN H2 4200",
    family: "hidrogeno",
    tier: "specialized",
    tagline: "Generador-concentrador de hidrógeno 4200 ml/min",
    description: "Generador-concentrador de hidrógeno con flujo de 4200 ml/min y desinfección UVC.",
    priceFrom: 6490,
    specs: [
      { label: "Flujo", value: "4200 ml/min" },
      { label: "Desinfección", value: "UVC" },
    ],
    highlights: ["UVC integrado"],
  },
  {
    slug: "nexgen-h2-o2-4200",
    name: "NEXGEN H2/O2 4200",
    family: "hidrogeno",
    tier: "specialized",
    tagline: "Generador-concentrador H2 + O2 4200 ml/min",
    description: "Generador-concentrador de H2 y O2 combinados, 4200 ml/min, con desinfección UVC.",
    priceFrom: 6490,
    specs: [
      { label: "Flujo", value: "4200 ml/min" },
      { label: "Gases", value: "H2 + O2" },
      { label: "Desinfección", value: "UVC" },
    ],
    highlights: ["H2 + O2 en uno"],
  },

  // ───── Diagnóstico & Rehabilitación ─────
  {
    slug: "visbody-m-30",
    name: "VISBODY M-30",
    family: "diagnostico-rehabilitacion",
    tier: "complementary",
    tagline: "Escáner 3D y analizador postural",
    description: "Escáner 3D corporal con análisis postural integrado.",
    priceFrom: 6950,
    specs: [
      { label: "Tipo", value: "Escáner 3D/4D + análisis postural" },
      { label: "Evaluaciones posturales", value: "9 en 3D" },
      { label: "Mediciones corporales", value: "14 contornos" },
      { label: "Análisis dinámico", value: "Hombros" },
      { label: "Composición corporal", value: "4 valores" },
    ],
    highlights: ["Análisis postural"],
  },
  {
    slug: "visbody-s-30",
    name: "VISBODY S-30",
    family: "diagnostico-rehabilitacion",
    tier: "complementary",
    tagline: "Escáner 3D + composición + postura",
    description: "Escáner 3D con análisis de composición corporal y postura.",
    priceFrom: 13900,
    specs: [
      { label: "Tipo", value: "Avatar 3D + postura + BIA" },
      { label: "Análisis composición", value: "15 parámetros" },
      { label: "Alimentación", value: "AC 100–240 V / 50–60 Hz" },
      { label: "Columna", value: "1.681 × 400 × 685 mm" },
      { label: "Plataforma", value: "600 mm Ø" },
      { label: "Peso equipo", value: "56,5 kg" },
      { label: "Peso máx. usuario", value: "250 kg" },
    ],
    highlights: ["3 en 1"],
  },
  {
    slug: "visbody-m-60",
    name: "VISBODY M-60",
    family: "diagnostico-rehabilitacion",
    tier: "complementary",
    tagline: "Escáner 3D avanzado",
    description: "Modelo avanzado del Visbody con análisis de composición y postura.",
    priceFrom: 15900,
    specs: [
      { label: "Tipo", value: "Escáner 3D/4D avanzado" },
      { label: "Evaluaciones posturales", value: "9 en 3D" },
      { label: "Mediciones corporales", value: "14 contornos" },
      { label: "Composición corporal", value: "Análisis ampliado" },
    ],
    highlights: ["Precisión avanzada"],
  },
  {
    slug: "tesla-chair",
    name: "TESLA CHAIR",
    family: "diagnostico-rehabilitacion",
    tier: "complementary",
    tagline: "Silla pélvica Kegel electromagnética",
    description: "Silla pélvica electromagnética para entrenamiento de suelo pélvico.",
    priceFrom: 4900,
    specs: [
      { label: "Tecnología", value: "Electromagnética focal" },
      { label: "Aplicación", value: "Suelo pélvico y disfunción eréctil" },
      { label: "Duración sesión", value: "20 min" },
      { label: "Uso", value: "Manos libres, sin desvestirse" },
    ],
    highlights: ["Suelo pélvico"],
  },
  {
    slug: "bodybot-pro",
    name: "BODYBOT PRO",
    family: "diagnostico-rehabilitacion",
    tier: "specialized",
    tagline: "Robot de rehabilitación dinámica",
    description: "Robot automatizado para rehabilitación espinal y corporal dinámica.",
    priceFrom: 8900,
    specs: [
      { label: "Aplicación", value: "Rehabilitación espinal y corporal dinámica" },
      { label: "Tecnologías", value: "5 modalidades integradas" },
      { label: "Operación", value: "Manos libres, automatizada" },
    ],
    highlights: ["Automatizado"],
  },
  {
    slug: "hotbot",
    name: "HOTBOT",
    family: "diagnostico-rehabilitacion",
    tier: "specialized",
    tagline: "Robot automático de masaje con RF",
    description: "Robot automatizado con 5 programas de masaje con radiofrecuencia.",
    priceFrom: 29000,
    specs: [
      { label: "Programas", value: "5 terapéuticos" },
      { label: "Tecnología", value: "Masaje robótico IA + RF 250 kHz" },
      { label: "Brazo robótico", value: "922 mm · carga 5 kg" },
      { label: "Dimensiones", value: "490 × 860 × 1.120 mm" },
      { label: "Peso", value: "115 kg" },
      { label: "Conectividad", value: "IoT + Big Data" },
    ],
    highlights: ["Masaje + RF"],
  },
  {
    slug: "theraflex-pro-r3",
    name: "THERAFLEX PRO R3",
    family: "diagnostico-rehabilitacion",
    tier: "specialized",
    tagline: "Robot de fisioterapia con 4 cabezales",
    description:
      "Robot para fisioterapia con 4 cabezales intercambiables. Diseñado para clínicas.",
    priceFrom: 39000,
    specs: [{ label: "Cabezales", value: "4 intercambiables" }],
    highlights: ["4 cabezales"],
  },
  {
    slug: "bodivis-bca-fit",
    name: "BODIVIS BCA FIT",
    family: "diagnostico-rehabilitacion",
    tier: "complementary",
    tagline: "Analizador de composición corporal",
    description: "Analizador de composición corporal de uso fitness y wellness.",
    priceFrom: 2700,
    specs: [
      { label: "Tipo", value: "BIA (bioimpedancia)" },
      { label: "Alimentación", value: "220 V / 50 Hz" },
      { label: "Frecuencia", value: "50–250 kHz" },
      { label: "Dimensiones", value: "662 × 410 × 968 mm" },
      { label: "Peso", value: "10 kg" },
      { label: "Rango usuario", value: "10–200 kg · 7–99 años" },
    ],
    highlights: ["Wellness"],
  },
  {
    slug: "bodivis-bca-med",
    name: "BODIVIS BCA MED",
    family: "diagnostico-rehabilitacion",
    tier: "complementary",
    tagline: "Analizador médico de composición corporal",
    description: "Versión médica del analizador Bodivis con mayor precisión y certificación.",
    priceFrom: 8900,
    specs: [
      { label: "Tipo", value: "BIA grado médico" },
      { label: "Alimentación", value: "220 V / 50 Hz" },
      { label: "Frecuencia", value: "50–250 kHz" },
      { label: "Dimensiones", value: "662 × 410 × 968 mm" },
      { label: "Peso", value: "10 kg" },
      { label: "Rango usuario", value: "10–200 kg · 7–99 años" },
    ],
    highlights: ["Grado médico"],
  },
  {
    slug: "longest-lg-2210ds",
    name: "LONGEST LG-2210DS",
    family: "diagnostico-rehabilitacion",
    tier: "complementary",
    tagline: "Botas de presoterapia cuerpo completo",
    description: "Sistema de presoterapia cuerpo completo con botas profesionales.",
    priceFrom: 3590,
    specs: [
      { label: "Tipo", value: "Presoterapia con botas" },
      { label: "Presión", value: "50–150 mmHg" },
      { label: "Timer", value: "15–45 min" },
      { label: "Modos", value: "4 de masaje" },
      { label: "Botas", value: "4 cámaras" },
      { label: "Ruido", value: "< 40 dB" },
    ],
    highlights: ["Cuerpo completo"],
  },
  {
    slug: "tesla-neo",
    name: "TESLA NEO",
    family: "diagnostico-rehabilitacion",
    tier: "complementary",
    tagline: "Camilla eléctrica 4 motores",
    description:
      "Camilla eléctrica de 4 motores con botonera integrada, pedales y regulación de 67 a 120 cm. Acabado blanco.",
    priceFrom: 2290,
    specs: [
      { label: "Motores", value: "4" },
      { label: "Regulación", value: "67–120 cm" },
      { label: "Medidas", value: "182 × 82 cm" },
      { label: "Peso soportado", value: "—" },
    ],
    highlights: ["4 motores", "Pedales y botonera"],
  },
  {
    slug: "tesla-neo-heat",
    name: "TESLA NEO HEAT",
    family: "diagnostico-rehabilitacion",
    tier: "complementary",
    tagline: "Camilla eléctrica 4 motores con calefacción",
    description: "Versión calefactada de la camilla Tesla Neo.",
    priceFrom: 2490,
    specs: [
      { label: "Motores", value: "4" },
      { label: "Extras", value: "Calefacción integrada" },
    ],
    highlights: ["Calefacción"],
  },
];

export const TIER_ORDER: Record<Tier, number> = {
  flagship: 0,
  specialized: 1,
  complementary: 2,
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

export const machinesByFamily = (slug: FamilySlug) =>
  MACHINES.filter((m) => m.family === slug).sort(
    (a, b) => TIER_ORDER[a.tier] - TIER_ORDER[b.tier] || b.priceFrom - a.priceFrom,
  );

export const machineBySlug = (slug: string) => MACHINES.find((m) => m.slug === slug);

export const familyBySlug = (slug: string) => FAMILIES.find((f) => f.slug === slug);

export const featuredMachines = () => MACHINES.filter((m) => m.featured);

export const allMachinesSorted = () =>
  [...MACHINES].sort(
    (a, b) => TIER_ORDER[a.tier] - TIER_ORDER[b.tier] || b.priceFrom - a.priceFrom,
  );
