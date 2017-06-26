<template>
  <div class="vux-x-dialog">
    <transition name="fade">
      <div class="drawn-bk" v-show="boolShow"></div>
    </transition>
    <transition name="fade">
      <div class="drawn-alert-box" v-show="boolShow">
        <div class="content pr">
          <icon type="cancel" class="icon-close pa" @click.native="onHide()"></icon>
          <img src="http://augusta.oss-cn-beijing.aliyuncs.com/masterVue/type-01-img.png">
          <div class="drawn-content pa">
            <p v-html="content"></p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {
    Icon
  } from 'vux'
  export default {

    name: 'drawnAlert',
    components: {
      Icon
    },
    data() {
      return {
        boolShow: false,
        content: 'xxxx'
      }
    },
    props: [],
    mounted() {
      this.$nextTick(() => {})
    },
    methods: {
      onShow(mes) {
        this.content = mes.content;
        this.boolShow = true
      },
      onHide(callback) {
        console.log('xxxxxx')
        this.boolShow = false
        callback && callback()
      }
    }
  }

</script>
<style lang="less" scoped>
  .icon-close {
    right: 1rem;
    color: #ffffff;
  }

  .drawn-content {
    bottom: 0.8rem;
    width: 3.6rem;
    left: 1.4rem;
    text-align: center;
    height: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      color: #ffffff;
      font-size: 0.26rem;
      line-height: 0.4rem;
    }
  }

  .drawn-alert-box {
    position: fixed;
    z-index: 1001;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    width: 6.4rem;
    margin-left: -3.2rem;
    top: 0px;
    left: 50%;
    .content {
      img {
        width: 100%;
      }
    }
  }

  .drawn-bk {
    position: fixed;
    z-index: 1000;
    top: 0px;
    left: 50%;
    width: 6.4rem;
    height: 100%;
    margin-left: -3.2rem;
    opacity: 0.6;
    background: #000000
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

</style>
