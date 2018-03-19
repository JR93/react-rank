import React from 'react';
import {
  HashRouter as Router,
  // Route,
  NavLink,
} from 'react-router-dom';
// import classnames from 'classnames';
// import Api from 'common/api';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowRuleAlert: false, // 榜单规则弹窗
    };
    this.toggleRuleAlert = this.toggleRuleAlert.bind(this);
  }

  toggleRuleAlert() {
    this.setState(prevState => ({
      isShowRuleAlert: !prevState.isShowRuleAlert,
    }));
  }

  render() {
    return (
      <div className="app">
        <div className="banner">
          <div className="rank-rule" onClick={this.toggleRuleAlert}></div>
          <div className="nav-wrap">
            <Router>
              <div className="nav">
                <NavLink className="nav-item" activeClassName="active" to="/mc">主播榜</NavLink>
                <NavLink className="nav-item" activeClassName="active" to="/user">用户榜</NavLink>
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
