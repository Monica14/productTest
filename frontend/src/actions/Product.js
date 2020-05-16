import axios, { post } from 'axios';
import { ACTION_START, SAVE_PRODUCT, LIST_PRODUCT } from '../constants/auth';
import config from '../config/config';
import history from '../config/history'


export const saveProduct = (values, dispatch) => {
    console.log("IN REGISTER: ",values)
    dispatch({ type: ACTION_START });

    axios.post(`${config.apiUrl}/products/saveProduct`, values).then(res => {
        console.log("res: ",res)
        dispatch({ type: SAVE_PRODUCT, payload: values })
    })
        .catch(err => {
            console.log("err: ", err);
        })
}

export const getProducts = (dispatch) => {
    console.log("IN List: ")
    dispatch({ type: ACTION_START });

    axios.get(`${config.apiUrl}/products/list`).then(res => {
        console.log("res: ",res)
        dispatch({ type: LIST_PRODUCT })
    })
        .catch(err => {
            console.log("err: ", err);
        })
}