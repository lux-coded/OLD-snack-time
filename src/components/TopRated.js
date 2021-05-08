import React from 'react';
import SearchResults from './SearchResults.js';
const api_key = process.env.REACT_APP_API_KEY;

class TopRated extends React.Component {
  state = { topResults: [] };

  componentDidMount() {
    console.log(api_key);
    try {
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
      .then(res => res.json())
      .then(result => {
        const { results } = result;
        console.log(result);
        this.setState({ topResults: [...results] });
      });

    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <SearchResults searchResults={this.state.topResults}/>
    );
  }
}

export default TopRated;
