import { ACTION_START, SAVE_USER, SAVE_PRODUCT, LOGIN,LIST_PRODUCT } from '../constants/auth';
export const initialState = {
    name: '',
    username: '',
    password: '',
    repeatpassword: '',
    email: '',
    loading: false,
    loginSuccess: false,
    data: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_START:
            return {
                ...state,
                loading: true
            }
        case SAVE_USER:
            return {
                ...state,
                username: action.payload.username,
                loading: false
            }
        case SAVE_PRODUCT:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case LIST_PRODUCT:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case LOGIN:
            console.log(action)
            return {
                ...state,
                data: action.payload,
                loginSuccess: true,
                loading: false
            }
        default:
            throw new Error('Unexpected action');
    }
}