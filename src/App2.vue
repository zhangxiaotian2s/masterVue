<template>
  <div id="app" :class="{ paddingTop:bool_out_app }">
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import $params from '@/tools/params'
  export default {
    name: 'app',
    beforeCreate() {
      //存储URL中所有的参数
      $params.saveAll()

    },
    data() {
      return {
        transitionName: 'slide-left',
        //给顶部的浮动条留出位置
        bool_out_app: global.BOOL_OUTAPP
      }
    },
    mounted() {

    }

  }

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import './assets/styles/public.less';
  .paddingTop {
    padding-top: 0.92rem
  }

  .slide-left-enter {
    transform: translate3d(100%, 0%, 0);
  }

  .slide-left-enter-active {
    animation-name: fade-in;
    animation-duration: .5s;
  }

  .slide-left-leave-active {
    animation-name: fade-out;
    animation-duration: .5s;
  }




  @keyframes fade-in {
    0% {
      transform: translate3d(100%, 0%, 0);
      opacity: 0
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1
    }
  }

  @keyframes fade-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1
    }
    100% {
      transform: translate3d(-100%, 0%, 0);
      opacity: 0
    }
  }

</style>
