import React from 'react';

class SearchBar extends React.Component {
  onSubmitHandler(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='SearchBar'>
        <form onSubmit={this.onSubmitHandler} className='search-form'>
          <input placeholder='Looking for a movie or a show?' className='search-input'></input>
          <button type='submit' className='search-bar-button'>Hey</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
