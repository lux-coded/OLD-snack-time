import React from 'react';

class ResultCard extends React.Component {

  render() {
    const { title, overview, poster_path, release_date } = this.props.result;
    return (

      <div className='result-card'>
        <div className='image-container'>
          <img alt='movie_image' className='result-img' src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
        </div>
        <div className='result-card-details'>
          <h2>{title}</h2>
          <h4>{release_date}</h4>
          <p className='result-card-description'>{overview}</p>
        </div>
      </div>
    );
  }
}

export default ResultCard;
