import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
/**
 * @module main
 * @desc Contains utility functions for triangles.
 */

/**
 * Returns the area of a triangle calculated using Heron's formula.
 *
 * @param {number} a - length of one of the sides of the triangle
 * @param {number} b - length of another side of the triangle
 * @param {number} c - length of the last side of the triangle
 * @returns {number} - the area
 * @throws Will throw an error if any of the side-lengths is negative
 * @see https://www.mathsisfun.com/geometry/herons-formula.html
 */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
