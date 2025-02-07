import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css"
import { useEffect, useState } from "react";
import { getMovieRev } from "../../tmdb";

const MovieReviews = () => {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            const getRev = await getMovieRev(movieId);
            setReviews(getRev);
        };
        getReviews();

    }, [movieId]);

    return (
        <ul>
            {reviews.map((rev) => <li key={rev.id}>
                {rev.author}
                {rev.url}
                </li> 
            )}
            
        </ul>
    )
}

export default MovieReviews;