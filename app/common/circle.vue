<style>
    .commonCircle {
        margin-top: 45px;
        padding-bottom: 55px;
        height: 100%;
        overflow-y: auto;
    }
    
    .commonCircle label,
    .commonCircle img {
        line-height: 42px;
    }
    
    .commonCircle input[type="checkbox"],
    .commonCircle input[type="radio"] {
        line-height: 60px;
    }
    
    .commonCircle .mui-table-view-cell>a:not(.mui-btn) {
        padding: 0;
    }
</style>
<template> 
    <div class="mui-fullscreen">
    <ul class="mui-table-view commonCircle">
        <li class="mui-table-view-cell mui-media" v-for="item in items">
            <a href="javascript:;">
                <div class="mui-media-body mui-input-row mui-checkbox mui-left">
                    <label> <img class="mui-media-object mui-pull-left pic-header" :src="item.icon">{{item.name}}</label>
                    <input name="circle" type="checkbox" :value="item.id" v-model="ck">
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
        name: 'commonCircle',
        data() {
            return {
                items: [],
                ck: [],
            }
        },
        props: ['city'],
        mounted: function() {
            var self = this;
            mui.init();
            rest.get('/wxapi/circle/joined')
                .then(function(response) {
                    if (self.city) {
                        self.items = _.find(response.data.data.circles, {
                            city: self.city
                        });
                    } else {
                        self.items = response.data.data.circles;
                    }
                }).catch(function(err) {
                    console.log(err)
                });
        },
        watch: {
            city(val, oldval) {
                console.log(val, oldval);
            },
            ck(val, oldval) {
                let self = this;
                let result = [];
                for (var el of val) {
                    let r = _.find(self.items, {
                        'id': el
                    });
                    result.push(r);
                }
                this.$emit('choosecircle', result);
            },
        }
    }
</script>