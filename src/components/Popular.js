import React from 'react';
import SearchResults from './SearchResults.js';
const api_key = process.env.REACT_APP_API_KEY;

class Popular extends React.Component {
  state = { popularResults: [] };

  componentDidMount() {
    try {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
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
