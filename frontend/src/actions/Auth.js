import axios from 'axios';
import { ACTION_START, SAVE_USER, LOGIN } from '../constants/auth';
import config from '../config/config';
import history from '../config/history'


export const RegisterAction = (values, dispatch) => {
    dispatch({ type: ACTION_START })
    axios.post(`${config.apiUrl}/employee/save`, values).then(res => {
        dispatch({ type: SAVE_USER, payload: values })
    })
        .catch(err => {
            console.log("err: ", err);
        })
}

export const LoginAction = (values,dispatch) => {
    dispatch({ type: ACTION_START })
    axios.post(`${config.apiUrl}/auth/login`, values).then(res => {
        dispatch({ type: LOGIN, payload: values })
        // history.push('/listEmployee');
    })
        .catch(err => {
            console.log("err: ", err);
        })
}