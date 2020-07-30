import React from 'react';
import Header from './components/Header';
import User from './components/User';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-body">
        <User />
      </div>
    </div>
  );
}

export default App;
