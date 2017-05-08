<template>
  <div class="docWorkRoom" >
    <div class="qianyue float-box" @click="visit">
      <span ref="qianyuePatient" class="qianyuePatient">即将就诊患者</span>
      (<span ref="qianyueNum" class="qianyueNum">{{workCount.visitPatientCount}}</span>)
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': active, 'icon-shouqi': !active}" >
      </span>
    </div>
    <div class="visit-box" :class="{'yincang':!active}">
      <div class="nopatient visit-patient" v-if="lists.visitPatientList == ''">
        今天/明天暂无就诊患者
      </div>
      <div class="visit-patient" v-for="item in lists.visitPatientList">
        <div class="visit-info" >
          <img :src="item.logo"/>
          <span class="patient-name">{{item.patientName}}</span>
          <span class="visit-time">{{item.day}}</span>
        </div>
        <div class="no-deal" >
          <span v-show="item.appointment == 1">已预约</span>
          <span v-show="item.appointment == 0" style="color:#9ED0C9;">未预约</span>
        </div>
      </div>
    </div>
    <div class="qianyue float-box" @click="yuyue">
      <span ref="qianyuePatient" class="qianyuePatient">预约待处理</span>
      <span ref="qianyueNum" class="qianyueNum">({{workCount.appointmentCount}})</span>
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': activeOrder, 'icon-shouqi': !activeOrder}" >
      </span>
    </div>
    <div class="visit-box" :class="{'yincang':!activeOrder}">
      <div class="nopatient visit-patient" v-if="lists.appointmentList == ''">
        暂无预约患者
      </div>
      <div class="visit-patient" v-for="item in lists.appointmentList" @click="goVisitInfo(item.patientId)">
        <div class="visit-info" >
          <img :src="item.logo"/>
          <span class="patient-name">{{item.patientName}}</span>
          <span class="visit-time">{{item.date}}</span>
        </div>
        <span  class="no-deal">
          去处理
        </span>
      </div>
    </div>
    <div class="qianyue float-box" @click="fuzhen">
      <span ref="qianyuePatient" class="qianyuePatient">复诊时间未设置</span>
      (<span ref="qianyueNum" class="qianyueNum">{{workCount.novisitTimeCount}}</span>)
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': activeSet, 'icon-shouqi': !activeSet}">
      </span>
    </div>
    <div class="visit-box" :class="{'yincang':!activeSet}">
      <div class="nopatient visit-patient" v-if="lists.novisitTimeList == ''">
        暂无复诊患者
      </div>
      <div class="visit-patient" v-for="item in lists.novisitTimeList" @click="toConsult(item.patientId)">
        <div class="visit-info" >
          <img :src="item.logo"/>
          <span class="patient-name">{{item.patientName}}</span>
          <span class="visit-time">{{item.age}}岁</span>
          <i v-if="item.sex == 0" class="iconfont icon-nv"></i>
          <i v-else class="iconfont icon-nan"></i>
          <span class="visit-jibing">{{item.disease}}</span>
        </div>
        <a class="no-deal">
          帮TA设置
        </a>
      </div>
    </div>
    <div class="qianyue float-box" @click="consult">
      <span ref="qianyuePatient" class="qianyuePatient">咨询未回复</span>
      (<span ref="qianyueNum" class="qianyueNum">{{workCount.noReplyThreadCount}}</span>)
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': activeConsult, 'icon-shouqi': !activeConsult}">
      </span>
    </div>
    <div class="consult-box" :class="{'yincang':!activeConsult}">
      <div class="nopatient visit-patient" v-if="lists.noReplyThreadList == ''">
        暂无咨询患者
      </div>
      <div class="visit-patient" @click="goConsult(item.patientId)" v-for="item in lists.noReplyThreadList">
        <div class="consult-info-box" >
          <img :src="item.logo"/>
          <div class="consult-info">
            <p class="consult-name">{{item.patientName}}</p>
            <p class="consult-question">{{item.post}}</p>
          </div>
        </div>
        <div class="consult-right">
          <p class="consult-time">{{item.date}}</p>
          <p class="consult-statius" >待回复</p>
        </div>
      </div>
    </div>
    <div class="qianyue float-box" @click="qita">
      <span ref="qianyuePatient" class="qianyuePatient">其他待办事项</span>
      (<span ref="qianyueNum" class="qianyueNum">{{workCount.otherCount}}</span>)
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': activeOthers, 'icon-shouqi': !activeOthers}">
      </span>
    </div>
    <div class="visit-box" :class="{'yincang':!activeOthers}">
      <div class="nopatient visit-patient" v-if="lists.otherList == ''">
        暂无患者
      </div>
      <div class="visit-patient" v-for="item in lists.otherList" @click="goReportDetail(item.patientId)">
        <div class="other-box" >
          <p class="other-question">{{item.title}}</p>
          <p class="other-time">{{item.date}}</p>
        </div>
        <div class="no-deal">
          帮TA解读
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import { Toast } from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  export default {
    name: 'docWorkRoom',
    data () {
      return {
        authentication:'9abada2c209a05e2ebd462f7bf68c5cf',
        active:false,
        activeOrder:false,
        activeSet: false,
        activeConsult: false,
        activeOthers:false,
        some:'',
        lists:[],
        workCount:''
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '工作室'
    },
    mounted() {
      this.getDocInfo();
    },
    destroyed () {
      eventBus.$emit('some', this.some);
    },
    methods: {
      // 获取个人信息
      getDocInfo() {
        var that = this
        var params ={
          authentication: this.authentication
        }
        netWrokUtils.post('/wx/baochuan_d/mystudio', params, (result) => {
          that.lists = result.data.content.list;
          var noReplyThreadList = result.data.content.list.noReplyThreadList
          var otherList =  result.data.content.list.otherList
          for(let i in noReplyThreadList){
            if( noReplyThreadList[i].post.length>6){
              noReplyThreadList[i].post = noReplyThreadList[i].post.substring(0,6)+"..."
            }
          }
          for(let i in otherList){
            if( otherList[i].title.length>15){
              otherList[i].title = otherList[i].title.substring(0,15)+"..."
            }
          }
          this.workCount = result.data.content
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      },
      visit() {
          this.active = !this.active;
      },
      goVisitInfo(id) {
        this.some = id;
        this.$router.push({ path:"/baochuan_d/docReservationDetail"});
      },
      yuyue() {
          this.activeOrder = !this.activeOrder;
      },
      consult() {
          this.activeConsult = !this.activeConsult;
      },
      goConsult(id) {
        this.some = id;
        this.$router.push({ path:"/baochuan_d/docConsult"});
      },
      fuzhen() {
          this.activeSet = !this.activeSet;
      },
      toConsult(id){
        this.some = id;
        this.$router.push({ path:"/baochuan_d/docConsult"});
      },
      qita(){
          this.activeOthers = !this.activeOthers
      },
      goReportDetail(id) {
          this.some = id;
        this.$router.push({ path:"/baochuan_d/docReportDetail"});
      }
    }
  }
</script>
<style lang="scss">
 .docWorkRoom{
  min-height:100vh;
  background:#f4f4f4;
   .qianyue {
     height: 44px;
     line-height: 44px;
     padding-left: 16px;
     background:#fff;
     border-bottom:1px solid #f4f4f4;
     font-size:16px;
     color:#232323;

     .iconfont{
       font-size:16px;
       padding-right:16px;
       color:#bbb;
     }
   }
   .visit-box, .consult-box{
     -webkit-box-shadow:inset 0 10px 5px #D2E6E3;
     -moz-box-shadow:inset 0 10px 5px #D2E6E3;
     box-shadow:inset 0px 10px 5px #D2E6E3;
     background:#fcfcfc;
     .nopatient{
       font-size:16px;
       color:#bbb;
       line-height:40px;
     }
     .visit-patient{
       display:flex;
       justify-content: space-between;
       padding:5px 10px;
       border:1px solid #f4f4f4;

       .other-box{
         padding-top:10px;
         font-size:15px;
         width:78%;
         .other-question{
           color:#232323;
           padding-top:3px;
           font-size:15px;
         }
         .other-time{
           color:#bbb;
           padding-top:5px;
         }
       }
       .consult-info-box{
         display:flex;
         img{
           height:45px;
           width:45px;
           border-radius:50%;
           vertical-align: middle;
           margin-top:6px;
         }
         .consult-info{
           font-size:14px;
           padding-top:10px;
           padding-left:5px;
           .consult-name{
             color:#232323;
             font-size:15px;
           }
          .consult-question{
            padding-top:8px;
            color:#bbb;
            font-size:15px;
          }
         }
        }
       .visit-info {
         height:55px;
         line-height:50px;
         img{
           height:45px;
           width:45px;
           border-radius:50%;
           vertical-align: middle;
         }
         .icon-nv{
           color:#F388C2;
           font-size:15px;
         }
         .icon-nan{
           color:#49C8F6;
           font-size:15px;
         }
         .patient-name{
           color:#232323;
           font-size:15px;
           padding:0 5px;
         }
         .visit-time{
           color:#bbb;
           font-size:15px;
         }
         .visit-jibing{
           color:#fff;
           background:#bbb;
           border-radius:10px;
           font-size:14px;
           padding:1px 6px;
           text-align: center;
         }
       }
       .no-deal{
         line-height:55px;
         color:#5da096;
         font-size:14px;
       }
       .consult-right{
         font-size:14px;
       }
     }
   }
  .yincang{
    display: none;
  }
   .consult-box{
     .visit-patient{
       display:flex;
       padding:10px;
       .consult-info-box{
         flex:1;
       }
       .consult-right{
         padding-top:10px;
         .consult-time{
           padding-bottom:5px;
           color:#bbb;
         }
         .consult-statius{
           color:#ff4444;
           text-align: right;
           padding-top:3px;
         }
       }
     }
   }

 }

</style>
