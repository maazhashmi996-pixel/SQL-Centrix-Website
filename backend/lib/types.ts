export interface BlogListItem {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  author: string;
  published: boolean;
  createdAt: string;
}

export interface BlogDetail extends BlogListItem {
  content: string;
  updatedAt: string;
}
