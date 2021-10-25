import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import * as movieGallery from "../services/moviesGallery-api";

export default function MoviesView() {
  const [value, setValue] = useState("");
  const [serchFilm, setSearchFilm] = useState("");
  const [films, setFilms] = useState([]);

  const { url } = useRouteMatch();

  useEffect(() => {
    if (!serchFilm) {
      return;
    }

    movieGallery
      .fetchMoviesByName(serchFilm)
      .then(({ data }) => setFilms(data.results));
  }, [serchFilm]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    setSearchFilm(value.trim());
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
      <button type="submit" onClick={handleClick}>
        Search
      </button>

      {films && (
        <ul>
          {films.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link to={`${url}/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
