import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
/**
 * @module store
 * @desc Contains utility stores.
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
export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {}
});
