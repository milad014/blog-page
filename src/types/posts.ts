export interface CommentType {
  username: string;
  text: string;
  date: string;
}

export interface PostType {
  id: number;
  author: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
  comments: CommentType[];
}
