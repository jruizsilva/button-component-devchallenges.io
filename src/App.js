import React from 'react';
import Main from './components/Main';
import SideNavegation from './components/SideNavegation';
import './index.css';

const App = () => {
  return (
    <div className='container'>
      <SideNavegation />
      <Main />
    </div>
  );
};

export default App;
