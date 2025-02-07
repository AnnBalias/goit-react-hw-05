import { NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom";
import clsx from "clsx";
import css from "./MoviesPage.module.css"
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getSearchMovie } from "../../tmdb";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {

    const [searchFilms, setSearchFilms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState({})
    const searchQuery = searchParams.get("query") ?? "";
 

    useEffect(() => {
if (!searchQuery) return;


        const SearchMovie = async () => {
            try {
                const getFilms = await getSearchMovie(searchQuery);
                setSearchFilms(getFilms.results);
                setData(getFilms);
            } catch (error) {
                console.error("Error fetching movies:", error);
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
        <div>
            <SearchBar handSearch={handSearch} />
            <MovieList films={searchFilms} />
        </div>
        
    )
}

export default MoviesPage;


