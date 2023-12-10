export interface MetaAPI {
  currentPage: string; // '1';
  perPage: string; // '10';
  totalPages: number; // 1;
  totalItems: number; // 3;
  nextPage: number | null; // null;
  previousPage: number | null; // 0;
}

export interface Page<Data> {
  meta: MetaAPI;
  post: Data[];
}
