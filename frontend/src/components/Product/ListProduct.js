import React, { useReducer, useEffect } from 'react';
import Header from '../menus/Header';
import Sidebar from '../menus/Sidebar';
import { Link } from 'react-router-dom';
import { initialState, reducer } from '../../reducers/auth';
import { getProducts } from '../../actions/Product'

const ListEmployee = () => {
    const [userData, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        getProducts(dispatch);
    }, []);

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
                        <h1>Product</h1>
                        <small>Product List</small>
                    </div>
                </section>
                {/* <!-- Main content --> */}
                <section className="content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="panel panel-bd lobidrag">
                                <div className="panel-heading">
                                    <div className="btn-group" id="buttonexport">
                                        <a href="#">
                                            <h4>Add Product</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    {/* <!-- Plugin content:powerpoint,txt,pdf,png,word,xl --> */}
                                    <div className="btn-group">
                                        <div className="buttonexport" id="buttonlist">
                                            <Link className="btn btn-add" to="/addProduct"><i className="fa fa-plus"></i> Add Product </Link>
                                        </div>
                                    </div>
                                    {/* <!-- Plugin content:powerpoint,txt,pdf,png,word,xl --> */}
                                    <div className="table-responsive">
                                        <table id="dataTableExample1" className="table table-bordered table-striped table-hover">
                                            <thead>
                                                <tr className="info">
                                                    <th>Image</th>
                                                    <th>Title</th>
                                                    <th>MRP</th>
                                                    <th>Rating</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    userData.data.map((data) => {
                                                        <tr>
                                                            <td><img src="assets/dist/img/w1.png" className="img-circle" alt="User Image" width="50" height="50" /> </td>
                                                            <td>MD. Alimul Alrazy</td>
                                                            <td>+8801674688663</td>
                                                            <td>V.I.P</td>
                                                        </tr>
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
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

export default ListEmployee;