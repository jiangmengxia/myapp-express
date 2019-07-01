import Vue from 'vue'
import Router from 'vue-router'
import ArticalDetail from './src/views/article/article-detail'
import Home from './src/views/home'
import Zone from './src/views/zone'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
          path:'/',
          component:Home,
          title:'首页',
          meta:{
              title:'首页'
          }
        },
        {
            path:'/artical-detail',
            component: ArticalDetail,
            title:'文章',
            meta:{
                title:'文章'
            }
        },
        {
            path:'/zone',
            component: Zone,
            title:'个人主页',
            meta:{
                title:'个人主页'
            }
        }
    ]
})
