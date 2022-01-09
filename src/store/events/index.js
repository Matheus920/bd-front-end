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
  GET_EVENT_REQUEST,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAILED,
  SET_SEARCH_STATUS,
  JOIN_EVENT,
  LEAVE_EVENT,
  SELECT_EVENT,
} from './actions';

const { http } = api.getInstance();

Vue.use(Vuex);
const state = {
  featuredEventsStatus: '',
  searchEventsStatus: '',
  selectedEventId: null,
  eventStatus: '',
};
const getters = {
  featuredEventsStatus: (state) => state.featuredEventsStatus,
  searchEventsStatus: (state) => state.searchEventsStatus,
  eventStatus: (state) => state.eventStatus,
  selectedEventId: (state) => state.selectedEventId,
  isSelectedEvent: (state) => state.selectedEventId !== null,
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
  [SELECT_EVENT]: (state, event) => {
    state.selectedEventId = event;
  },
  [SET_SEARCH_STATUS]: (state, status) => {
    state.searchEventsStatus = status;
  },
  [GET_EVENT_REQUEST]: (state) => {
    state.eventStatus = 'loading';
  },
  [GET_EVENT_SUCCESS]: (state) => {
    state.eventStatus = 'success';
  },
  [GET_EVENT_FAILED]: (state) => {
    state.eventStatus = 'error';
  },
};
const actions = {
  [FEATURED_EVENTS_REQUEST]: ({ commit }, params) => new Promise((resolve, reject) => {
    commit(FEATURED_EVENTS_REQUEST);

    http({
      method: 'get',
      url: `/events/available?page=${params.page}&pagesize=${params.size}`,
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
      url: `/events?name=${search}`,
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
  [SELECT_EVENT]: ({ commit }, event) => {
    commit(SELECT_EVENT, event);
  },
  [SET_SEARCH_STATUS]: ({ commit }, status) => {
    commit(SET_SEARCH_STATUS, status);
  },
  [JOIN_EVENT]: (commit, payload) => new Promise((resolve, reject) => {
    http({
      method: 'post',
      url: '/activities/subscribe',
      data: payload,
    })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  }),
  [LEAVE_EVENT]: (commit, payload) => new Promise((resolve, reject) => {
    http({
      method: 'post',
      url: '/activities/unsubscribe',
      data: payload,
    })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  }),
  [GET_EVENT_REQUEST]: ({ commit, getters }, eventId) => new Promise((resolve, reject) => {
    commit(GET_EVENT_REQUEST);
    const url = getters.isAuthenticated ? `/events/${eventId}?email=${getters.userData.email}` : `/events/${eventId}`;
    http({
      method: 'get',
      url,
    })
      .then(({ data }) => {
        commit(GET_EVENT_SUCCESS);
        resolve(data);
      })
      .catch((error) => {
        commit(GET_EVENT_FAILED);
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
