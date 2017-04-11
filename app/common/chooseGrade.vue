<style>
    #commonGrade .mui-radio {
        float: left;
        line-height: 23px;
        display: block;
        padding: 5px 0 5px 0;
    }
    
    #commonGrade .xy-card {
        border: 1px dashed #63b6ba;
        background-color: #fff;
    }
    
    #commonGrade {
        /*margin: 10px;*/
        background-color: #fff;
        float: left;
    }
</style>

<template>
    <div id="commonGrade">
        <!--年级-->
        <div class="mui-radio mui-left" v-for="item in items" :data-id="item.id">
            <label>{{item.name}}</label>
            <input class="choose" name="grade" :value="item.id" type="radio" v-model="ck_grade">
        </div> 
    </div>
</template>

<script>
    import rest from './rest';
    import mui from '../assets/js/mui';
    import _ from 'lodash';
    import $ from 'webpack-zepto';
    export default {
        name: 'commonGrade',
        data() {
            return {
                ck_grade: 0,
                items: {}
            }
        },
        mounted: function() {
            var self = this;
            mui.init();
            rest.get('/wxapi/base/grades')
                .then(function(response) {
                    self.items = response.data.data;
                }).catch(function(err) {
                    console.log(err)
                });
        },
        watch: {
            ck_grade(val, oldval) {
                let r = _.find(this.items, {
                    'id': val
                });
                this.$emit('choosegrade', r);
            },
        }
    }
</script>