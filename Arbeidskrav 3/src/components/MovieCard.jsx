import { useOutletContext } from "react-router-dom"

export default function MovieCard() {
    const {setApiEndpoint} = useOutletContext
    const [apiData, setApiData] = useState()

    return (
        <article>
            <h1>{title}</h1>
            <img src="" alt=""> </img>
        </article>
    )

}