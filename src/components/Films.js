import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function Films() {
    const [films, setFilms] = useState([])
    useEffect(() => {
        const asyncFilms = async () => {
            const res = await axios.get('https://swapi.dev/api/films/')
            setFilms(res.data.results)
        }
        asyncFilms()
    },[])
    const filmItems = films.map((data) => (<li key={data.title}>{data.title}</li>))
    console.log(films)
    return (
        <div>
            {filmItems}
        </div>
    )
}
