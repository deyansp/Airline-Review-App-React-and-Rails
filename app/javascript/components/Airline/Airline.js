import React, { useState, useEffect, Fragment } from "react"
import axios from "axios"
import Header from "./Header"
import ReviewForm from "./ReviewForm"
import Review from "./Review"
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`
const Column = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
  
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    background: black;
    border-top: 1px solid rgba(255,255,255,0.5);
  }
`
const Main = styled.div`
  padding-left: 60px;
`

const Airline = (props) => {
    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({title: "", description: "", score: 0})
    const [loaded, setLoaded] = useState({})

    useEffect(() => {
        const slug = props.match.params.slug
        const url = `/api/v1/airlines/${slug}`
        
        axios.get(url)
        .then( (response) => {
            setAirline(response.data)
            // API data is ready
            setLoaded(true)
        })
        .catch ( (response) => console.log(response))
    }, [])

    const handleChange = (e) => {
        e.preventDefault()

        // update review state with new user input
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        console.log(e.target.name, e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // token for protection against CSRF attacks
        const csrfToken = document.querySelector("[name=csrf-token]").content
        axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken

        // sending new review to db through API
        const airline_id = airline.data.id 
        axios.post("/api/v1/reviews", {review, airline_id})
        .then((response) => {
            // updating the reviews data from the POST response
            const included = [...airline.included, response.data.data]
            setAirline({...airline, included})
            
            // resetting the form input state
            setReview({title: "", description: "", score: 0})
        })
        .catch((response) => {})
    }

    const setRating = (score, e) => {
        e.preventDefault()
        setReview({...review, score})
    }

    let reviews
    // if the airline review data is available, display it
    if (loaded == true && airline.included) {
        reviews = airline.included.map( (item, index) => {
            return (
                <Review 
                    key={index}
                    attributes={item.attributes}
                />
            )
        })
    }
    
    
    return (
        <Wrapper>
        { loaded == true  && 
        <Fragment>
                <Column>
                    <Main>
                        <Header 
                            attributes={airline.data.attributes}
                            reviews={airline.included}
                        />
                        {reviews}
                    </Main>
                </Column>
                <Column>
                    <ReviewForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        attributes={airline.data.attributes}
                        setRating={setRating}
                        review={review}
                    />
                </Column>
            </Fragment>
        }
        </Wrapper>
    )
}

export default Airline