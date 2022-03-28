import { MoviesGrid } from "./components/MoviesGrid";
import papaya from "./App.module.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MoviDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
        <h1 className={papaya.title}>Movies</h1>
        </Link>
      </header>
      <main>
      <Switch>
          <Route path="/movies/:movieId"><MoviDetails /></Route>
          <Route path="/"><LandingPage /></Route>
        </Switch>
      </main>
    </Router>
  );
}
