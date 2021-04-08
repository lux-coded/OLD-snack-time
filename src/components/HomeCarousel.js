import React from 'react';
import Glider from 'glider-js'
import '../styles/glider.css';
import SearchResults from './SearchResults.js';
import CarouselCard from './CarouselCard.js';;

class HomeCarousel extends React.Component {
  state = { nowResults: [] };

  componentDidMount() {
    this.getCarouselData();
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 6,
      slidesToScroll: 1,
      draggable: true,
      // dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });

  }

  async getCarouselData() {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8c8d65e69723f72aa8f5c0911b107365`)
      const data = await response.json();
      const { results } = data;
      this.setState({ nowResults: [...results] });

    } catch (e) {
      console.log(e);
    }
  }

  render() {
    // const results = this.state.nowResults.map((result) => {
    //   // console.log(result);
    //   return <CarouselCard key={result.id} result={result}/>
    // })

    const results = this.state.nowResults.map((result) => {
      // console.log(result);
      return (
        <div key={result.id}>
          {result.title}
        </div>
      )
    })

    console.log(results);

    // console.log(Array.isArray(results));

    return (
      // <SearchResults searchResults={this.state.nowResults}/>
      <div className="glider-contain">
        <div className="glider">
          {results}
        </div>

        <button aria-label="Previous" className="glider-prev">«</button>
        <button aria-label="Next" className="glider-next">»</button>
        <div role="tablist" className="dots"></div>
      </div>
    );
  }
}

export default HomeCarousel;
