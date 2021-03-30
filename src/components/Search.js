import React from 'react';
import SearchBar from './SearchBar.js';
import ResultCard from './ResultCard.js';

class Search extends React.Component {

  render() {
    return (
      <div>
        <SearchBar />
        <ResultCard />
      </div>
    );
  }
}

export default Search;
