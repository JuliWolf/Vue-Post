import Vue from 'vue'
import VueRouter from 'vue-router'
import PostsList from '../components/Posts/PostsList.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'postsList',
    component: PostsList,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import('../components/Posts/ChangePost.vue'),
    props: (route) => ({ id: route.params.id }),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create_post',
    name: 'create_post',
    component: () => import('../components/Posts/CreatePost'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/logIn',
    name: 'logIn',
    component: () => import('../components/Authorization/LogIn'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('../components/Authorization/SignUp'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router
