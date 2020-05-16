import React, { useState,useReducer } from 'react';
import { useFormik } from 'formik';
import Register from '../auth/Register';
import { LoginAction } from '../../actions/Auth';
import { initialState,reducer} from '../../reducers/auth';
import { usernameCheck,password } from '../../validations/register';
import { useHistory } from "react-router";
import { withRouter } from "react-router";
import AddProduct from '../Product/AddProduct'

const Login = () => {
    const [loginState, updateLoginFlag] = useState('login');
    const [userData, dispatch] = useReducer(reducer, initialState);
    let history = useHistory();

    const validate = values => {
        const errors = {};      
        usernameCheck(values.username,errors)
        password(values.password,errors);
        return errors;
    }
    const formik = useFormik({
        initialValues: userData,
        validate,
        onSubmit: values => {
            LoginAction(values,dispatch);  
            console.log(userData.loginSuccess)
            if(userData.loginSuccess) {
                history.push("/AddProduct")
            }                                                                                                                                                                                                                                                                                                            
        }
    })

    return (
        <>
        <div class="login-wrapper">
            {loginState == 'login' && <div class="container-center">
                <div class="login-area">
                    <div class="panel panel-bd panel-custom">
                        <div class="panel-heading">
                            <div class="view-header">
                                <div class="header-icon">
                                    <i class="pe-7s-unlock"></i>
                                </div>
                                <div class="header-title">
                                    <h3>Login</h3>
                                    <small><strong>Please enter your credentials to login.</strong></small>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form action="#" onSubmit={formik.handleSubmit} id="loginForm" novalidate>
                                <div class="form-group">
                                    <label class="control-label" for="username">Username</label>
                                    <input type="text" placeholder="example@gmail.com" title="Please enter you username"  onChange={formik.handleChange} value={formik.values.username} name="username" id="username" class="form-control" />
                                    {formik.errors.username ? <span className="help-block small">{formik.errors.username}</span> : null}
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="password">Password</label>
                                    <input type="password" title="Please enter your password" placeholder="******" onChange={formik.handleChange} value={formik.values.password} name="password" id="password" class="form-control" />
                                    {formik.errors.password ? <span className="help-block small">{formik.errors.password}</span> : null}
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-add">Login</button>
                                    <a class="btn btn-warning" href="#" onClick={() => updateLoginFlag('register')}>Register</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            }
            {loginState == 'register' && <Register updateLoginFlag={updateLoginFlag} />}
        </div>
        </>
    )
}

export default withRouter(Login);