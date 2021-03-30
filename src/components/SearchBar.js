import React from 'react';

class SearchBar extends React.Component {
  state = { searchQuery: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.searchQuery)
  };

  render() {
    return (
      <div className='SearchBar'>
        <form onSubmit={this.onFormSubmit} className='search-form'>
          <input
            type='text'
            placeholder='Looking for a movie or a show?'
            value={this.state.searchQuery}
            onChange={(e) => this.setState({ searchQuery: e.target.value })} className='search-input'>
          </input>
          <button className='search-bar-button'>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
