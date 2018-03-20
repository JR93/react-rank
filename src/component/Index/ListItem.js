import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './ListItem.scss';

class ListItem extends React.Component {
  jump(data) {
    console.log(data);
  }

  render() {
    const { data } = this.props;
    const changeStateClassName = classnames({
      'change-state': true,
      'equal-state': data.trend === 3 || data.trend === 0,
      'up-state': data.trend === 1,
      'down-state': data.trend === 2,
    });
    return (
      <div className="list-item" key={data.uid} onClick={this.jump.bind(this, data)}>
        <span className="rank-num">{data.rank}</span>
        <span className={changeStateClassName}></span>
        <img src={data.avatar} className="avatar"></img>
        <div className="info">
          <p className="name">{decodeURIComponent(data.nick).substring(0, 20)}</p>
          <p className="calories">卡路里：{data.calories}</p>
        </div>
        {data.isLive === 1 &&
          <div className="living">
            <span>直播中</span>
            <span className="play-ico"></span>
          </div>
        }
      </div>
    );
  }
}

ListItem.propTypes = {
  data: PropTypes.object,
};

export default ListItem;
