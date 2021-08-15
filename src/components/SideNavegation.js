import React from 'react';
import './SideNavegation.css';

const SideNavegation = () => {
  return (
    <nav className='SideNavegation'>
      <div className='SideNavegation__Wrapper'>
        <div className='SideNavegation__Logo'>
          <span className='SideNavegation__Orange'>Dev</span>challenges.io
        </div>
        <div className='SideNavegation__Content'>
          <a className='SideNavegation__Link' href='/'>
            Color
          </a>
          <a className='SideNavegation__Link' href='/'>
            Typograph
          </a>
          <a className='SideNavegation__Link' href='/'>
            Spaces
          </a>
          <a className='SideNavegation__Link --active' href='/'>
            Buttons
          </a>
          <a className='SideNavegation__Link' href='/'>
            Inputs
          </a>
          <a className='SideNavegation__Link' href='/'>
            Grid
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SideNavegation;
