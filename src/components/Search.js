import React, {useState, useEffect} from 'react'
import {
    InputGroup,
    FormControl,
} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
export default function Search() {
    const [name, setName] = useState('')
    const [searchValue, setSearchValue] = useState([])
    const [state, setState] = useState([])
    const [disable, setDisable] = useState('disabled')
    const search = useSelector(state => state)

    useEffect(() => {
        setState(search)
        if(Object.entries(search).length > 0) setDisable('')
    },[search])
   
    useEffect(() => {
        const titleArray = [],
              filmsArray = []
        if(state !== {}){
            state.map(m => titleArray.push(m.title))
            state.map(m => filmsArray.push(m))
        }
    const myFunction = (array,name) => {
        let results = []
        for (let i = 0; i < array.length; i++) {
            let filter = name.toUpperCase();
            let a = array[i]
            if (a.toUpperCase().indexOf(filter) > -1) {
                results.push({title:`${filmsArray[i].title}`,id:`${filmsArray[i].url.split('/')[5]}`})
                setSearchValue(results) 
            }
        }
        
    }
    myFunction(titleArray,name)
}, [name])
    return (
        <div>
        <InputGroup className="mb-3">
        {disable === '' ? (
            <>
            <FormControl
                placeholder="Type the movie"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={e => setName(e.target.value)}
            />
            </>
        ):(
            <>
            <FormControl
                disabled
                placeholder="Type the movie"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={e => setName(e.target.value)}
            />
            </>
        )}
      </InputGroup>
      {name === '' ? (
            <p>Results</p>
          ):(
            <>
            {searchValue.map(n => (
                <React.Fragment key={n.id}>
                <Link to={`/details/${n.id}`}>{n.title}</Link>
                <br/>
                </React.Fragment>
                ))}
                <hr/>
            </>
      )}
        </div>
    )
}
