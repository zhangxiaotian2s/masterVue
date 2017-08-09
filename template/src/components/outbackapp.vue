<template>
  <div>
    <div id="fix_top" class="clearfix" @click="backAppFn()">
      <img :src='top_img_src' class="img-responsive" />
    </div>
  </div>
</template>

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
    mounted() {},
    methods: {
      backAppFn(url = global.BACK_APP_ACTION) {
        if (global.BOOL_OUT_APP) {
          console.log(url)
          let _a = document.createElement('a');
          _a.setAttribute('id', '_openAppBtn');
          document.body.appendChild(_a);
          let _link = 'https://ako30z.mlinks.cc/A0Ac'; //短链地址
          let _btn = document.querySelector('#_openAppBtn');
          let _options = [{
            mlink: _link + '?action=' + url,
            button: _btn,
            inapp: true,
            autoLaunchApp: true,
            autoRedirectToDownloadUrl: false
          }];

          new Mlink(_options);
          setTimeout(() => {
            var e = document.createEvent('MouseEvent');
            e.initEvent('click', false, false);
            btn.dispatchEvent(e);
            document.body.removeChild(_a);
          }, 200)
        }
      }
    }
  }

</script>
<style lang="less" scoped>
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
