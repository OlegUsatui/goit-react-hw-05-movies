import AppBar from "./components/AppBar/AppBar";
import { Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import NotFoundViews from "./views/NotFoundViews";
import MoviesDetailView from "./views/MovieDetailView";

function App() {
  return (
    <div className="App">
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies" exact>
          <MoviesView />
        </Route>

        <Route path="/movies/:movieId">
          <MoviesDetailView />
        </Route>

        <Route>
          <NotFoundViews />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
