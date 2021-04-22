import React from 'react';

class DetailPage extends React.Component {
  state = { details: {}, genreArray: [], tvSeasons: null };
  componentDidMount() {
    try {
      fetch(`https://api.themoviedb.org/3/${this.props.match.params.mediaType}/${this.props.match.params.id}?api_key=8c8d65e69723f72aa8f5c0911b107365&language=en-US`)
      .then(res => res.json())
      .then(result => {
        this.setState({ details: result });
        this.setState({ tvSeasons: result.seasons ? result.seasons.length - 1 : null });
        if (result.genres) {
          const genres = result.genres.map((item) => item.name);
          this.setState({ genreArray: genres });
        };
        // console.log(result);
      });
    } catch (e) {
      console.log(e);
    }
  }

  formatReleaseDate = date => date.split('-').reverse().join(' / ');

  render() {
    const { poster_path, backdrop_path, title, overview, release_date, runtime, name, vote_average } = this.state.details;

    const divStyle = {
      color: 'white',
      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(0,0,0,0.45) 92%), url('https://image.tmdb.org/t/p/original/${backdrop_path}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
    // <img alt='movie_image' className='banner-img' src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}></img>
    return (
      <div className='detail-info-container'>
        <div className='banner-image-container' style={divStyle}>
            <div className='movie-info'>
              <img alt='movie_image' className='detail-result-img' src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
              <div className='movie-details'>
                <h1>{title ? title : name}</h1>
                <h2>{vote_average}/10</h2>
                <h2>{this.state.genreArray.join(', ')}</h2>
                <h3>{release_date}</h3>
                <h5>{this.props.match.params.mediaType === 'movie' ? `Runtime: ${runtime} minutes` :  `Seasons: ${this.state.tvSeasons}`}</h5>
                <p>{overview}</p>
              </div>
            </div>
        </div>

      </div>
    );
  }
}

export default DetailPage;
