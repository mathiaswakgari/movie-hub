import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const Movies = () => {
  const { movies, setMovies } = useMovies();
  console.log(movies);
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ul>
  );
};

export default Movies;
