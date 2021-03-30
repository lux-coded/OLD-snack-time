import React from 'react';

class ResultCard extends React.Component {

  render() {
    const { title, overview, poster_path } = this.props.result;
    return (

      <div className='result-card'>
        <img alt='movie_image' className='result-img' src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
        <div className='result-card-details'>
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>
      </div>
    );
  }
}

export default ResultCard;
