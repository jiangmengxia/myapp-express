import Confirm from './index.vue'
let confirm = {}
confirm.install = (Vue) => {
    let constructor = Vue.extend(Confirm)
    let instance = new constructor({
        el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);

    Vue.prototype.$confirm = (options) => {
        if (typeof options === 'string') {
            instance.content = options
          instance.success=()=>{}
        }
        else if (typeof options === 'object') {
            Object.assign(instance, options)
          if (!options.success) {
            options.success = () => {
            }
          }
        }
        instance.type = 'confirm';
        instance.show = true
    }

    Vue.prototype.$alert = (options) => {
        if (typeof options === 'string') {
            instance.content = options
          instance.success=()=>{}
        }
        else if (typeof options === 'object') {
            Object.assign(instance, options)
          if (!options.success) {
            options.success = () => {
            }
          }
        }
        instance.type = 'alert';
        instance.show = true
    }
}

export default confirm
