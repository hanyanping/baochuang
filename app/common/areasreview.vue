<style> 
   .areasReview  {
        /*overflow-y: auto; */
        overflow-y: auto;
        height: 90%;
        font-size: 16px;
    }
    .areasReview.mui-fullscreen{
        top:50px; 
    }
    .areasReview .xy-card{
        /*padding-left:10px; 
        padding-right:10px; */
        margin-bottom: 0;
    }
     .areasReview .xy-card .mui-card-header{
         background-color: #eee;
         padding-top: 5px;
         padding-bottom: 5px;
         min-height: 23px;
         font-weight: 500;
     }
    .areasReview .xy-card .mui-card-content{
        padding-left: 10px;
    }
    .areasReview span{
        float: left;
        line-height: 23px;
        margin: 0;
        padding: 5px;
        font-size: 16px;
    }
</style>
<template>
    <div class="areasReview mui-fullscreen">
        <div class="mui-card xy-card" v-for="(cities,p) in items">
            <div class="mui-card-header">{{p}}</div>
            <div class="mui-card-content">
                <span v-for="city in cities">{{city}}</span>
            </div>
        </div>

    </div>
</template>

<script>
    import mui from '../assets/js/mui';
    import areasMap from './dataAreas';
    import _ from 'lodash';
    import $ from 'webpack-zepto';
    export default {
        name: 'areasReview',
        data() {
            return {
                items: {}
            }
        },
        props: ['areas'], 
        watch: {
            areas(val) {
                this.items = JSON.parse(val);

            }
        }
    }

</script>