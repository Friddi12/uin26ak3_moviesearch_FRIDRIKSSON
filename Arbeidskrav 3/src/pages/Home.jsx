import Search from "../components/Search"
// KRAV LISTE:
// Inneholde søkefelt - Inkludert og fungerer
// Presentere opplising med filmer - inkludert og fungerer
// Vise 10 James Bond filmer før søk - Får ikke til uten å hardkode en liste med bond filmer, siden ingen james bond filmer har James bond i tittelen

// Søk skal gjennomføres etter 3 tegn - Inkludert og fungerer
// Resultater skal baseres på tittel - Søk er basert på tittel
// Resultater skal erstatter default på hjemmeside - Fungerer
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