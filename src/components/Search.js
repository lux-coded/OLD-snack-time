import React from 'react';
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults.js';
import PageButtons from './PageButtons.js';
import MovieOrShow from './MovieOrShow.js';

class Search extends React.Component {
  state = { searchResults: [], page: null };

  async onSubmitHandler(searchQuery) {

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8c8d65e69723f72aa8f5c0911b107365&query=${searchQuery}`);
      const data = await response.json();
      const { results } = data;
      // console.log(data);
      // console.log(results);

      this.setState({ searchResults: [...results], page: data.page });

      console.log(this.state.searchResults);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className='search-page'>
        <MovieOrShow />
        <SearchBar onSubmit={this.onSubmitHandler.bind(this)}/>
        <PageButtons page={this.state.page}/>
        <SearchResults searchResults={this.state.searchResults}/>
        <PageButtons page={this.state.page}/>
      </div>
    );
  }
}

export default Search;
