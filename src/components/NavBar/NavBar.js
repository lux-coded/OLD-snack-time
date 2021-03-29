import React from 'react';
import NavLinks from './NavLinks.js';
import '../../styles/NavBar.css';

class NavBar extends React.Component {

  render() {
    return (
      <div className='navbar'>
        <h1 className='nav-logo'>SnackTime</h1>
        <NavLinks />
      </div>
    );
  }
}

export default NavBar;
