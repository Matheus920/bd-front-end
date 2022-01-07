/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/utils/api';

import {
  FEATURED_EVENTS_REQUEST,
  FEATURED_EVENTS_SUCCESS,
  FEATURED_EVENTS_FAILED,
  SEARCH_EVENTS_REQUEST,
  SEARCH_EVENTS_SUCCESS,
  SEARCH_EVENTS_FAILED,
} from './actions';

const { http } = api.getInstance();

Vue.use(Vuex);
const state = {
  featuredEventsStatus: '',
  searchEventsStatus: '',
};
const getters = {
  isfeaturedEventsLoading: (state) => state.featuredEventsStatus,
  searchEventsStatus: (state) => state.searchEventsStatus,
};
const mutations = {
  [FEATURED_EVENTS_REQUEST]: (state) => {
    state.featuredEventsStatus = 'loading';
  },
  [FEATURED_EVENTS_SUCCESS]: (state) => {
    state.featuredEventsStatus = 'success';
  },
  [FEATURED_EVENTS_FAILED]: (state) => {
    state.featuredEventsStatus = 'error';
  },
  [SEARCH_EVENTS_REQUEST]: (state) => {
    state.searchEventsStatus = 'loading';
  },
  [SEARCH_EVENTS_SUCCESS]: (state) => {
    state.searchEventsStatus = 'success';
  },
  [SEARCH_EVENTS_FAILED]: (state) => {
    state.searchEventsStatus = 'error';
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
        commit(FEATURED_EVENTS_SUCCESS);
        resolve(data);
      })
      .catch((error) => {
        commit(FEATURED_EVENTS_FAILED);
        reject(error);
      });
  }),
  [SEARCH_EVENTS_REQUEST]: ({ commit }, search) => new Promise((resolve, reject) => {
    commit(SEARCH_EVENTS_REQUEST);

    http({
      method: 'get',
      url: `/events?search=${search}`,
    })
      .then(({ data }) => {
        commit(SEARCH_EVENTS_SUCCESS);
        resolve(data);
      })
      .catch((error) => {
        commit(SEARCH_EVENTS_FAILED);
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
