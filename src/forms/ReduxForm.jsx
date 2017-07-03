import React, { Component } from 'react'

import CustomerForm from 'Forms/CustomerForm'

export default class extends Component {
    render() {
        return <div className="box">
            <CustomerForm onSubmit={ this.handleSubmit } />
        </div>
    }

    handleSubmit(data) {
        console.log('Parent: ', data)
    }
}
