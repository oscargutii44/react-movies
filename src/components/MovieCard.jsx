import papaya from "./MovieCard.module.css"
import { Link } from "react-router-dom";

export function MovieCard({movie1}) {
    console.log(papaya)
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie1.poster_path;
    return (
        <li className={papaya.movieCard}>
        <Link to={"/movies/" + movie1.id}>
            <img 
                width={230} 
                height={345}
                className={papaya.movieImage} 
                src={imageUrl} 
                alt={movie1.title}>
            </img>
            <div>{movie1.title}</div>
        </Link>
        </li>
    );
    
}