<style>
    #commonCollage .mui-radio {
        float: left;
        line-height: 23px;
        display: block;
        padding: 5px 0 5px 0;
    }
    
    #commonCollage .xy-card {
        border: 1px dashed #63b6ba;
        background-color: #fff;
    }
    
    #commonCollage {
        /*margin: 10px;*/
        background-color: #fff;
    }
</style>
<template>
    <div id="commonCollage">
        <!--院系-->
        <div class="mui-radio mui-left" v-for="item in items" :data-id="item.id">
            <label>{{item.name}}</label>
            <input class="choose" name="college" :value="item.id" type="radio" v-model="ck_college">
        </div>
    </div>
</template>

<script>
    import rest from './rest';
    import mui from '../assets/js/mui';
    import _ from 'lodash';
    import $ from 'webpack-zepto';
    export default {
        name: 'commonCollage',
        data() {
            return {
                ck_college: 0,
                items: {}
            }
        },
        props: ['user'],
        watch: {
            user(val) {
                var self = this;

                let _user = JSON.parse(val);
                if (_user) {
                    rest.get('/wxapi/base/colleges/' + _user.grade_id)
                        .then(function(response) {
                            self.items = response.data.data;
                        }).catch(function(err) {
                            console.log(err)
                        });
                }
            },
            ck_college(val, oldval) {
                let r = _.find(this.items, {
                    'id': val
                });
                this.$emit('choosecollege', r);
            },
        }
    }
</script>