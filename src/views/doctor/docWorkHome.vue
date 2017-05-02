<template>
  <div class="docWorkRoom" >
    <div class="qianyue float-box" @click="visit">
      <span ref="qianyuePatient" class="qianyuePatient">即将就诊患者</span>
      (<span ref="qianyueNum" class="qianyueNum">000</span>)
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': active, 'icon-shouqi': !active}" >
      </span>
    </div>
    <div class="visit-box" :class="{'yincang':!active}">
      <div class="visit-patient" v-for="item in lists">
        <div class="visit-info" >
          <img src="../../assets/img/docInfo.png"/>
          <span class="patient-name">{{item.name}}</span>
          <span class="visit-time">{{item.time}}</span>
          <span class="visit-jibing">{{item.jibing}}</span>
        </div>
        <div class="no-deal">
          {{item.statis}}
        </div>
      </div>
    </div>
    <div class="qianyue float-box" @click="yuyue">
      <span ref="qianyuePatient" class="qianyuePatient">预约待处理</span>
      <span ref="qianyueNum" class="qianyueNum">(000)</span>
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': activeOrder, 'icon-shouqi': !activeOrder}" >
      </span>
    </div>
    <div class="visit-box" :class="{'yincang':!activeOrder}">
      <div class="visit-patient" v-for="item in lists">
        <div class="visit-info" >
          <img src="../../assets/img/docInfo.png"/>
          <span class="patient-name">{{item.name}}</span>
          <span class="visit-time">{{item.age}}岁</span>
          <i v-if="item.sex == 0" class="iconfont icon-nv"></i>
          <i v-else class="iconfont icon-nan"></i>
          <span class="visit-jibing">{{item.jibing}}</span>
        </div>
        <div class="no-deal">
          {{item.statis}}
        </div>
      </div>
    </div>
    <div class="qianyue float-box" @click="fuzhen">
      <span ref="qianyuePatient" class="qianyuePatient">复诊时间未设置</span>
      (<span ref="qianyueNum" class="qianyueNum">000</span>)
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': activeSet, 'icon-shouqi': !activeSet}">
      </span>
    </div>
    <div class="visit-box" :class="{'yincang':!activeSet}">
      <div class="visit-patient" v-for="item in lists">
        <div class="visit-info" >
          <img src="../../assets/img/docInfo.png"/>
          <span class="patient-name">{{item.name}}</span>
          <span class="visit-time">{{item.age}}岁</span>
          <i v-if="item.sex == 0" class="iconfont icon-nv"></i>
          <i v-else class="iconfont icon-nan"></i>
          <span class="visit-jibing">{{item.jibing}}</span>
        </div>
        <div class="no-deal">
          {{item.statis}}
        </div>
      </div>
    </div>
    <div class="qianyue float-box" @click="consult">
      <span ref="qianyuePatient" class="qianyuePatient">咨询未回复</span>
      (<span ref="qianyueNum" class="qianyueNum">000</span>)
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': activeConsult, 'icon-shouqi': !activeConsult}">
      </span>
    </div>
    <div class="consult-box" :class="{'yincang':!activeConsult}">
      <div class="visit-patient" v-for="item in lists">
        <div class="consult-info-box" >
          <img src="../../assets/img/docInfo.png"/>
          <div class="consult-info">
            <p class="consult-name">{{item.name}}</p>
            <p class="consult-question">{{item.question}}</p>
          </div>
        </div>
        <div class="consult-right">
          <p class="consult-time">{{item.time}}</p>
          <p class="consult-statius">{{item.statis}}</p>
        </div>
      </div>
    </div>
    <div class="qianyue float-box" @click="qita">
      <span ref="qianyuePatient" class="qianyuePatient">其他待办事项</span>
      (<span ref="qianyueNum" class="qianyueNum">000</span>)
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': activeOthers, 'icon-shouqi': !activeOthers}">
      </span>
    </div>
    <div class="visit-box" :class="{'yincang':!activeOthers}">
      <div class="visit-patient" v-for="item in lists">
        <div class="other-box" >
          <p class="other-question">{{item.question}}</p>
          <p class="other-time">{{item.time}}</p>
        </div>
        <div class="no-deal">
          {{item.statis}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'docWorkRoom',
    data () {
      return {
        authentication:'d1126e11b0392a446acaf724ba9e36c7',
        active:false,
        activeOrder:false,
        activeSet: false,
        activeConsult: false,
        activeOthers:false,
        lists:[
          {
            name:'王倩',
            time:'2017-03-23',
            statis:'待确定 ',
            jibing:'乙肝',
            age:'23',
            sex:1,
            question:'看没看到'
          },
          {
            name:'王倩',
            time:'2017-03-23',
            statis:'待确定 ',
            jibing:'乙肝',
            age:'23',
            sex:0,
            question:'看没看到'
          },
          {
            name:'王倩',
            time:'今天（周四）',
            statis:'待确定 ',
            jibing:'乙肝',
            age:'23',
            sex:0,
            question:'看没看买空'
          }
        ]
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '工作室'
    },
    mounted() {
      this.getDocInfo();
    },


    methods: {
      // 获取个人信息
      getDocInfo() {
        axios.get('/api/wx/baochuan_d/mystudio', {
          params: {
            authentication: this.authentication
          }
        }).then((result) => {
          console.log(result);
          this.erweima = result.data;
        }).catch((error) => {
          console.log(error);
          Toast('网络不给力 ! 请稍后再试');
        })
      },
      visit() {
          this.active = !this.active;
      },
      yuyue() {
          this.activeOrder = !this.activeOrder;
      },
      consult() {
          this.activeConsult = !this.activeConsult;
      },
      fuzhen() {
          this.activeSet = !this.activeSet;
      },
      qita(){
          this.activeOthers = !this.activeOthers
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
     -webkit-box-shadow:inset 0 5px 5px #D2E6E3;
     -moz-box-shadow:inset 0 5px 5px #D2E6E3;
     box-shadow:-2px 0 0 #D2E6E3,
     inset 0 -6px 5px #D2E6E3,
     inset 0 6px 5px#D2E6E3,
     2px 0 0 #D2E6E3;
     background:#fcfcfc;
     .visit-patient{
       display:flex;
       justify-content: space-between;
       padding:5px 16px;
       border:1px solid #f4f4f4;
       .other-box{
         padding-top:10px;
         font-size:15px;
         .other-question{
           color:#232323;
           padding-top:3px;
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
         }
         .consult-info{
           font-size:14px;
           padding-top:10px;
           padding-left:5px;
           .consult-name{
             color:#232323;
           }
          .consult-question{
            padding-top:5px;
            color:#bbb;
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
         color:#ff4444;
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
       padding:10px 16px;
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
         }
       }
     }
   }

 }

</style>
