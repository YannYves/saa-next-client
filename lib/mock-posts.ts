import { Section } from "./sections";

export type MockPost = {
  id: string;
  title: string;
  slug: string;
  custom_excerpt: string;
  published_at: string;
  feature_image: string;
  html: string;
  featured: boolean;
  primary_author: {
    name: string;
    profile_image: string;
  };
  section: string;
};

export const mockPosts: MockPost[] = [
  {
    id: "mock-1",
    title: "L'apiculture en Alsace : Une tradition ancestrale",
    slug: "apiculture-alsace-tradition",
    custom_excerpt:
      "Découvrez l'histoire et les traditions de l'apiculture en Alsace.",
    published_at: "2024-03-15T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `
      <p>L'apiculture en Alsace est une tradition qui remonte à plusieurs siècles. Les apiculteurs alsaciens ont développé des techniques uniques adaptées au climat et à la flore locale.</p>
      <h2>Les spécificités de l'apiculture alsacienne</h2>
      <p>La région bénéficie d'une grande diversité florale, permettant la production de miels variés et de qualité exceptionnelle. Les forêts vosgiennes, les vergers et les cultures locales offrent aux abeilles une nourriture abondante et diversifiée.</p>
      <h2>Les défis actuels</h2>
      <p>Comme partout en France, les apiculteurs alsaciens font face à plusieurs défis :</p>
      <ul>
        <li>Le changement climatique</li>
        <li>Les pesticides</li>
        <li>Les parasites comme le varroa</li>
      </ul>
    `,
    featured: true,
    primary_author: {
      name: "Jean Dupont",
      profile_image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    section: "accueil",
  },
  {
    id: "mock-2",
    title: "Le Rucher École : Formation des futurs apiculteurs",
    slug: "rucher-ecole-formation",
    custom_excerpt:
      "Le Syndicat Apicole d'Alsace forme les nouvelles générations d'apiculteurs.",
    published_at: "2024-03-14T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `
      <p>Le Rucher École du Syndicat Apicole d'Alsace accueille chaque année de nombreux stagiaires souhant se former à l'apiculture.</p>
      <h2>Le programme de formation</h2>
      <p>La formation comprend :</p>
      <ul>
        <li>Des cours théoriques sur la biologie de l'abeille</li>
        <li>Des ateliers pratiques au rucher</li>
        <li>Des sessions sur la gestion des maladies</li>
      </ul>
    `,
    featured: false,
    primary_author: {
      name: "Marie Schmidt",
      profile_image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    section: "association",
  },
  {
    id: "mock-3",
    title: "Les différentes variétés de miel en Alsace",
    slug: "varietes-miel-alsace",
    custom_excerpt:
      "Un guide complet des différents types de miel produits en Alsace.",
    published_at: "2024-03-13T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `
      <p>L'Alsace produit une grande variété de miels, chacun avec ses caractéristiques propres.</p>
      <h2>Les miels de printemps</h2>
      <p>Issus des fleurs de fruitiers et des pissenlits, ces miels sont généralement clairs et délicats.</p>
      <h2>Les miels d'été</h2>
      <p>Plus foncés et plus intenses, ils proviennent souvent du tilleul et des fleurs sauvages.</p>
    `,
    featured: false,
    primary_author: {
      name: "Pierre Weber",
      profile_image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-4",
    title: "La santé des abeilles : un enjeu majeur",
    slug: "sante-abeilles-enjeu",
    custom_excerpt: "Les défis sanitaires dans l'apiculture moderne.",
    published_at: "2024-03-12T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>La santé des abeilles est un enjeu crucial pour l'apiculture et l'environnement.</p>`,
    featured: false,
    primary_author: {
      name: "Sophie Martin",
      profile_image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-5",
    title: "Les techniques d'élevage des reines",
    slug: "techniques-elevage-reines",
    custom_excerpt: "Guide pratique pour l'élevage des reines d'abeilles.",
    published_at: "2024-03-11T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>L'élevage des reines est une technique essentielle pour maintenir des colonies fortes.</p>`,
    featured: false,
    primary_author: {
      name: "Thomas Klein",
      profile_image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-6",
    title: "Le miel de sapin des Vosges",
    slug: "miel-sapin-vosges",
    custom_excerpt: "Un miel rare et précieux des forêts vosgiennes.",
    published_at: "2024-03-10T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Le miel de sapin est une spécialité rare et précieuse des Vosges.</p>`,
    featured: false,
    primary_author: {
      name: "Claire Dubois",
      profile_image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-7",
    title: "L'apithérapie : les bienfaits des produits de la ruche",
    slug: "apitherapie-bienfaits",
    custom_excerpt:
      "Découvrez les vertus thérapeutiques des produits apicoles.",
    published_at: "2024-03-09T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>L'apithérapie utilise les produits de la ruche pour leurs vertus thérapeutiques.</p>`,
    featured: false,
    primary_author: {
      name: "Dr. Michel Bernard",
      profile_image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-8",
    title: "La pollinisation : un service écologique essentiel",
    slug: "pollinisation-service-ecologique",
    custom_excerpt: "Le rôle crucial des abeilles dans la pollinisation.",
    published_at: "2024-03-08T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Les abeilles jouent un rôle crucial dans la pollinisation des cultures.</p>`,
    featured: false,
    primary_author: {
      name: "Émilie Rousseau",
      profile_image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=200&auto=format&fit=crop",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-9",
    title: "Les ruches connectées : l'apiculture du futur",
    slug: "ruches-connectees-futur",
    custom_excerpt: "La technologie au service de l'apiculture moderne.",
    published_at: "2024-03-07T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Les ruches connectées révolutionnent la pratique de l'apiculture.</p>`,
    featured: false,
    primary_author: {
      name: "Lucas Meyer",
      profile_image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-10",
    title: "La propolis : l'antibiotique naturel",
    slug: "propolis-antibiotique-naturel",
    custom_excerpt: "Les propriétés médicinales de la propolis.",
    published_at: "2024-03-06T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>La propolis est un produit de la ruche aux propriétés médicinales remarquables.</p>`,
    featured: false,
    primary_author: {
      name: "Dr. Anne Petit",
      profile_image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-11",
    title: "Le miel de tilleul : une douceur estivale",
    slug: "miel-tilleul-douceur",
    custom_excerpt: "Découvrez le miel de tilleul, une spécialité estivale.",
    published_at: "2024-03-05T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Le miel de tilleul est une spécialité estivale aux notes mentholées.</p>`,
    featured: false,
    primary_author: {
      name: "Julie Wagner",
      profile_image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-12",
    title: "La gelée royale : l'or de la ruche",
    slug: "gelee-royale-or-ruche",
    custom_excerpt: "Les secrets de la gelée royale et ses bienfaits.",
    published_at: "2024-03-04T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>La gelée royale est un produit rare et précieux de la ruche.</p>`,
    featured: false,
    primary_author: {
      name: "Marc Fischer",
      profile_image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    section: "blog-ressources",
  },
  {
    id: "mock-13",
    title: "Les abeilles sauvages : des pollinisateurs essentiels",
    slug: "abeilles-sauvages-pollinisateurs",
    custom_excerpt: "Le rôle des abeilles sauvages dans l'écosystème.",
    published_at: "2024-03-03T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Les abeilles sauvages sont des pollinisateurs essentiels pour la biodiversité.</p>`,
    featured: false,
    primary_author: {
      name: "Nathalie Muller",
      profile_image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-14",
    title: "Le miel de châtaignier : un goût unique",
    slug: "miel-chataignier-gout",
    custom_excerpt: "Les caractéristiques du miel de châtaignier.",
    published_at: "2024-03-02T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Le miel de châtaignier se distingue par son goût unique et ses propriétés.</p>`,
    featured: false,
    primary_author: {
      name: "Philippe Klein",
      profile_image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-15",
    title: "L'apiculture urbaine : une tendance en plein essor",
    slug: "apiculture-urbaine-tendance",
    custom_excerpt: "L'apiculture en ville, une pratique en développement.",
    published_at: "2024-03-01T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>L'apiculture urbaine connaît un essor important dans les grandes villes.</p>`,
    featured: false,
    primary_author: {
      name: "Sophie Dubois",
      profile_image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-16",
    title: "Le miel de printemps : une douceur précoce",
    slug: "miel-printemps-douceur",
    custom_excerpt: "Les caractéristiques du miel de printemps.",
    published_at: "2024-02-29T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Le miel de printemps est le premier miel de la saison apicole.</p>`,
    featured: false,
    primary_author: {
      name: "Jean-Pierre Martin",
      profile_image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-17",
    title: "Les maladies des abeilles : prévention et traitement",
    slug: "maladies-abeilles-prevention",
    custom_excerpt: "Guide pratique pour la santé des colonies.",
    published_at: "2024-02-28T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>La prévention et le traitement des maladies sont essentiels en apiculture.</p>`,
    featured: false,
    primary_author: {
      name: "Dr. Thomas Weber",
      profile_image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-18",
    title: "Le miel de montagne : une pureté exceptionnelle",
    slug: "miel-montagne-purete",
    custom_excerpt: "Les particularités du miel de montagne.",
    published_at: "2024-02-27T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Le miel de montagne est réputé pour sa pureté et sa qualité.</p>`,
    featured: false,
    primary_author: {
      name: "Marie-Claire Schmidt",
      profile_image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-19",
    title: "L'apiculture bio : une approche naturelle",
    slug: "apiculture-bio-approche",
    custom_excerpt: "Les principes de l'apiculture biologique.",
    published_at: "2024-02-26T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>L'apiculture biologique suit des principes stricts de respect de l'environnement.</p>`,
    featured: false,
    primary_author: {
      name: "Pierre Dubois",
      profile_image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-20",
    title: "Le miel de lavande : une senteur provençale",
    slug: "miel-lavande-senteur",
    custom_excerpt: "Les caractéristiques du miel de lavande.",
    published_at: "2024-02-25T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Le miel de lavande est apprécié pour son arôme caractéristique.</p>`,
    featured: false,
    primary_author: {
      name: "Claire Martin",
      profile_image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-21",
    title: "Les abeilles et le changement climatique",
    slug: "abeilles-changement-climatique",
    custom_excerpt: "L'impact du réchauffement climatique sur les abeilles.",
    published_at: "2024-02-24T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Le changement climatique affecte les populations d'abeilles et leur comportement.</p>`,
    featured: false,
    primary_author: {
      name: "Dr. Sophie Bernard",
      profile_image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-22",
    title: "Le miel de forêt : une richesse naturelle",
    slug: "miel-foret-richesse",
    custom_excerpt: "Les particularités du miel de forêt.",
    published_at: "2024-02-23T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Le miel de forêt est un produit naturel aux multiples vertus.</p>`,
    featured: false,
    primary_author: {
      name: "Lucas Schmidt",
      profile_image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-23",
    title: "L'apiculture en Alsace : un savoir-faire ancestral",
    slug: "apiculture-alsace-savoir-faire",
    custom_excerpt: "Les traditions apicoles en Alsace.",
    published_at: "2024-02-22T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>L'Alsace possède une longue tradition apicole.</p>`,
    featured: false,
    primary_author: {
      name: "Jean-Marc Weber",
      profile_image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    section: "la-vie-du-syndicat",
  },
  {
    id: "mock-24",
    title: "Le miel de tournesol : une douceur estivale",
    slug: "miel-tournesol-douceur",
    custom_excerpt: "Les caractéristiques du miel de tournesol.",
    published_at: "2024-02-21T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Le miel de tournesol est une spécialité estivale.</p>`,
    featured: false,
    primary_author: {
      name: "Marie Dubois",
      profile_image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    section: "petites-annonces",
  },
  {
    id: "mock-25",
    title: "Les abeilles et la biodiversité",
    slug: "abeilles-biodiversite",
    custom_excerpt: "Le rôle des abeilles dans la biodiversité.",
    published_at: "2024-02-20T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Les abeilles sont essentielles au maintien de la biodiversité.</p>`,
    featured: false,
    primary_author: {
      name: "Dr. Thomas Klein",
      profile_image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-26",
    title: "Le miel de romarin : une saveur méditerranéenne",
    slug: "miel-romarin-saveur",
    custom_excerpt: "Les particularités du miel de romarin.",
    published_at: "2024-02-19T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Le miel de romarin est apprécié pour son arôme caractéristique.</p>`,
    featured: false,
    primary_author: {
      name: "Claire Schmidt",
      profile_image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    section: "la-vie-du-syndicat",
  },
  {
    id: "mock-27",
    title: "L'apiculture et l'environnement",
    slug: "apiculture-environnement",
    custom_excerpt: "L'impact de l'apiculture sur l'environnement.",
    published_at: "2024-02-18T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>L'apiculture joue un rôle important dans la préservation de l'environnement.</p>`,
    featured: false,
    primary_author: {
      name: "Pierre Martin",
      profile_image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-28",
    title: "Le miel de bruyère : une saveur unique",
    slug: "miel-bruyere-saveur",
    custom_excerpt: "Les caractéristiques du miel de bruyère.",
    published_at: "2024-02-17T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Le miel de bruyère est réputé pour son goût unique.</p>`,
    featured: false,
    primary_author: {
      name: "Sophie Weber",
      profile_image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-29",
    title: "Les abeilles et l'agriculture",
    slug: "abeilles-agriculture",
    custom_excerpt: "Le rôle des abeilles dans l'agriculture.",
    published_at: "2024-02-16T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Les abeilles sont essentielles à la pollinisation des cultures.</p>`,
    featured: false,
    primary_author: {
      name: "Dr. Michel Dubois",
      profile_image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
    },
    section: "actualites",
  },
  {
    id: "mock-30",
    title: "Le miel d'acacia : une douceur printanière",
    slug: "miel-acacia-douceur",
    custom_excerpt: "Les particularités du miel d'acacia.",
    published_at: "2024-02-15T00:00:00.000Z",
    feature_image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2000&auto=format&fit=crop",
    html: `<p>Le miel d'acacia est apprécié pour sa douceur et sa clarté.</p>`,
    featured: false,
    primary_author: {
      name: "Jean Schmidt",
      profile_image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    section: "la-vie-du-syndicat",
  },
];
