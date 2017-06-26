<template>
  <div>


  </div>

</template>

<script>
  import User from '@/plugins/login';
  import $cookie from '@/tools/cookie';
  import WxService from '@/service/wx.service';
  import $dialog from '@/plugins/dialog'
  export default {
    name: 'index',
    data() {
      return {

      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$user = new User(this.$http)
        let _this = this;

        function* g() {


        }
        //微信config
        // this.$wxService = new WxService(this.$http)
        // this.$wxService.setConfig(window.location.href, ['onMenuShareTimeline', 'onMenuShareAppMessage']);


      })
    },
    methods: {
      showAlert() {

      }
    }
  }

</script>
<style lang="less" scoped>


</style>
