import React from 'react';
import '../styles/SearchBar.css';

class SearchBar extends React.Component {
  onHandleChange(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='SearchBar'>
        <form onSubmit={this.onHandleChange} className='search-form'>
          <input placeholder='Looking for a movie or a show?' className='search-input'></input>
          <button type='submit' className='search-bar-button'>Hey</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
