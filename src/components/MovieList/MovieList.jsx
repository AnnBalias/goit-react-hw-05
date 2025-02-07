import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css"

const MovieList = ({ films }) => {
    
  const location = useLocation();
    console.log(films);
    
    return (
        <ul className={css.list}>
            {films.map(film => {
                return (
                    <li key={film.id} className={css.item}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
                            alt={film.title}
                            width="150px" 
                            className={css.img}
                        />
                        <Link
                            to={`/movies/${film.id}`}
                            state={location}
                            className={css.title}
                        >
                            {film.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default MovieList;