import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as movieGallery from "../services/moviesGallery-api";
import CardFilm from "../components/CardFilm/CardFilm";
import MovieDetailSubview from "./MovieDetailSubview";

export default function MoviesDetailView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieGallery.fetchMoviesById(movieId).then((res) => setMovie(res.data));
  }, [movieId]);

  if (!movie) {
    return <h1>...Loading</h1>;
  }
  const { poster_path, title, popularity, overview } = movie;
  const genresString = movie.genres.map(({ name }) => name).join(", ");

  return (
    <>
      {movie && (
        <CardFilm
          poster_path={poster_path}
          title={title}
          popularity={popularity}
          overview={overview}
          genres={genresString}
        />
      )}

      <MovieDetailSubview movie={movie} />
    </>
  );
}
