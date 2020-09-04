import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

import login from "./login"
//创建VueX对象
const store = new Vuex.Store({
    // state: {
    //     //存放的键值对就是所要管理的状态
    //     name: 'helloVueX'
    // },
    // getters: {},
    // mutations: {},
    // actions: {},
    modules: {
        login: login
    }
})



export default store