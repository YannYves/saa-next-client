export type Section = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export const SECTIONS: Section[] = [
  {
    id: "la-vie-du-syndicat",
    name: "La Vie du Syndicat",
    slug: "la-vie-du-syndicat",
    description: "Actualités et informations sur les activités du syndicat",
  },
  {
    id: "le-rucher-ecole",
    name: "Le Rucher École",
    slug: "le-rucher-ecole",
    description: "Formations et activités du rucher école",
  },
  {
    id: "utile",
    name: "Utile",
    slug: "utile",
    description: "Informations pratiques et ressources utiles",
  },
  {
    id: "actualites",
    name: "Actualités",
    slug: "actualites",
    description: "Actualités générales sur l'apiculture",
  },
];

export const getSectionBySlug = (slug: string): Section | undefined => {
  return SECTIONS.find((section) => section.slug === slug);
};
