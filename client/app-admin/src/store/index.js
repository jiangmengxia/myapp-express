import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import image from './modules/image'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
      blog,
      user,
      image
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})
