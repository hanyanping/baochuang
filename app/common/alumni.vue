<style>
    .areas .mui-table-view-cell>a:not(.mui-btn) {
        padding: 0;
    }
</style>
<template>
    <div class="mui-card xy-card areas">
        <div class="mui-content">
            <div class="mui-input-row mui-search">
                <input type="search" class="mui-input-clear" placeholder="搜索">
            </div>
            <div class="title">
                学校年级选择项
            </div>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="item in items">
                    <a href="#">
                        <img class="mui-media-object mui-pull-left pic-header" :src="item.avatar">
                        <div class="mui-media-body">
                            {{item.fullname}}
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import rest from './common/rest';
    import mui from '../assets/js/mui';
    import address from './dataAreas';
    export default {
        name: 'commonAlumni',
        data() {
            return {
                items: []
            }
        },
        props: ['city'],
        mounted: function() {
            var self = this;
            mui.init();
            rest.get('/wxapi/user/users')
                .then(function(response) {
                    self.items = response.data.data;
                })
                .catch(function(err) {
                    console.log(err)
                });
        },

    }
</script>