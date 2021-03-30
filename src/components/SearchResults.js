import React from 'react';
import ResultCard from './ResultCard.js';

const SearchResults = (props) => {

  const results = props.searchResults.map((result) => {
    return <ResultCard key={result.id} result={result}/>
  });

  return (
    <div className='search-results'>
      {results}
    </div>
  );
}

export default SearchResults;
