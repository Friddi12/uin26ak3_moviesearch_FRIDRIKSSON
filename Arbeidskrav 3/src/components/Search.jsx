import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

export default function Search() {
        //Setter søket til "James Bond", bruker useEffect senere for å laste in filmene
    const [search, setSearch] = useState("James Bond")
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
            
            console.log("Data", data)

        }
        catch(err){
            console.error(err);
        }
    }
    // SØK SKJER ETTER MINIMUM 3 TEGN FRA BRUKER
    useEffect(() => {
        getMovies()
    }, )

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
   
    }

return (
    <main id="home">
        <article  className="search">
            <h1>FILMSØK</h1>
            <p>Søk etter film her:</p>
            <form onSubmit={handleSubmit}>
                <label >
                    <input type="search" placeholder="James Bond" onChange={handleChange}></input>
                </label>
                <button onClick={getMovies}>Søk</button>    
            </form>
        </article>
        <section>
            {movies.map((movie) => (
            <MovieCard key={movie.imdbID + 'xt'} movie={movie} />   
            ))}
            
        </section>    
    </main>
        
    )
}