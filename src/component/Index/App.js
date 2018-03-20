import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Banner from './Banner';
import Main from './Main';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Banner />
        <div className="rank-bd">
          <Switch>
            <Route exact path="/" render={() => <Redirect from="/" to="/mc" />} />
            <Route path="/:type" component={Main} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
