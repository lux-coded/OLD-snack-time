import React from 'react';
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults.js';
import HeroCarousel from './HeroCarousel.js';
import CarouselCards from './CarouselCards.js';
import history from '../history.js';
import { connect } from 'react-redux';

import getMoviesNowPlaying from '../actions/movieActions/getMoviesNowPlaying';
import getMoviesTopRated from '../actions/movieActions/getMoviesTopRated';
import getMoviesUpcoming from '../actions/movieActions/getMoviesUpcoming';
import getMoviesPopular from '../actions/movieActions/getMoviesPopular';

class Home extends React.Component {
  state = { searchResults: [], page: 1, searchType: 'movie', searchQuery: '' };

  componentDidMount() {
    this.handleMovieFetch();
    if (this.props.match.params.query) {
      this.onSubmitHandler();
    }
  }

  async onSubmitHandler(searchQuery = this.props.match.params.query, page = this.state.page) {
    this.setState({ searchQuery });

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/${this.state.searchType}?api_key=8c8d65e69723f72aa8f5c0911b107365&query=${searchQuery}&page=${page}`);
      const data = await response.json();
      const { results } = data;
      // console.log(data);
      // console.log(results);
      this.setState({ searchResults: [...results], page: data.page });

      history.push(`/search/${searchQuery}`);

      // console.log(this.state.searchResults);
    } catch (e) {
      console.log(e);
    }
  }

  pageHandler(page) {
    this.onSubmitHandler(this.state.searchQuery, page);
  }


  handleMovieFetch = () => {
    this.props.getMoviesNowPlaying(`https://api.themoviedb.org/3/movie/now_playing?api_key=8c8d65e69723f72aa8f5c0911b107365&language=en-US&page=1`);
    this.props.getMoviesTopRated(`https://api.themoviedb.org/3/movie/top_rated?api_key=8c8d65e69723f72aa8f5c0911b107365&language=en-US&page=1`);
    this.props.getMoviesUpcoming(`https://api.themoviedb.org/3/movie/upcoming?api_key=8c8d65e69723f72aa8f5c0911b107365&language=en-US&page=1`);
    this.props.getMoviesPopular(`https://api.themoviedb.org/3/movie/popular?api_key=8c8d65e69723f72aa8f5c0911b107365&language=en-US&page=1`);
  }

  render() {
    return (
      <div className='search-page'>

        <HeroCarousel results={this.props.moviesNowPlaying.results}/>

        <div className='search-area'>
          <div>
            <button
              onClick={() => this.setState({ searchType: 'movie' })}
              className={`media-type-button ${this.state.searchType === 'movie' ? 'button-active' : ''}`}
            >Movie
            </button>
            <button
              onClick={() => this.setState({ searchType: 'tv' })}
              className={`media-type-button ${this.state.searchType === 'tv' ? 'button-active' : ''}`}
            >Show
            </button>
          </div>

          <SearchBar onSubmit={this.onSubmitHandler.bind(this)}/>
        </div>


        {this.state.searchResults.length > 0 ?
          <div>
            {this.state.page > 1 ?
              <button
                onClick={() => this.pageHandler(this.state.page - 1)}
                className='main-button'
              >Page {this.state.page - 1}
              </button>
            : ''}
            <button
              className='main-button'
              onClick={() => this.pageHandler(this.state.page + 1)}
            >Page {this.state.page + 1}
            </button>
            <SearchResults searchResults={this.state.searchResults}/>
          </div>
        :
        <div className='home-carousel'>
          <CarouselCards title='Now Playing' results={this.props.moviesNowPlaying.results} linkTag='now-playing'/>

          <CarouselCards title='Top Rated' results={this.props.moviesTopRated.results} linkTag='top-rated'/>

          <CarouselCards title='Upcoming' results={this.props.moviesUpcoming.results} linkTag='upcoming'/>

          <CarouselCards title='Popular' results={this.props.moviesPopular.results} linkTag='popular'/>
        </div>
        }

        {/* <SearchResults searchResults={this.state.searchResults}/> */}

        {this.state.searchResults.length > 0 ?
          <div>
            {this.state.page > 1 ?
              <button
                onClick={() => this.pageHandler(this.state.page - 1)}
                className='main-button'
              >Page {this.state.page - 1}
              </button>
            : ''}
            <button
              className='main-button'
              onClick={() => this.pageHandler(this.state.page + 1)}
            >Page {this.state.page + 1}
            </button>
          </div>: null
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  moviesNowPlaying: state.getMoviesNowPlaying,
  moviesTopRated: state.getMoviesTopRated,
  moviesUpcoming: state.getMoviesUpcoming,
  moviesPopular: state.getMoviesPopular,
});

const mapDispatchToProps = (dispatch) => ({
  getMoviesNowPlaying: url => dispatch(getMoviesNowPlaying(url)),
  getMoviesTopRated: url => dispatch(getMoviesTopRated(url)),
  getMoviesUpcoming: url => dispatch(getMoviesUpcoming(url)),
  getMoviesPopular: url => dispatch(getMoviesPopular(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
