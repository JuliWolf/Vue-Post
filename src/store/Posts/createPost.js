import axios from 'axios'
const axiosUrl = 'http://5e1848adeaa1d2001436e1f0.mockapi.io/users/posts';
import router from '../../router/index'

const state = {

};

const mutations = {

};

const actions = {
    createPost ({ commit }, data){
        axios.post(axiosUrl, data).then((res) => {
            router.replace('/')
        })
    }
};

const getters = {

};

export default {
    state,
    actions,
    mutations,
    getters
}
