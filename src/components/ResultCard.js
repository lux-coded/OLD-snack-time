import React from 'react';
import { Link } from 'react-router-dom';

class ResultCard extends React.Component {

  render() {
    const { title, overview, poster_path, release_date, id, name, vote_average } = this.props.result;
    return (

      <Link to={`/${title ? 'movie' : 'tv'}/${id}`} className='result-card'>
        <div className='image-container'>
          <img alt='movie_image' className='result-img' src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
        </div>
        <div className='result-card-details'>
          <div>
            <h2>{title ? title : name}</h2>
            <h3>{vote_average}/10</h3>
            <h4>{release_date}</h4>
            <p className='result-card-description'>{overview.substring(0,200)}...</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default ResultCard;
