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
    editBlog(data) {
        return axios({
            method: 'post',
            url: 'blog/editblog',
            data: data,
        })
    },
    deleteBlog(data) {
        return axios({
            method: 'post',
            url: 'blog/delete',
            data: data,
        })
    },
    getBlogById(data) {
        return axios({
            method: 'post',
            url: 'blog/getblogbyid',
            data: data,
        })
    },

    addBlogCatagory(data) {
        return axios({
            method: 'post',
            url: 'blog-cata/addblogcata',
            data: data,
        })
    },
    getBlogCataGorys(data) {
        return axios({
            method: 'post',
            url: 'blog-cata/getblogcatagorys',
            data: data,
        })
    },
    deleteBlogCata(data) {
        return axios({
            method: 'post',
            url: 'blog-cata/delete',
            data: data,
        })
    },
}

export default BLOG_API;
