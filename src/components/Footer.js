import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer className='footer'>
        <div className='footer-contact-info'>
          <h1>SnackTime</h1>
          <h3>Portfolio</h3>
          <h3>E-Mail</h3>
          <p>Copyright ©2020</p>
          <p>Design and code by Luka Selak</p>
        </div>
        <div className='footer-links'>
          <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'></img>
          <div className='contact-links'>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
