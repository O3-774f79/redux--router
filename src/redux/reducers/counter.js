const initState = {
    counter: 1
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'COUNTER_INC':
            return { ...state, counter: ++state.counter }

        case 'COUNTER_DEC':
            return { ...state, counter: --state.counter }
    }

    return state
}
