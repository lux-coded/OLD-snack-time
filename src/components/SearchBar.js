import React from 'react';

class SearchBar extends React.Component {
  state = { searchQuery: '', searchResults: [], page: null };

  async onSubmitHandler(event) {
    event.preventDefault();
    // console.log(this.state.search);

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8c8d65e69723f72aa8f5c0911b107365&query=${this.state.searchQuery}`);
      const data = await response.json();
      const { results } = data;
      console.log(data);
      console.log(results);

      this.setState({ searchResults: [...results], page: data.page });

    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className='SearchBar'>
        <form onSubmit={this.onSubmitHandler.bind(this)} className='search-form'>
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
