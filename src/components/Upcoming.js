import React from 'react';
import SearchResults from './SearchResults.js';

class Upcoming extends React.Component {
  state = { upcomingResults: [] };

  componentDidMount() {
    try {
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=8c8d65e69723f72aa8f5c0911b107365`)
      .then(res => res.json())
      .then(result => {
        const { results } = result;
        this.setState({ upcomingResults: [...results]});
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
