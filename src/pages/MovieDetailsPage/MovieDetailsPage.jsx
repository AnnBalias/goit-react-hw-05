import css from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
    return (
        <nav>
            <p>MovieDetailsPage</p>
        <ul>
            <li>
                <NavLink to='aim' className={buildLinkClas}>
                    1
                </NavLink>  
            </li>
            <li>
                <NavLink to='compani' className={buildLinkClas}>
                    2
                </NavLink>
            </li>
            <li>
                <NavLink to='team' className={buildLinkClas}>
                    3
                </NavLink>
            </li>
        </ul>
        <Outlet />
    </nav>
    )
}

export default MovieDetailsPage;