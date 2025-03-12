import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard'

const search_url = import.meta.env.VITE_SEARCH
const api_key = import.meta.env.VITE_API_KEY

function Search() {
    const [search_params] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = search_params.get("q")

    const get_searched_movies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
    }

    useEffect(() => {
        const search_with_query_url = `${search_url}?${api_key}&query=${query}`

        get_searched_movies(search_with_query_url)
    }, [query])

    return (
        <div className='container'>
            <h2 className='title'>
                Resultados para: <span className='query_text'>{query}</span>
            </h2>
            <div className="movies_container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies &&
                    movies.map((movie) =>
                        <MovieCard movie={movie} key={movie.id} />
                    )
                }
            </div>
        </div>
    );
}

export default Search;