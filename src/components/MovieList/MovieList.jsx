import { Link } from "react-router-dom";
import css from "./MovieList.module.css"

const MovieList = ({ films }) => {
    return (
        <ol>
            {films.map(film => {
                return (
                    <li key={film.id}>
                        <Link to={`/movies/${film.id}`}>
                            {film.title}
                        </Link>
                    </li>
                )
            })}
        </ol>
    )
}

export default MovieList;