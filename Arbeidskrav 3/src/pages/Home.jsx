import { useState } from "react"

export default function Home() {

    const [search, setSearch] = useState()

    //ENDRE SENERE, IKKE LA API NØKKEl VÆRE HER
    const baseUrl = `http://www.omdbapi.com/?apikey=` 
    const apiKey = '4c1a31f' //FJERN NØKKEL SENERE


    const getMovies = async() =>{
        try { 
            const response = await fetch(`${baseUrl}${apiKey}&s=${search}`)
            const data = await response.json()
            console.log(data)
            
        } catch (error) {
            console.error(error);
        }
    } 
    
    const handleChange = (event) =>{
        setSearch(event.target.value)
    }

    return( 
    <main>
        <h1>Forside</h1>
        <form>
            <label>
                Search for a movie
            <input type="search" placeholder="John Wick" onChange={handleChange}></input>
            </label>

        </form>
        <button onClick={getMovies}>Search</button>    
    </main>

    )
}