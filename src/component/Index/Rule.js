import React from 'react';
import PropTypes from 'prop-types';
import './Rule.scss';

class Rule extends React.Component {
  render() {
    return (
      <div>
        <div className="rule-mask" onClick={this.props.onToggleRuleAlert}></div>
        <div className="rule-alert">
          <div className="rule-hd">
            <span className="close-ico" onClick={this.props.onToggleRuleAlert}></span>
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
    );
  }
}

Rule.propTypes = {
  onToggleRuleAlert: PropTypes.func.isRequired,
};

export default Rule;
