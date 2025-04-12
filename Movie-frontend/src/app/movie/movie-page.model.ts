import { Movie } from './movie.model';

export interface MoviePage {
    content: Movie[]; 
    pageable: {
      pageNumber: number;
      pageSize: number;
    };
    last: boolean;
    totalElements: number;
    totalPages: number;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
  }
  