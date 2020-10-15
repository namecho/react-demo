import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import AuthRoute from './components/AuthRoute'
import Layout from './layout'
import Login from './pages/Login'

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login}></Route>
                    <AuthRoute path="/">
                        <Layout />
                    </AuthRoute>
                </Switch>
            </HashRouter>
        )
    }
}