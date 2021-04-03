import React from 'react';
import SearchResults from './SearchResults.js';

class TopRated extends React.Component {
  state = { topResults: [] };

  componentDidMount() {
    try {
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=8c8d65e69723f72aa8f5c0911b107365`)
      .then(res => res.json())
      .then(result => {
        const { results } = result;
        this.setState({ topResults: [...results]});
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
