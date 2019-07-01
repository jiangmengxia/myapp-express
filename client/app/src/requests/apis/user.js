import axios from '../interception'

const API = {
    /*post*/
    getUsers(data) {
        return axios({
            method: 'post',
            url: 'getusers',
            data: data,
        })
    },
    addUser(data) {
        return axios({
            method: 'post',
            url: 'adduser',
            data: data,
        })
    },
    deleteUser(data) {
        return axios({
            method: 'post',
            url: 'deleteuser',
            data: data,
        })
    },
    getUserById(data){
        return axios({
            method: 'post',
            url: 'getuserbyid',
            data: data,
        })
    },
    getUserByAcc(data){
        return axios({
            method: 'post',
            url: 'getuserbyusername',
            data: data,
        })
    },
    updateUser(data){
        return axios({
            method: 'post',
            url: 'updateuser',
            data: data,
        })
    },
    getLevels(data){
        return axios({
            method: 'post',
            url: 'getlevels',
            data: data,
        })
    }
}

export default API;
