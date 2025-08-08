import s from "./EpisodePage.module.css"
import axios from "axios"
import { useEffect, useState } from "react"

export const EpisodePage = () => {

    const [episodes, setEpisode] = useState([])

    const fetchData = (url) => {
        axios   
            .get(url)
            .then((res) => {
                setEpisode(res.data.results)
            })
    }

    useEffect(() => {
        fetchData(`https://rickandmortyapi.com/api/episode`)
    }, [])

    return (
        <div className="pageContainer">
            <h1 className={`pageTitle ${s.title}`}>Episode Page</h1>

            {episodes.length && (
                episodes.map((episode) => (
                    <div key={episode.id}>
                        <ul>
                            <li>Episode: <b>{episode.episode}</b></li>
                            <li>Episode Title: <b>{episode.name}</b></li>
                            <li>Episode release date: <b>{episode.air_date}</b></li>
                            <li>List of characters seen in the episode: <b>{episode.characters.length}</b></li>
                        </ul>
                        <hr></hr>
                    </div>
                ))
            )}
        </div>
    )
}