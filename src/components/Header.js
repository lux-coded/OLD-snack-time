import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = { searchResults: [] };

  render() {
    return (
      <header className='navbar'>
        <span class="material-icons nav-icon nav-menu-icon" onClick={() => document.querySelector('.nav-link-container').classList.toggle('nav-visible')}>
          menu
        </span>
        <div  className='nav-logo-container'>
          <a href='/' className='nav-logo'>
            <span className="material-icons nav-icon">
              fastfood
            </span>
            <h1>SnackTime</h1>
          </a>
        </div>

        <div className='nav-link-container'>
          <Link to='/top-rated' className='nav-link'>Top Rated</Link>
          <Link to='/popular' className='nav-link'>Popular</Link>
          <Link to='/upcoming' className='nav-link'>Upcoming</Link>
        </div>

      </header>
    );
  }
}

export default Header;
