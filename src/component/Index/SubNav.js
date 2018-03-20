import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './SubNav.scss';

class SubNav extends React.Component {
  render() {
    const subNavDatas = [
      {
        id: 1,
        desc: '小时榜',
      },
      {
        id: 2,
        desc: '日榜',
      },
      {
        id: 3,
        desc: '总榜',
      },
    ];
    return (
      <div className="sub-nav-wrap">
        <div className="sub-nav">
          {subNavDatas.map(data => (
              <NavLink to={`${this.props.url}/${data.id}`} className="sub-nav-item" activeClassName="active" key={data.id}>
                <div className="active-bg">
                  <span className="text">{data.desc}</span>
                </div>
              </NavLink>
            ))
          }
        </div>
      </div>
    );
  }
}

SubNav.propTypes = {
  url: PropTypes.string,
};

export default SubNav;
