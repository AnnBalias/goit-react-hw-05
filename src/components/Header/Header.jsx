import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css"


const buildLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active)
};

const Header = () => {
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
                        <NavLink to="/about" className={buildLinkClass}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;