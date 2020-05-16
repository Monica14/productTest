import React from 'react';
import Login from './components/auth/Login';
import ErrorHandling from './ErrorHandling';
import Routes from "./Routes";

function App() {
  return (
    <div className="wrapper">      
      <ErrorHandling>
        <Routes />
      </ErrorHandling>
    </div>
  );
}

export default App;
