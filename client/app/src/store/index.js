import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
      blog
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})
