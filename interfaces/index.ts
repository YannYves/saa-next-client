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
  title: string;
  slug: string;
  html: string;
  feature_image: string;
  featured: boolean;
  published_at: string;
  primary_author: {
    name: string;
    profile_image: string;
  };
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
  html: string;
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
