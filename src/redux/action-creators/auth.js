import { AUTH_LOGIN_START, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from 'Redux/action-types/auth'

export const login = () => dispatch => {
    dispatch({ type: AUTH_LOGIN_START })
    setTimeout(() => {
        dispatch({ type: AUTH_LOGIN_SUCCESS })
    }, 1500)
}

export const logout = () => ({
    type: AUTH_LOGOUT
})
