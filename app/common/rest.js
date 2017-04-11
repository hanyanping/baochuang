import axios from 'axios';
let baseURL = '';
let Authorization = '';
if (localStorage.init) {
    var temp = JSON.parse(localStorage.init);
    baseURL = temp.baseURL;
    Authorization = temp.token;
}
export default axios.create({
    baseURL: baseURL,
    // baseURL: '',
    timeout: 20000,
    headers: {
        'Authorization': Authorization
    },
});

// 'Content-Type': 'application/json',
// 'Accept': 'application/json',
