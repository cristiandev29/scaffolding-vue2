import Vue from 'vue';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_HOST
});

Vue.prototype.$api = api;
