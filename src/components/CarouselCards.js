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
        <h2>{this.props.title}</h2>
        <Swiper
          // spaceBetween={50}
          slidesPerView={7}
          navigation
          // freemode={true}
          loop
          // speed={200}
          // autoplay={{ delay: 1000 }}
          effectfade='true'
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {this.props.results.map((result) => (

            <SwiperSlide key={result.id} className="swiper-slide">
              <Link to={`/${result.title ? 'movie' : 'tv'}/${result.id}`} >
                <img className="swiper-slide__image" src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={result.title} />
                <h3 className="swiper-slide__title">{result.title}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      // <div className="swiper-container">
      //     <h2 className="swiper-container__title">{this.props.title}</h2>
      //
      //     <div className="swiper-wrapper">
      //       {this.props.results.map((result) => (
      //
      //         <div key={result.id} className="swiper-slide">
      //           <Link to={`/${result.title ? 'movie' : 'tv'}/${result.id}`} >
      //             <img className="swiper-slide__image" src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={result.title} />
      //             <h3 className="swiper-slide__title">{result.title}</h3>
      //           </Link>
      //         </div>
      //
      //       ))}
      //     </div>
      //
      //     <div className="swiper-button-prev"></div>
      //     <div className="swiper-button-next"></div>
      // </div>
    );
  }
}

export default CarouselCards;
