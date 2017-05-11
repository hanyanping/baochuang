<!-- 预约列表页 -->
<style lang="scss" scoped>

  .subscribeList {
    height: 100vh;
    width: 100%;
    background: #fcfcfc;
    overflow: hidden;
    text-align: center;

  .subscribeList-box {
    width: 92%;
    margin: 15px 4%;
    background: white;
    border-radius: 5px;

  .subscribeList-header-box {
    padding: 10px;
    overflow: hidden;

  .subscribeList-title-img {
    border-radius: 50%;
  }

  .doctor-icon-info {
    margin-left: 5px;
    margin-top: 6px;

  .doctor-profession {
    margin-bottom: 4px;
  }

  }
  }
  }

  .subscribeList-list-box {
    width: 92%;
    margin: 10px 4%;
    background: white;

  .subscribeList-listitem-box {
    -webkit-box-shadow: 0 0 50px #dbe5e4;
    -moz-box-shadow: 0 0 50px #dbe5e4;
    box-shadow: 0 0 50px #dbe5e4;
    margin-bottom: 2vh;
    height: 60px;

  .subscribeList-listitem-line {
    width: 10px;
    height: 100%;
    float: left;
    background: #06b80a;
  }

  .subscribeList-listitem-row {
    padding: 5px 10px;
    width: 70%;
    float: left;
  }

  .subscribeList-listitem-icon {
    float: right;
    margin-top: -8px;
    margin-right: 10px;
  }

  }
  }

  .subscribeList-listitem-empty-box {
    width: 100%;
    text-align: center;
    line-height: 40px;

  .subscribeList-listitem-empty-img {
    padding-top: 20vh;
    width: 70px;
    height: 70px;
  }

  .subscribeList-listitem-empty-text {
    display: inline-block;
    font-size: 16px;
    color: #d7d7d7;
  }

  }

  }

</style>


<template>
  <div class="subscribeList bg-grey">
    <div class="subscribeList-box">
      <div class="subscribeList-header-box">
        <img :src="doctor_img" class="subscribeList-title-img fl">
        <div class="doctor-icon-info fl">
          <div class="doctor-profession">
            <span class="fs15" style="color: #232323">{{doctor_name}}</span>
            <span class="fs14" style="color: #5b5b5b">{{grade}}</span>
          </div>
          <p>
            <span class="fs14" style="color: #5b5b5b">{{hospital}}</span>
            <span class="fs14" style="color: #5b5b5b">{{department}}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="subscribeList-list-box" v-show="subscribeList.length > 0">
      <mt-loadmore
        :top-method="loadTop" ref="loadmore"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :autoFill="false">
        <div class="subscribeList-listitem-box" v-for="item in subscribeList" @click="toDetail()">
          <div class="subscribeList-listitem-line"></div>
          <div class="subscribeList-listitem-row">
            <i class="iconfont icon-shijian" style="color: #545454"></i>
            <span class="fs14" style="color: #545454">{{item.date}}</span>
          </div>
          <div class="subscribeList-listitem-row">
            <span class="fs14" style="color: #545454">{{item.week}} {{item.am_or_pm}}</span>
            <span class="fs14" style="color: #545454">余号{{item.count}}人</span>
          </div>
          <i class="iconfont icon-jiantou subscribeList-listitem-icon"></i>
        </div>
      </mt-loadmore>
    </div>

    <div class="subscribeList-listitem-empty-box" v-show="subscribeList.length <= 0">
      <img src="../../assets/img/recode_icon.png" class="subscribeList-listitem-empty-img">
      <br/>
      <span class="subscribeList-listitem-empty-text">暂无预约</span>
    </div>
  </div>
</template>

<script>

  import {Toast} from 'mint-ui';
  import {Indicator} from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  import moment from 'moment/moment.js';

  export default {
    data () {
      return {
        subscribeList: [],
        authentication: auth,
        isShow: false,
        doctor_id: '',
        doctor_img: '',
        doctor_name: '',
        hospital: '',
        department: '',
        grade: '',
        subscribe_cost: 0,
        allLoaded: false
      }
    },
    created(){
      eventBus.$on('doctor_id', (thing) => {
        this.doctor_id = thing;
      })
    },
    mounted() {
      this.getSubscribeList();
    },
    methods: {
      getSubscribeList() {
        let that = this;
        var params = {
          authentication: that.authentication,
          doctorId: that.doctor_id
        }
        netWrokUtils.post('/wx/baochuan_p/doctorappointmentlist', params, (result) => {
          that.subscribeList = result.data.content.make_appointment_list;
          that.doctor_id = result.data.content.doctor_id;
          that.doctor_img = result.data.content.doctor_img;
          that.doctor_name = result.data.content.hospital;
          that.hospital = result.data.content.hospital;
          that.department = result.data.content.department;
          that.grade = result.data.content.grade;
          that.subscribe_cost = result.data.content.subscribe_cost;
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      },
      toDetail(){
        this.$router.push({path: 'payConfirm/3'}) //跳转预约下单页
      },
      loadTop()
      {
      }
      ,
      loadBottom()
      {
      }

//      loadTop() {
//        console.log(2);
//        this.getReserveList();
//      },
//      loadBottom() {
//        console.log(1);
//        let _this = this;
//        _this.nowPage++;
//        _this.util.request.post('/product/app/getBuyProductServiceByPatientIdPage.htm?' + _this.util.formatPara(_this.postData) + '&page=' + _this.nowPage)
//          .then((resp) => {
//            console.log(resp);
//            if (_this.nowPage * _this.postData.rows >= resp.data.total) {
//              _this.allLoaded = true;
//            } else {
//              _this.message = _this.message.concat(resp.data.data.rows);
//            }
//            _this.$refs.loadmore.onBottomLoaded();
//          }).catch((error) => {
//          console.log(error);
//        });
//      }
    }
  }
</script>

