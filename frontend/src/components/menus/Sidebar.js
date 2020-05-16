import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            // <!-- Left side column. contains the sidebar -->
            <aside className="main-sidebar">
            {/* <!-- sidebar --> */}
               <div className="sidebar">
                {/* <!-- sidebar menu --> */}
                  <ul className="sidebar-menu">
                     <li className="treeview">
                        <a href="#">
                        <i className="fa fa-users"></i><span>Product</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                        </span>
                        </a>
                        <ul className="treeview-menu">
                           <li><Link to="/addProduct">Add Product</Link></li>
                           <li><Link to="/listProduct">List</Link></li>
                        </ul>
                     </li>                     
                  </ul>
               </div>
               {/* <!-- /.sidebar --> */}
            </aside>
        )
    }
}

export default Sidebar;