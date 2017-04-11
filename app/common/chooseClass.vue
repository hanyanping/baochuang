<style>
    #commonClass .mui-radio {
        float: left;
        line-height: 23px;
        display: block;
        padding: 5px 0 5px 0;
    }
    
    #commonClass .xy-card {
        border: 1px dashed #63b6ba;
        background-color: #fff;
    }
    
    #commonClass {
        /*margin: 10px;*/
        background-color: #fff;
    }
</style>

<template>
    <div id="commonClass">
        <!--班级-->
        <div class="mui-card xy-card ">
            <div class="mui-card-content">
                <div class="mui-radio mui-left" v-for="item in items" :data-id="item.id">
                    <label>{{item.name}}</label>
                    <input class="choose" name="class" :value="item.id" type="radio" v-model="ck_class">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import rest from './rest';
    import mui from '../assets/js/mui';
    import _ from 'lodash';
    import $ from 'webpack-zepto';
    export default {
        name: 'commonClass',
        data() {
            return {
                ck_class: 0,
                items: {}
            }
        },
        props: ['user'],
        mounted: function() {

        },
        watch: {
            user(val) {
                var self = this;

                let _user = JSON.parse(val);
                if (_user) {
                    rest.get('/wxapi/base/classes/' + _user.grade_id + '/college/' + _user.college_id)
                        .then(function(response) {
                            self.items = response.data.data;
                        }).catch(function(err) {
                            console.log(err)
                        });
                }
            },
            ck_class(val, oldval) {
                let r = _.find(this.items, {
                    'id': val
                });
                this.$emit('chooseclass', r);
            },
        }
    }
</script>