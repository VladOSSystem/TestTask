import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import data from '../actions/index'
export default function Films() {
    const [films, setFilms] = useState([])
    const [load, setLoad] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        const asyncFilms = async () => {
            const res = await axios.get('https://swapi.dev/api/films/')
            setFilms(res.data.results)
            setLoad(true)
            dispatch(data(res.data.results))
        }
        asyncFilms()
    },[dispatch])
    const filmItems = films.map((data) => (
        <li key={data.episode_id}>
            <Link to={`/details/${data.url.split('/')[5]}`}>
                {data.title}
            </Link>
            </li>
            ))
    // console.log(films)
    return (
        <div>
        {load === true ? (
            <>
            {filmItems}
            </>
        ):(
            <p>Loading...</p>
        )}
            
        </div>
    )
}
