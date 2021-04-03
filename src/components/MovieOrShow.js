import React from 'react';

class MovieOrShow extends React.Component {
  state = { active: true };

  toggleButtonClass = () => {
    this.setState({ active: !this.state.active });
  }

  render() {
    const activeButton = this.state.active;

    return (
      <div className='media-type-buttons'>
        <button onClick={this.toggleButtonClass} className={`button-media-type ${activeButton  ? 'active-button' : ''}`} value='movie'>Movie</button>
        <button onClick={this.toggleButtonClass} className={`button-media-type ${activeButton  ? '' : 'active-button'}`} value='show'>Show</button>
      </div>
    );
  }
}

export default MovieOrShow;
