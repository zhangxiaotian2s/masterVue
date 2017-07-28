import $cookie from '@/tools/cookie'
class Params {
  get(name) {
    let result = new RegExp('[\\?\&\#]' + name + '=([^\?\&\#]*)').exec(window.location.href);
    if (!result) {
      return undefined;
    }
    return result[1] || 0;
  }
  saveAll() {
    let url = window.location.href;
    if (url.indexOf('?') > -1) {
      url = url.split('?').pop().split('&');
      url.forEach((item) => {
        console.log(item)
        $cookie.set(item.split('=')[0], item.split('=')[1], {
          path: '/',
          expires: 1000 * 60 * 60
        })
      })
    }
  }
  formatLocalUrl() {
    //净化地址中的参数把第三方附加的参数去掉
    window.history.replaceState('', '', window.location.href.replace(/\?.{0,}#/, '#'))
  }
}
const param = new Params()
export default param