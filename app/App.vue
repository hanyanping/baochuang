<style>
.view {
    padding-bottom: 50px;
}
</style>
<template>
    <div id="app">
        <router-view class="view"
                     v-if="!loading"></router-view>
    </div>
</template>

<script>
import rest from './common/rest';
import mui from './assets/js/mui';
import 'mint-ui/lib/style.css';

export default {
    name: 'App',
    components: {},
    data: () => {
        return {
            msg: '首页',
            audiourl: '/static/music/sx.mp3',
            loading: true,
        }
    },
    created: function () {
        let self = this;
        // 个人详情 
        if (localStorage.init) {
            self.loading = true;
            let temp = JSON.parse(localStorage.init);
            if (temp.token) {
                rest.get('/wxapi/user/detail')
                    .then((res) => {
                        self.$store.state.userDetail = res.data.data;
                        // 解决关键字冲突
                        self.$store.state.userDetail._city = res.data.data.city;
                        self.$store.state.userDetail._province = res.data.data.province;

                        localStorage.mineDetail =res.data.data.allow_visit;
                        self.loading = false;
                    })
                    .catch((err) => {
                        console.log(err);
                        self.loading = false;
                    });
            } else {
                self.loading = false;
            }
        } else {
            self.loading = false;
        }
    },
    mounted: function () {
        let self = this;
        // 背景音乐
        // this.audioInit();
        document.addEventListener("WeixinJSBridgeReady", function () {
            self.audioInit();
        }, false);
        // 存放baseURL,图片上传
        if (localStorage.init) {
            let data = JSON.parse(localStorage.init);
            this.$store.state.server_openid = data.openid;
            this.$store.state.server_api = data.baseURL;
            this.$store.state.server_token = data.token;
            this.$store.state.phone_device = data.device;
        }

        //this.pushBack();
        // let self = this;
        // console.log(this.$data)
        // window.addEventListener('popstate', function (e) {
        //     self.pushBack();
        // });
    },
    methods: {
        // 声音控制函数
        audioInit() {
            let audio = new Audio();
            audio.loop = true;
            audio.preload = 'none';
            audio['src'] = this.audiourl;
            this.$store.state.audio = audio;
            audio.load();
            if (localStorage.audio) { 
                if (+localStorage.audio == 1) { 
                    audio.play();
                    this.$store.state.audioStatus = true;
                } else { 
                    audio.pause();
                    this.$store.state.audioStatus = false;
                }
            } else { 
                localStorage.audio = 1;
                audio.play();
                this.$store.state.audioStatus = true;
            }
        },
        // 设置cookie
        setCookie(c_name, value, expiredays) {
            var exdate = new Date()
            exdate.setDate(exdate.getDate() + expiredays)
            document.cookie = c_name + "=" + escape(value) +
                ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
        },
        //取回cookie
        getCookie(c_name) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + "=")
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1
                    c_end = document.cookie.indexOf(";", c_start)
                    if (c_end == -1) c_end = document.cookie.length
                    return unescape(document.cookie.substring(c_start, c_end))
                }
            }
            return ""
        },


        // 返回
        pushBack: function () {
            let state = {
                title: 'title',
                url: '#'
            };
            window.history.pushState(state, 'title', '#');
            console.log(state);
        },

    }
}
</script>