import React from 'react'
import {Link} from "react-router-dom"
export default function PageNotFound() {
    return (
        <div>
            <p>Page not found</p>
            <Link to="/">Press to return</Link>
        </div>
    )
}
