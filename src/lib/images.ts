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
import imgCategoryCrioterapia from "@/assets/category-crioterapia.jpg";
import imgCategoryHiperbaricas from "@/assets/category-hiperbaricas.jpg";
import imgCategoryFotobiomodulacion from "@/assets/category-fotobiomodulacion.jpg";
import imgCategoryHipoxia from "@/assets/category-hipoxia.jpg";
import imgCategoryMultitecnologia from "@/assets/category-multitecnologia.jpg";
import imgCategoryNeuroacustica from "@/assets/category-neuroacustica.jpg";
import imgCategoryPemf from "@/assets/category-pemf-ondas-choque.jpg";
import imgCategoryHidrogeno from "@/assets/category-hidrogeno.jpg";
import imgCategoryDiagnostico from "@/assets/category-diagnostico-rehabilitacion.jpg";
import type { FamilySlug } from "@/data/catalog";

const machineSvgSlugs = new Set([
  "nexgen-polar-core",
  "nexgen-polar-elite",
  "nexgen-polar-nba",
]);

/** Máquinas con ilustración SVG: usar object-contain en tarjetas y listados */
export const isMachineSvgImage = (slug: string) => machineSvgSlugs.has(slug);

const nexgenPolarSlugToFile: Record<string, string> = {
  "nexgen-polar-core": "nexgencore.svg",
  "nexgen-polar-elite": "nexgenelite.svg",
  "nexgen-polar-nba": "nexgennba.svg",
};

const nexgenPolarAssets = import.meta.glob<string>("../assets/nexgen*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

const nexgenPolarImageBySlug: Partial<Record<string, string>> = Object.fromEntries(
  Object.entries(nexgenPolarSlugToFile)
    .map(([slug, filename]) => {
      const entry = Object.entries(nexgenPolarAssets).find(([path]) =>
        path.endsWith(`/${filename}`),
      );
      return entry ? [slug, entry[1]] : null;
    })
    .filter((entry): entry is [string, string] => entry !== null),
);

/** Imagen por producto: src/assets/machines/{slug}.{jpg|png} */
const machineAssets = import.meta.glob<string>("../assets/machines/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const machineImageBySlug: Partial<Record<string, string>> = Object.fromEntries(
  Object.entries(machineAssets).map(([path, url]) => {
    const filename = path.split("/").pop() ?? "";
    const slug = filename.replace(/\.(jpg|jpeg|png|webp)$/i, "");
    return [slug, url];
  }),
);

export const heroImage = heroLab;

/** Imagen de portada por categoría (página y listado de familias) */
const familyCategoryMap: Record<FamilySlug, string> = {
  crioterapia: imgCategoryCrioterapia,
  hiperbaricas: imgCategoryHiperbaricas,
  fotobiomodulacion: imgCategoryFotobiomodulacion,
  hipoxia: imgCategoryHipoxia,
  multitecnologia: imgCategoryMultitecnologia,
  neuroacustica: imgCategoryNeuroacustica,
  "pemf-ondas-choque": imgCategoryPemf,
  hidrogeno: imgCategoryHidrogeno,
  "diagnostico-rehabilitacion": imgCategoryDiagnostico,
};

/** Fallback para máquinas sin foto propia */
const machineFamilyFallback: Record<FamilySlug, string> = {
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

export const imageForFamily = (family: FamilySlug) => familyCategoryMap[family];

export const imageForMachine = (slug: string, family: FamilySlug) => {
  // Crioterapia: overrides específicos (no usar machines/)
  if (slug === "cryo-paradox") return imgCryoParadox;
  if (slug === "sensocryo") return imgSensocryo;
  const nexgenPolar = nexgenPolarImageBySlug[slug];
  if (nexgenPolar) return nexgenPolar;

  const machineImage = machineImageBySlug[slug];
  if (machineImage) return machineImage;

  return machineFamilyFallback[family];
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
