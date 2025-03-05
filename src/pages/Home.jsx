import { useState, useEffect } from 'react'

const movies_url = import.meta.env.VITE_API
const api_key = import.meta.env.VITE_API_KEY

function Home() {
    const [topMovies, setTopMovies] = useState([])

    const get_top_rated_movies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {
        const top_rated_url = `${movies_url}top_rated?${api_key}`

        get_top_rated_movies(top_rated_url)
    }, [])

    return (
        <div>
            {topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}
        </div>
    );
}

export default Home;