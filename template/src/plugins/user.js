// 处理微信登陆
import { base64 } from 'vux'
import $cookie from '@/tools/cookie';
import $params from '@/tools/params';
import $dialog from '@/plugins/dialog';
//依赖vue 里的的 global 数据 不再单独处理 全局使用

class User {
  constructor(ajax) {
    this.ajax = ajax;
    this.api_check_login_status = global.ROOT_API + global.API.CHECK_LOGIN_STATUS;
    this.api_get_userinfo = global.ROOT_API + global.API.GET_USER_INFO;
  }
  //用户登录流程 
  async asyncUserLogin(options) {
    let _state = await this.checkLoginFn().catch((error) => {
      console.log(error)
    })
    if (_state.data.code === 401) {
      if (global.BOOL_IN_WX) {
        await this.wxLoginAction(options)
      }
      if (!global.BOOL_OUT_APP) {
        options ? (window.location.href = global.LOGIN_URL.APP + base64.encode(options)) : (window.location.href = global.LOGIN_URL.APP);
      }
    }
  }
  getUserLoginStatus() {
    let _this = this;
    //如果cookie中有user_uuid 和 token就检查登陆状态
    if ($cookie.get('user_uuid') && $cookie.get('token')) {
      let _params = {
        user_uuid: $cookie.get('user_uuid'),
        token: $cookie.get('token')
      }
      return _this.ajax({
        url: _this.api_check_login_status,
        method: 'get',
        params: _params,
        timeout: 10000
      })
    } else {
      return new Promise((resolve, reject) => {
        reject('您没有登录')
      })
    }
  }
  getUserInfo() {
    let _this = this;
    let _params = {
      user_uuid: $cookie.get('user_uuid')
    }
    console.log(_params)
    return _this.ajax({
      method: 'GET',
      url: _this.api_get_userinfo,
      params: _params
    })
  }
  checkLoginFn() {
    //如果cookie中有user_uuid 和 token就检查登陆状态
    if ($cookie.get('user_uuid') && $cookie.get('token')) {
      let _params = {
        user_uuid: $cookie.get('user_uuid'),
        token: $cookie.get('token')
      }
      return this.ajax({
        url: this.api_check_login_status,
        method: 'get',
        params: _params,
        timeout: 10000
      })
    } else {
      // 如果没有cookie就直接登陆
      console.log('没有cookie')
      return new Promise((resolve) => {
        resolve({
          data: {
            code: 401,
            tips: '请您登陆'
          }
        })
      })
    }
  }
  wxLoginAction(backUrl = window.location.href) {
    //检测url 上是否有code
    let _urlParams = window.location.href.split('?');
    _urlParams.splice(0, 1);

    //如果url中没有code 请求授权
    if (!checkCode(_urlParams)) {
      var _get_code_url =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + global.APPID + "&redirect_uri=" +
        encodeURIComponent(backUrl) + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
      window.location.href = _get_code_url;
      return
    }
    let _params = {
      code: getCode(_urlParams)
    }
    $dialog.loading('登录中...')
    return this.ajax({
      method: 'POST',
      url: global.ROOT_API + global.API.WX_LOGIN,
      params: _params
    }).then((res) => {
      $dialog.loadingHide(1000)
      //格式化当前地址 #之前的第三方插入参数一概删除
      $params.formatLocalUrl()
      if (res.data.code === 200) {
        $cookie.set('user_uuid', res.data.data.uuid, {
          path: '/',
          expires: 1000 * 60 * 60
        });
        $cookie.set('token', res.data.data.token, {
          path: '/',
          expires: 1000 * 60 * 60
        });
      }
    }).catch((error) => {
      $dialog.loadingHide(1000)
      console.log(error)
    })

    function checkCode(urlparams) {
      return urlparams.some((item) => {
        let _searchParams = new URLSearchParams(item)
        return (_searchParams.has('code'))
      })
    }

    function getCode(urlparams) {
      let code = "";
      urlparams.forEach((item) => {
        let _searchParams = new URLSearchParams(item)
        if (_searchParams.has('code')) {
          code = _searchParams.get('code')
        }
      })
      return code
    }

  }
}
export default User
