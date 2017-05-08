<!-- 复诊记录页 -->
<template>
  <div class="visitRrecord">
    <div class="visitRrecord-title-box">
      <span class="visitRrecord-title-text" @click="openPicker">下次复诊时间</span>
      <span class="visitRrecord-title-text" v-show="nextRevisitTime != ''"
            @click="openPicker">{{nextRevisitTime}}</span>
      <Button class="visitRrecord-setting-botton" v-show="nextRevisitTime == ''" @click="openPicker">设 置</Button>
      <mt-datetime-picker
        v-model="pickerValue"
        type="date"
        ref="picker"
        @confirm="handleChange"
        :startDate="now"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日">
      </mt-datetime-picker>
    </div>

    <div class="visitRrecord-cue-box" v-show="visitRrecordList.length > 0">
      <span class="visitRrecord-cue-text">..医生设置的复诊时间</span>
    </div>

    <div class="visitRrecord-list-box pos-relate" v-show="visitRrecordList.length > 0">
      <div class="visitRrecord-listheader-box border-bot-dash">
        <i class="iconfont icon-jilu"></i>
        <span class="visitRrecord-listtitle-text">复诊记录</span>
      </div>
      <span class="bg-grey half-circle-left circleleft pos-absolute"></span>
      <span class="bg-grey half-circle-right circleright pos-absolute"></span>

      <mt-loadmore
        :top-method="loadTop" ref="loadmore"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :autoFill="false">
        <div class="visitRrecord-listcontent-box" v-for="item in visitRrecordList">
          <span class="visitRrecord-listitem-left-text fl fs15">{{item.desc}}</span>
          <span class="visitRrecord-listitem-right-text fr fs15">{{item.date}}</span>
        </div>
      </mt-loadmore>
    </div>

    <div class="visitRrecord-listitem-empty-box" v-show="visitRrecordList.length <= 0">
      <img src="../../assets/img/recode_icon.png" class="visitRrecord-listitem-empty-img">
      <br/>
      <span class="visitRrecord-listitem-empty-text">暂无复诊</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {Toast} from 'mint-ui';
  import {Indicator} from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  import moment from 'moment/moment.js';

  export default {
    data() {
      return {
        nextRevisitTime: '',
        allLoaded: false,
        nowPage: 1,
        visitRrecordList: [],
        isShow: false,
        postData: {
          //authentication: localStorage.getItem('auth'),
          authentication: '4d89652b270cc60c30365868b229ca15',
          rows: 10,
          page: 1
        },
        pickerValue: '',
//        startDateValue: new Date('2017-05-01'),
        now: new Date('')
      }
    },
    mounted() {
//      eventBus.$on('username', function(val) {
//
//      })
//
//      eventBus.$emit('username', 'dddd');

      this.getvisitRrecordList();
    },
    created(){
      console.log('authentication===' + this.postData.authentication);
    },
    methods: {
      openPicker() {
        this.$refs.picker.open();
      },
      handleChange(value) {
        console.log('value===' + moment(value).format('YYYY-MM-DD'));
        this.settingVisitTime(moment(value).format('YYYY-MM-DD'));
      },
      getvisitRrecordList(){
        let that = this;
        var params = {
          authentication: that.postData.authentication
        }
        netWrokUtils.post('/wx/baochuan_p/myrevisitrecords', params, (result) => {
          that.visitRrecordList = result.data.content.list;
          that.nextRevisitTime = result.data.content.nextRevisitTime;
          that.now = new Date(result.data.content.now);
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      },
      settingVisitTime(timeValue){
        let that = this;
        var params = {
          authentication: that.postData.authentication,
          doctorId: '27',
          revisitTime: timeValue
        }
        netWrokUtils.post('/wx/baochuan_p/setrevisit', params, (result) => {
          this.$refs.picker.close();
          Toast(result.data.msg);
          that.nextRevisitTime = timeValue;
        }, (error_result) => {
          this.$refs.picker.close();
          Toast(error_result.data.msg);
        })
      },
      loadTop()
      {
      }
      ,
      loadBottom()
      {
      }
    }

  }
</script>

<style lang="scss">

  .visitRrecord {
    height: 100vh;
    width: 100%;
    background: #fcfcfc;
    padding-top: 20px;
    padding-bottom: 20px;

  .visitRrecord-title-box {
    background: #5da096;
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

  .visitRrecord-title-text {
    color: #fff;
    font-size: 15px;
    display: inline-block;
    line-height: 30px;
  }

  .visitRrecord-setting-botton {
    color: #fff;
    font-size: 15px;
    margin-left: 80px;
    margin-right: 80px;
    display: inline-block;
    line-height: 30px;
    border: 1px solid #b5b5b5;
    background: #5da096;
  }

  }

  .visitRrecord-cue-box {
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;

  .visitRrecord-cue-text {
    color: #666666;
    font-size: 14px;
  }

  }

  .visitRrecord-list-box {
    margin: 10px;
    background: #fff;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 50px #dbe5e4;
    -moz-box-shadow: 0 0 50px #dbe5e4;
    box-shadow: 0 0 50px #dbe5e4;

  .visitRrecord-listheader-box {
    padding: 20px;

  .visitRrecord-listtitle-text {
    color: #232323;
    font-size: 16px;
  }

  }

  .circleleft {
    top: 50px;
    left: 0;
    display: block;
  }

  .circleright {
    top: 50px;
    right: 0;
    display: block;
  }

  .visitRrecord-listcontent-box {
    padding: 20px;
    overflow: hidden;

  .visitRrecord-listitem-left-text {
    color: #232323;
  }

  .visitRrecord-listitem-right-text {
    color: #232323;
  }

  }
  }

  .visitRrecord-listitem-empty-box {
    width: 100%;
    text-align: center;
    line-height: 40px;

  .visitRrecord-listitem-empty-img {
    padding-top: 20vh;
    width: 70px;
    height: 70px;
  }

  .visitRrecord-listitem-empty-text {
    display: inline-block;
    font-size: 16px;
    color: #d7d7d7;
  }

  }

  }

</style>
