import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

@connect(state => state.counter)
export class Home extends Component {
    render() {

        const { dispatch } = this.props

        return <div className="box">
            <h3 className="title">Home</h3>
            <p>Counter: { this.props.counter }</p>

            <p className="control">
                <button onClick={ () => dispatch({ type: 'COUNTER_INC' })} className="button is-primary">Increment</button>
                <button onClick={ () => dispatch({ type: 'COUNTER_DEC' })} className="button is-danger">Decrement</button>
            </p>
        </div>
    }
}

export const About = props => <div className="box">
    <h3 className="title">About</h3>
</div>

export const PageNotFound = props => <div className="box">
    <h3 className="title">PageNotFound</h3>
</div>
