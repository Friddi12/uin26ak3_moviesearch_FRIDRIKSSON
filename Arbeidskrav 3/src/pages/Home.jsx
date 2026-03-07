import { useState } from "react"
import MovieCard from "../components/MovieCard"

export default function Home(){
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])

    //Legger til '&type=movie' for å unngå serier og spill
    const baseUrl = `http://www.omdbapi.com/?s=${search}&type=movie&apikey=`
    const apiKey = import.meta.env.VITE_APP_API_KEY

    const getMovies = async()=>{
        try
        {
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()

            if(data.Search) {
                setMovies(data.Search)
            }
            
            console.log(data)

        }
        catch(err){
            console.error(err);
        }
    }

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
   
    }

    return (
    <main>
        <h1>FILMSØK</h1>
        <form onSubmit={handleSubmit}>
            <label >
                Søk etter film
                <input type="search" placeholder="James Bond" onChange={handleChange}></input>
            </label>
            <button onClick={getMovies}>Søk</button>    
        </form>
        <section>
            {movies.map((movie) => (
            <MovieCard key={movie.imdbID + 'xt'} movie={movie} />   
            ))}
            
        </section>
    </main>
        
    )

}