import { AUTH_LOGIN_START, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from 'Redux/action-types/auth'

const initState = {
    auth: false,
    loading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_START:
            return { ...state, loading: true }

        case AUTH_LOGIN_SUCCESS:
            return { ...state, loading: false, auth: true }

        case AUTH_LOGOUT:
            return { ...state, auth: false }
    }

    return state
}
