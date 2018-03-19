import React from 'react';
import PropTypes from 'prop-types';
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowRuleAlert: false, // 榜单规则弹窗
      curNav: 'mc', // 主播榜/用户榜:user
      curSubNav: 1, // 1:小时榜/4:总榜
      rankList: [],
      loading: false,
    };
    this.toggleRuleAlert = this.toggleRuleAlert.bind(this);
  }

  componentDidMount() {
    Api.anchorRank({
      aid: -1,
      rankType: 4,
      platform: 'h5',
    }).then((res) => {
      console.log(res);
      if (res.code === 0) {
        this.setState({
          rankList: res.data.ranks,
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  toggleRuleAlert() {
    this.setState(prevState => ({
      isShowRuleAlert: !prevState.isShowRuleAlert,
    }));
  }

  selectNav(type) {
    this.setState({
      curNav: type,
    });
  }

  jump(data) {
    console.log(data.isLive);
  }

  render() {
    return (
      <div className="app">
        <div className="banner">
          <div className="rank-rule" onClick={this.toggleRuleAlert}></div>
          <div className="nav-wrap">
            <div className="nav">
            <div className={this.state.curNav === 'mc' ? 'nav-item active' : 'nav-item'} onClick={this.selectNav.bind(this, 'mc')}>主播榜</div>
            <div className={this.state.curNav === 'user' ? 'nav-item active' : 'nav-item'} onClick={this.selectNav.bind(this, 'user')}>用户榜</div>
            </div>
          </div>
        </div>
        <div className="rank-bd">
          <div className="list-wrap">
            {
              this.state.rankList.map((item) => {
                const changeStateClassName = classnames({
                  'change-state': true,
                  'equal-state': item.trend === 3 || item.trend === 0,
                  'up-state': item.trend === 1,
                  'down-state': item.trend === 2,
                });
                return (
                  <div className="list-item" key={item.uid} onClick={this.jump.bind(this, item)}>
                    <span className="rank-num">{item.rank}</span>
                    <span className={changeStateClassName}></span>
                    <img src={item.avatar} className="avatar"></img>
                    <div className="info">
                      <p className="name">{decodeURIComponent(item.nick)}</p>
                      <p className="calories">卡路里：{item.calories}</p>
                    </div>
                    {item.isLive === 1 &&
                      <div className="living">
                        <span>直播中</span>
                        <span className="play-ico"></span>
                      </div>
                    }
                  </div>
                );
              })
            }
          </div>
        </div>
        {this.state.isShowRuleAlert &&
          <div>
            <div className="rule-mask" onClick={this.toggleRuleAlert}></div>
            <div className="rule-alert">
              <div className="rule-hd">
                <span className="close-ico" onClick={this.toggleRuleAlert}></span>
              </div>
              <div className="rule-con">
                <p className="text">1、直播间开启竞猜，每轮竞猜结束后，从胜利方盈利部分碎钻抽取一定比例转化为卡路里奖励/贡献。</p>
                <p className="text">2、每收到/赠送一个游戏专属礼物“干脆面”，增加一定数量卡路里奖励/贡献。</p>
                <p className="text">3、用户排行榜前20的用户，将在一周内获得系统消息（请留意“个人中心”-“聊天”-“系统通知”）奖励申请通知，请中奖用户在三天内按照消息中的表格链接申请奖励，奖品将在二十个工作日内发放完毕。逾期或未申请者当作弃权处理。</p>
                <p className="text">4、排名先后按照卡路里值达成时间先后次序排序，即同卡路里值的用户先达到卡路里值先入榜排序。</p>
                <p className="text">5、该活动最终解释权归YY所有。</p>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Hello;
