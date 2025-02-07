import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css"

const MovieList = ({ films }) => {
    
  const location = useLocation();
    
    return (
        <ol>
            {films.map(film => {
                return (
                    <li key={film.id}>
                        <Link to={`/movies/${film.id}`} state={location}>
                            {film.title}
                        </Link>
                    </li>
                )
            })}
        </ol>
    )
}

export default MovieList;