import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Api from 'common/api';
import ListItem from './ListItem';
import './List.scss';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      rankList: [],
    };
  }

  componentDidMount() {
    this.handleReq(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.handleReq(newProps);
  }

  handleReq(props) {
    const { type, match } = props;
    if (type === 'mc') {
      this.getMcRankData(match.params.id);
    } else if (type === 'user') {
      this.getUserRankData(match.params.id);
    }
    this.setState({
      loading: true,
    });
  }

  getMcRankData(id) {
    Api.anchorRank({
      aid: -1,
      rankType: +id,
      platform: 'h5',
    }).then((res) => {
      console.log(res);
      if (res.code === 0) {
        this.setState({
          rankList: res.data.ranks,
          loading: false,
        });
      }
    }).catch((err) => {
      console.log(err);
      this.setState({
        loading: false,
      });
    });
  }

  async getUserRankData(id) {
    const ticket = await window.yyApiUtil.invokeSingleYyApiPromise(['data', 'webTicket']);
    Api.userRank({
      ticket,
      rankType: +id,
      platform: 'h5',
    }).then((res) => {
      console.log(res);
      if (res.code === 0) {
        this.setState({
          rankList: res.data.ranks,
          loading: false,
        });
      }
    }).catch((err) => {
      console.log(err);
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const loadingClassName = classnames({
      'loading-wrap': true,
      show: this.state.loading,
    });
    return (
      <div>
        <div className="list-wrap">
          { this.state.rankList.map(item => (
              <ListItem data={item} key={item.uid} />
            ))
          }
        </div>
        <div className={loadingClassName}>
          <div className="loading"></div>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  type: PropTypes.string,
  match: PropTypes.object,
};

export default List;
