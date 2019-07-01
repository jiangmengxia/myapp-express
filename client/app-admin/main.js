import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import store from './src/store'
import 'iview/dist/styles/iview.css';
import confirm from './src/components/confirm'
import '../tools/prototypes'
import './filters'

Vue.use(iView)
Vue.use(confirm)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let title = to.meta
  document.title = title
  // 路由变换后，滚动至顶
  window.scrollTo(0, 0)
  next()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: {App},
    template: '<App/>'
})
