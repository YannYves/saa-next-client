// Make this a proper TypeScript module
export {};

// Define the sections available in the site
const SECTIONS = [
  "accueil",
  "actualites",
  "evenements",
  "ressources",
  "a-propos",
];
type Section = (typeof SECTIONS)[number];

// Define the tags available
const TAGS = [
  "technologie",
  "innovation",
  "sante",
  "education",
  "environnement",
  "culture",
  "sport",
  "politique",
  "economie",
  "societe",
];

// Sample data for generating realistic content
const SAMPLE_TITLES = [
  "Les dernières innovations en matière de technologie durable",
  "Comment l'IA transforme notre quotidien",
  "Les enjeux de la transition écologique",
  "L'importance de l'éducation numérique",
  "Les tendances de la santé connectée",
  "Le futur du travail à distance",
  "Les défis de la cybersécurité",
  "L'impact des réseaux sociaux",
  "Les nouvelles solutions pour le développement durable",
  "L'évolution des modes de consommation",
];

const SAMPLE_CONTENT = [
  "Dans un monde en constante évolution, il est crucial de rester à la pointe de l'innovation.",
  "Les nouvelles technologies transforment notre façon de vivre et de travailler.",
  "La durabilité devient une priorité absolue pour les entreprises et les particuliers.",
  "L'éducation numérique est essentielle pour préparer les générations futures.",
  "La santé connectée révolutionne l'accès aux soins et le suivi médical.",
  "Le travail à distance redéfinit les relations professionnelles et l'organisation du travail.",
  "La cybersécurité est devenue un enjeu majeur pour la protection des données.",
  "Les réseaux sociaux influencent profondément notre société et nos comportements.",
  "Le développement durable nécessite des solutions innovantes et responsables.",
  "Les modes de consommation évoluent vers plus de conscience et de durabilité.",
];

const AUTHORS = [
  { name: "Marie Dupont", image: "https://i.pravatar.cc/150?img=1" },
  { name: "Jean Martin", image: "https://i.pravatar.cc/150?img=2" },
  { name: "Sophie Bernard", image: "https://i.pravatar.cc/150?img=3" },
  { name: "Pierre Dubois", image: "https://i.pravatar.cc/150?img=4" },
  { name: "Emma Laurent", image: "https://i.pravatar.cc/150?img=5" },
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomDate(): string {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 30));
  return date.toISOString();
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[éèê]/g, "e")
    .replace(/[àâ]/g, "a")
    .replace(/[ùû]/g, "u")
    .replace(/[ôö]/g, "o")
    .replace(/[ïî]/g, "i")
    .replace(/[ç]/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function generateFakePost(): {
  id: string;
  title: string;
  slug: string;
  custom_excerpt: string;
  published_at: string;
  feature_image: string;
  html: string;
  featured: boolean;
  author_name: string;
  author_profile_image: string;
  section: Section;
  tags: string[];
} {
  const title = getRandomElement(SAMPLE_TITLES);
  const author = getRandomElement(AUTHORS);

  return {
    id: Math.random().toString(36).substring(2, 15),
    title,
    slug: generateSlug(title),
    custom_excerpt: getRandomElement(SAMPLE_CONTENT),
    published_at: generateRandomDate(),
    feature_image: `https://picsum.photos/1200/630?random=${Math.random()}`,
    html: Array(3)
      .fill(null)
      .map(() => getRandomElement(SAMPLE_CONTENT))
      .join("\n\n"),
    featured: Math.random() > 0.7,
    author_name: author.name,
    author_profile_image: author.image,
    section: getRandomElement(SECTIONS),
    tags: Array(Math.floor(Math.random() * 3) + 1)
      .fill(null)
      .map(() => getRandomElement(TAGS))
      .filter((tag, index, self) => self.indexOf(tag) === index),
  };
}

function generateUniquePosts(count: number) {
  const posts = new Set();
  const slugs = new Set<string>();

  while (posts.size < count) {
    const post = generateFakePost();
    if (!slugs.has(post.slug)) {
      slugs.add(post.slug);
      posts.add(post);
    }
  }

  return Array.from(posts);
}

function convertPostToSheetRow(post: any): string[] {
  return [
    post.id,
    post.title,
    post.slug,
    post.custom_excerpt,
    post.published_at,
    post.feature_image,
    post.html,
    post.featured ? "TRUE" : "FALSE",
    post.author_name,
    post.author_profile_image,
    post.section,
    post.tags.join(", "),
  ];
}

// Generate 30 unique posts
const posts = generateUniquePosts(30);

// Group posts by section
const postsBySection = posts.reduce((acc: any, post: any) => {
  if (!acc[post.section]) {
    acc[post.section] = [];
  }
  acc[post.section].push(post);
  return acc;
}, {});

// Print the data in a format ready to be copied to Google Sheets
console.log("=== Posts by Section ===");
Object.entries(postsBySection).forEach(
  ([section, sectionPosts]: [string, any[]]) => {
    console.log(`\n=== ${section.toUpperCase()} ===`);
    console.log(
      "ID\tTitle\tSlug\tCustom Excerpt\tPublished At\tFeature Image\tHTML\tFeatured\tAuthor Name\tAuthor Profile Image\tSection\tTags"
    );
    sectionPosts.forEach((post) => {
      console.log(convertPostToSheetRow(post).join("\t"));
    });
  }
);
