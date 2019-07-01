<template>
  <section class="confirm">
    <Shadow :show="show"></Shadow>
    <zoom-in>
      <div class="container" v-show="show">
        <div class="title ft-16">{{title}}</div>
        <div class="content">{{content}}</div>
        <div class="action clx">
          <input type="button" class="btn btn-cancel pull-left ft-16" v-if="type!=='alert'" :value="cancelText" @click="cancel">
          <input type="button" class="btn btn-confirm pull-right ft-16" :style="{width:type==='alert'?'100%':'50%'}"
                 :value="confirmText" @click="confirm">
        </div>
      </div>
    </zoom-in>
  </section>
</template>

<script>
  import Shadow from '../shadow'
  import ZoomIn from '../animation/zoom-in'

  export default {
    name: "confirm",
    components: {
      Shadow,
      ZoomIn
    },
    props: {
      type: {
        type: String,
        default() {
          return 'alert'
        }
      },
      show: {
        type: Boolean,
        default() {
          return false
        }
      },
      title: {
        type: String,
        default() {
          return '提示'
        }
      },
      content: {
        type: String,
        default() {
          return '请确定当前操作！'
        }
      },
      confirmText: {
        type: String,
        default() {
          return '确认'
        }
      },
      cancelText: {
        type: String,
        default() {
          return '取消'
        }
      },
      success:{
        type:Function,
        default:()=>{}
      }
    },
    methods: {
      confirm() {
        this.success && this.success()
        this.close()
      },
      cancel() {
        this.error && this.error()
        this.close()
      },
      close() {
        this.show = false
      }
    },
    mounted() {
      window.addEventListener('hashchange', this.close);
    },
    destroyed() {
      window.removeEventListener('hashchange', this.close);
    }
  }
</script>

<style scoped>
  .confirm{
    z-index: 100001;
  }
  .confirm .container {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 340px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 26px;
    font-size: 30px;
    text-align: center;
    z-index: 100001;
  }

  .confirm .title {
    padding: 10px 10px 0;
  }

  .confirm .content {
    font-size: 14px;
    height: auto;
    min-height: 80px;
    color: #666;
    padding: 10px;
  }

  .confirm .action {
    overflow: hidden;
    height: 48px;
    border-top: 1PX solid #C8C7CC;
  }

  .confirm .btn {
    width: 50%;
    min-height: 100%;
    line-height: 100%;
    color: #0088FF;
    cursor: pointer;
  }

  .confirm .btn-cancel {
    border-right: 1PX solid #C8C7CC;
  }
</style>
