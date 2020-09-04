import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/styles/reset.css";
import ElementUI from './element-index.js';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import axios from './utils/axios.js';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')