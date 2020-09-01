const initState = {
    account:'',
    userId:'',
    token:''
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_INFO':
            sessionStorage.setItem('tkn',action.res.data.data.token);
            sessionStorage.setItem('usrId',action.res.data.data.userId);
            sessionStorage.setItem('usrName',action.res.data.data.account);
            return Object.assign({}, state, {
                account: action.res.data.data.account,
                userId: action.res.data.data.userId,
                token: action.res.data.data.token
            });

        default:
            return state
    }
}

export default Reducer