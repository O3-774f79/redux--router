import React, { Component } from 'react'
import '!style-loader!css-loader!css-spinners/css/spinner/gauge.css'

import store from 'Redux/store'

import Routes from 'Components/Routes'
import { login, logout } from 'Redux/action-creators/auth'

let unsubscribe = null

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            auth: false,
            loading: false
        }
    }

    componentDidMount() {
        unsubscribe = store.subscribe(() => {
            const { auth: { auth, loading } } = store.getState()

            this.setState({
                auth,
                loading
            })
        })
    }

    render() {
        const { auth, loading } = this.state

        return <div className="box">
            <h3 className="title">Redux - react-router</h3>
            { loading
                ? <div className="gauge-loader"></div>
                : <div>
                    { !auth
                        ? <button onClick={ () => store.dispatch(login()) } className="button is-primary">Login</button>
                        : <button onClick={ () => store.dispatch(logout()) } className="button is-danger">Logout</button>
                    }
                </div>
            }

            <p>&nbsp;</p>
            <Routes/>
        </div>
    }

    componentWillUnmount() {
        unsubscribe()
    }
}
