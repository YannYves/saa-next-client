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
    id: "blog-ressources",
    name: "Blog & ressources",
    slug: "blog-ressources",
    description: "Articles, guides pratiques et liens utiles sur l'apiculture",
  },
  {
    id: "contact-evenements",
    name: "Contact & événements",
    slug: "contact-evenements",
    description: "Agenda des événements et formulaire de contact",
  },
];

export const getSectionBySlug = (slug: string): Section | undefined => {
  return SECTIONS.find((section) => section.slug === slug);
};
