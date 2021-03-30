import React from 'react';

class SearchBar extends React.Component {
  state = { search: '' };

  async onSubmitHandler(event) {
    event.preventDefault();
    // console.log(this.state.search);

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8c8d65e69723f72aa8f5c0911b107365&query=${this.state.search}`);
      const data = response.json();
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className='SearchBar'>
        <form onSubmit={this.onSubmitHandler.bind(this)} className='search-form'>
          <input
          type='text'
          placeholder='Looking for a movie or a show?'
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })} className='search-input'>
          </input>
          <button className='search-bar-button'>Hey</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
