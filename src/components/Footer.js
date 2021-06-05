import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer className='footer'>
        <div className='footer-contact-info'>
          <h1>SnackTime</h1>
          <h3>Portfolio:</h3><a href='https://luka-selak.netlify.app/'>https://luka-selak.netlify.app/</a>
          <h3>selakluka@gmail.com</h3>
          <p>Copyright ©2020</p>
          <p>Design and code by Luka Selak</p>
        </div>
        <div className='footer-links'>
          <a href='https://www.themoviedb.org/'>

            <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'></img>
          </a>
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
