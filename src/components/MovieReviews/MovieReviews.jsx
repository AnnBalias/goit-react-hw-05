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
        <ul className={css.list}>
            {reviews.map((rev) => <li key={rev.id}  className={css.item}>
                <p className={css.author}>{rev.author}</p>
                <a href={rev.url}  className={css.link}>{rev.url}</a>
                </li> 
            )}
            
        </ul>
    )
}

export default MovieReviews;