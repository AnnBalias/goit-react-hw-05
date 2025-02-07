import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { getSearchMovie } from "../../tmdb";
import css from "./MoviesPage.module.css"

const MoviesPage = () => {

    const [searchFilms, setSearchFilms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("query") ?? "";
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);
 

    useEffect(() => {
        if (!searchQuery) return;

        const SearchMovie = async () => {
            try {
                setLoad(true)
                setError(false)
                const getFilms = await getSearchMovie(searchQuery);
                if (!getFilms) {
                    setError(true);
                    return
                }
                setSearchFilms(getFilms.results);
            } catch (error) {
                setError(true);
            } finally {
                setLoad(false)
            }
        };
        SearchMovie();

        
        
    }, [searchQuery]);

     const handSearch = (inpSearch) => {
    searchParams.set("query", inpSearch);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
        };

    return (
        <div className={css.page}>
            <SearchBar handSearch={handSearch} />
            <MovieList films={searchFilms} />
        </div>
        
    )
}

export default MoviesPage;


