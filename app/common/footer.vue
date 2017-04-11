<style>
.common-footer {
    font-size: 12px;
    line-height: 1.1;
}

.common-footer span {
    background-color: #f7f7f7;
}

.common-footer .mui-badge {
    position: relative;
    padding: .1px;
    line-height: 10px;
    background-color: #f00;
    left: 15px;
    top: -5px;
}
</style>
<template>
    <nav class="mui-bar mui-bar-tab common-footer">
        <a class="mui-tab-item toPage"
           :class="{'mui-active':active=='home'}"
           data-url="">
            <span class="xy-icon"
                  :class="{'xy-min-14':active!='home','xy-min-15':active=='home'}"></span>
            <div class="mui-tab-label">首页</div>
        </a>
        <a class="mui-tab-item toPage"
           :class="{'mui-active':active=='circle'}"
           data-url="circle">
            <span class="xy-icon"
                  :class="{'xy-min-16':active!='circle','xy-min-17':active=='circle'}"></span>
            <div class="mui-tab-label">校友</div>
        </a>
        <a class="mui-tab-item toPage"
           :class="{'mui-active':active=='message'}"
           data-url="message">
            <span class="xy-icon"
                  :class="{'xy-min-18':active!='message','xy-min-19':active=='message'}">
                                   <i class="mui-badge" v-if="read!=1">&nbsp;&nbsp;&nbsp;</i>
                                </span>
    
            <div class="mui-tab-label">消息</div>
        </a>
        <a class="mui-tab-item toPage"
           :class="{'mui-active':active=='personal'}"
           data-url="personal">
            <span class="xy-icon"
                  :class="{'xy-min-20':active!='personal','xy-min-21':active=='personal'}"></span>
            <div class="mui-tab-label">我的</div>
        </a>
    </nav>
</template>

<script>
import rest from './rest';
import mui from '../assets/js/mui';
import $ from 'webpack-zepto';
export default {
    name: 'commonFooter',
    data() {
        return {
            userid: 0,
            interval: 0,
            read: 1,
            loading: false,
            // active: 'home',
        }
    },
    mounted: function () {
        var self = this;
        this.getTip();
        let userDetail = this.$store.state.userDetail;
        if (userDetail) {
            this.userid = userDetail.id;
        }

        mui('.common-footer')
            .on("tap", ".toPage", function () {
                let _path = '/' + this.dataset.url;
                if (_path == '/message') {
                    //清除消息的红点
                    self.read = 1;
                    self.$store.state.homeTip = 1;
                }
                self.$store.state.footerActive = _path;
                self.authRegister(_path);
                // self.getActive();

                self.a = _path;
            });
        this.getActive();
        // 每3秒刷新
        this.interval = setInterval(function () {
            self.getTip();
        }, 3000);
    },
    methods: {
        getActive() {
            let _path = this.$route.path;
            if (_path == '/') {
                _path = '/home';
            }

            if (_path.indexOf('home') > -1) {
                this.active = 'home';
            } else if (_path.indexOf('circle') > -1) {
                this.active = 'circle';
            } else if (_path.indexOf('message') > -1) {
                this.active = 'message';
            } else if (_path.indexOf('personal') > -1) {
                this.active = 'personal';
            } else {
                this.active = '';
            }
        },
        authRegister(path) {
            // if (this.userid < 1) {
            //     this.$router.replace('/register');
            // }
            // else {
            //     if (this.active == 'home') {
            //         this.$router.push(path);
            //     }
            //     else {
            //         this.$router.replace(path);
            //     }
            // }
            if (this.active == 'home') {
                this.$router.push(path);
            }
            else {
                this.$router.replace(path);
            }
            if (this.userid > 0 && path == '/message') {
                this.read = 1;
            }
        },
        getTip() {
            this.loading = false;
            let self = this;
            if (this.userid > 0) {
                rest.get('/wxapi/message/checkNewMessage')
                    .then(function (response) {
                        self.read = response.data.data;
                        self.$store.state.homeTip = self.read;
                        self.loading = true;
                    }).catch(
                    function (err) {
                        console.log(err);
                    });
            }
        },
    },
    beforeDestroy: function () {
        this.interval = window.clearInterval(this.interval);
    },
    destroyed: function () {
        this.interval = window.clearInterval(this.interval);
    },
    computed: {
        active: function (a) {
            console.log(a.$store.state.footerActive);
            let _path = this.$route.path;
            if (_path == '/') {
                _path = '/home';
            }
            let result = '';
            if (_path.indexOf('home') > -1) {
                result = 'home';
            } else if (_path.indexOf('circle') > -1) {
                result = 'circle';
            } else if (_path.indexOf('message') > -1) {
                result = 'message';
            } else if (_path.indexOf('personal') > -1) {
                result = 'personal';
            } else {
                result = '';
            }
            return result;
            // return a.$store.state.footerActive;
        }
    }
}
</script>