import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json.data);
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return <h1>{movie.date_uploaded}</h1>
}

export default Detail;