<template>
  <div class="loading-wrap" v-if="show">
   <div class="box">
     <div class="loading">
       <!--<div class="ddr ddr1"></div>-->
       <!--<div class="ddr ddr2"></div>-->
       <!--<div class="ddr ddr3"></div>-->
       <!--<div class="ddr ddr4"></div>-->
       <!--<div class="ddr ddr5"></div>-->
     </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "loading",
    data() {
      return {
        show: false
      }
    },
    methods: {
      loading() {
        this.show = true
      },
      loaded() {
        this.show = false
      }
    },
    destroyed() {
      this.show = false
    }
  }
</script>

<style scoped>
  /*.loading {*/
    /*width: 70px;*/
    /*height: 120px;*/
    /*position: absolute;*/
    /*top: 200px;*/
    /*left: 50%;*/
    /*margin-left: -35px;*/
    /*transform: translate(-50% -50%);*/
  /*}*/
  .loading{
    /*固定loading*/
    width: 80px;
    height: 80px;
    border: 6px solid;
    border-color: #ad29a5 #ad29a5 transparent;
    border-radius: 50%;
    box-sizing: border-box;
    /*动画时间1s，线性变化，无限循环*/
    animation: loading 1s linear infinite;
  }
  @keyframes loading{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  /*.ddr {*/
    /*width: 10px;*/
    /*height: 120px;*/
    /*float: left;*/
    /*margin: 2px;*/
    /*background-color: #ec7227;*/
    /*animation: loading 1s infinite ease-in-out; !*animation：动画名称 持续时间 动画速度曲线 延迟 执行多少次 是否正反方向轮流播放*!*/
  /*}*/
  /*.ddr1{*/
    /*margin-left: 0;*/
  /*}*/
  /*.ddr2 {*/
    /*animation-delay: -0.9s;*/
  /*}*/

  /*.ddr3 {*/
    /*animation-delay: -0.8s;*/
  /*}*/

  /*.ddr4 {*/
    /*animation-delay: -0.7s;*/
  /*}*/

  /*.ddr5 {*/
    /*animation-delay: -0.6s;*/
    /*margin-right: 0;*/
  /*}*/

  /*@keyframes loading {*/
    /*0%, 40%, 100% { !*定义每帧的动作*!*/
      /*-webkit-transform: scaleY(0.5);*/
    /*}*/
    /*20% {*/
      /*-webkit-transform: scaleY(1);*/
    /*}*/
  /*}*/
  .loading-wrap{
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.01);
    left: 0;
    top: 0;
  }
  .loading-wrap .box{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    padding: 10px;
    transform: translateX(-50%) translateY(-50%);
  }
</style>
