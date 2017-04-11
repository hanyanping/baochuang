<style>
    .commonStudents {
        margin-top: 45px;
        padding-bottom: 55px;
        height: 100%;
        overflow-y: auto;
    }
    
    .commonStudents label,
    .commonStudents img {
        line-height: 42px;
    }
    
    .commonStudents input[type="checkbox"] {
        line-height: 60px;
    }
    
    .commonStudents .mui-table-view-cell>a:not(.mui-btn) {
        padding: 0;
    }
</style>
<template>
    <div class="mui-fullscreen">
    <ul class="mui-table-view commonStudents">
        <li class="mui-table-view-cell mui-media" v-for="item in items">
            <a href="javascript:;">
                <div class="mui-media-body mui-input-row mui-checkbox mui-left">
                    <label> <img class="mui-media-object mui-pull-left pic-header" :src="item.avatar">{{item.fullname}}</label>
                    <input name="student" type="checkbox" :value="item.id" v-model="ck">
                </div>
            </a>
        </li>
        <!--{{ck}}-->
    </ul>
    </div>
</template>


<script>
    import rest from './rest';
    import mui from '../assets/js/mui';
    import _ from 'lodash';
    export default {
        name: 'commonStudents',
        data() {
            return {
                items: [],
                ck: [],
            }
        },
        mounted: function() {
            var self = this;
            mui.init();
            rest.get('/wxapi/user/users')
                .then(function(response) {
                    self.items = response.data.data;
                }).catch(function(err) {
                    console.log(err)
                });
        },
        watch: {
            ck(val, oldval) {
                let self = this;
                let result = [];
                for (var el of val) {
                    let r = _.find(self.items, {
                        'id': el
                    });
                    result.push(r);
                }
                this.$emit('choosestudents', result);
            },
        }
    }
</script>