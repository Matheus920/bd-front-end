/* eslint-disable import/no-cycle */
import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/utils/api';

import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_LOGOUT,
} from './actions';

const { http } = api.getInstance();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginStatus: '',
    token: sessionStorage.getItem('token') || null,
    userInfo: null,
  },
  getters: {
    isAuthenticated: (state) => state.token,
  },
  mutations: {
    [AUTH_LOGIN_REQUEST]: (state) => {
      state.loginStatus = 'loading';
    },
    [AUTH_LOGIN_SUCCESS]: (state, { accessToken, userInfo }) => {
      sessionStorage.setItem('token', accessToken);
      console.log(sessionStorage.getItem('token'));
      state.token = accessToken;
      state.loginStatus = 'success';
      state.userInfo = userInfo;
    },
    [AUTH_LOGIN_FAILED]: (state) => {
      state.token = null;
      state.loginStatus = 'error';
    },
    [AUTH_LOGOUT]: (state) => {
      state.token = null;
      state.loginStatus = '';
      state.userRole = '';
    },
  },
  actions: {
    [AUTH_LOGIN_REQUEST]: ({ commit }, payload) => new Promise((resolve, reject) => {
      commit(AUTH_LOGIN_REQUEST);

      http({
        method: 'post',
        url: '/login',
        data: payload,
      })
        .then(({ data }) => {
          http.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
          commit(AUTH_LOGIN_SUCCESS, data);
          resolve(data);
        })
        .catch((error) => {
          sessionStorage.removeItem('token');
          debugger;
          commit(AUTH_LOGIN_FAILED);
          reject(error);
        });
    }),
    [AUTH_LOGOUT]: ({ commit }) => new Promise((resolve, reject) => {
      try {
        sessionStorage.removeItem('token');
        http.auth = null;
        console.log(http.auth);
        commit(AUTH_LOGOUT);
        resolve();
      } catch (e) {
        reject(e);
      }
    }),
  },
});
