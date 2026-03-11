
export default function MovieInfo({movieDetails, noImage}){

    return(

            <section className="details">
                {/* VISE TITTEL PÅ FILMEN */}
                <h1>{movieDetails?.Title}</h1>
                {/* VISE FILM PLAKAT */}
                <img src={movieDetails?.Poster !== "N/A" ? movieDetails?.Poster : noImage} alt={movieDetails?.Title} onError={(e) => { e.target.src = noImage }}/>
                {/* VISE FILMSJANGER */}
                <p>Sjanger: {movieDetails?.Genre}</p>
                <article>
                    {/* VISE FILM OPPSUMMERING */}
                    <p>Oppsummering: {movieDetails?.Plot}</p>
                    {/* YTTERLIG INFO OM FILMEN */}
                    <p>Utgivelsesdato: {movieDetails?.Released}</p>
                    <p>Anmeldelser: {movieDetails?.Metascore}</p>
                </article>
            </section>
    )
}