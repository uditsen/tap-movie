import React from 'react'
import { useParams } from 'react-router'

function MovieDetails() {
    const {movieId} = useParams()
    return (
        <div>
            <h1>Movie MovieDetails {movieId}</h1>
        </div>
    )
}

export default MovieDetails
