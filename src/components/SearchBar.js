import React from 'react';
import '../styles/SearchBar.css';

class SearchBar extends React.Component {

  render() {
    return (
      <div className='SearchBar'>
        <form className='search form'>
          <input placeholder='Looking for a movie or a show?'></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
