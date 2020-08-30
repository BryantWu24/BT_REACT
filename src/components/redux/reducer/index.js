const initState = {
    handleTextInput: ''
}

const Reducer = (state = initState, action) => {
    switch (action.type) {

        case 'HANDLE_TEXT_INPUT':
            return Object.assign({}, state, {
                handleTextInput: action.input
            })

        default:
            return state
    }
}

export default Reducer