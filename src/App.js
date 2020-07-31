import React, { useState, useEffect } from 'react';

import Routes from './routes';

import Auth from './services/auth';

import Login from './pages/Login';

function App() {
  const [auth, setAuth] = useState(Auth);

  useEffect(() => {
    setAuth(Auth);
  }, []);

  return (
    <div className="App">
      {auth ?
        <div className="main-body">
          <Routes />
        </div>
        :
        <Login />
      }
    </div>
  );
}

export default App;
