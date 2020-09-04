import axios from 'axios'
import { imgBaseUrl } from "@/config/env.js";
console.log("imgBaseUrl-------", imgBaseUrl)
let http = axios.create({
    baseURL: "https://cnodejs.org/api/v1",
    withCredentials: false,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
});
http.interceptors.request.use(
    config => {
        console.log('interceptors......request=======', config)

        return config
    }
);
// response 拦截器
http.interceptors.response.use(
    res => {
        return res.data

    },
    error => {
        return Promise.reject(error)
    }
);

function apiAxios(method, url, params, response) {
    http({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
    }).then(function(res) {
        response(res.data);
    }).catch(function(err) {
        response(err);
    })
}

export default {
    get: function(url, params, response) {
        return apiAxios('GET', url, params, response)
    },
    post: function(url, params, response) {
        return apiAxios('POST', url, params, response)
    },
    put: function(url, params, response) {
        return apiAxios('PUT', url, params, response)
    },
    delete: function(url, params, response) {
        return apiAxios('DELETE', url, params, response)
    }
}