export interface StreamTypeAPI {
  id: string; // '41967431801';
  user_id: string; // '499928989';
  user_login: string; // 'tck10';
  user_name: string; // 'TcK10';
  game_id: string; //'516575';
  game_name: string; // 'VALORANT';
  type: string; //'live';
  title: string; // 'TCKUrrida MONO NEON 2/5 DIA 🐔AZUL SHOQUE VELOCIDADE🐔 !PIX !GROWTH';
  viewer_count: number; // 3102;
  started_at: string; // '2023-10-24T12:31:50Z';
  language: string; // 'pt';
  thumbnail_url: string; //'https://static-cdn.jtvnw.net/previews-ttv/live_user_tck10-{width}x{height}.jpg';
  is_mature: boolean; // false;
}

export interface StreamType {
  id: string;
  userId: string;
  userLogin: string;
  title: string;
  viewerCounter: number;
  thumbnailUrl: string;
}
