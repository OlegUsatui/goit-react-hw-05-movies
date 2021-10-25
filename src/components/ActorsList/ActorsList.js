import "./ActorsList.module.css";

export default function ActorsList({ actors }) {
  return (
    <ul>
      {actors.map(({ profile_path, original_name, character, id }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={original_name}
              width="100"
            ></img>
            <p>{original_name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
}
