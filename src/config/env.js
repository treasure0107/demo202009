/**
 * Created by 520 on 2018/6/20.
 */
let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl;
console.log("process.env.NODE_ENV", process.env.NODE_ENV)
if (process.env.NODE_ENV == 'development') {
    baseUrl = 'http://localhost:8080/';
    imgBaseUrl = 'http://localhost:8080/img/';
} else if (process.env.NODE_ENV == 'production') {
    baseUrl = 'http://vipapi.1903.love/api/';
    imgBaseUrl = 'http://vipapi.1903.love/api/images/';
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl,
}