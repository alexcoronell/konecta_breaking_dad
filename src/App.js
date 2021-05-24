import React from 'react';
import Routes from './components/Routes';

import { UserContextProvider } from './context/UserContext';


function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Routes />
      </div>
    </UserContextProvider>
  );
}

export default App;
