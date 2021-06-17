import React from 'react'
import "./Rating.css"

const Rating = (props) => {
    // finding the average rating percentage 
    const score = (props.score / 5) * 100
    
    return (
        <div>
            <span className="star-wrapper">
                <span className="stars" style={{width: score + "%"}}></span>
            </span>
        </div>
    )
}

export default Rating