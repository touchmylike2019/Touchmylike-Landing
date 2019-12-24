import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </BrowserRouter>
    )
}


