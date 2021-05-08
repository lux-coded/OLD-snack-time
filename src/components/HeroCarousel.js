import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectFade, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.css';

class HeroCarousel extends React.Component {

  render() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, EffectFade, Autoplay]);

    return (

      <div className='hero-carousel'>
        <Swiper
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
        >
          {this.props.results.map((result) => (

            <SwiperSlide key={result.id} className="swiper-slide hero-slide">
              <Link to={`/${result.title ? 'movie' : 'tv'}/${result.id}`} >
                <div className='hero-slide__image-container'>
                  <img className="hero-slide__image" src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`} alt={result.title} />
                  <h1 className="hero-slide__title">{result.title}</h1>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default HeroCarousel;
