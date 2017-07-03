import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from 'Redux/store'
import App from 'Components/App'

render(
    <Provider store = { store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('reactApp')
)

if (module.hot) {
    module.hot.accept()
}
