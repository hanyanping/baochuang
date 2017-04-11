<template>
    <ul class="mfb-component--br mfb-zoomin actionbutton"
        data-mfb-toggle="hover"
        v-show="backtotopbtn">
        <li class="mfb-component__wrap">
            <a class="mui-icon mui-icon-arrowup backtop"
               @click="backToTop"> </a>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'backToTop',
    data() {
        return {
            backtotopbtn: false,
            scrollWatch: true
        }
    },
    mounted() {
        this.showBackTopBtn();
    },
    methods: {
        showBackTopBtn() {
            var self = this;
            var winH = window.innerHeight;
            var scrollTop = 0;
            if (self.scrollWatch) {
                window.addEventListener('scroll', function () {
                    scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                    self.backtotopbtn=scrollTop > winH;
                });
            }
        },
        backToTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    },
    destroyed() {
        this.scrollWatch = false;
    }
}
</script>