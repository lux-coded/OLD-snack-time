import React from 'react';
import Glider from 'glider-js'
import '../styles/glider.css';
import SearchResults from './SearchResults.js';
import CarouselCard from './CarouselCard.js';;

class HomeCarousel extends React.Component {
  state = { nowResults: [], carouselResults: [] };

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



    // this.setState({ carouselResults: [...results] });

    new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      // dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });

  }

  render() {
    const results = this.state.nowResults.map((result) => {
      // console.log(result);
      return <CarouselCard key={result.id} result={result}/>
    });

    return (
      // <SearchResults searchResults={this.state.nowResults}/>
      <div className='carousel'>
        <h1 style={{ color: 'white' }}>Now Playing</h1>
        <div className="glider-contain">
          <div className="glider glider-track">
            {results}
          </div>

          <button aria-label="Previous" className="glider-prev">«</button>
          <button aria-label="Next" className="glider-next">»</button>
          <div role="tablist" className="dots"></div>
        </div>
      </div>

    );
  }
}

export default HomeCarousel;
