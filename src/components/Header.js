import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = { searchResults: [] };

  render() {
    return (
      <header className='navbar'>
        <Link to='/' className='nav-logo'>
          <span className="material-icons nav-icon">
            fastfood
          </span>
          <h1 >SnackTime</h1>
        </Link>
        <div className='nav-link-container'>
          <Link to='/' className='nav-link'>User</Link>
          <Link to='/top-rated' className='nav-link'>Top Rated</Link>
          <Link to='/popular' className='nav-link'>Popular</Link>
          <Link to='/upcoming' className='nav-link'>Upcoming</Link>
        </div>
      </header>
    );
  }
}

export default Header;
