import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectFade, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.css';

class CarouselCards extends React.Component {

  render() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, EffectFade, Autoplay]);

    return (

      <div className='home-carousels'>
        <Link to={`/${this.props.linkTag}`} className='carousel-section-names'>
          <h2 >{this.props.title}</h2>
        </Link>
        <Swiper
          slidesPerView={7}
          navigation
          loop
          breakpoints={{1500: {slidesPerView: 7}, 1200: {slidesPerView: 6, spaceBetween: 20}, 1000: {slidesPerView: 5, spaceBetween: 50}, 800: {slidesPerView: 4, spaceBetween: 50}, 600: {slidesPerView: 3, spaceBetween: 10}, 200: {slidesPerView: 2, spaceBetween: 10}}}
            effectfade='true'
                       className='card-slides-container'>
            {this.props.results.map((result) => (

              <SwiperSlide key={result.id} className="swiper-slide card-slides">
                <Link to={`/${result.title ? 'movie' : 'tv'}/${result.id}`} >
                  <img className="swiper-slide__image" src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={result.title} />
                  <h3 className="swiper-slide__title">{result.title}</h3>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
    );
  }
}

export default CarouselCards;
