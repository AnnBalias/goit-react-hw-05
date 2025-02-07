import { useState, useEffect } from 'react';
import MovieList from "../../components/MovieList/MovieList";
import { getTrendToday } from "../../tmdb.js";
import css from "./HomePage.module.css"

const HomePage = () => {
    const [topFilms, setTopFilms] = useState([]);

    useEffect(() => {
        const getFilms = async () => {
            const films = await getTrendToday();
            setTopFilms(films);
        };
        getFilms();
    }, []);
    
    if (!topFilms) {
        return <h2>Loadind...</h2>
    }

    return (
        <div>
            <h1>Trending today</h1>
            <MovieList films={topFilms} />
        </div>
    )
}

export default HomePage;

// top day
