import React from 'react';
import SearchResults from './SearchResults.js';
const api_key = process.env.REACT_APP_API_KEY;

class Upcoming extends React.Component {
  state = { upcomingResults: [] };

  componentDidMount() {
    try {
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        const { results } = result;
        this.setState({ upcomingResults: [...results] });
      });

    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <SearchResults searchResults={this.state.upcomingResults}/>
    );
  }
}

export default Upcoming;
