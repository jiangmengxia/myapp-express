import BLOG_API from 'apis/blog'

const state = {
    blogList: {
        count: 0,
        list: []
    },
    blogDetail: null,
    blogCataList: {
        count: 0,
        list: []
    }
}

// getters
const getters = {
    blogList(state) {
        return state.blogList
    },
    blogDetail(state) {
        return state.blogDetail
    }
}

// actions
const actions = {
    getBlogList({commit}, params) {
        BLOG_API.getBlogList(params).then(res => {
            if (res.ret === 1) {
                commit('_blogList_', res.data)
            }
        })
    },
    getBlogCataList({commit}, params) {
        BLOG_API.getBlogCataGorys(params).then(res => {
            if (res.ret === 1) {
                commit('_blogCataList_', res.data)
            }
        })
    },
    addBlog({commit}, params) {
        let {cb} = params
        params.cb = null
        BLOG_API.addBlog(params).then(res => {
            if (res.ret === 1) {
                if (cb) cb(res)
            }
        })
    },
    editBlog({commit}, params) {
        let {cb} = params
        params.cb = null
        BLOG_API.editBlog(params).then(res => {
            if (res.ret === 1) {
                if (cb) cb(res)
            }
        })
    },
    deleteBlog({commit}, params) {
        let {cb} = params
        params.cb = null
        BLOG_API.deleteBlog(params).then(res => {
            if (res.ret === 1) {
                if (cb) cb(res)
            }
        })
    },
    getBlogById({commit}, params) {
        let {cb} = params
        params.cb = null
        BLOG_API.getBlogById(params).then(res => {
            if (res.ret === 1) {
                commit('_blogDetail_', res.data)
                if (cb) cb(res.data)
            }
        })
    },
}

// mutations
const mutations = {
    _blogList_(state, data) {
        state.blogList = data
    },
    _blogDetail_(state, data) {
        state.blogDetail = data
    },
    _blogCataList_(state, data) {
        state.blogCataList = data
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
