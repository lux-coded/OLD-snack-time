import React from 'react';
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults.js';
import history from '../history.js';

class Search extends React.Component {
  state = { searchResults: [], page: 1, searchType: 'movie', searchQuery: '' };

  async onSubmitHandler(searchQuery, page = this.state.page) {
    this.setState({ searchQuery });

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/${this.state.searchType}?api_key=8c8d65e69723f72aa8f5c0911b107365&query=${searchQuery}&page=${page}`);
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

  pageHandler(page) {
    this.onSubmitHandler(this.state.searchQuery, page);
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

        {this.state.searchResults.length > 0 ?
          <div>
            {this.state.page > 1 ?
              <button
                onClick={() => this.pageHandler(this.state.page - 1)}
                className='main-button'
              >Page {this.state.page - 1}
              </button>
            : ''}
            <button
              className='main-button'
              onClick={() => this.pageHandler(this.state.page + 1)}
            >Page {this.state.page + 1}
            </button>
          </div>: null
        }

        <SearchResults searchResults={this.state.searchResults}/>

        {this.state.searchResults.length > 0 ?
          <div>
            {this.state.page > 1 ?
              <button
                onClick={() => this.pageHandler(this.state.page - 1)}
                className='main-button'
              >Page {this.state.page - 1}
              </button>
            : ''}
            <button
              className='main-button'
              onClick={() => this.pageHandler(this.state.page + 1)}
            >Page {this.state.page + 1}
            </button>
          </div>: null
        }

      </div>
    );
  }
}

export default Search;
