import React from 'react';

class ResultCard extends React.Component {

  render() {
    return (
      <div className='result-card'>
        <img alt='movie_image'></img>
        <h4>Movie title</h4>
        <p>Description.</p>
      </div>
    );
  }
}

export default ResultCard;
