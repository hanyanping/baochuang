<style lang="scss" scoped>
  .doctorIcon{
    height: 195px;
    overflow: hidden;
    background: url(../../assets/img/bg-doctorInfo-icon.png)no-repeat center/cover;
    img{
      width:60px;
      height: 60px;
      border-radius: 50%;
      border:2px solid #fff;
      margin:40px auto 0;
      display:block;
    }
    .logo-signed{
      width:70px;
      height:30px;
      line-height:30px;
      text-align: center;
      border-radius: 15px 0 0 15px;
      background:rgba(0,0,0,0.3);
      right:0;
      top:30px;
    }
    .doctor-profession{
      width:100%;
      padding:28px 0 14px;
      text-align:center;
    }
    .btn-guarantee{
      padding:2px 8px;
      background:#68D5FE;
    }
  }
    .instruction-title{
      display:flex;
      justify-content: space-between;
      border-bottom:1px solid #dedede;
      .inner-title{
        padding-top: 16px;
        padding-bottom:16px;
      }
      .up-forward{
        line-height:50px;
      }
    }
    .instructionCcontent{
      padding:15px;
      line-height:22px;
      height:80px;
      overflow: hidden;
      /*word-spacing: 0.5em;*/
    }
    .activeShow{
      padding:15px;
      line-height:22px;
      min-height:80px;
      height:auto;
      /*word-spacing: 0.5em;*/
    }
  .visit-content{
    table{
      padding-bottom: 30px;
      box-sizing: border-box;
      display:inline-block;
      width:100%;
    }
    table td{
      width: 1%;
      border:1px solid #dedede;
      height:40px;
      line-height:40px;
      text-align:center;
    }
  }
  .btn-option{
    width:50%;
    height:55px;
    display:inline-block;
    line-height:55px;
    text-align:center;
  }

.title-badge{
  width:2px;
  height:15px;
  display:inline-block;
  padding-right:5px;
}
.bgSelected{
  background:#daf4fa;
}
.colorSelectd{
  color:#5ac4b2;
}

  .open:before{
    content: "\e602";
  }
  .close:before{
    content: "\e633";
  }
</style>

<template>
    <div class="device-height bg-grey">
      <div class="doctorIcon pos-relate">
        <img :src="doctorInfo.doctor_img" alt="">
        <span v-if="doctorInfo.relation == 2" class="logo-signed pos-absolute color-white fs14">签约医生</span>
        <span v-else="doctorInfo.relation == 1" class="logo-signed pos-absolute color-white fs14">关注医生</span>
        <p class="doctor-profession">
          <span class="color-white fs17">{{doctorInfo.name}}</span>
          <span class="color-white fs17 paddingL10">{{doctorInfo.grade}}</span>
        </p>
        <div class="text-center" v-show="doctorInfo.relation == 0">
          <span class="color-white circular-bead btn-guarantee" @click="guarantee">关注</span>
        </div>
      </div>
      <div class="doctor-instruction bg-white">
        <div class="instruction-title paddingL15 paddingR15">
          <div class="inner-title ">
            <span class="title-badge bg-cure"></span>
            <span class="fs18">医生介绍</span>
          </div>
          <i @click="openOrClose" class="up-forward iconfont" :class="{open: isActive == false, close: isActive == true}"></i>
        </div>
        <div class="fs16 color-shallow" :class="{activeShow: showAll,instructionCcontent: !showAll}" v-html="doctorInfo.intro">

        </div>
      </div>
      <div class="doctor-visit bg-white marginT10">
        <div class="instruction-title paddingL15 paddingR15">
          <div class="inner-title ">
            <span class="title-badge bg-cure"></span>
            <span class="fs18">医生门诊</span>
          </div>
        </div>
      </div>
      <div class="visit-content bg-white">
        <table class="paddingL15 paddingR15 paddingT15 paddingB15">
          <tr>
            <td></td>
            <td>上午</td>
            <td>下午</td>
          </tr>
          <tr v-for="(item,index) in doctorInfo.clinic">
            <td>{{item.day_name}}</td>
            <td class="iconfont icon-duihao1 fs22 color-white" :class="{bgSelected: item.am == '1', colorSelectd:item.am == '1'}"></td>
            <td class="iconfont icon-duihao1 fs22 color-white" :class="{bgSelected: item.pm == '1', colorSelectd:item.pm == '1'}"></td>
          </tr>
          <!--<tr>-->
            <!--<td>星期二</td>-->
            <!--<td class="bg-selected">-->
              <!--<i class="iconfont icon-duihao1 fs22 color-selected" ></i>-->
            <!--</td>-->
            <!--<td></td>-->
          <!--</tr>-->
        </table>
      </div>
      <div class="btn-menu">
        <router-link v-show="doctorInfo.open_consult == 1" to="javascript:void(0)" class="bg-button btn-option color-white fl">发消息</router-link>
        <a v-show="doctorInfo.open_consult == 0" class=" btn-option color-white fl bg-disable">发消息(未开启)</a>
        <router-link v-show="doctorInfo.open_subscribe == 1" to="javascript:void(0)" class="bg-button btn-option color-white fl">预约</router-link>
        <a v-show="doctorInfo.open_subscribe == 0" class=" btn-option color-white fl bg-disable">预约(未开启)</a>
      </div>
    </div>
</template>

<script>
  import NewWorkUtils from '../../components/NetWrokUtils';
  import {Toast} from 'mint-ui';
    export default{
      data(){
          return {
              params: {
                authentication: 'e5edd65e69e6a1b3f25782357908284c',
                doctorId: this.$route.params.id
              },
            doctorInfo: '',
            isActive: true,
            showAll:　false,
          }
      },
      mounted(){
        this.getDoctorInfo();
      },
      methods: {
        getDoctorInfo(){
          NewWorkUtils.post('/wx/baochuan_p/doctorinfo',this.params, (resp)=>{
              this.doctorInfo = resp.data.content;
          }, (error)=>{})
//            console.log(this.$route.params.id);
        },
        guarantee(){
            console.log(1);
            NewWorkUtils.post('/wx/baochuan_p/followdoctor',this.params, (resp)=>{
              console.log(resp);
              Toast('关注成功');
            }, (error)=>{
                console.log(error);
            })
        },
        openOrClose(){
            this.isActive = !this.isActive;
            this.showAll = !this.showAll;
        }
      }
    }
</script>
