import React from 'react';
import themoviedb from '../api/themoviedb.js';

class SearchBar extends React.Component {
  // state = { search: '' };

  async onChangeHandler(e) {
    e.preventDefault();
    // this.setState({ search: e.target.value });

    const response = await themoviedb.get(`/search/photos`, {
      params: { query: e.target.value },
    });

    console.log(response);
  }

  onSubmitHandler(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='SearchBar'>
        <form onSubmit={this.onChangeHandler} className='search-form'>
          <input type='text' placeholder='Looking for a movie or a show?' /*value={this.state.search} onChange={this.onChangeHandler}*/ className='search-input'>

          </input>
          <button className='search-bar-button'>Hey</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
