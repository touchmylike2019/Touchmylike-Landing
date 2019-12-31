import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Docs from './pages/document'
import Blog from './pages/blog'
import HNY2020 from './pages/posts/hny2020'
import About from './pages/about'
import CPP from './pages/docs/cpp'
import SFML from './pages/docs/sfml'
import Structure from './pages/cpp/structure'
import Login from './pages/login'
import Signup from './pages/signup'
import Account from './pages/account'
import Calendar from './pages/calendar'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/documents" component={Docs} exact/>
                <Route path="/documents/cpp" component={CPP} exact/>
                <Route path="/documents/cpp/structure" component={Structure} />
                <Route path="/documents/sfml" component={SFML} />
                <Route path="/blog" component={Blog} exact/>
                <Route path="/blog/happy-new-year-2020" component={HNY2020} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/account" component={Account} />
                <Route path="/calendar" component={Calendar} />
            </Switch>
        </BrowserRouter>
    )
}


