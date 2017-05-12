<!-- 预约列表页 -->
<style lang="scss" scoped>
  .doctor-info-box {
    display: flex;
    align-items: center;
    min-height:90px;
    margin:15px 4%;
  .doctor-icon{
    width:70px;
    height:70px;
  }
  .hospital-office span{
    display:inline-block;
  }
  .doctor-hospital{
    max-width:130px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .doctor-office{
    max-width:70px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

  }
  }
  .reserve-item{
    display:flex;
    align-items:center;
  }

  .active-bg-item{background:#fcfcfc;}
  .bg-item{background:#f4f9f8;}
</style>


<template>
  <div class="device-height bg-grey">
    <div class="over-hidden">
      <div class="doctor-info-box bg-shallow-white circular-bead box-shade">
        <img src="../../assets/img/second.png" class="marginL15 head-logo doctor-icon fl" alt="">
        <div class="fl doctor-instruct">
          <p class="paddingT10"><span class="fs18">王鲲鹏</span> <span class="color-profession"></span>主任医师</p>
          <p class="hospital-office marginT10">
            <span class="doctor-hospital fs16 color-profession">保定市传染病医院</span>
            <span class="doctor-office fs16 color-profession">传染科</span>
          </p>
        </div>
      </div>
      <div class="reserve-item parent-margin parent-width" :class="{}">
        <span class="left-logo"></span>
        <div class="">
          <p>
            <i class="iconfont icon-shijian fs30"></i>
            <span>2017-02-24</span>
          </p>
          <p>星期一 下午 余号6人</p>
        </div>
        <i class="fr iconfont icon-jiantou"></i>
      </div>
    </div>


    <!--<div class="subscribeList-listitem-empty-box" v-show="subscribeList.length <= 0">-->
      <!--<img src="../../assets/img/recode_icon.png" class="subscribeList-listitem-empty-img">-->
      <!--<br/>-->
      <!--<span class="subscribeList-listitem-empty-text">暂无预约</span>-->
    <!--</div>-->
  </div>
</template>

<script>
  import netWorkUtils from '../../components/NetWrokUtils'

  export default {
    data () {
      return {
        authentication: auth,
        doctor_id: '',
      }
    },
    created(){
      eventBus.$on('doctor_id', (id) => {
        this.doctor_id = id;
      })
    },
    mounted() {
//      this.getSubscribeList();
    },
    methods: {
      getSubscribeList() {
        let that = this;
        var params = {
          authentication: that.authentication,
          doctorId: this.doctor_id
        };
        netWrokUtils.post('/wx/baochuan_p/doctorappointmentlist', params, (result) => {
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      },
      toDetail(){
        this.$router.push({path: 'payConfirm/3'}) //跳转预约下单页
      },

    }
  }
</script>

