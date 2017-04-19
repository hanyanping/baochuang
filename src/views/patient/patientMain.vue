<template>
  <loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="top">
    <ul class="example-list">
      <li v-for="item in msgList" class="example-listitem">{{ item }}</li>
    </ul>
  </loadmore>
</template>

<script src="https://cdn.jsdelivr.net/vue/latest/vue.js"></script>
<script type="text/javascript" src='http://cdnjsnet.b0.upaiyun.com/vue-resource/0.1.9/vue-resource.min.js'></script>
<script>
  import vueResource from 'vue-resource'
  import util from 'util'
  import Loadmore from '../../components/loadmore';
  import {Indicator} from 'mint-ui';


  export default {
    name: 'patient',
    components: {
      'loadmore': Loadmore
    },
    data () {
      return {
        msgList: [],
        allLoaded: false
      }
    },
    mounted (){
      Indicator.open('Loading...');
      this.load()
    },
    methods: {
      load () {
        var url = 'https://testmanage.aiganyisheng.com/product/app/getExchangeRecord.htm'
        var request_data = {
          sign: '7c832fc87a19732688a14f1a2c0e19f3', //this指data
          userId: '658',
          page: 1,
          rows: 10
        }
        this.$http.post(url, request_data).then(response => {
          // get data
          console.log(response.data);
          Indicator.close();
          if (response.data.data.rows.length > 0) {
            response.data.data.rows.forEach((item) => this.msgList.push(item))
          }
        }, response => {
//           error callback
        })
      },

      loadTop() {
        // load more data
        console.log(1);
        this.$refs.top.onTopLoaded();
      },

      loadBottom() {
        // load more data
        console.log(2);
        this.allLoaded = true;// if all data are loaded
        this.$refs.top.onBottomLoaded();
      }
    }
  }
</script>

<style>


  .btn {
    width: 100px;
    height: 100px;
    background: deepskyblue;
  }
</style>
