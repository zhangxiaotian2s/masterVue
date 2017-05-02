import outbackappComments from '../components/outbackapp.vue'

let $vm;
let MasterOutBackApp = {}
MasterOutBackApp.install = function (Vue, options) {
  let outbackapp = Vue.extend(outbackappComments)
  $vm = new outbackapp({
    el: document.createElement('div')
  })

  if (global.BOOL_OUTAPP) {
    document.body.appendChild($vm.$el)
    Vue.prototype.$outBackApp = function (url) {
      $vm.backAppFn(url)
    }
  }
}
export default MasterOutBackApp
