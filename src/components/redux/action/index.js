export const handleTextInput = (val) => {
    return {
        type: 'HANDLE_TEXT_INPUT',
        input: val.target.value
    }
}
