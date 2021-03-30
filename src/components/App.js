import React from 'react';
import NavBar from './NavBar/NavBar.js';
import Search from './Search.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <Search />

      </div>
    );
  }
}

export default App;
