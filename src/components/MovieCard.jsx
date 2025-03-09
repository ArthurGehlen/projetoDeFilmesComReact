import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const image_url = import.meta.env.VITE_IMG

const MovieCard = ({ movie, show_link = true }) => {
    return <div className="movie_card">
        <img src={image_url + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        {show_link && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
}

export default MovieCard