import { useState } from "react"

export default function Home(){
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])

    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    const apiKey = import.meta.env.VITE_APP_API_KEY

    const getMovies = async()=>{
        try
        {
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            
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
        <h1>Forside</h1>
        <form onSubmit={handleSubmit}>
            <label >
                Søk etter film
                <input type="search" placeholder="James Bond" onChange={handleChange}></input>
            </label>
            <button onClick={getMovies}>Søk</button>    
        </form>
        
    </main>
        
    )

}