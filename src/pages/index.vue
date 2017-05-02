<template>
  <div>

  </div>

</template>

<script>
  import User from '@/plugins/login';
  import $cookie from '@/tools/cookie';
  import WxService from '@/service/wx.service'
  export default {
    name: 'index',
    data() {
      return {

      }
    },
    mounted() {
      this.$nextTick(() => {

        //微信config
        // this.$wxService = new WxService(this.$http)
        // this.$wxService.setConfig(window.location.href, ['onMenuShareTimeline', 'onMenuShareAppMessage']);


      })
    },
    methods: {

    }
  }

</script>
<style lang="less" scoped>


</style>
