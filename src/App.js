import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Docs from './pages/document'
import Blogs from './pages/blog'
import About from './pages/about'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/documents" component={Docs} />
                <Route path="/blogs" component={Blogs} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    )
}


