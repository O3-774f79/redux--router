import axios from 'axios'

export const logMiddleware = store => next => action => {
    console.log(action)
    console.log(store.getState())

    return next(action)
}

export const ajaxMiddleware = store => next => action => {
    const { type, url } = action
    const { dispatch } = store

    if (type == 'AJAX') {
        if (url) {
            dispatch({ type: 'CUSTOMER_FETCH_START' })

            axios.get(url)
                .then(res => {
                    dispatch({
                        type: 'CUSTOMER_FETCH_SUCCESS',
                        payload: {
                            customers: res.data
                        }
                    })
                })
                .catch(err => {
                    dispatch({ type: 'CUSTOMER_FETCH_ERROR' })
                })
        }
    }

    return next(action)
}
