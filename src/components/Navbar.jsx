import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import { useState } from 'react'

import './Navbar.css'

function Navbar() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handle_submit = (e) => {
        e.preventDefault()
        
        if(!search) return

        navigate(`/search?q=${search}`)

        setSearch("")
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/"><BiCameraMovie /> MoviesLib</Link>
            </h2>
            <form onSubmit={handle_submit}>
                <input
                    type="text"
                    placeholder="Busque um filme"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    required />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar