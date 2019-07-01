import axios from '../interception'

const BLOG_API = {
    /*post*/
    getBlogList(data) {
        return axios({
            method: 'post',
            url: 'blog/getbloglist',
            data: data,
        })
    },
    addBlog(data) {
        return axios({
            method: 'post',
            url: 'blog/addblog',
            data: data,
        })
    },
    deleteBlog_(data) {
        console.log('-----------data',data)
        return axios({
            method: 'post',
            url: 'blog/delete',
            data: data,
        })
    },

    getBlogCatagorys(){
        return axios({
            method: 'post',
            url: 'blog/addblog',
            data: data,
        })
    }
}

export default BLOG_API;
