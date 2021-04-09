import React from 'react';
import CarouselCards from './CarouselCards.js';
// import Swiper from 'swiper/bundle';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
//
// import 'swiper/swiper-bundle.css';

class HomeCarousel extends React.Component {
  state = { nowResults: [], carouselResults: [], topResults: [] };

  componentDidMount() {
    try {
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=8c8d65e69723f72aa8f5c0911b107365`)
      .then(res => res.json())
      .then(result => {
        const { results } = result;
        this.setState({ nowResults: [...results] });
      });

    } catch (e) {
      console.log(e);
    }

  }


  render() {

    return (
      // <SearchResults searchResults={this.state.nowResults}/>
      <div className='carousel'>
        {/* <h1 style={{ color: 'white' }}>Now Playing</h1> */}

        <CarouselCards title='Now Playing' results={this.state.nowResults} />

        <CarouselCards title='Top Rated' results={this.state.nowResults} />

        <CarouselCards title='Upcoming' results={this.state.nowResults} />

        <CarouselCards title='Popular' results={this.state.nowResults} />

      </div>
    );
  }
}

export default HomeCarousel;
