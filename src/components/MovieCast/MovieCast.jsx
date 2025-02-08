import css from "./MovieCast.module.css"
import { getMovieCast } from "../../tmdb";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieCast = () => {

    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
     
    useEffect(() => {
        const getCast = async () => {
            const getcast = await getMovieCast(movieId);
            setCast(getcast);
        };
        getCast();
    }, [movieId]);

    return (
        <ul className={css.list}>
            {cast.map((person) => <li key={person.id} className={css.item}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} 
                    alt={person.name}
                    width={"100px"}
                    className={css.photo}
                />
                <p className={css.name}>{person.name}</p>
                </li> 
            )}
            
        </ul>
    )
}

export default MovieCast