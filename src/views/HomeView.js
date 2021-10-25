import PageHeading from "../components/PageHeading/PageHeading";
import { useState, useEffect } from "react";
import * as movieGallery from "../services/moviesGallery-api";
import MoviesList from "../components/MoviesList/MoviesList";

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieGallery
      .fetchTrandingMovies()
      .then((response) => setMovies(response.data.results));
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
