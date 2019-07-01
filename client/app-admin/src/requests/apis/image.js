import axios from '../interception'

const IMAGE_API = {
    /*post*/
    getImageList(data) {
        return axios({
            method: 'post',
            url: 'image/getimagelist',
            data: data,
        })
    },
    addImage(data) {
        return axios({
            method: 'post',
            url: 'image/upload',
            data: data,
        })
    },
    deleteImage(data) {
        return axios({
            method: 'post',
            url: 'image/delete',
            data: data,
        })
    },

    getImageTypeList(data) {
        return axios({
            method: 'post',
            url: 'image-type/getimagetypelist',
            data: data,
        })
    },
}

export default IMAGE_API;
