import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
    const errors = {}

    if (!values.firstName) {
        errors.firstName = 'Name is required'
    } else if (values.firstName.length < 5) {
        errors.firstName = 'Name must be at least 5 characters'
    }

    if (!values.lastName) {
        errors.lastName = 'Surname is required'
    } else if (values.lastName.length < 5) {
        errors.lastName = 'Surname must be at least 5 characters'
    }

    return errors
}

const inputField = (props) => {
    const { input, meta, ...rest } = props
    const { touched, error } = meta

    const showError = touched && error
    const className = `input ${ showError ? 'is-danger animated bounce' : '' }`

    return <div>
        <p className="control">
            <input { ...input } { ...rest } className={ className } />
        </p>
        { showError && <p className="help is-danger">{ error }</p> }
        <p>&nbsp;</p>
    </div>
}

// @connect(state => ({ customer: state.customer }))
@reduxForm({
    form: 'customer',
    validate
})
export default class extends Component {
    render() {
        const { handleSubmit, pristine, submitting, reset } = this.props

        return <div className="box">
            <form onSubmit={ handleSubmit }>
                <Field name="firstName" component={ inputField } type="text" placeholder="Name" />
                <Field name="lastName" component={ inputField } type="text" placeholder="Surname" />

                <button type="submit" disabled={ pristine || submitting } className="button is-primary">Submit</button>
                <button disabled={ pristine || submitting } onClick={ reset } className="button is-danger">Cancel</button>
            </form>
        </div>
    }

    handleSubmit(values) {
        console.log(values)
    }
}
