import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import List from './List';
import SubNav from './SubNav';

class Main extends React.Component {
  render() {
    const { url, path, params } = this.props.match;
    return (
      <div>
        <SubNav url={url} />
        <Switch>
          <Route exact path={`${path}/`} render={
            () => <Redirect from={`${url}/`} to={`${url}/1`} />
          } />
          <Route path={`${path}/:id`} render={({ match }) => (<List type={params.type} match={match} />)} />
        </Switch>
      </div>
    );
  }
}

Main.propTypes = {
  match: PropTypes.object,
};

export default Main;
