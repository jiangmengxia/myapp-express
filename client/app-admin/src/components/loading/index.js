/**
 *
 * @param res
 * @author
 *
 */
import Loading from './index.vue'

let loading = {}

loading.install = (Vue) => {
  let constructor = Vue.extend(Loading)//实例化一个Toast
  let instance = new constructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);

  Vue.prototype.$loading = () => {
    // if (typeof options === 'string') {
    //     instance.text = options
    // }
    // else if (typeof options === 'object') {
    //     Object.assign(instance, options)
    // }
    // instance.show = true
    instance.loading()
  }
  Vue.prototype.$loaded = () => {
    instance.loaded()
  }
}
export default loading;
