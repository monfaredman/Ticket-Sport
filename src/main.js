import Vue from 'vue';
import App from './App.vue';

import AppHeader from "./Components/AppHeader.vue";
Vue.component("app-header", AppHeader);

new Vue({
  el: "#app",
  render: h => h(App)
});
