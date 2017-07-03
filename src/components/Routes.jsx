import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import store from 'Redux/store'

import NavBar from 'Components/NavBar'
import { Home, About, PageNotFound } from 'Components/Pages'
import CustomerList from 'Components/CustomerList'
import ReduxForm from 'Forms/ReduxForm'

const ProtectRoute = props => {
    const { component: Component, ...rest } = props

    const { auth: { auth } } = store.getState()

    return !auth
        ? <Redirect to="/" />
        : <Component { ...rest } />
}

export default () => <div className="box">
    <NavBar />
    <p>&nbsp;</p>
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <ProtectRoute path="/customers" component={ CustomerList } />
        <Route path="/redux-form" component={ ReduxForm } />
        <Route component={ PageNotFound } />
    </Switch>
</div>
