import jsonp from 'jsonp';
import querystring from 'query-string';

const domain = '//wap.yy.com';
const Api = {};
const urls = {
  // 主播卡路里排行榜
  anchorRank: `${domain}/mobileweb/guess/anchorRank`,
  // 用户卡路里排行榜
  userRank: `${domain}/mobileweb/guess/userRank`,
};

Object.keys(urls).forEach((k) => {
  Api[k] = function (params = {}) {
    return new Promise((resolve, reject) => {
      const paramsStr = querystring.stringify(params);
      jsonp(`${urls[k]}?${paramsStr}`, {
        param: 'jsonpcb',
      }, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
});

export default Api;
