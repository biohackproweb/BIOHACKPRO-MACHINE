import heroLab from "@/assets/hero-lab.jpg";
import imgCryo from "@/assets/machine-cryo.jpg";
import imgHyperbaric from "@/assets/machine-hyperbaric.jpg";
import imgRedlight from "@/assets/machine-redlight.jpg";
import imgPlatform from "@/assets/machine-platform.jpg";
import imgSensocryo from "@/assets/sensocryo.png";
import imgCryoParadox from "@/assets/cryoparadox.png";
import imgCryoParadox2 from "@/assets/cryoparadox2.jpg";
import imgCryoParadox3 from "@/assets/cryoparadox3.jpg";
import imgCryoParadox4 from "@/assets/cryoparadox4.jpg";
import imgCryoParadox5 from "@/assets/cryoparadox5.jpg";
import imgCryoParadox6 from "@/assets/cryoparadox6.jpg";
import imgCryoParadox7 from "@/assets/cryoparadox7.jpg";
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
  if (slug === "cryo-paradox") return imgCryoParadox;
  if (slug === "sensocryo") return imgSensocryo;
  if (slug.startsWith("nexgen-o2")) return imgHyperbaric;
  if (slug.startsWith("nexgen-red") || slug === "photon-red-t-3000") return imgRedlight;
  if (slug === "qvita") return imgPlatform;
  return familyMap[family];
};

/** Galería por máquina: slug → nombre de archivo en assets → URL importada */
const machineGallery: Record<string, Record<string, string>> = {
  "cryo-paradox": {
    "cryoparadox2.jpg": imgCryoParadox2,
    "cryoparadox3.jpg": imgCryoParadox3,
    "cryoparadox4.jpg": imgCryoParadox4,
    "cryoparadox5.jpg": imgCryoParadox5,
    "cryoparadox6.jpg": imgCryoParadox6,
    "cryoparadox7.jpg": imgCryoParadox7,
  },
};

export const galleryImageForMachine = (
  slug: string,
  filename: string,
): string | undefined => machineGallery[slug]?.[filename];
