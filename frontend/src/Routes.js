import React from 'react';
import Login from './components/auth/Login';
import AddProduct from './components/Product/AddProduct';
import ListProduct from './components/Product/ListProduct';
import Route from 'react-router-dom/Route'

function Routes() {
  return (
    <React.Fragment>
      <Route path="/" exact strict component={Login} />
      <Route path="/addProduct" exact strict component={AddProduct} />
      <Route path="/listProduct" exact strict component={ListProduct} />
    </React.Fragment>
  );
}

export default Routes;
