export type Section = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export const SECTIONS: Section[] = [
  {
    id: "accueil",
    name: "Accueil",
    slug: "accueil",
    description:
      "Présentation de l'association et mise en avant des derniers articles",
  },
  {
    id: "association",
    name: "L'association",
    slug: "association",
    description: "Qui sommes-nous, nos ruchers et comment nous soutenir",
  },
  {
    id: "ressources",
    name: "Blog & ressources",
    slug: "ressources",
    description: "Articles, guides pratiques et liens utiles sur l'apiculture",
  },
  {
    id: "evenements",
    name: "Contact & événements",
    slug: "evenements",
    description: "Agenda des événements et formulaire de contact",
  },
];

export const getSectionBySlug = (slug: string): Section | undefined => {
  return SECTIONS.find((section) => section.slug === slug);
};
