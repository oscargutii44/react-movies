import { MovieCard } from './MovieCard';
import movies from './movies.json'
import papaya from "./MoviesGrid.module.css"

export function MoviesGrid() {
    console.log(movies)
  return (
    <ul className={papaya.limon}>
      {movies.map((movie2) => <MovieCard key={movie2.id} movie1={movie2} />)}
    </ul>
  );
}


