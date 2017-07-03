import { CUSTOMER_FETCH_START, CUSTOMER_FETCH_SUCCESS, CUSTOMER_FETCH_ERROR } from 'Redux/action-types/customer'

const initState = {
    customers: [],
    loading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case CUSTOMER_FETCH_START:
            return { ...state, loading: true }

        case CUSTOMER_FETCH_SUCCESS:
            return { ...state, loading: false, customers: action.payload.customers }

        case CUSTOMER_FETCH_ERROR:
            return { ...state, loading: false }
    }

    return state
}
