import * as types from './mutation-types';
import * as state from './state';
import rest from '../common/rest';

// 当在首页时,清除所有链接
export const dropAllPath = ({ commit }) => {
    localStorage.removeItem('profile_referrer');
    localStorage.removeItem('act_referrer');
    localStorage.removeItem('mut_referrer');
};
 

// 设置cookie
// c_name, value, expiredays
export const setCookie = ({ commit }, data) => {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + data.expiredays)
    document.cookie = data.c_name + "=" + escape(data.value) +
        ((data.expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
};

//取回cookie
// c_name
export const getCookie = ({ commit }, data) => {
    if (document.cookie.length > 0) {
       let c_start = document.cookie.indexOf(data.c_name + "=")
        if (c_start != -1) {
            c_start = c_start + data.c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
        alert(c_start);
    }
    return ""
};