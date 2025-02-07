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

    // console.log(cast);

    
    return (
        <ul>
            {cast.map((person) => <li key={person.id}>
                    {person.name}
                </li> 
            )}
            
        </ul>
    )
}

export default MovieCast