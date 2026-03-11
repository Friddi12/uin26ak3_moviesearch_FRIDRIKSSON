import Search from "../components/Search"
// KRAV LISTE:
// Inneholde søkefelt
// Presentere opplising med filmer
// Vise 10 James Bond filmer før søke

// Søk skal gjennomføres etter 3 tegn 
// Resultater skal baseres på tittel
// Resultater skal erstatter default på hjemmeside
// Hver filmvisning skal ha:
//     - Tittel
//     - Bilde 
//     - Utgivelsesår

// Rute for forside
// Dynamisk rute for utvalgt film


export default function Home(){


    return (
    <main id="home">
        <Search />
    </main>
        
    )
}