export default function MovieCard({movie}) {

const noImage = "/noimg.jpg"
    return (
        <article>
            <h2>{movie.Title}</h2>
            {/* Legger til en sjekk som ser om bilde er tilgjengelig eller ikke, hvis ikke vises bilde som sier "No Image Found", sjekker også for error som vil vise samme bilde */}
            <img src={movie.Poster !== "N/A" ? movie.Poster : noImage} alt={movie.Title} onError={(e) => { e.target.src = noImage }}/>
        </article>
    )

}