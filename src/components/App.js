import React from 'react';
import NavBar from './NavBar/NavBar.js';
import SearchBar from './SearchBar.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
      </div>
    );
  }
}

export default App;
