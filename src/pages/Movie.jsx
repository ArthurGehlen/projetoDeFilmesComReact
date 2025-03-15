import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";

import MovieCard from '../components/MovieCard'
import './Movie.css'

const movies_url = import.meta.env.VITE_API
const api_key = import.meta.env.VITE_API_KEY

function Movie() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const get_movie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }

    useEffect(() => {
        const movie_url = `${movies_url}${id}?${api_key}`
        get_movie(movie_url)
    }, [])

    const format_currency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    return (
        <div className="movie_page">
            {movie &&
                <>
                    <MovieCard movie={movie} show_link={false} />
                    <p className="tagline">{movie.tagline}</p>
                    <div className="info">
                        <h3>
                            <BsWallet2 /> Orçamento:
                        </h3>
                        <p>{format_currency(movie.budget)}</p>
                    </div>

                    <div className="info">
                        <h3>
                            <BsGraphUp /> Receita:
                        </h3>
                        <p>{format_currency(movie.revenue)}</p>
                    </div>

                    <div className="info">
                        <h3>
                            <BsHourglassSplit /> Duração:
                        </h3>
                        <p>{movie.runtime} minutos</p>
                    </div>

                    <div className="info description">
                        <h3>
                            <BsFillFileEarmarkTextFill /> Descrição:
                        </h3>
                        <p>{movie.overview}</p>
                    </div>
                </>
            }
        </div>
    );
}

export default Movie;