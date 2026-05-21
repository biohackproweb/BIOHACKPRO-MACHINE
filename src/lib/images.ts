import heroLab from "@/assets/hero-lab.jpg";
import imgCryo from "@/assets/machine-cryo.jpg";
import imgHyperbaric from "@/assets/machine-hyperbaric.jpg";
import imgRedlight from "@/assets/machine-redlight.jpg";
import imgPlatform from "@/assets/machine-platform.jpg";
import type { FamilySlug } from "@/data/catalog";

export const heroImage = heroLab;

const familyMap: Record<FamilySlug, string> = {
  crioterapia: imgCryo,
  hiperbaricas: imgHyperbaric,
  fotobiomodulacion: imgRedlight,
  hipoxia: imgHyperbaric,
  multitecnologia: imgPlatform,
  neuroacustica: imgPlatform,
  "pemf-ondas-choque": imgPlatform,
  hidrogeno: imgRedlight,
  "diagnostico-rehabilitacion": imgPlatform,
};

export const imageForFamily = (family: FamilySlug) => familyMap[family];

export const imageForMachine = (slug: string, family: FamilySlug) => {
  // Specific overrides for flagship machines
  if (slug === "cryo-paradox") return imgCryo;
  if (slug.startsWith("nexgen-o2")) return imgHyperbaric;
  if (slug.startsWith("nexgen-red") || slug === "photon-red-t-3000") return imgRedlight;
  if (slug === "qvita") return imgPlatform;
  return familyMap[family];
};
