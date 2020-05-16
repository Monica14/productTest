import React, { useReducer } from 'react';
import { useFormik } from 'formik';
import { initialState,reducer} from '../../reducers/auth';
import { nameCheck,usernameCheck,repeatpassword,email,password } from '../../validations/register';
import {RegisterAction} from '../../actions/Auth';

const Register = (props) => {
    const [userData, dispatch] = useReducer(reducer, initialState)

    const validate = values => {
        const errors = {};        
        nameCheck(values.name,errors)
        usernameCheck(values.username,errors)
        repeatpassword(values.password,values.repeatpassword,errors);
        email(values.email,errors);
        password(values.password,errors);
        return errors;
    }
    const formik = useFormik({
        initialValues: userData,
        validate,
        onSubmit: values => {
            RegisterAction(values,dispatch);
        }
    })
    return (
        <div className="container-center lg">
            <div className="login-area">
                <div className="panel panel-bd panel-custom">
                    <div className="panel-heading">
                        <div className="view-header">
                            <div className="header-icon">
                                <i className="pe-7s-unlock"></i>
                            </div>
                            <div className="header-title">
                                <h3>Register</h3>
                                <small><strong>Please enter your data to register.</strong></small>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <form action="http://crm.thememinister.com/crmAdmin/index.html" onSubmit={formik.handleSubmit} id="loginForm" novalidate>
                            <div className="row">
                            <div className="form-group col-lg-6">
                                    <label>Full Name</label>
                                    <input type="text" id="name" className="form-control" name="name" onChange={formik.handleChange} value={formik.values.name} />
                                    {formik.errors.name ? <span className="help-block small">{formik.errors.name}</span> : null}
                                </div>

                                <div className="form-group col-lg-6">
                                    <label>Username</label>
                                    <input type="text" id="username" className="form-control" name="username" onChange={formik.handleChange} value={formik.values.username} />
                                    {formik.errors.username ? <span className="help-block small">{formik.errors.username}</span> : null}
                                </div>

                                <div className="form-group col-lg-6">
                                    <label>Password</label>
                                    <input type="password" id="password" className="form-control" name="password" onChange={formik.handleChange} value={formik.values.password} />
                                    {formik.errors.password ? <span className="help-block small">{formik.errors.password}</span> : null}
                                </div>

                                <div className="form-group col-lg-6">
                                    <label>Repeat Password</label>
                                    <input type="password" id="repeatpassword" className="form-control" name="repeatpassword" onChange={formik.handleChange} value={formik.values.repeatpassword} />
                                    {formik.errors.repeatpassword ? <span className="help-block small">{formik.errors.repeatpassword}</span> : null}
                                </div>

                                <div className="form-group col-lg-6">
                                    <label>Email Address</label>
                                    <input type="text" id="email" className="form-control" name="email" onChange={formik.handleChange} value={formik.values.email} />
                                    {formik.errors.email ? <span className="help-block small">{formik.errors.email}</span> : null}
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-warning">Register</button>
                                    <a className="btn btn-add" href="#" onClick={() => props.updateLoginFlag('login')}>Login</a>
                                    {userData.loading && <span>Loading...</span>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;