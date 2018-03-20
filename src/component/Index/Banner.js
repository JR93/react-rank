import React from 'react';
import { NavLink } from 'react-router-dom';
import Rule from './Rule';
import './Banner.scss';

class Banner extends React.Component {
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
      <div className="banner">
        <div className="rank-rule" onClick={this.toggleRuleAlert}></div>
        <div className="nav-wrap">
          <div className="nav">
            <NavLink className="nav-item" activeClassName="active" to="/mc">主播榜</NavLink>
            <NavLink className="nav-item" activeClassName="active" to="/user">用户榜</NavLink>
          </div>
        </div>
        {this.state.isShowRuleAlert && <Rule onToggleRuleAlert={this.toggleRuleAlert} />}
      </div>
    );
  }
}

export default Banner;
