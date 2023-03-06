export interface CommentType {
  username: string;
  date: string;
}

export interface PostType {
  id: number;
  author: string;
  title: string;
  date: string;
  tags: string[];
  comments: CommentType[];
}
