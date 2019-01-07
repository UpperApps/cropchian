import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

/**
 * @module TestExemple
 * @desc Contains the main Vue configuration.
 * @author Rodrigo Melo
 */

/**
 * @function describe
 * @desc Describes a group of test functions.
 * @param {String} description Description of the block test.
 * @param {Function} anonimous Anonimous function containing the tests.
 */
describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg }
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
