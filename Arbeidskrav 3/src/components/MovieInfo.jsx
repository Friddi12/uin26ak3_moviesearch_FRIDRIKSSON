import { Link } from "react-router-dom"

export default function MovieInfo({movieDetails, noImage}){

    return(
        <main>
            <Link to="/" className="home-logo"> &lt; HJEM</Link>
            <section className="details">
                {/* VISE TITTEL PÅ FILMEN */}
                <h1>{movieDetails?.Title}</h1>
                {/* VISE FILM PLAKAT */}
                <img src={movieDetails?.Poster !== "N/A" ? movieDetails?.Poster : noImage} alt={movieDetails?.Title} onError={(e) => { e.target.src = noImage }}/>
                {/* VISE FILMSJANGER */}
                
                <article className="more-info">
                    {/* VISE FILM SJANGER */}
                    <p>Sjanger: {movieDetails?.Genre}</p>
                    {/* VISE FILM OPPSUMMERING */}
                    <p>Oppsummering: {movieDetails?.Plot}</p>
                    {/* YTTERLIG INFO OM FILMEN */}
                    <p>Utgivelsesdato: {movieDetails?.Released}</p>
                    <p>Anmeldelser: {movieDetails?.Metascore}/100</p>

                    {/* Mer info kan legges til her, det overfor er det jeg mener er minimum info */}
                </article>
            </section>
        </main>
    )
}