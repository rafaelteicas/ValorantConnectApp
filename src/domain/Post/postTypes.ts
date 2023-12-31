export interface PostAPI {
  id: number; // 1;
  user: number | null;
  message: string; // 'teste';
  elo: string; // 'Platina 12';
  main: string; //'Jett';
  other: string[];
}

export interface Post {
  id: number;
  userId: number;
  message?: string;
  elo: string;
  main: string;
  other: string[];
}

export interface CreatePost {
  message?: string;
  elo: string;
  main: string;
  other: string[];
}
