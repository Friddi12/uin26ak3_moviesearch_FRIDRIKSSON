import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieInfo from '../components/MovieInfo'

export default function Movie() {
    const {movie} = useParams()
    const [movieDetails, setMovieDetails] = useState()

    const baseUrl = `http://www.omdbapi.com/?i=${movie}&type=movie&apikey=`
    const apiKey = import.meta.env.VITE_APP_API_KEY

    useEffect(() => {
        const fetchMovieDetails = async() => {
        try
        {
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()

            if(data.Response === "True") {
                setMovieDetails(data)
            }
            
            console.log("Data", data)

        }
        catch(err){
            console.error(err);
        }
    }
    fetchMovieDetails()

    }, [baseUrl, apiKey])

    const noImage = "/noimg.jpg"
    return(
        <MovieInfo movieDetails={movieDetails} noImage ={noImage}/>
    ) 
}