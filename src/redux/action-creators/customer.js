import { CUSTOMER_FETCH_START, CUSTOMER_FETCH_SUCCESS, CUSTOMER_FETCH_ERROR } from 'Redux/action-types/customer'
import { fetchCustomersService } from 'Services/Customer'

export const fetchCustomers = () => dispatch => {
    dispatch({ type: CUSTOMER_FETCH_START })

    setTimeout(() => {
        fetchCustomersService()
            .then(res => {
                dispatch({
                    type: CUSTOMER_FETCH_SUCCESS,
                    payload: { customers: res.data }
                })
            })
            .catch(err => {
                dispatch({ type: CUSTOMER_FETCH_ERROR })
            })
    }, 1500)
}
