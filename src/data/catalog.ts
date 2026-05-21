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
    tagline: "Cabina eléctrica de crioterapia cuerpo completo",
    description:
      "Cabina eléctrica de última generación para crioterapia de cuerpo completo. Tecnología seca sin nitrógeno líquido, control térmico de precisión y experiencia de usuario premium.",
    priceFrom: 89000,
    specs: [
      { label: "Tipo", value: "Cabina eléctrica" },
      { label: "Temperatura", value: "−110 ºC" },
      { label: "Sesión", value: "2–3 min" },
      { label: "Tecnología", value: "Sin nitrógeno líquido" },
    ],
    highlights: ["Recuperación deportiva", "Antiinflamatorio sistémico", "Longevidad"],
    featured: true,
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
      { label: "Tipo", value: "Flotación en seco" },
      { label: "Tecnología", value: "Criosensorial" },
      { label: "Uso", value: "Wellness premium" },
    ],
    highlights: ["Reset parasimpático", "Recuperación sensorial"],
  },
  {
    slug: "nexgen-polar-core",
    name: "NEXGEN POLAR CORE",
    family: "crioterapia",
    tier: "complementary",
    tagline: "Cold Plunge AIO acrílico",
    description:
      "Baño de inmersión fría todo-en-uno con cuba acrílica, refrigeración integrada de 1 HP y temperatura sostenida a 3 ºC.",
    priceFrom: 7490,
    specs: [
      { label: "Material", value: "Acrílico" },
      { label: "Temperatura", value: "3 ºC" },
      { label: "Refrigeración", value: "1 HP" },
      { label: "Medidas", value: "195 × 80 × 71 cm" },
    ],
    highlights: ["AIO integrado", "Instalación rápida"],
  },
  {
    slug: "nexgen-polar-elite",
    name: "NEXGEN POLAR ELITE",
    family: "crioterapia",
    tier: "complementary",
    tagline: "Cold Plunge AIO cedro y acero",
    description:
      "Versión premium del cold plunge con cuba de madera de cedro y acero inoxidable. Construcción artesanal y estética spa.",
    priceFrom: 9590,
    specs: [
      { label: "Material", value: "Cedro / Acero" },
      { label: "Temperatura", value: "3 ºC" },
      { label: "Refrigeración", value: "1 HP" },
      { label: "Medidas", value: "200 × 84 × 75 cm" },
    ],
    highlights: ["Estética spa", "Madera de cedro"],
  },
  {
    slug: "nexgen-polar-nba",
    name: "NEXGEN POLAR NBA",
    family: "crioterapia",
    tier: "complementary",
    tagline: "Cold Plunge AIO 0 ºC grado profesional",
    description:
      "Modelo de máximo rendimiento para uso intensivo. Llega a 0 ºC con refrigeración reforzada de 1–2 HP. Diseñado para clubes deportivos de élite.",
    priceFrom: 10590,
    specs: [
      { label: "Material", value: "Cedro / Acero" },
      { label: "Temperatura", value: "0 ºC" },
      { label: "Refrigeración", value: "1–2 HP" },
      { label: "Medidas", value: "200 × 84 × 75 cm" },
    ],
    highlights: ["Uso profesional intensivo", "0 ºC sostenidos"],
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
      { label: "Presión", value: "2 ATA" },
      { label: "Flujo O₂", value: "15 l/min" },
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
      { label: "Presión", value: "2 ATA" },
      { label: "Flujo O₂", value: "15 l/min" },
      { label: "Acabados", value: "Premium" },
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
      { label: "Presión", value: "2 ATA" },
      { label: "Flujo O₂", value: "30 l/min" },
      { label: "Entrega", value: "Sistema BIBS" },
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
      { label: "LEDs", value: "26.000" },
      { label: "Longitudes de onda", value: "4 (IR + NIR)" },
      { label: "Programas", value: "6" },
      { label: "Formato", value: "Cama-techo" },
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
    specs: [{ label: "Soporte", value: "Eléctrico regulable" }],
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
      { label: "Certificación", value: "CE médico MDR" },
      { label: "Tecnología", value: "Hipoxia-hiperoxia adaptativa" },
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
      { label: "Tecnología", value: "Hipoxia-hiperoxia adaptativa" },
      { label: "Conectividad", value: "Nube · 1er año incluido" },
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
      { label: "Tecnologías", value: "PBM + PEMF + MHI + VAT" },
      { label: "Formato", value: "Plataforma integrada" },
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
      { label: "Extras", value: "Vibración" },
    ],
    highlights: ["Radial + vibración"],
  },
  {
    slug: "longest-lgt-2500x-plus",
    name: "LONGEST LGT-2500X PLUS",
    family: "pemf-ondas-choque",
    tier: "specialized",
    tagline: "Ondas de choque radiales premium",
    description: "Modelo superior de la gama Longest con prestaciones reforzadas.",
    priceFrom: 10900,
    specs: [
      { label: "Tipo de onda", value: "Radial" },
      { label: "Extras", value: "Vibración" },
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
    specs: [{ label: "Tipo", value: "Escáner 3D + postura" }],
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
    specs: [{ label: "Tipo", value: "Escáner 3D + composición + postura" }],
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
    specs: [{ label: "Tipo", value: "Escáner 3D + composición + postura" }],
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
    specs: [{ label: "Tecnología", value: "Electromagnética" }],
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
    specs: [{ label: "Aplicación", value: "Rehabilitación espinal y corporal" }],
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
      { label: "Programas", value: "5" },
      { label: "Tecnología", value: "Masaje + RF" },
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
    specs: [{ label: "Tipo", value: "BIA" }],
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
    specs: [{ label: "Tipo", value: "BIA grado médico" }],
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
    specs: [{ label: "Tipo", value: "Botas presoterapia" }],
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
