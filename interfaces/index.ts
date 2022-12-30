import { type } from "os";

export type ImgixType = {
  url: string;
  imgix_url: string;
};

export type AuthorType = {
  title: string;
  metadata: {
    picture: ImgixType;
  };
};

export type PostType = {
  attributes: {
    id: number;
    title: string;
    description: string;
    slug: string;
    cover: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
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
