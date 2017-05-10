let ua = navigator.userAgent.toLowerCase();
//是否在app外
global.BOOL_OUTAPP = ua.indexOf('mastergolf') === -1;
//是否在微信外
global.BOOL_OUT_WX = (global.BOOL_OUTAPP && ua.match(/MicroMessenger/i) != "micromessenger");
//下载地址
global.DOWN_APP_URL = 'http://app.mastergolf.cn/get?from=share';



//API 地址
global.ROOT_API = 'http://api.mastergolf.cn';
global.COOKIE_PATH = 'http://h5app.mastergolf.cn';
//API
global.API = {
  GET_USER_INFO: '/v10/user/users/profile.json',
  CHECK_LOGIN_STATUS: '/v10/user/sessions/check_login.json',
  WX_CONFIG: '/v10/property/payments/wx_jssign_package.json'
}
global.BASE_URL = 'http://h5app.mastergolf.cn'
//回app的地址
global.BACK_URL = 'mastergolf://mastergolf.cn/startclient?action='

global.WX_PAY_PAGE = "http://h5app.mastergolf.cn/pay/home/index.html#/promotepay"

//登陆地址
global.LOGIN_URL = {
  WX: 'http://home.mastergolf.cn/oauth2/wechat/login?source_url=',
  APP: 'mastergolf://mastergolf.cn/user/login?url='
}

// // staging 重设api 以及登陆地址
if ((window.location.href.indexOf('staging') > -1) || (window.location.href.indexOf(':8080') > -1)) {
  global.ROOT_API = 'http://api.staging.mastergolf.cn';
  global.BASE_URL = 'http://h5app.staging.mastergolf.cn'
  global.BACK_URL = 'mastergolf://mastergolf.cn/startclient?action='
  global.LOGIN_URL = {
    WX: 'http://home.staging.mastergolf.cn/oauth2/wechat/login?source_url=',
    APP: 'mastergolf://mastergolf.cn/user/login?url='
  }
}
