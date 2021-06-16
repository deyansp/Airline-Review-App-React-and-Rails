import React, { Fragment } from "react"

//const Wrapper = styled.div``

const ReviewForm = (props) => {
    const ratingOptions = [5, 4, 3, 2, 1].map( (score, index) => {
        return (
            <Fragment>
                <input type="radio" value={score} name="rating" onChange={console.log("selected:", score)} id={`rating=${score}`} />
                <label></label>
            </Fragment>
        )
    })
    return (
        <div>{ratingOptions}</div>
    )
}

export default ReviewForm