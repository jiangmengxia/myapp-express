import './src/styles/index.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import './my-theme/index.less'
import store from './src/store'

Vue.use(iView)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    let title = to.meta.title
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
