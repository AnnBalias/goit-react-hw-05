import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css"


const buildLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active)
};

const Navigation = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="" className={buildLinkClass}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" className={buildLinkClass}>
                            Movies
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;