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
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: PostMediaType;
    author: AuthorType;
    category: CategoryType;
    blocks: any;
    header: boolean;
  };
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
  avatar: any;
  data: {
    id: number;
    attributes: {
      name: string;
      email: string;
      artciles: any;
      avatar: AvatarType;
      createdAt: string;
      updatedAt: string;
    };
  };
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
