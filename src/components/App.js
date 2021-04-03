import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history.js';
import Header from './Header.js';
import Search from './Search.js';
import TopRated from './TopRated.js';
import Upcoming from './Upcoming.js';
import Popular from './Popular.js';

class App extends React.Component {
  state = { results: [] };

  navBarLinkHandler (navResults) {
    this.setState({ results: navResults });
    console.log(this.state.results);
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <Header navLink={this.navBarLinkHandler}/>
          <Switch>
            <Route path='/' exact component={Search} />
            <Route path='/top-rated' exact component={TopRated} />
            <Route path='/popular' exact component={Popular} />
            <Route path='/upcoming' exact component={Upcoming} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
