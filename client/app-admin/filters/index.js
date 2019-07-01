import filters from './filters'
import Vue from 'vue'

for (let key in filters) {
    Vue.filter(key, filters[key])
}