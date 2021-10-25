import {
  Link,
  Switch,
  useParams,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { useState, useEffect } from "react";
import * as movieGallery from "../services/moviesGallery-api";
import ActorsList from "../components/ActorsList/ActorsList";
import ReviewsList from "../components/ReviewsList/ReviewsList";

export default function MovieDetailSubview() {
  const [actors, setActors] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    movieGallery
      .fetchActorsByMovieId(movieId)
      .then(({ data }) => setActors(data.cast));
  }, [movieId]);

  useEffect(() => {
    movieGallery
      .fetchReviewsByMovieId(movieId)
      .then(({ data }) => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to={`${url}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`${url}/reviews`}>Reviews</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${url}/cast`}>
          <ActorsList actors={actors} />
        </Route>
        <Route path={`${url}/reviews`}>
          {reviews.length !== 0 ? (
            <ReviewsList reviews={reviews} />
          ) : (
            <h5>We don't have any reviews for this movie</h5>
          )}
        </Route>
      </Switch>
    </>
  );
}
