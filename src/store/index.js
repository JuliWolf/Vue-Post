import Vue from 'vue'
import Vuex from 'vuex'

import viewPosts from './Posts/viewPosts.js'
import changePost from './Posts/changePost.js'
import createPost from './Posts/createPost.js'
import auhtorization from './Authorization/auth.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        viewPosts,
        changePost,
        createPost,
        auhtorization
    }
})
