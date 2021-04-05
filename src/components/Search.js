import React from 'react';
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults.js';
import history from '../history.js';

class Search extends React.Component {
  state = { searchResults: [], page: 1, searchType: 'movie', searchQuery: '' };

  async onSubmitHandler(searchQuery) {
    this.setState({ searchQuery });

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/${this.state.searchType}?api_key=8c8d65e69723f72aa8f5c0911b107365&query=${searchQuery}&page=${this.state.page}`);
      const data = await response.json();
      const { results } = data;
      // console.log(data);
      console.log(results);

      this.setState({ searchResults: [...results], page: data.page });

      history.push(`/search/${searchQuery}`);

      // console.log(this.state.searchResults);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className='search-page'>
        <div>
          <button
            onClick={() => this.setState({ searchType: 'movie' })}
            className={`media-type-button ${this.state.searchType === 'movie' ? 'button-active' : ''}`}
          >Movie
          </button>
          <button
            onClick={() => this.setState({ searchType: 'tv' })}
            className={`media-type-button ${this.state.searchType === 'tv' ? 'button-active' : ''}`}
          >Show
          </button>
        </div>
        <SearchBar onSubmit={this.onSubmitHandler.bind(this)}/>
        <SearchResults searchResults={this.state.searchResults}/>
      </div>
    );
  }
}

export default Search;
