import React from 'react';
import SearchResults from './SearchResults.js';

class Popular extends React.Component {
  state = { popularResults: [] };

  componentDidMount() {
    try {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8c8d65e69723f72aa8f5c0911b107365`)
      .then(res => res.json())
      .then(result => {
        const { results } = result;
        this.setState({ popularResults: [...results] });
      });

    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <SearchResults searchResults={this.state.popularResults}/>
    );
  }
}

export default Popular;
