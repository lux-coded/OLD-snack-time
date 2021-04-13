import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history.js';
import Header from './Header.js';
import Home from './Home.js';
import TopRated from './TopRated.js';
import Upcoming from './Upcoming.js';
import Popular from './Popular.js';
import DetailPage from './DetailPage.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <Router history={history}>
          <Header navLink={this.navBarLinkHandler}/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/search/:query' exact component={Home} />
            <Route path='/top-rated' exact component={TopRated} />
            <Route path='/popular' exact component={Popular} />
            <Route path='/upcoming' exact component={Upcoming} />
            <Route path='/:mediaType/:id' exact component={DetailPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
