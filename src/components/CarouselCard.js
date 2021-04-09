import React from 'react';
import { Link } from 'react-router-dom';

class CarouselCard extends React.Component {

  render() {
    const { title, poster_path, release_date, id, name, vote_average } = this.props.result;
    console.log(this.props.result);
    return (

      <Link to={`/${title ? 'movie' : 'tv'}/${id}`} className='carousel-card'>
        <div className='carousel-image-container'>
          <img alt='movie_image' className='carousel-result-img' src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
        </div>
        <div className='carousel-result-card-details'>
          <div>
            <h3>{title ? title : name}</h3>
            <h3>Stars: {vote_average}</h3>
            <h4>{release_date}</h4>
          </div>
        </div>
      </Link>
    );
  }
}

export default CarouselCard;
