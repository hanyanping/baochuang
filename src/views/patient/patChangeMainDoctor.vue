<style lang="scss" scoped>
  .box-left{
    width:59%;
    padding: 3vh 0 3vh 11px;
   span{
      padding-top:12px;
      padding-left:4px;
    }
    p{
      padding-top: 8px;
      padding-left: 4px;
      width: 65%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .box-right{
    padding: 3vh 12px 3vh 0;
    .heart{
      display:block;
      margin-top:-1px;
      width:24px;
      height:24px;
      line-height:22px;
      text-align:center;
      border-radius: 50%;
    }
    .main-tip{
      margin-left:19px;
      display:inline-block;
      border-radius: 4px;
      padding:3px 4px;
    }
  }

  .check-box{
    height: 100%;
    line-height:16vh;
    .radio-doctor{
      width: 22px;
      height: 22px;
      line-height:24px;
      text-align: center;
      margin-left:15px;
      border:1px solid #dedede;
      display:inline-block;
      border-radius: 50%;
      font-family: "iconfont" !important;
    }
    .radio-doctor:before{
      content: '\e674';
      color: #fff;
    }
    .doctor-radio{
      left:-9999px;
      opacity: 0;
    }
  }
  .doctor-list-height{
    height:16vh;
  }
  .btn-submit{
    display:inline-block;
    height:44px;
    line-height:44px;
    text-align: center;
    border-radius: 20px;
  }
  .bgButton{
    background:#5fa39b
  }

</style>

<template>
    <div class="device-height bg-grey over-hidden">
      <div class="doctor-list-height parent-width parent-margin circular-bead box-shade bg-white over-hidden">
        <div class="box-left fl">
          <img :src="mainDoctor.doctor_img" class="head-logo fl" alt="加载中">
          <span class="fl fs15 color-black">{{mainDoctor.name}}</span><br>
          <p class="fs15 fl">{{mainDoctor.department}} {{mainDoctor.grade}}</p>
        </div>
        <div class="box-right fr">
          <span class="heart pos-absolute bg-button">
            <i class="iconfont icon-aixin color-white fs14"></i>
          </span>
          <span class="main-tip fs14 bg-button color-white">现签约医生</span>
        </div>
      </div>
      <div @click="isSelected(index,item.id,item.name,item.change_money)"   v-for="(item,index) in doctorList" class="doctor-list-height parent-width parent-margin circular-bead box-shade bg-white over-hidden">
        <div class="check-box fl pos-relate">
          <label  :class="{bgButton: isActive==index}" class="radio-doctor"></label>
          <!--<input type="radio" name="doctor" id="111" class="doctor-radio pos-absolute">-->
        </div>
        <div class="box-left fl">
          <img :src="item.doctor_img" class="head-logo fl" alt="加载中"/>
          <span class="fl fs15 color-black">{{item.name}}</span><br>
          <p class="fs15 fl">{{item.departmentName}} {{item.grade}}</p>
        </div>
      </div>
      <a @click="changeDoctor" class="parent-width parent-margin color-white box-shade  bg-button btn-submit">更换签约医生</a>
    </div>
</template>

<script>
  import axios from 'axios';
  import {MessageBox} from 'mint-ui';
  import {Toast} from 'mint-ui';
    export default{
      data() {
        return {
          isActive: -1,
          doctorList: [],
          authentication: auth,
          mainDoctor: '',
          requestJson: {
            id: '',
            name: '',
            change_money: ''
          }
        }
      },
      mounted() {
        this.getDoctorList()
      },
      methods: {
        isSelected(i,id,name,money){
          this.isActive = i;
          this.requestJson.id = id;
          this.requestJson.name = name;
          this.requestJson.change_money = money;
        },
        getDoctorList(){
          axios.post('/wx/baochuan_p/doctorlist', {
            authentication: this.authentication
          }).then((resp) => {
            this.mainDoctor = resp.data.content;
            this.doctorList = resp.data.content.list;
          }).catch((error) => {
            console.log(error);
          })
        },
        changeDoctor(){
          MessageBox.confirm('更换后，您只能接收'+this.requestJson.name+'医生的检查报告解读和复诊提醒服务；更换签约医生是付费服务，需要支付'+this.requestJson.change_money+'元（'+this.requestJson.change_money*100+'积分）。').then(
             //确定操作
              action => {
                  if(this.requestJson.id == '' || this.requestJson.id == null || this.requestJson.id ==undefined){
                    Toast('请选择医生');
                    return false;
                  }else{
                    wx.closeWindow();
//                    axios.post('/wx/baochuan_p/changedoctor',{
//                      authentication: this.authentication,
//                      doctorId: this.requestJson.id
//                    }).then((resp) => {
//                      if(resp.data.content.paymentStatus ==1){
//                        this.$router.push('payConfirm/1?doctorId='+this.requestJson.id);
//                      }else{
//                      }
//                    }).catch((error) => {
//                      console.log(error);
//                    })
                  }
              },
              //取消操作
              action => {
                  console.log("取消");
            }
          );
        }
      },
      destroyed() {
//        eventBus.$emit('doctorId', this.requestJson.id);
      }
    }
</script>
