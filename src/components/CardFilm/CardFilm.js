import css from "./CardFilm.module.css";

export default function CardFilm({
  poster_path,
  title,
  popularity,
  overview,
  genres,
}) {
  return (
    <>
      <div className={css.card}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width="200"
          height="300"
          className={css.poster}
        ></img>
        <div>
          <h2 className={css.title}>{title}</h2>
          <p>Use score: {popularity.toFixed(0)} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres}</p>
        </div>
      </div>
    </>
  );
}
