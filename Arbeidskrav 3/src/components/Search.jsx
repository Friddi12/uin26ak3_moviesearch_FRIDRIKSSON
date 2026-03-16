import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

export default function Search() {
    //Setter søket til "James Bond", bruker useEffect senere for å laste inn 10 filmer med 'James Bond' i tittelen
    const [search, setSearch] = useState("James Bond") //Kan teoretisk sett liste ut JB ved å hardkode tittlene til filmene et eller annet sted, men føler at det går imot det dynamiske hensiktet med prosjektet
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
    //SØKER JAMES BOND FØR BRUKER KAN SØKE ETTER FILM - Usikker på hvordan filtrere ut kort-filmer og lignende filmer som bruker navnet James Bond
    useEffect(() => {   
        getMovies()
    }, [])

    // SØK SKJER ETTER MINIMUM 3 TEGN FRA BRUKER
    useEffect(() => {   // FANT INSPIRASJON FOR DENNE KODEN FRA GOOGLE-SØK KI RESULTAT: https://www.google.com/search?q=react+useeffect+happen+after+4+keystrokes&sca_esv=7106858f813936e4&sxsrf=ANbL-n7BnuKg-YFhPAJfkZktZVz37FHSzA%3A1773231377472&ei=EV2xaay9HPXWwPAP_JSW4A0&biw=1280&bih=631&ved=0ahUKEwjsie_S6ZeTAxV1KxAIHXyKBdwQ4dUDCBE&uact=5&oq=react+useeffect+happen+after+4+keystrokes&gs_lp=Egxnd3Mtd2l6LXNlcnAiKXJlYWN0IHVzZWVmZmVjdCBoYXBwZW4gYWZ0ZXIgNCBrZXlzdHJva2VzMggQABiiBBiJBTIIEAAYgAQYogQyCBAAGKIEGIkFMggQABiABBiiBDIIEAAYgAQYogRIyhVQrQhY0hRwAHgCkAEAmAGbAaABrgiqAQM3LjS4AQPIAQD4AQGYAgygAtIIwgIEEAAYR8ICBRAhGKABwgIHECEYoAEYCsICBRAhGJ8FmAMA4gMFEgExIECIBgGQBgiSBwM3LjWgB4MtsgcDNi41uAfOCMIHBDIuMTDIBxGACAA&sclient=gws-wiz-serp
        if (search.length > 0) {
            console.log('3 tastetrykk i søkefelt')
            getMovies()
        }
        
    }, [search])

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
                <button onClick={getMovies} className="button">Søk</button>    
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

//KILDER BRUKT I DENNE KODEN
//Google søk, topp resultat var KI foreslag som jeg fikk inspirasjon fra
//LENKE TIL SØK: // FANT INSPIRASJON FOR DENNE KODEN FRA GOOGLE-SØK KI RESULTAT: https://www.google.com/search?q=react+useeffect+happen+after+4+keystrokes&sca_esv=7106858f813936e4&sxsrf=ANbL-n7BnuKg-YFhPAJfkZktZVz37FHSzA%3A1773231377472&ei=EV2xaay9HPXWwPAP_JSW4A0&biw=1280&bih=631&ved=0ahUKEwjsie_S6ZeTAxV1KxAIHXyKBdwQ4dUDCBE&uact=5&oq=react+useeffect+happen+after+4+keystrokes&gs_lp=Egxnd3Mtd2l6LXNlcnAiKXJlYWN0IHVzZWVmZmVjdCBoYXBwZW4gYWZ0ZXIgNCBrZXlzdHJva2VzMggQABiiBBiJBTIIEAAYgAQYogQyCBAAGKIEGIkFMggQABiABBiiBDIIEAAYgAQYogRIyhVQrQhY0hRwAHgCkAEAmAGbAaABrgiqAQM3LjS4AQPIAQD4AQGYAgygAtIIwgIEEAAYR8ICBRAhGKABwgIHECEYoAEYCsICBRAhGJ8FmAMA4gMFEgExIECIBgGQBgiSBwM3LjWgB4MtsgcDNi41uAfOCMIHBDIuMTDIBxGACAA&sclient=gws-wiz-serp
