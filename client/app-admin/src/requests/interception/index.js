import {API_BASE_URL} from "apiConfig";
import axios from 'axios'
import handleError from './catchError'


// 超时时间
axios.defaults.timeout = 3000

// http请求拦截器
axios
    .interceptors
    .request
    .use(config => {
        config.url = API_BASE_URL + config.url
        return config
    }, error => {
        return Promise.reject(error)
    })
// http响应拦截器
axios
    .interceptors
    .response
    .use(res => { // 响应成功关闭loading
        let data = res.data
        if (data.ret === 1) {
            return res.data
        } else {
            handleError(res)
            return Promise.reject(res)
        }
    }, error => {
        handleError(error)
        return Promise.reject(error)
    })

export default axios
