import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import css from "./MoviesPage.module.css"

const buildLinkClas = ({isActive}) => {
    return clsx(css.link, isActive && css.active)
};

const MoviesPage = () => {
    return (
        <p>MoviesPage</p>
    )
}

export default MoviesPage;

// search film
