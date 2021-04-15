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
          // spaceBetween={50}
          slidesPerView={1}
          navigation
          // direction='vertical'
          // mouseWheel='true'
          // freemode={true}
          loop
          // speed={200}
          autoplay={{ delay: 4000 }}
          effectfade='true'
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {this.props.results.map((result) => (

            <SwiperSlide key={result.id} className="swiper-slide hero-slide">
              <Link to={`/${result.title ? 'movie' : 'tv'}/${result.id}`} >
                <img className="hero-slide__image" src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`} alt={result.title} />
                <h1 className="hero-slide__title">{result.title}</h1>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default HeroCarousel;
