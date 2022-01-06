/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/utils/api';

import {
  FEATURED_EVENTS_REQUEST,
  FEATURED_EVENTS_SUCCESS,
  FEATURED_EVENTS_FAILED,
  // SEARCH_EVENTS_REQUEST,
  // SEARCH_EVENTS_SUCCESS,
  // SEARCH_EVENTS_FAILED,
} from './actions';

const { http } = api.getInstance();

Vue.use(Vuex);
const state = {
  featuredEventsStatus: '',
};
const getters = {
  isAuthenticated: (state) => state.token,

};
const mutations = {
  [FEATURED_EVENTS_REQUEST]: (state) => {
    state.loginStatus = 'loading';
  },
  [FEATURED_EVENTS_SUCCESS]: (state) => {
    state.loginStatus = 'success';
  },
  [FEATURED_EVENTS_FAILED]: (state) => {
    state.loginStatus = 'error';
  },
};
const actions = {
  [FEATURED_EVENTS_REQUEST]: ({ commit }, limit) => new Promise((resolve, reject) => {
    commit(FEATURED_EVENTS_REQUEST);

    http({
      method: 'get',
      url: `/events?limit=${limit}`,
    })
      .then(({ data }) => {
        commit(FEATURED_EVENTS_SUCCESS, data);
        resolve(data);
      })
      .catch((error) => {
        commit(FEATURED_EVENTS_FAILED);
        reject(error);
      });
  }),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
