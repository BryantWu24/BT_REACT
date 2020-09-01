export const handleLoginPWDInput = (val) => {
    return {
        type: 'HANDLE_LOGIN_PWD_INPUT',
        input: val.target.value
    }
}
export const handleLoginACInput = (val) => {
    return {
        type: 'HANDLE_LOGIN_AC_INPUT',
        input: val.target.value
    }
}

export const checkLoginForm = () => {
    return {
        type: 'CHECK_LOGIN_FORM',
    }
}
