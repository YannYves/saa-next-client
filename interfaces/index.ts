export type AvatarType = {
  data: {
    id: string;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: [Object];
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null | string;
      provider: string;
      provider_metadata: null | string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type PostType = {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  comment_id: string;
  feature_image: string;
  featured: boolean;
  visibility: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  custom_excerpt: string | null;
  codeinjection_head: null;
  codeinjection_foot: null;
  custom_template: null;
  canonical_url: null;
  tags: [
    {
      id: string;
      name: string;
      slug: string;
      description: string | null;
      feature_image: string | null;
      visibility: string;
      og_image: string | null;
      og_title: string | null;
      og_description: null;
      twitter_image: null;
      twitter_title: null;
      twitter_description: null;
      meta_title: null;
      meta_description: null;
      codeinjection_head: null;
      codeinjection_foot: null;
      canonical_url: null;
      accent_color: null;
      url: string;
    }
  ];
  authors: [
    {
      id: string;
      name: string;
      slug: string;
      profile_image: string | null;
      cover_image: string | null;
      bio: string | null;
      website: null;
      location: null;
      facebook: null;
      twitter: null;
      meta_title: null;
      meta_description: null;
      url: "https://test-6.ghost.io/author/dubois/";
    }
  ];
  primary_author: {
    id: string;
    name: string;
    slug: string;
    profile_image: string | null;
    cover_image: string | null;
    bio: string | null;
    website: null;
    location: null;
    facebook: null;
    twitter: null;
    meta_title: null;
    meta_description: null;
    url: "https://test-6.ghost.io/author/dubois/";
  };
  primary_tag: {
    id: string;
    name: string;
    slug: string;
    profile_image: string | null;
    cover_image: string | null;
    bio: string | null;
    website: null;
    location: null;
    facebook: null;
    twitter: null;
    meta_title: null;
    meta_description: null;
    url: "https://test-6.ghost.io/author/dubois/";
  };
  url: string;
  excerpt: string;
  reading_time: number;
  access: boolean;
  comments: boolean;
  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  twitter_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  email_subject: null;
  frontmatter: null;
  feature_image_alt: null;
  feature_image_caption?: null | string;
};

export type TagType = {
  id: string;
  name: string;
  slug: string;
  description: null | string;
  feature_image: string;
  visibility: string;
  og_image: null;
  og_title: null;
  og_description: null;
  twitter_image: null;
  twitter_title: null;
  twitter_description: null;
  meta_title: null;
  meta_description: null;
  codeinjection_head: null;
  codeinjection_foot: null;
  canonical_url: null;
  accent_color: null;
  url: string;
};

export type BackgroundImage = {
  title: string;
  feature_image: string;
};

export type HeaderType = {
  attributes: {
    id: number;
    title: string;
    cover: any;
    category: string;
  };
};

export type AuthorType = {
  name: string;
  profile_image: string;
};

export type CategoryType = {
  data: {
    id: number;
    attributes: {
      name: string;
      slug: string;
      description: null | string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type FormatImageType = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
};

export type PostMediaType = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: {
        thumbnail: FormatImageType;
        medium: FormatImageType;
        small: FormatImageType;
        large: FormatImageType;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string;
      provider: string;
      provider_metadata: string;
      updatedAt: string;
      createdAt: string;
    };
  };
};
