<script>
  export default {
    name: 'outbackapp',
    data() {
      return {
        top_img_src: 'http://image.mastergolf.cn/share/download_top.png',
        fixed_ts_img_src: 'http://image.mastergolf.cn/share/open_in_browser.png',
        bool_ts_show: false
      }
    },
    template: ` 
    <div>
      <div id="fix_top" class="clearfix" @click="backAppFn()">
        <a href="javascript:void(0)"><img :src='top_img_src' class="img-responsive" /></a>
      </div>
      <div id="fix_bk" v-if="bool_ts_show" @click="toggleFixedTs(false)"></div>
      <div id="fix_ts" class="clearfix" v-if="bool_ts_show" @click="toggleFixedTs(false)">
        <a href="javascript:void(0)"><img :src='fixed_ts_img_src' class="img-responsive" /></a>
      </div>
  </div>`,
    props: ['backurl'],
    mounted() {},
    methods: {
      backAppFn(url = global.BACK_URL) {
        if (global.BOOL_OUT_WX) {
          window.location.href = url;
          setTimeout(function () {
            window.location.href = global.DOWN_APP_URL;
          }, 2500)
        } else {
          this.toggleFixedTs(true)
        }
      },
      toggleFixedTs(bool) {
        this.bool_ts_show = bool
      }
    }
  }

</script>
<style>
  #fix_top {
    position: fixed;
    top: 0;
    z-index: 1000000;
    margin: auto;
    width: 100%
  }

  #fix_ts {
    position: fixed;
    top: 0;
    z-index: 1000001;
    width: 100%
  }

  #fix_bk {
    position: fixed;
    top: 0;
    z-index: 1000000;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .7;
    -webkit-opacity: .7;
    -moz-opacity: .7
  }

  .img-responsive {
    display: block;
    margin: auto;
    height: auto;
    max-width: 100%
  }

</style>
