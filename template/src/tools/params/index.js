import $cookie from '@/tools/cookie'
import URLSearchParams from '@/tools/urlsearchparams';
class Params {
  constructor() {
    this.params = new URLSearchParams(window.location.href.split('?').pop());

  }
  get(name) {
    return this.params.get(name)
  }
  saveAll() {
    for (let _param of this.params.entries()) {
      $cookie.set(_param[0], _param[1], {
        path: '/',
        expires: 1000 * 60 * 60
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