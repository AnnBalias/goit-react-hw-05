import { useState, useEffect } from 'react';
import MovieList from "../../components/MovieList/MovieList";
import { getTrendToday } from "../../tmdb.js";
import css from "./HomePage.module.css"
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';

const HomePage = () => {
    const [topFilms, setTopFilms] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const getFilms = async () => {
            try {
                setLoad(true)
                setError(false)
                const films = await getTrendToday();
                if (!films) {
                    setError(true);
                    return
                }
                setTopFilms(films);
            } catch (error) {
                setError(true);
            } finally {
                setLoad(false)
            }
        };
        getFilms();
    }, []);
    
    return (
        <div>
            
            {load && <p className={css.load}>Loadind...</p>}
            {error ? <ErrorMessage /> : <div className={css.movieBox}>
                <h1 className={css.title}>Trending today</h1>
                <MovieList films={topFilms} /></div>}
        </div>
    )
}

export default HomePage;