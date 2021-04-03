import React from 'react';

class DetailPage extends React.Component {
  state = { details: {} };
  componentDidMount() {
    try {
      fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=8c8d65e69723f72aa8f5c0911b107365&language=en-US`)
      .then(res => res.json())
      .then(result => {
        this.setState({ details: result});
        console.log(result);
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { poster_path, backdrop_path, title, overview, release_date, runtime } = this.state.details;
    return (
      <div className='detail-info-container'>
        <div className='banner-image-container'>
          <img alt='movie_image' className='banner-img' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}></img>
        </div>
        <div className='movie-info'>
          <img alt='movie_image' className='detail-result-img' src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
          <div className='movie-details'>
            <h1>{title}</h1>
            <h3>{release_date}</h3>
            <h5>Runtime: {runtime} minutes</h5>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;
