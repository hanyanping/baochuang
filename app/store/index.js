import Vue from 'vue';
import Vuex from 'vuex';

import * as state from './state';
import * as getters from './getters';
import * as actions from './actions';
// import * as mutation from './mutation';

import activity from './modules/activity';
import invitation from './modules/invitation';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    actions,
    modules: {
        activity,
        invitation,
    }
});