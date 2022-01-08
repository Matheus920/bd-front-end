import Vue from 'vue';
import GAuth from 'vue-google-oauth2';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

Vue.use(GAuth, {
  clientId: process.env.VUE_APP_CLIENT_ID,
  scope: 'profile https://www.googleapis.com/auth/user.birthday.read',
  prompt: 'select_account',
  fetch_basic_profile: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
