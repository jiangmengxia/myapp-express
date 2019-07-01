import USER_API from '../../requests/apis/user'

const state = {
    userList: {
        count:0,
        list:[]
    },
}

// getters
const getters = {
    userList(state) {
        return state.blogList
    }
}

// actions
const actions = {
    getUserList({commit},params){
        USER_API.getUsers(params).then(res=>{
            if(res.ret===1){
                commit('_userList_',{
                    list:res.data,
                    count:res.data.length
                })
            }
        })
    }
}

// mutations
const mutations = {
    _userList_ (state,data){
        state.userList = data
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
