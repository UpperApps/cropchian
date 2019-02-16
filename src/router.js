import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/**
 * @module Router
 * @desc Contains the application routing using Vue Route.
 */
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () =>
                import(/* webpackChunkName: "home" */ './views/Home.vue')
        },
        {
            path: '/details/:id',
            name: 'details',
            props: true,
            component: () =>
                import(/* webpackChunkName: "details" */ './views/Detail.vue')
        },
        {
            path: '/post',
            name: 'post',
            props: true,
            component: () =>
                import(/* webpackChunkName: "post" */ './views/Post.vue')
        },
        {
            path: '/camera',
            name: 'camera',
            component: () =>
                import(/* webpackChunkName: "post" */ './views/Camera.vue')
        }
    ]
});
