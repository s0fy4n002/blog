import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import{Login, Register,  MainApp} from '../../pages'

function index() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/register">
                    <Register></Register>
                </Route>
                <Route path="/">
                    <MainApp />
                </Route>
            </Switch>
        </Router>
    )
}

export default index
