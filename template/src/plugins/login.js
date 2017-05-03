// 处理微信登陆
import $cookie from '@/tools/cookie';
import $params from '@/tools/params';
//依赖vue 里的的 global 数据 不再单独处理 全局使用

class User {
  constructor(ajax) {
    this.ajax = ajax;
    this.api_check_login_status = global.ROOT_API + global.API.CHECK_LOGIN_STATUS;
    this.api_get_userinfo = global.ROOT_API + global.API.GET_USER_INFO;
  }

  //检查用户的登陆状态 options 为登陆地址后面的参数
  checkLoginStatus(options, callback) {
    //如果cookie中有user_uuid 和 token就检查登陆状态
    if ($cookie.get('user_uuid') && $cookie.get('token')) {
      let _params = {
        user_uuid: $cookie.get('user_uuid'),
        token: $cookie.get('token')
      }
      console.log(_params)
      this.ajax({
        url: this.api_check_login_status,
        method: 'get',
        params: _params,
        timeout: 10000
      }).then((res) => {
        //登陆有效
        console.log(res)
        if (res.data.code === 200) {
          if (callback) callback()
        } else if (res.data.code === 401) {
          //无效用户重新登陆
          this.login(options)
        }
      }).catch((error) => {
        console.log(error)
      })
    } else {
      // 如果没有cookie就直接登陆
      this.login(options)
    }
  }
  getUserLoginStatus() {
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
    }
  }
  getUserInfo() {
    let _this = this;
    let _params = {
      user_uuid: $cookie.get('user_uuid')
    }
    return _this.$http({
      method: 'GET',
      url: _this.api_get_userinfo,
      params: _params
    })
  }
  //微信登陆处理 options为登陆传递的一些参数拼接
  login(options) {
    if (global.BOOL_OUTAPP) {
      window.location.href = global.LOGIN_URL.WX + encodeURIComponent(options)
      //app外
    } else {
      //app 内 去 native 的登陆页面
      window.location.href = global.LOGIN_URL.APP
    }
  }
}
export default User
