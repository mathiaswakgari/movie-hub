import { create } from "zustand";

interface MovieQuery {
  searchTerm?: string;
  selectedGenre?: string;
  selectedRating?: number;
  selectedOrder?: string;
  page: number;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setSearchTerm: (term: string) => void;
  setSelectedGenre: (genre: string) => void;
  setSelectedRating: (rating: number) => void;
  setSelectedOrder: (order: string) => void;
  setPage: (page: number) => void;
  reset: () => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: { page: 1 } as MovieQuery,
  setSearchTerm: (term: string) =>
    set(() => ({
      movieQuery: {
        searchTerm: term,
        page: 1,
      },
    })),
  setSelectedGenre: (genre: string) =>
    set((state) => ({
      movieQuery: { ...state.movieQuery, selectedGenre: genre },
    })),
  setSelectedRating: (rating: number) =>
    set((state) => ({
      movieQuery: { ...state.movieQuery, selectedRating: rating },
    })),
  setSelectedOrder: (order: string) =>
    set((state) => ({
      movieQuery: { ...state.movieQuery, selectedOrder: order },
    })),
  setPage: (page: number) =>
    set((state) => ({
      movieQuery: { ...state.movieQuery, page },
    })),
  reset: () =>
    set(() => ({
      movieQuery: {
        searchTerm: "",
        selectedGenre: "",
        selectedRating: 0,
        selectedOrder: "",
        page: 1,
      },
    })),
}));

export default useMovieQueryStore;
