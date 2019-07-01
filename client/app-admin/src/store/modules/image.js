import IMAGE_API from 'apis/image'

const state = {
    imageList: {
        count:0,
        list:[]
    },
    imageTypes:[]
}

// getters
const getters = {
    imageList(state) {
        return state.blogList
    }
}

// actions
const actions = {
    getImageTypeList({commit},params) {
        IMAGE_API.getImageTypeList(params).then(res => {
            if (res.ret === 1) {
                commit('_imageTypes_',res.data)
            }
        })
    },
    getImageList({commit},params) {
        IMAGE_API.getImageList(params).then(res => {
            if (res.ret === 1) {
                    commit('_imageList_',res.data)
            }
        })
    },
    // addImage({commit},params) {
    //     IMAGE_API.addImage(params).then(res => {
    //         if (res.ret === 1) {
    //
    //         }
    //     })
    // },
    deleteImage({commit},params) {
        IMAGE_API.deleteImage(params).then(res => {
            if (res.ret === 1) {
                new Promise(resolve => {
                    resolve(res)
                })
            }
        })
    },
}

// mutations
const mutations = {
    _imageList_ (state,data){
        state.imageList = data
    },
    _imageTypes_(state,data){
        state.imageTypes = data
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
