import axios from 'axios'
const axiosUrl = 'http://5e1848adeaa1d2001436e1f0.mockapi.io/users/posts';

const state = {
    postsList: [],
    postsPerPage: [],
    itemsPerPage: 10,
    pageNumber: 0,
    pageCount: 1,
};

const mutations = {
    SAVE_POSTS (state, data) {
        state.postsList = data;
    },
    UPDATE_DATA_PER_PAGE (state) {
        let start = state.pageNumber * state.itemsPerPage;
        let end = start + state.itemsPerPage;
        state.postsPerPage = state.postsList.slice(start, end)
    },
    GET_NEXT_PAGE (state) {
        state.pageNumber++
    },
    GET_PREV_PAGE (state) {
        state.pageNumber--
    },
    COUNT_PAGES (state) {
        let l = state.postsList.length;
        let s = state.itemsPerPage;
        state.pageCount = Math.ceil(l / s)
    }
};

const actions = {
    getPosts ({ commit, dispatch }) {
        axios.get(axiosUrl).then((res) => {
            if (res.data.length > 0){
                commit('SAVE_POSTS', res.data)
            }
        }).then(() => {
            dispatch('pageCount');
        }).then(() => {
            dispatch('getDataForPage')
        })
    },
    pageCount ({ commit }) {
        return new Promise((resolve, reject) => {
            commit('COUNT_PAGES')
            resolve()
        })
    },
    getDataForPage ({ commit }) {
        return new Promise((resolve, reject) => {
            commit('UPDATE_DATA_PER_PAGE')
        })
    },
    getNextPageData ({ commit, dispatch }) {
        dispatch('getNextPage').then(() => {
            dispatch('getDataForPage')
        })
    },
    getNextPage ({ commit }) {
        return new Promise((resolve, reject) => {
            commit('GET_NEXT_PAGE');
            resolve()
        })
    },
    getPrevPageData ({ commit, dispatch }) {
        dispatch('getPrevPage').then(() => {
            dispatch('getDataForPage')
        })
    },
    getPrevPage ({ commit }) {
        return new Promise((resolve, reject) => {
            commit('GET_PREV_PAGE')
            resolve()
        })
    },
    likePost ({ commit, dispatch }, data) {
        if(data.id){
            axios.put(axiosUrl + '/' + data.id, data.data).then((res) => {
                dispatch('getPosts')
            })
        }
    },
    deletePost ({ commit, dispatch }, data) {
        if (data) {
            axios.delete(axiosUrl + '/' + data).then((res) => {
                dispatch('getPosts')
            })
        }
    }
};

const getters = {
    getPostsList: state => {
        if(state.postsPerPage.length > 0){
            return state.postsPerPage
        }else{
            return []
        }
    },
    pageNumber: state => {
        return state.pageNumber
    },
    pageCount: state => {
        return state.pageCount
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}
