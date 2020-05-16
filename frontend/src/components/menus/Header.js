import React, { Component } from 'react';
import { withRouter } from "react-router";

const Header = (props) => {   
    // props.history.push('/listEmployee');
        return (
            <React.Fragment>
            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini">
                        <img src="assets/dist/img/mini-logo.png" alt="" />
                    </span>
                    <span className="logo-lg">
                        <img src="assets/dist/img/logo.png" alt="" />
                    </span>
                </a>
                {/* Header Navbar */}
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                        {/* Sidebar toggle button */}
                        <span className="sr-only">Toggle navigation</span>
                        <span className="pe-7s-angle-left-circle"></span>
                    </a>
                    {/* <!-- searchbar--> */}
                    <a href="#search"><span className="pe-7s-search"></span></a>
                    <div id="search">
                        <button type="button" className="close">×</button>
                        <form>
                            <input type="search" placeholder="type keyword(s) here" />
                            <button type="submit" className="btn btn-add">Search...</button>
                        </form>
                    </div>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            {/* <!-- Orders --> */}
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle admin-notification" data-toggle="dropdown">
                                    <i className="pe-7s-cart"></i>
                                    <span className="label label-primary">5</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <ul className="menu">
                                            <li >
                                                {/* <!-- start Orders --> */}
                                                <a href="#" className="border-gray">
                                                    <div className="pull-left">
                                                        <img src="assets/dist/img/basketball-jersey.png" className="img-thumbnail" alt="User Image" />
                                                    </div>
                                                    <h4>polo shirt</h4>
                                                    <p><strong>total item:</strong> 21
                                       </p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="border-gray">
                                                    <div className="pull-left">
                                                        <img src="assets/dist/img/shirt.png" className="img-thumbnail" alt="User Image" />
                                                    </div>
                                                    <h4>Kits</h4>
                                                    <p><strong>total item:</strong> 11
                                       </p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="border-gray">
                                                    <div className="pull-left">
                                                        <img src="assets/dist/img/football.png" className="img-thumbnail" alt="User Image" />
                                                    </div>
                                                    <h4>Football</h4>
                                                    <p><strong>total item:</strong> 16
                                       </p>
                                                </a>
                                            </li>
                                            <li className="nav-list">
                                                <a href="#" className="border-gray">
                                                    <div className="pull-left">
                                                        <img src="assets/dist/img/shoe.png" className="img-thumbnail" alt="User Image" />
                                                    </div>
                                                    <h4>Sports sheos</h4>
                                                    <p><strong>total item:</strong> 10
                                       </p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- Messages --> */}
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="pe-7s-mail"></i>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                {/* <!-- start message --> */}
                                                <a href="#" className="border-gray">
                                                    <div className="pull-left">
                                                        <img src="assets/dist/img/avatar.png" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>Ronaldo</h4>
                                                    <p>Please oreder 10 pices of kits..</p>
                                                    <span className="badge badge-success badge-massege"><small>15 hours ago</small>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="border-gray">
                                                    <div className="pull-left">
                                                        <img src="assets/dist/img/avatar2.png" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>Leo messi</h4>
                                                    <p>Please oreder 10 pices of Sheos..</p>
                                                    <span className="badge badge-info badge-massege"><small>6 days ago</small>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="border-gray">
                                                    <div className="pull-left" >
                                                        <img src="assets/dist/img/avatar3.png" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>Modric</h4>
                                                    <p>Please oreder 6 pices of bats..</p>
                                                    <span className="badge badge-info badge-massege"><small>1 hour ago</small>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="border-gray">
                                                    <div className="pull-left">
                                                        <img src="assets/dist/img/avatar4.png" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>Salman</h4>
                                                    <p>Hello i want 4 uefa footballs</p>
                                                    <span className="badge badge-danger badge-massege">
                                                        <small>6 days ago</small>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="border-gray">
                                                    <div className="pull-left">
                                                        <img src="assets/dist/img/avatar5.png" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>Sergio Ramos</h4>
                                                    <p>Hello i want 9 uefa footballs</p>
                                                    <span className="badge badge-info badge-massege"><small>5 hours ago</small>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- Notifications --> */}
                            <li className="dropdown notifications-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="pe-7s-bell"></i>
                                    <span className="label label-warning">7</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#" className="border-gray">
                                                    <i className="fa fa-dot-circle-o color-green"></i>Change Your font style</a>
                                            </li>
                                            <li><a href="#" className="border-gray">
                                                <i className="fa fa-dot-circle-o color-red"></i>
                                                check the system ststus..</a>
                                            </li>
                                            <li><a href="#" className="border-gray">
                                                <i className="fa fa-dot-circle-o color-yellow"></i>
                                                Add more admin...</a>
                                            </li>
                                            <li><a href="#" className="border-gray">
                                                <i className="fa fa-dot-circle-o color-violet"></i> Add more clients and order</a>
                                            </li>
                                            <li><a href="#" className="border-gray">
                                                <i className="fa fa-dot-circle-o color-yellow"></i>
                                                Add more admin...</a>
                                            </li>
                                            <li><a href="#" className="border-gray">
                                                <i className="fa fa-dot-circle-o color-violet"></i> Add more clients and order</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- Tasks --> */}
                            <li className="dropdown tasks-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="pe-7s-note2"></i>
                                    <span className="label label-danger">6</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                {/* <!-- Task item --> */}
                                                <a href="#" className="border-gray">
                                                    <span className="label label-success pull-right">50%</span>
                                                    <h3><i className="fa fa-check-circle"></i> Theme color should be change</h3>
                                                </a>
                                            </li>
                                            {/* <!-- end task item --> */}
                                            <li>
                                                {/* <!-- Task item --> */}
                                                <a href="#" className="border-gray">
                                                    <span className="label label-warning pull-right">90%</span>
                                                    <h3><i className="fa fa-check-circle"></i> Fix Error and bugs</h3>
                                                </a>
                                            </li>
                                            {/* <!-- end task item --> */}
                                            <li>
                                                {/* <!-- Task item --> */}
                                                <a href="#" className="border-gray">
                                                    <span className="label label-danger pull-right">80%</span>
                                                    <h3><i className="fa fa-check-circle"></i> Sidebar color change</h3>
                                                </a>
                                            </li>
                                            {/* <!-- end task item --> */}
                                            <li>
                                                {/* <!-- Task item --> */}
                                                <a href="#" className="border-gray">
                                                    <span className="label label-info pull-right">30%</span>
                                                    <h3><i className="fa fa-check-circle"></i> font-family should be change</h3>
                                                </a>
                                            </li>
                                            <li>
                                                {/* <!-- Task item --> */}
                                                <a href="#" className="border-gray">
                                                    <span className="label label-success pull-right">60%</span>
                                                    <h3><i className="fa fa-check-circle"></i> Fix the database Error</h3>
                                                </a>
                                            </li>
                                            <li>
                                                {/* <!-- Task item --> */}
                                                <a href="#" className="border-gray">
                                                    <span className="label label-info pull-right">20%</span>
                                                    <h3><i className="fa fa-check-circle"></i> data table data missing</h3>
                                                </a>
                                            </li>
                                            {/* <!-- end task item --> */}
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- Help --> */}
                            <li className="dropdown dropdown-help hidden-xs">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="pe-7s-settings"></i></a>
                                <ul className="dropdown-menu" >
                                    <li>
                                        <a href="profile.html">
                                            <i className="fa fa-line-chart"></i> Networking</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa fa-bullhorn"></i> Lan settings</a></li>
                                    <li><a href="#"><i className="fa fa-bar-chart"></i> Settings</a></li>
                                    <li><a href="login.html">
                                        <i className="fa fa-wifi"></i> wifi</a>
                                    </li>
                                </ul>
                            </li>
                            {/* <!-- user --> */}
                            <li className="dropdown dropdown-user">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src="assets/dist/img/avatar5.png" className="img-circle" width="45" height="45" alt="user" /></a>
                                <ul className="dropdown-menu" >
                                    <li>
                                        <a href="profile.html">
                                            <i className="fa fa-user"></i> User Profile</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-inbox"></i> Inbox</a></li>
                                    <li><a href="login.html">
                                        <i className="fa fa-sign-out"></i> Signout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            </React.Fragment>

        )
}

export default withRouter(Header);