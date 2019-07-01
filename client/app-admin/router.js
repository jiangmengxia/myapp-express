import Vue from 'vue'
import Router from 'vue-router'
import List from './src/views/User-list'
import EditText from './src/views/BlogEdit'
import BlogList from './src/views/BlogList'
import BlogCatagory from './src/views/BlogCatagory'
import ImageList from './src/views/ImageList'
import ImageTypeList from './src/views/ImageTypeList'
import BlogAdd from './src/views/BlogAdd'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/list'
        },
        {
            path: '/list',
            component: List
        },
        {
            path: '/blog/edit',
            component: EditText,
            meta: '编辑'
        },
        {
            path: '/blog/add',
            component: BlogAdd,
            meta: '新增'
        },
        {
            path: '/blog/cata',
            component: BlogCatagory,
            meta: '文章类型管理'
        },
        {
            path: '/blog/list',
            component: BlogList,
            meta: '我的文章'
        },
        {
            path: '/image/list',
            component: ImageList,
            meta: '我的文章'
        },
        {
            path: '/image/type-list',
            component: ImageTypeList,
            meta: '图片类型列表'
        }
    ]
})
