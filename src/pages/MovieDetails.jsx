import movie from "./movie.json"
import papaya from "./MovieDetails.module.css"

export function MoviDetails() {
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
    <div className={papaya.detailsContainer}>
        <img className={papaya.col + " " + papaya.movieImage} src={imageUrl} alt={movie.title}></img>
        <div className={papaya.col}>
            <p>
                <strong>Title:</strong> {movie.title}
            </p>
            <p>
                <strong>Genres:</strong>{" "}
                {movie.genres.map(genre => genre.name).join(", ")}
            </p>
            <p>
                <strong>Description:</strong> {movie.overview}
            </p>
        </div>
    </div>
    );
}