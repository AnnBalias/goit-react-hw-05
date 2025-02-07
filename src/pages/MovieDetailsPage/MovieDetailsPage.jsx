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
    // console.log(film);
    


    if (!film) {
    return <h2>Loadind...</h2>
    }

    return (
        <>
            <Link to={goBackUrl.current}>Go back</Link>
            <p>{film.title}</p>
            <p>{film.overview}</p>
            <nav>
                <ul>
                    <li>
                        <NavLink to="cast" className={buildLinkClass}>
                            cast
                        </NavLink>
                    </li>
                    <li><NavLink to="reviews" className={buildLinkClass}>
                            reviews
                    </NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        
   </>
    )
}

export default MovieDetailsPage;