<template>
    <div id="main" class="loadingpic"> 
        <img :src="loadingpic" alt="" v-if="ispic && !isdata && !mainloding" class="trans_fade_image" style="z-index: 999;"> 
        <commonFooter v-if=" lose3" ></commonFooter>
        <router-view  v-if=" lose3"></router-view>
    </div>
</template>
<style>
    @keyframes fadeInOut {
        0% {
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        30% {
            opacity: 1;
        }
        75% {
            opacity: 0;
        }
    }
    
    .trans_fade_image {
        position: fixed;
        animation-name: fadeInOut;
        -webkit-animation-name: fadeInOut;
        animation-timing-function: ease-in-out;
        -webkit-animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
        -webkit-animation-iteration-count: 1;
        animation-duration: 5s;
        -webkit-animation-duration: 5s;
        z-index: 999;
        width: 100%;
        height: auto;
    }
</style>
<script>
    import rest from '../common/rest';
    import mui from '../assets/js/mui';
    import commonFooter from '../common/footer';
    // require('./assets/css/mui.css') 
    export default {
        name: 'main',
        components: {
            commonFooter
        },
        data() {
            return {
                msg: '首页',
                loadingpic: '',
                ispic: false,
                isdata: false,
                mainloding: false,
                lose3: false,
            }
        },
        mounted: function() {
            let self = this;
            if (!self.$store.state.load_main) {
                rest.get('/wxapi/base/launchPicture').then(function(res) {
                    self.loadingpic = res.data.data;
                    self.ispic = true;
                }).catch(function(err) {
                    console.log(err)
                });
                // 获取到图片4秒后,图片消失,3秒后开始显示数据
                setTimeout(function() {
                    self.isdata = true;
                    self.$store.state.load_main = true;
                }, 4000);
                setTimeout(function() {
                    self.lose3 = true;
                }, 1200);
            } else {
                self.lose3 = true;
            }
        },
        methods: {

        },
    }
</script>