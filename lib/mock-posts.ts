import { Section } from "./sections";

export type MockAuthor = {
  id: string;
  name: string;
  profile_image: string;
};

export type MockPost = {
  id: string;
  title: string;
  slug: string;
  published_at: string;
  feature_image: string;
  content: string;
  featured: boolean;
  primary_author: {
    name: string;
    profile_image: string;
  };
  section: string;
};

// Mock authors
export const mockAuthors: MockAuthor[] = [
  {
    id: "1",
    name: "Marie Schmidt",
    profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
  },
  {
    id: "2",
    name: "Jean-Pierre Martin",
    profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
  },
  {
    id: "3",
    name: "Sophie Dubois",
    profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
  },
  {
    id: "4",
    name: "Pierre Durand",
    profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre",
  },
];

// Mock posts
export const mockPosts: MockPost[] = [
  {
    id: "1",
    title: "Welcome to Our Blog",
    slug: "welcome-to-our-blog",
    published_at: "2024-03-20T10:00:00Z",
    feature_image: "https://source.unsplash.com/random/800x600?nature",
    content: "This is our first blog post. Welcome!",
    featured: true,
    primary_author: {
      name: "John Doe",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    section: "accueil",
  },
  {
    id: "2",
    title: "Getting Started",
    slug: "getting-started",
    published_at: "2024-03-21T15:30:00Z",
    feature_image: "https://source.unsplash.com/random/800x600?technology",
    content: "Learn how to get started with our platform.",
    featured: false,
    primary_author: {
      name: "Jane Smith",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    section: "accueil",
  },
  {
    id: "3",
    title: "Best Practices",
    slug: "best-practices",
    published_at: "2024-03-22T09:15:00Z",
    feature_image: "https://source.unsplash.com/random/800x600?business",
    content: "Discover our recommended best practices.",
    featured: true,
    primary_author: {
      name: "Mock Author",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
    },
    section: "accueil",
  },
  {
    id: "mock-1",
    title: "L'apiculteur bénévole : pourquoi pas vous ?",
    slug: "apiculteur-benevole-pourquoi-pas-vous",
    published_at: "2024-03-15T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `
      <p>Devenir apiculteur bénévole est une excellente façon de contribuer à la préservation des abeilles.</p>
      <h2>Comment commencer ?</h2>
      <p>Voici les étapes pour devenir apiculteur bénévole :</p>
      <ul>
        <li>Participer à une formation</li>
        <li>Rejoindre un rucher école</li>
        <li>Accompagner un apiculteur expérimenté</li>
      </ul>
    `,
    featured: true,
    primary_author: {
      name: "Marie Schmidt",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    },
    section: "accueil",
  },
  {
    id: "mock-2",
    title: "Le Rucher École : Formation des futurs apiculteurs",
    slug: "rucher-ecole-formation",
    published_at: "2024-03-14T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `
      <p>Le Rucher École du Syndicat Apicole d'Alsace accueille chaque année de nombreux stagiaires souhant se former à l'apiculture.</p>
      <h2>Le programme de formation</h2>
      <p>La formation comprend :</p>
      <ul>
        <li>Des cours théoriques sur la biologie de l'abeille</li>
        <li>Des ateliers pratiques au rucher</li>
        <li>Des sessions sur la gestion des maladies</li>
      </ul>
    `,
    featured: true,
    primary_author: {
      name: "Jean-Pierre Martin",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
    },
    section: "association",
  },
  {
    id: "mock-3",
    title: "L'apiculture urbaine : une tendance en plein essor",
    slug: "apiculture-urbaine-tendance",
    published_at: "2024-03-01T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>L'apiculture urbaine connaît un essor important dans les grandes villes.</p>`,
    featured: false,
    primary_author: {
      name: "Sophie Dubois",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    },
    section: "actualites",
  },
  {
    id: "mock-4",
    title: "Le miel de printemps : une douceur précoce",
    slug: "miel-printemps-douceur",
    published_at: "2024-02-29T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Le miel de printemps est le premier miel de la saison apicole.</p>`,
    featured: false,
    primary_author: {
      name: "Pierre Durand",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre",
    },
    section: "actualites",
  },
  {
    id: "mock-5",
    title: "Les différentes variétés de miel en Alsace",
    slug: "varietes-miel-alsace",
    published_at: "2024-03-13T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `
      <p>L'Alsace produit une grande variété de miels, chacun avec ses caractéristiques propres.</p>
      <h2>Les miels de printemps</h2>
      <p>Issus des fleurs de fruitiers et des pissenlits, ces miels sont généralement clairs et délicats.</p>
      <h2>Les miels d'été</h2>
      <p>Plus foncés et plus intenses, ils proviennent souvent du tilleul et des fleurs sauvages.</p>
    `,
    featured: true,
    primary_author: {
      name: "Marie Schmidt",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-6",
    title: "La santé des abeilles : un enjeu majeur",
    slug: "sante-abeilles-enjeu",
    published_at: "2024-03-12T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>La santé des abeilles est un enjeu crucial pour l'apiculture et l'environnement.</p>`,
    featured: false,
    primary_author: {
      name: "Jean-Pierre Martin",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-7",
    title: "Les techniques d'élevage des reines",
    slug: "techniques-elevage-reines",
    published_at: "2024-03-11T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>L'élevage des reines est une technique essentielle pour maintenir des colonies fortes.</p>`,
    featured: false,
    primary_author: {
      name: "Sophie Dubois",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-8",
    title: "Le miel de sapin des Vosges",
    slug: "miel-sapin-vosges",
    published_at: "2024-03-10T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Le miel de sapin est une spécialité rare et précieuse des Vosges.</p>`,
    featured: false,
    primary_author: {
      name: "Pierre Durand",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-9",
    title: "L'apithérapie : les bienfaits des produits de la ruche",
    slug: "apitherapie-bienfaits",
    published_at: "2024-03-09T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>L'apithérapie utilise les produits de la ruche pour leurs vertus thérapeutiques.</p>`,
    featured: false,
    primary_author: {
      name: "Marie Schmidt",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-10",
    title: "La pollinisation : un service écologique essentiel",
    slug: "pollinisation-service-ecologique",
    published_at: "2024-03-08T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Les abeilles jouent un rôle crucial dans la pollinisation des cultures.</p>`,
    featured: false,
    primary_author: {
      name: "Jean-Pierre Martin",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-11",
    title: "Les ruches connectées : l'apiculture du futur",
    slug: "ruches-connectees-futur",
    published_at: "2024-03-07T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Les ruches connectées révolutionnent la pratique de l'apiculture.</p>`,
    featured: false,
    primary_author: {
      name: "Sophie Dubois",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-12",
    title: "La propolis : l'antibiotique naturel",
    slug: "propolis-antibiotique-naturel",
    published_at: "2024-03-06T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>La propolis est un produit de la ruche aux propriétés médicinales remarquables.</p>`,
    featured: false,
    primary_author: {
      name: "Pierre Durand",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-13",
    title: "Le miel de tilleul : une douceur estivale",
    slug: "miel-tilleul-douceur",
    published_at: "2024-03-05T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Le miel de tilleul est une spécialité estivale aux notes mentholées.</p>`,
    featured: false,
    primary_author: {
      name: "Marie Schmidt",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-14",
    title: "La gelée royale : l'or de la ruche",
    slug: "gelee-royale-or-ruche",
    published_at: "2024-03-04T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>La gelée royale est un produit rare et précieux de la ruche.</p>`,
    featured: false,
    primary_author: {
      name: "Jean-Pierre Martin",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-15",
    title: "Les abeilles sauvages : des pollinisateurs essentiels",
    slug: "abeilles-sauvages-pollinisateurs",
    published_at: "2024-03-03T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Les abeilles sauvages sont des pollinisateurs essentiels pour la biodiversité.</p>`,
    featured: false,
    primary_author: {
      name: "Sophie Dubois",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    },
    section: "actualites",
  },
  {
    id: "mock-16",
    title: "Le miel de châtaignier : un goût unique",
    slug: "miel-chataignier-gout",
    published_at: "2024-03-02T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Le miel de châtaignier se distingue par son goût unique et ses propriétés.</p>`,
    featured: false,
    primary_author: {
      name: "Pierre Durand",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre",
    },
    section: "actualites",
  },
  {
    id: "mock-17",
    title: "Les maladies des abeilles : prévention et traitement",
    slug: "maladies-abeilles-prevention",
    published_at: "2024-02-28T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>La prévention et le traitement des maladies sont essentiels en apiculture.</p>`,
    featured: false,
    primary_author: {
      name: "Marie Schmidt",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    },
    section: "actualites",
  },
  {
    id: "mock-18",
    title: "Le miel de montagne : une pureté exceptionnelle",
    slug: "miel-montagne-purete",
    published_at: "2024-02-27T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Le miel de montagne est réputé pour sa pureté et sa qualité.</p>`,
    featured: false,
    primary_author: {
      name: "Jean-Pierre Martin",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
    },
    section: "actualites",
  },
  {
    id: "mock-19",
    title: "L'apiculture bio : une approche naturelle",
    slug: "apiculture-bio-approche",
    published_at: "2024-02-26T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>L'apiculture biologique suit des principes stricts de respect de l'environnement.</p>`,
    featured: false,
    primary_author: {
      name: "Sophie Dubois",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    },
    section: "actualites",
  },
  {
    id: "mock-20",
    title: "Le miel de lavande : une senteur provençale",
    slug: "miel-lavande-senteur",
    published_at: "2024-02-25T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Le miel de lavande est apprécié pour son arôme caractéristique.</p>`,
    featured: false,
    primary_author: {
      name: "Pierre Durand",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre",
    },
    section: "actualites",
  },
  {
    id: "mock-21",
    title: "Les abeilles et le changement climatique",
    slug: "abeilles-changement-climatique",
    published_at: "2024-02-24T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Le changement climatique affecte les populations d'abeilles et leur comportement.</p>`,
    featured: false,
    primary_author: {
      name: "Marie Schmidt",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    },
    section: "actualites",
  },
  {
    id: "mock-22",
    title: "Le miel de forêt : une richesse naturelle",
    slug: "miel-foret-richesse",
    published_at: "2024-02-23T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Le miel de forêt est un produit naturel aux multiples vertus.</p>`,
    featured: false,
    primary_author: {
      name: "Jean-Pierre Martin",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
    },
    section: "actualites",
  },
  {
    id: "mock-23",
    title: "L'apiculture en Alsace : un savoir-faire ancestral",
    slug: "apiculture-alsace-savoir-faire",
    published_at: "2024-02-22T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>L'Alsace possède une longue tradition apicole.</p>`,
    featured: false,
    primary_author: {
      name: "Sophie Dubois",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    },
    section: "la-vie-du-syndicat",
  },
  {
    id: "mock-24",
    title: "Le miel de tournesol : une douceur estivale",
    slug: "miel-tournesol-douceur",
    published_at: "2024-02-21T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Le miel de tournesol est une spécialité estivale.</p>`,
    featured: false,
    primary_author: {
      name: "Pierre Durand",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre",
    },
    section: "petites-annonces",
  },
  {
    id: "mock-25",
    title: "Les abeilles et la biodiversité",
    slug: "abeilles-biodiversite",
    published_at: "2024-02-20T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Les abeilles sont essentielles au maintien de la biodiversité.</p>`,
    featured: false,
    primary_author: {
      name: "Marie Schmidt",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    },
    section: "actualites",
  },
  {
    id: "mock-26",
    title: "Le miel de romarin : une saveur méditerranéenne",
    slug: "miel-romarin-saveur",
    published_at: "2024-02-19T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Le miel de romarin est apprécié pour son arôme caractéristique.</p>`,
    featured: false,
    primary_author: {
      name: "Jean-Pierre Martin",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
    },
    section: "la-vie-du-syndicat",
  },
  {
    id: "mock-27",
    title: "L'apiculture et l'environnement",
    slug: "apiculture-environnement",
    published_at: "2024-02-18T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>L'apiculture joue un rôle important dans la préservation de l'environnement.</p>`,
    featured: false,
    primary_author: {
      name: "Sophie Dubois",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    },
    section: "actualites",
  },
  {
    id: "mock-28",
    title: "Le miel de bruyère : une saveur unique",
    slug: "miel-bruyere-saveur",
    published_at: "2024-02-17T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Le miel de bruyère est réputé pour son goût unique.</p>`,
    featured: false,
    primary_author: {
      name: "Pierre Durand",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre",
    },
    section: "actualites",
  },
  {
    id: "mock-29",
    title: "Les abeilles et l'agriculture",
    slug: "abeilles-agriculture",
    published_at: "2024-02-16T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Les abeilles sont essentielles à la pollinisation des cultures.</p>`,
    featured: false,
    primary_author: {
      name: "Marie Schmidt",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
    },
    section: "actualites",
  },
  {
    id: "mock-30",
    title: "Le miel d'acacia : une douceur printanière",
    slug: "miel-acacia-douceur",
    published_at: "2024-02-15T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Le miel d'acacia est apprécié pour sa douceur et sa clarté.</p>`,
    featured: false,
    primary_author: {
      name: "Jean-Pierre Martin",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
    },
    section: "la-vie-du-syndicat",
  },
  // Events featured post
  {
    id: "mock-100",
    title: "Atelier découverte : Les abeilles en ville",
    slug: "atelier-decouverte-abeilles-ville",
    published_at: "2024-03-20T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    content: `<p>Rejoignez-nous pour un atelier passionnant sur l'apiculture en ville, ouvert à tous !</p>`,
    featured: true,
    primary_author: {
      name: "Sophie Dubois",
      profile_image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    },
    section: "evenements",
  },
];
