import React, { useState, useEffect, Fragment } from "react"
import axios from "axios"
import Header from "./Header"
import ReviewForm from "./ReviewForm"
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
    const [review, setReview] = useState({})
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
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
                        <div className="reviews"></div>
                    </Main>
                </Column>
                <Column>
                    <ReviewForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        attributes={airline.data.attributes}
                        review={review}
                    />
                </Column>
            </Fragment>
        }
        </Wrapper>
    )
}

export default Airline