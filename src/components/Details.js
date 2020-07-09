import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NestedComponent from './NestedComponent'
export default function Details() {
    const detailId = window.location.pathname.split('/')[2]
    const [film, setFilm] = useState([])
    useEffect(() => {
        const asyncFilms = async () => {
            const res = await axios.get(`https://swapi.dev/api/films/${detailId}`)
            setFilm(res.data)
        }
        asyncFilms()
    },[])
    return (
        <div>
            {film.title}
            <p>{film.opening_crawl}</p>
            <NestedComponent nestName={film.characters} titleNest={'Characters'}/>
            <NestedComponent nestName={film.planets} titleNest={'Planets'}/>
            <NestedComponent nestName={film.species} titleNest={'Species'}/>
            <NestedComponent nestName={film.starships} titleNest={'Starships'}/>
            <NestedComponent nestName={film.vehicles} titleNest={'Vehicles'}/>
        </div>
    )
}
