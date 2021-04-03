import React from 'react';
import { Link } from 'react-router-dom';

class ResultCard extends React.Component {

  render() {
    const { title, overview, poster_path, release_date, id } = this.props.result;
    return (

      <div className='result-card'>
        <div className='image-container'>
          <img alt='movie_image' className='result-img' src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
        </div>
        <Link to={`/movie/${id}`} className='result-card-details'>
          <div>
            <h2>{title}</h2>
            <h4>{release_date}</h4>
            <p className='result-card-description'>{overview}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default ResultCard;
