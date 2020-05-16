import React, { useReducer, useState } from 'react';
import { useFormik, Formik } from 'formik';
import Header from '../menus/Header';
import Sidebar from '../menus/Sidebar';
import { initialState, reducer } from '../../reducers/auth';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { saveProduct } from '../../actions/Product'

const validateSize = (event) => {
    let file = event.target.files[0];
    let size = 30000;
    let err = '';
    console.log(file.size);
    if (file.size > size) {
        err = file.type + 'is too large, please pick a smaller file\n';
        console.log(err);
    }
    return true
};

const AddProduct = (props) => {
    const [productImage, setPic] = useState('');
    const [userData, dispatch] = useReducer(reducer, initialState);
    const validate = values => {
        const errors = {};
        if (!values.productTitle) {
            errors.productTitle = "Please enter product title"
        }
        else if (values.productTitle > 10) {
            errors.productTitle = "Must be 10 characters or less"
        }

        if (!values.productMrp) {
            errors.productMrp = "Please enter product MRP"
        }

        if (!values.productRating) {
            errors.productRating = "Please enter product rating"
        }
        else if (!/^[0-5]$/.test(values.productRating)) {
            errors.productRating = "Invalid product rating"
        }

        return errors;
    }
    const formik = useFormik({
        initialValues: {
            productTitle: '',
            productMrp: '',
            productRating: '',
            productImage: ''
        },
        validate,
        onSubmit: values => {
            console.log(productImage)
            let formData = new FormData();
            formData.append('title', values.productTitle);
            formData.append('mrp', values.productMrp);
            formData.append('rating', values.productRating);
            formData.append('productImage', productImage);
            saveProduct(formData, dispatch);
        }
    })

    function onChangeHandler(event) {
        let file = event.target.files[0];
        console.log(validateSize(event));
        if (validateSize(event)) {      
            setPic(file);
        }
    }

    return (
        <React.Fragment>
            <Header />
            <Sidebar />           

            <div className="content-wrapper">
                {/* <!-- Content Header (Page header) --> */}
                <section className="content-header">
                    <div className="header-icon">
                        <i className="fa fa-users"></i>
                    </div>
                    <div className="header-title">
                        <h1>Add Product</h1>
                        <small>Product list</small>
                    </div>
                </section>
                {/* <!-- Main content --> */}
                <section className="content">
                    <div className="row">
                        {/* <!-- Form controls --> */}
                        <div className="col-sm-12">
                            <div className="panel panel-bd lobidrag">
                                <div className="panel-heading">
                                    <div className="btn-group" id="buttonlist">
                                        <Link className="btn btn-add " to="/listProduct">
                                            <i className="fa fa-list"></i>  Product List </Link>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <form className="col-sm-6" onSubmit={formik.handleSubmit}>
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input type="text" className="form-control" name="productTitle" placeholder="Enter First Name"
                                                onChange={formik.handleChange} value={formik.values.productTitle} />
                                        </div>
                                        {formik.errors.productTitle ? <div>{formik.errors.productTitle}</div> : null}
                                        <div className="form-group">
                                            <label>MRP</label>
                                            <input type="text" className="form-control" name="productMrp" placeholder="Enter last Name"
                                                onChange={formik.handleChange} value={formik.values.productMrp} />
                                        </div>
                                        {formik.errors.productMrp ? <div>{formik.errors.productMrp}</div> : null}
                                        
                                        <div className="form-group">
                                            <label>Rating</label>
                                            <input type="number" className="form-control" name="productRating" placeholder="Enter productRating"
                                                onChange={formik.handleChange} value={formik.values.productRating} />
                                        </div>
                                        {formik.errors.productRating ? <div>{formik.errors.productRating}</div> : null}
                                        <div className="form-group">
                                            <label>Picture upload</label>
                                            <input type="file" name="productImage" onChange={(e) => onChangeHandler(e)} />
                                            <input type="hidden" name="old_picture" />
                                        </div>
                                        {formik.errors.productImage ? <div>{formik.errors.productImage}</div> : null}                                        
                                        <div className="reset-button">
                                            <a href="#" className="btn btn-warning">Reset</a>
                                            <button type="submit" className="btn btn-success">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- /.content --> */}
            </div>
        </React.Fragment>
    )
}

export default withRouter(AddProduct);
