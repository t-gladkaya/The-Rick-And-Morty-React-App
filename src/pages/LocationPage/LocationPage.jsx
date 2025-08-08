import s from "./LocationPage.module.css"
import { useEffect, useState } from "react"
import axios  from "axios"
export const LocationPage = () => { 
    const [locations, setLocations] = useState([])

    const fetchData = (url) => {
        axios
        .get(url)
        .then((res) => {
            setLocations(res.data.results)
        })
    }

    useEffect(() => {
        fetchData(`https://rickandmortyapi.com/api/location`)
    }, [])

    return (
        <div className={"pageContainer"}>
            <h1 className={`pageTitle ${s.title}`}>Location Page</h1>
        
            {locations.length && (
                locations.map((location) => (
                    <div key={location.id}>
                        <ul>
                            <li>Location name: <b>{location.name}</b> </li>
                            <li>Location type: <b>{location.type}</b> </li>
                            <li>The dimension of location: <b>{location.dimension}</b> </li>
                            <li>Number of characters seen in this location: <b>{location.residents.length}</b></li>
                        </ul>
                        <hr></hr>
                    </div>
                    
                ))
            )}
        </div>
    )
}