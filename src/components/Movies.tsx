import useMovies from "../hooks/useMovies";

const Movies = () => {
  const { movies, setMovies } = useMovies();
  console.log(movies);
  return (
    <ul>
      {movies.map((movie) => (
        <li>{movie.id}</li>
      ))}
    </ul>
  );
};

export default Movies;
