<template>
  <div class="my-doctor-list-box">
    <div>
      <img src="../../assets/img/code.png"><span>什么是主管医生</span>
      <div>
        <loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"
                  ref="top">
          <div class="my-doctor-list-box">
            <div class="my-doctor-list-item-box">

              <div class="my-doctor-list-item-top">

              </div>
              <div class="my-doctor-list-item-bottom"></div>


              <div v-for="item in myDoctorList" class="my-doc-list-item-icon">{{ item.icon }}</div>
            </div>
          </div>
        </loadmore>
      </div>
    </div>
  </div>

</template>

<script src="https://cdn.jsdelivr.net/vue/latest/vue.js"></script>
<script type="text/javascript" src='http://cdnjsnet.b0.upaiyun.com/vue-resource/0.1.9/vue-resource.min.js'></script>
<script>
  import vueResource from 'vue-resource'
  import Loadmore from '../../components/loadmore';
  import {Indicator} from 'mint-ui';

  export default {
    components: {
      'loadmore': Loadmore
    },

    data () {
      return {
        myDoctorList: [],
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
            response.data.data.rows.forEach((item) => this.myDoctorList.push(item))
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

<style lang="scss">

  .my-doctor-list-box.my-doctor-list-box {
    height: 100vh;
    width: 100%;

    .my-doctor-list-box {
      width: 100%;

      .my-doctor-list-item-top {
         /*flex*/
      }

    }

  }


</style>
