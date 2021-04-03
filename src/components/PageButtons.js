import React from 'react';

class PageButtons extends React.Component {

  render() {
    return (
      <div>
        <button className='button-page'>Page {this.props.page}</button>
        <button className='button-page'>Page {this.props.page}</button>
      </div>
    );
  }
}

export default PageButtons;
