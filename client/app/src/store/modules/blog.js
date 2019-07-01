import TEXT_API from 'apis/blog'

const state = {
    blogList: [],
}

// getters
const getters = {
    blogList(state) {
        return state.blogList
    }
}

// actions
const actions = {
    getBlogList({commit},params) {
        TEXT_API.getBlogList(params).then(res => {
            if (res.ret === 1) {
                    commit('_blogList_',res.data)
            }
        })
    },
    addBlog({commit},params) {
        TEXT_API.addBlog(params).then(res => {
            if (res.ret === 1) {

            }
        })
    },
}

// mutations
const mutations = {
    _blogList_ (state,data){
        state.blogList = data
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
