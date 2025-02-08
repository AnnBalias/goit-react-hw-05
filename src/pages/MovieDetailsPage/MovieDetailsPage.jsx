import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import clsx from 'clsx';
import { getById } from "../../tmdb.js"
import css from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [film, setFilm] = useState(null)
    const goBackUrl = useRef(location.state ?? '/movies');

    const buildLinkClass = ({isActive}) => {
        return clsx(css.link, isActive && css.active)
    };

    useEffect(() => {
        const getFilm = async () => {
            const getfilm = await getById(movieId);
            setFilm(getfilm);
        };
        getFilm();
    }, [movieId]);

    if (!film) {
    return <h2>Loadind...</h2>
    }

    return (
        <div className={css.pages}>
            <Link to={goBackUrl.current} className={css.goBack}>Go back</Link>
            <div className={css.infoBox}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
                    alt={film.title}
                    className={css.img}
                />
                <div className={css.info}>
                    <h2 className={css.title}>{film.title}</h2>
                    <p className={css.dataTitle}>Overview:</p>
                    <p className={css.overview}>{film.overview}</p>
                    <p className={css.dataTitle}>Genres:</p>
                    <ul className={css.genres}>
                        {film.genres.map((genre) => {
                            return (
                                <li key={genre.id}>{genre.name}</li>
                            )
                        })}
                    </ul>
                    <p><span className={css.ratingSpan}>Rating:</span> {film.vote_average}</p>
                </div>
            </div>
            
            <nav className={css.nav}>
                <ul className={css.navList}>
                    <li className={css.navLink}>
                        <NavLink to="cast" className={buildLinkClass}>
                            cast
                        </NavLink>
                    </li>
                    <li className={css.navLink}>
                        <NavLink to="reviews" className={buildLinkClass}>
                            reviews
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default MovieDetailsPage;