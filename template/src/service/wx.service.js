import $dialog from '@/plugins/dialog';
class WxService {
  constructor(ajax) {
    this.ajax = ajax
    this.api_config = global.ROOT_API + global.API.WX_CONFIG;
    this.default_share = {
      title: '佰佳高尔夫',
      image: 'http://image.mastergolf.cn/share/masterlogo.jpg'
    }
  }
  setConfig(url, apiList) {
    let _params = {
      url: encodeURIComponent(url),
    }
    this.ajax({
      url: this.api_config,
      method: 'get',
      params: _params,
      timeout: 10000
    }).then((res) => {
      if (res.data.code === 200) {
        wx.config({
          debug: false,
          appId: res.data.data.appId,
          timestamp: res.data.data.timestamp,
          nonceStr: res.data.data.nonceStr,
          signature: res.data.data.signature,
          jsApiList: apiList
        })
      } else {
        $dialog.alert({
          content: '获取微信配置授权失败'
        })
      }

    }).catch((error) => {
      console.log(error)
    })
  }
  setShare(options) {
    let _this = this;
    //分享到朋友圈
    wx.onMenuShareTimeline({
      title: options.title, // 分享标题
      link: options.url, // 分享链接
      imgUrl: options.image, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    //分享给好友
    wx.onMenuShareAppMessage({
      title: options.title || _this.default_share.title, // 分享标题
      desc: options.des, // 分享描述
      link: options.url, // 分享链接
      imgUrl: options.image || this.default_share.image, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });

  }
}

export default WxService
