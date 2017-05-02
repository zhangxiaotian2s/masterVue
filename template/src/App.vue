<template>
  <div id="app" :class="{ paddingTop:bool_out_app }">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import $params from '@/tools/params'
  export default {
    name: 'app',
    data() {
      return {
        //给顶部的浮动条留出位置
        bool_out_app: global.BOOL_OUTAPP
      }
    },
    beforeCreate() {
      //存储URL中所有的参数
      $params.saveAll()
    }
  }

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import './assets/styles/public.less';
  .paddingTop {
    padding-top: 0.92rem
  }

</style>
