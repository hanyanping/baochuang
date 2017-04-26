<template>
  <div class="docWorkRoom" >
    <div class="qianyue float-box" >
      <span ref="qianyuePatient" class="qianyuePatient">即将就诊患者</span>
      (<span ref="qianyueNum" class="qianyueNum">000</span>)
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': active, 'icon-shouqi': !active}">
      </span>
    </div>
    <div class="visit-patient" v-for="item in lists">
      <div class="visit-info" >
        <img src="../../assets/img/docInfo.png"/>
        <span class="patient-name">{{item.name}}</span>
        <span class="visit-time">{{item.time}}</span>
        <span></span>
      </div>
      <div class="no-deal">
        {{item.statis}}
      </div>
    </div>
    <div class="qianyue float-box" >
      <span ref="qianyuePatient" class="qianyuePatient">预约待处理</span>
      <span ref="qianyueNum" class="qianyueNum">(000)</span>
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': activeOrder, 'icon-shouqi': !activeOrder}">
      </span>
    </div>
    <div class="qianyue float-box" >
      <span ref="qianyuePatient" class="qianyuePatient">复诊时间未设置</span>
      (<span ref="qianyueNum" class="qianyueNum">000</span>)
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': activeSet, 'icon-shouqi': !activeSet}">
      </span>
    </div>
    <div class="qianyue float-box" >
      <span ref="qianyuePatient" class="qianyuePatient">咨询未回复</span>
      (<span ref="qianyueNum" class="qianyueNum">000</span>)
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': activeConsult, 'icon-shouqi': !activeConsult}">
      </span>
    </div>
    <div class="qianyue float-box" >
      <span ref="qianyuePatient" class="qianyuePatient">其他待办事项</span>
      (<span ref="qianyueNum" class="qianyueNum">000</span>)
      <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': activeOthers, 'icon-shouqi': !activeOthers}">
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'docWorkRoom',
    data () {
      return {
        active:false,
        activeOrder:false,
        activeSet: false,
        activeConsult: false,
        activeOthers:false,
        lists:[
          {
            name:'王倩',
            time:'今天 （周三）',
            statis:'待确定 '
          },
          {
            name:'王倩',
            time:'今天 （周三）',
            statis:'待确定 '
          },
          {
            name:'王倩',
            time:'今天 （周三）',
            statis:'待确定 '
          }
        ]
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '工作室'
    },
    methods: {

    }
  }

</script>

<style lang="scss">
 .docWorkRoom{
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
   .visit-patient:nth-of-type(1){
     -webkit-box-shadow:0 5px 5px #D2E6E3;
     -moz-box-shadow:0 5px 5px #D2E6E3;
     box-shadow:0 5px 5px #D2E6E3;
   }
  .visit-patient{
    display:flex;
    justify-content: space-between;
    padding:5px 16px;
    border:1px solid #f4f4f4;
    .visit-info {
      height:55px;
      line-height:50px;
      img{
        height:45px;
        width:45px;
        border-radius:50%;
        vertical-align: middle;
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
    }
    .no-deal{
      line-height:45px;
      color:#ff4444;
      font-size:14px;
    }
  }
 }

</style>
