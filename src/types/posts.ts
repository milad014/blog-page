export interface CommentType {
  username: string;
  date: string;
}

export interface Post {
  id: number;
  name: string;
  telegram: string;
  note: string;
  createdAt: number;
  updatedAt: number;
  email: string;
  phone: string;
  avatar: string;
  address: string;
  company: string;
  gender: string;
  comments: CommentType[];
}
