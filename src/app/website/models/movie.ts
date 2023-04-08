export interface Movies {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
    tagline?:           string;
    results:[]
}

export interface MovieResponse {
    page: number;
    results: Movies[]; // <-- Aquí es donde se utiliza la interfaz Movies
    total_pages: number;
    total_results: number;
  }