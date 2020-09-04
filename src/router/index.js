import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [{
            path: '/',
            name: 'index',
            component: r => require(['@/views'], r),

        },
        {
            path: '/login',
            name: 'login',
            component: r => require(['@/views/login'], r),
            meta: {
                isHeaderHide: true,
                isFooterHide: true,
                isMenuHide: true
            }
        },
        {
            path: '/home',
            name: 'home',
            component: r => require(['@/views/home'], r),
        },
        {
            path: '/message',
            name: 'message',
            component: r => require(['@/views/message'], r),
        },
        {
            path: '/user',
            name: 'user',
            component: r => require(['@/views/user'], r),
        },
        {
            path: '*',
            name: 'Error404',
            component: r => require(['@/views/error404.vue'], r),
            meta: {
                isHeaderHide: true,
                isFooterHide: true,
                isMenuHide: true
            }
        }
    ],
    // scrollBehavior (to, from, savedPosition) {
    // 	return { x: 0, y: 0 }
    // }
})


//全局路由守卫
router.beforeEach((to, from, next) => {
    next();
    // console.log('to', to);
    // console.log('next......',next);
    // console.log('跳转到:', to.fullPath);
    // var token = sessionStorage.getItem('token');
    // //如果没登录,都导向登录页
    // if (!token) {
    //     if (to.path !== '/login') {
    //         next({ path: '/login' })
    //     }
    //     else {
    //         next();
    //     }
    // }else {
    //     next();
    // }
})
export default router