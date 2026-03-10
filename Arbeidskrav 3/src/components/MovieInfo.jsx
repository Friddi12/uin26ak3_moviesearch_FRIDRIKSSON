
export default function MovieInfo({movieDetails, noImage}){

    return(

        <main>
            <section>
                <h1>{movieDetails?.Title}</h1>
                <img src={movieDetails?.Poster !== "N/A" ? movieDetails?.Poster : noImage} alt={movieDetails?.Title} onError={(e) => { e.target.src = noImage }}/>
                <p>{movieDetails?.Plot}</p>
                <p>Utgivelsesdato: {movieDetails?.Released}, Anmeldelser: {movieDetails?.Metascore}</p>
            </section>
        </main>
    )
}