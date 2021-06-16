import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Airlines from "./Airlines/Airlines"
import Airline from "./Airline/Airline"

const App = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Airlines}></Route>
            <Route exact path="/airlines/:slug" component={Airline}></Route>
        </Switch>
    </BrowserRouter>
    )
}

export default App