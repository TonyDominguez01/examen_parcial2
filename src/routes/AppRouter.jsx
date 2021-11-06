import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Inicio from '../pages/Inicio'
import Participantes from '../pages/Participantes'

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/inicio" component={Inicio} />
                <Route exact path="/participantes" component={Participantes} />
                <Redirect to="/inicio"/>
            </Switch>
        </Router>
    )
}

export default AppRouter
