<style>
    .studentsReview label,
    .studentsReview img {
        line-height: 42px;
    }
    
    .studentsReview input[type="checkbox"] {
        line-height: 60px;
    }
    
    .studentsReview .mui-table-view-cell>a:not(.mui-btn) {
        padding: 0;
    }
</style>
<template>
    <ul class="mui-table-view studentsReview">
        <li class="mui-table-view-cell mui-media" v-for="item in items">
            <a href="javascript:;">
                <div class="mui-media-body mui-input-row  ">
                    <label> <img class="mui-media-object mui-pull-left pic-header" :src="item.avatar">{{item.fullname}}</label> 
                </div>
            </a>
        </li>
        <!--{{ck}}-->
    </ul>
</template>



<script>
    import mui from '../assets/js/mui';
    import areasMap from './dataAreas';
    import _ from 'lodash';
    import $ from 'webpack-zepto';
    export default {
        name: 'studentsReview',
        data() {
            return {
                items: {}
            }
        },
        props: ['students'],
        watch: {
            'students': function(val) {
                this.items = JSON.parse(val);
            }
        }
    }
</script>