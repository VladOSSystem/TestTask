import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function NestedComponent(props) {

    const [nest, setNest] = useState([])
    const [load, setLoad] = useState(false)
    useEffect(() => {
        const asyncData = async () => {
            if (props.nestName) {
            let results = (await axios.all(
                props.nestName.map(url => axios.get(`${url}`))
            ))
            .map(result => result.data.name)
            setNest(results.sort())
            setLoad(true)
            } else {
                let results = ''
            }
          }
        asyncData()
    }, [props.nestName])

    return (
        <div>
        <h1>{props.titleNest}</h1>
        {load === true ? (
            <>
            {nest.map(a =>(<li key={a}>{a}</li>))}
            </>
        ):(
            <p>Loading...</p>
        )}
           
        </div>
    )
}
