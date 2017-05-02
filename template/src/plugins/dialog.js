import Vue from 'vue';
class dialog {
  errorTips(mes) {
    this.loadingHide()
    Vue.$vux.toast.show({
      type: 'cancel',
      text: mes,
      position: 'middle'
    })
  }
  successTips(mes) {
    this.loadingHide()
    Vue.$vux.toast.show({
      type: 'success',
      text: mes,
      position: 'middle'
    })
  }
  textTips(mes) {
    this.loadingHide()
    Vue.$vux.toast.show({
      type: 'text',
      text: mes,
      position: 'middle'
    })
  }
  alert(mes, showcallback, hidecallback) {
    this.loadingHide()
    Vue.$vux.alert.show({
      title: mes.title || '提示',
      content: mes.content || '',
      buttonText: mes.btnText || '确定',
      onShow() {
        if (showcallback) showcallback()
        console.log('Plugin: I\'m showing')
      },
      onHide() {
        if (hidecallback) hidecallback();
        console.log('Plugin: I\'m hiding')
      }
    })
  }

  alertHide(time = 0) {
    setTimeout(() => {
      Vue.$vux.alert.hide()
    }, time)
  }

  confirm(mes, confirmCallBack, cancelCallBack) {
    this.loadingHide()
    Vue.$vux.confirm.show({
      title: mes.title || '提示',
      content: mes.content || '',
      confirmText: mes.confirmText || '确定',
      cancelText: mes.cancelText || '取消',
      // 组件除show外的属性
      onCancel() {
        if (cancelCallBack) cancelCallBack()
      },
      onConfirm() {
        if (confirmCallBack) confirmCallBack()
      }
    })
  }
  loading(text, time) {
    Vue.$vux.loading.show({
      text: text || 'Loading'
    })
    // 隐藏
    if (time) {
      setTimeout(() => {
        Vue.$vux.loading.hide()
      }, time)
    }
  }
  loadingHide(time = 0) {
    setTimeout(() => {
      Vue.$vux.loading.hide()
    }, time)
  }
}
const Dialog = new dialog()

export default Dialog
