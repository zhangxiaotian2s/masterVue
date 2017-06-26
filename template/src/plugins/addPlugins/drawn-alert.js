import drawnAlertComments from '../../components/drawn-alert.vue'

let $vm;
let drawnAlertPlugin = {}
drawnAlertPlugin.install = function (Vue, options) {
    let drawnalert = Vue.extend(drawnAlertComments)
    $vm = new drawnalert({
        el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)
    Vue.prototype.$drawnalert = {
        show(options = {}) {
            $vm.content = options.content;
            $vm.onShow(options)
            if (options.hide) {
                $vm.onHide = function () {
                    this.boolShow = false
                    options.hide.call(this)
                }
            }
        },
        onHide() {

        }
    }
}
export default drawnAlertPlugin
