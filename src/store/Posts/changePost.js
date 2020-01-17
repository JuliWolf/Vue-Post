import axios from 'axios'
const axiosUrl = 'http://5e1848adeaa1d2001436e1f0.mockapi.io/users/posts';
import router from '../../router/index'

const state = {
    postToChange: {},
    errorMessage: []
};

const mutations = {
    SAVE_CURRENT_POST (state, data) {
        state.postToChange = data
    },
    ADD_ERROR (state, data) {
        state.errorMessage.push(data)
    },
    CLEAR_ERROR_BOX (state) {
        state.errorMessage = []
    }
};

const actions = {
    changePost ({ comit, dispatch }, data){
        axios.put(axiosUrl + '/' + data.id, data.data).then((res) => {
            router.replace('/')
        });
    },
    getPost ({ commit, dispatch }, data) {
        axios.get(axiosUrl + '/' + data).then((res) => {
            commit('SAVE_CURRENT_POST', res.data)
        })
    },
    showErrorMessage ( { commit }, data) {
        if(data.length > 0) {
            commit('ADD_ERROR', data)
        }
    },
    refreshErrorMessage ( { commit } ){
        commit('CLEAR_ERROR_BOX')
    }
};

const getters = {
    postToChange: state => {
        return state.postToChange
    },
    errorMessage: state => {
        return state.errorMessage
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}
