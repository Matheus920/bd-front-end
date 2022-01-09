/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/utils/api';

import {
  PROFILE_ACTIVITIES_REQUEST,
  PROFILE_ACTIVITIES_SUCCESS,
  PROFILE_ACTIVITIES_FAILED,
} from './actions';

const { http } = api.getInstance();

Vue.use(Vuex);
const state = {
  profileActivitiesStatus: '',
};
const getters = {
  featuredEventsStatus: (state) => state.profileActivitiesStatus,
};
const mutations = {
  [PROFILE_ACTIVITIES_REQUEST]: (state) => {
    state.featuredEventsStatus = 'loading';
  },
  [PROFILE_ACTIVITIES_SUCCESS]: (state) => {
    state.featuredEventsStatus = 'success';
  },
  [PROFILE_ACTIVITIES_FAILED]: (state) => {
    state.featuredEventsStatus = 'error';
  },
};
const actions = {
  [PROFILE_ACTIVITIES_REQUEST]: ({ commit }) => new Promise((resolve, reject) => {
    commit(PROFILE_ACTIVITIES_REQUEST);

    http({
      method: 'get',
      url: '/activities/',
    })
      .then(({ data }) => {
        commit(PROFILE_ACTIVITIES_SUCCESS);
        resolve(data);
      })
      .catch((error) => {
        commit(PROFILE_ACTIVITIES_FAILED);
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
