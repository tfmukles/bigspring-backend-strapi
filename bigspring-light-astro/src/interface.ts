export type Post = {
  id: number;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  title: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
  description: string;
  richText: string;
};

export type PostIndex = {
  id: number;
  title: string;
  description: string;
};
