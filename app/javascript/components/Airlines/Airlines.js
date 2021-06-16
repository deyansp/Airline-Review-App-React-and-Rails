import React, { useState, useEffect } from "react"
import axios from "axios"
import Airline from "../Airlines/Airline"
const Airlines = () => {
    const[airlines, setAirlines] = useState([])

    useEffect(() => {
        // Get all airlines from API
        // Update airlines in component state

        axios.get("/api/v1/airlines.json")
        .then( (response) => {
            setAirlines(response.data.data)
        })
        .catch( (response) => console.log(response))
    }, [airlines.length]) // only use effect when the length changes
    
    const grid = airlines.map( item => {
        return(
            <Airline 
            key={item.attributes.name}
            attributes={item.attributes}></Airline>
        )
    })

    return (
        <div className="home">
            <div className="header">
                <h1>OpenFlights</h1>
                <div className="subheader">
                    Honest, unbiased airline reviews.
                </div>
            </div>
                <div className="grid">
                    {grid}
                </div>
        </div>
    )
}

export default Airlines