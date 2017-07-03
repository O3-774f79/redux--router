import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import counterReducer from 'Redux/reducers/counter'
import authReducer from 'Redux/reducers/auth'
import customerReducer from 'Redux/reducers/customer'

import { logMiddleware, ajaxMiddleware } from 'Redux/middlewares'

const reducers = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    customer: customerReducer,
    form: formReducer
})

// export default createStore(reducers, applyMiddleware(thunk, logMiddleware, ajaxMiddleware))
export default createStore(reducers, applyMiddleware(thunk))
