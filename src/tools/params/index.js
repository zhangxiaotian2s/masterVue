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
          path: '/'
        })
      })
    }
  }
}
const param = new Params()
export default param