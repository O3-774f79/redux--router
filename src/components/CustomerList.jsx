import React, { Component } from 'react'
import { connect } from 'react-redux'
import '!style-loader!css-loader!css-spinners/css/spinner/gauge.css'

import { fetchCustomers } from 'Redux/action-creators/customer'

@connect(state => state.customer)
export default class extends Component {
    render() {
        const { customers, loading, dispatch } = this.props

        return <div className="box">
            <h3 className="title">Customer List</h3>

            { loading
                ? <div className="gauge-loader"></div>
                : <div>
                    <p className="control">
                        <button onClick={ () => dispatch(fetchCustomers()) } className="button">Fetch Customers</button>
                    </p>

                    <hr />

                    <table className="table">
                        <tbody>
                        { customers.map(c => {
                            const url = '/customers/' + c.id
                            return <tr key={ c.id }>
                                <td>{ c.firstName } { c.lastName }</td>
                                <td>{ c.age }</td>
                                <td>{ c.gender }</td>
                                <td>{ c.company }</td>
                            </tr>
                        }) }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    }
}
