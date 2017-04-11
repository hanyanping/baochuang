import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync'
import infiniteScroll from 'vue-infinite-scroll'
import store from './store';
import routeMap from './routeConfig';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import App from './App';

import axios from 'axios'
Vue.prototype.$http = axios;

Vue.use(VueRouter);
Vue.use(MintUI);
Vue.use(infiniteScroll);

Vue.config.productionTip = false;


import rest from './common/rest';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routeMap,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});
// sync(store, router);
router.beforeEach(function(to, from, next) {
    // localStorage.clear(); // 针对测试手机清理
    // 检查localstoage里存在token,openid,os 
    if (localStorage.init) {
        let temp = JSON.parse(localStorage.init);
        if (!temp.token || temp.token == '') {
            // 跳转到注册地址
            let auth = to.meta.auth;
            if (auth) {
                // 需要验证登录
                next({
                    path: '/register'
                });

            } else {
                next();

            }
        } else {
            // 需要判断验证是否完整个人信息 
            let visit = to.meta.visit;
            if (visit) {
                if (localStorage.mineDetail) {
                    let mine = +localStorage.mineDetail;
                    if (0 == mine) {
                        // 需要完善个人信息
                        next({ path: '/personalInfo' });
                    } else {
                        next();
                    }
                } else {
                    //bug
                    next();
                }
            } else {
                next();
            }
        }
    } else {
        // 从cookie找
        if (document.cookie.length > 0) {
            let c_start = document.cookie.indexOf('init=')
            if (c_start != -1) {
                c_start = c_start + 5;
                let c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length;
                let init = document.cookie.substring(c_start, c_end);
                localStorage.init = init;
                let temp = JSON.parse(init);
                if (!temp.token || temp.token == '') {
                    // 跳转到注册地址
                    let auth = to.meta.auth;
                    if (auth) {
                        // 需要验证登录
                        next({
                            path: '/register'
                        });
                    } else {
                        next();
                    }
                } else {
                    // 需要判断验证是否完整个人信息 
                    let visit = to.meta.visit;
                    if (visit) {
                        if (localStorage.mineDetail) {
                            let mine = +localStorage.mineDetail;
                            if (0 == mine) {
                                // 需要完善个人信息
                                next({ path: '/personalInfo' });
                            } else {
                                next();
                            }
                        } else {
                            //bug
                            next();
                        }
                    } else {
                        next();
                    }
                }
            } else {
                // 开发环境 初始,正式环境应该删除
                saveInit();
                //生产环境
                // mui.alert('您的微信浏览器不支持该应用,请升级后尝试.');
                // window.location.href = "http://z.crossess.com";
                next();
            }
        } else {
            // 开发环境 初始,正式环境应该删除
            saveInit();
            //生产环境
            // mui.alert('您的微信浏览器不支持该应用,请升级后尝试.');
            // window.location.href = "http://z.crossess.com";
            next();
        }

    }
});

//  开发环境 初始
const saveInit = function() {

    let init = { "openid": "o4euRjh9te7sAOLyQ-ip0PIWijJ8", "token": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMzZTk0ZTQ0NTFiNWY5YmFmYjQ5ZWUyYTA3OTI5YTBmMTI0NWFlMTgxNTRmYzNiMzE0YzczZTZjYmY0ZGFiNjViYWNmMTM4MTRiNDY5YjM0In0.eyJhdWQiOiIxIiwianRpIjoiMzNlOTRlNDQ1MWI1ZjliYWZiNDllZTJhMDc5MjlhMGYxMjQ1YWUxODE1NGZjM2IzMTRjNzNlNmNiZjRkYWI2NWJhY2YxMzgxNGI0NjliMzQiLCJpYXQiOjE0OTE3OTY1NjIsIm5iZiI6MTQ5MTc5NjU2MiwiZXhwIjoxNTIzMzMyNTYyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.H-Zb9OhflYG3cK2aQDLuIePsTNoHlojiKaiMvPZHpX-DZinwxs5xnZFf_et8fd_4FJMFQzkR1i18F8CSTDN4ms_a0aYaR__aKBvc_tP2TiuIpm4ICjPo8zm55wZHuxsGhla70F_0URL4OdRm_C5dfSriZapfnk-k3hi4AEkuZXRgHY1glCbULKn6WtsAyvxqRTDqoir-3TZ2BMZp6Neo_Com5pwpNRbiV1LFB0iPPLrhqOyTRNc328sldPGbxoYK2cBZfg4TAEGzFtjpn8Z2_GuTGn7gQeLRqZWK9XWg9IpebZwkOOxWX9jgzArS9S9IpyQhmw1xJaJ2MI1f7NhSUckB_frAPWnB48InOSMx1FTXn4bV-zkzdJ4rNPNelMXjyYiy8sblasej9Zk6B1bN6GPDYEj-wQIrG9FwJn4UZW6ljZgCJx64Luq77KD1yaNAQS0p3h9Zy7r7hlIe5TEIiMjpo_7oFiCJWBi5KTIiwRH8_OLqNYe8rKf3oPGR5FFgdVo3aXjdpbnxuh9lLXTYhePGS8GU_X-yIjvjo3BFctX8HIJT2nCfyZwm5YXVdUzwJ4GA7yEmaiQI0szMHgftJSfbDlfFcIOHkxqyDWmbKfDrOuOBgRnljpZku6WcRK9LYqG6Hw5fvaxFPPyIst9q4kTPiisvbzSxKUTPKNsxzfY", "device": 1, "baseURL": "http://k.crossess.com/api" };

    localStorage.init = JSON.stringify(init);
};

new Vue({
    el: '#app',
    store,
    router: router,
    render: h => h(App)
}).$mount('#app')