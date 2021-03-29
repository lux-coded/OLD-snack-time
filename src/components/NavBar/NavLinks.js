import React from 'react';

class NavLinks extends React.Component {

  render() {
    return (
      <div className='nav-link-container'>
        <ul className='nav-links'>
          <li className='nav-link'><h3>User</h3></li>
          <li className='nav-link'><h3>Trending</h3></li>
          <li className='nav-link'><h3>Upcoming</h3></li>
        </ul>
      </div>
    );
  }
}

export default NavLinks;
