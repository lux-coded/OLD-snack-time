import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = { searchResults: [] };

  async topRatedHandler(searchQuery) {

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=8c8d65e69723f72aa8f5c0911b107365`);
      const data = await response.json();
      const { results } = data;
      // console.log(data);
      // console.log(results);

      this.setState({ searchResults: [...results] });

      console.log(this.state.searchResults);
    } catch (e) {
      console.log(e);
    }
  }

  async popularHandler(searchQuery) {

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8c8d65e69723f72aa8f5c0911b107365`);
      const data = await response.json();
      const { results } = data;
      // console.log(data);
      // console.log(results);

      this.setState({ searchResults: [...results] });

      console.log(this.state.searchResults);
    } catch (e) {
      console.log(e);
    }
  }

  async upcomingHandler(searchQuery) {

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=8c8d65e69723f72aa8f5c0911b107365`);
      const data = await response.json();
      const { results } = data;
      // console.log(data);
      // console.log(results);

      this.setState({ searchResults: [...results] });

      console.log(this.state.searchResults);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className='navbar'>
        <Link to='/' className='nav-logo'>
          <span class="material-icons nav-icon">
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
      </div>
    );
  }
}

export default Header;
