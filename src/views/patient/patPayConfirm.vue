<style lang="scss" scoped>
  .doc-parent-info {
    width: 100%;
    display: flex;
    align-items: center;

  .doc-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .doc-info {
    width: 80%;
    padding-top: 6px;
    padding-left: 6px;
    line-height: 22px;
  }
  }
  .parent-info {
    min-height: 50px;
    line-height: 50px;
  }

  .inner-info {
    width: 92%;
    padding-left: 4%;
    padding-right: 4%;
    min-height: 50px;

  .record-instruct {
    padding: 8px 0;
    line-height: 25px;

  .input-checkbox {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }

  }
  .menu-box {
    width: 92%;
    margin: 0 4%;
    padding-top: 15px;
    padding-bottom: 10px;
    line-height: 22px;

  .btn-pay {
    width: 100%;
    height: 45px;
    border-radius: 20px;
    margin-bottom: 10px;
    display: inline-block;
    line-height: 45px;
    text-align: center;
  }

  }
  .doctor-type {
    right: 10px;
    top: 44px;

  .heart {
    display: block;
    margin-top: -1px;
    width: 24px;
    height: 24px;
    line-height: 22px;
    text-align: center;
    border-radius: 50%;
  }

  .main-tip {
    margin-left: 19px;
    display: inline-block;
    border-radius: 4px;
    padding: 3px 4px;
  }

  }

  }

</style>

<!--根据地址栏type类型判断下单类型  1代表更换  2代表咨询  3代表预约-->

<template>
  <div class="device-height bg-grey">
    <div v-if="payType == 3" class="doc-parent-info bg-white">
      <div class="inner-info paddingT10 paddingB10">
        <img src="../../assets/img/second.png" class="doc-icon fl" alt="">
        <div class="doc-info fl fs16">
          <span>王大帅 <em class="fs15 color-profession">主任医师</em></span><br>
          <span class="color-profession">保定市传染病医院 肝病二科</span>
        </div>
      </div>
    </div>
    <div v-if="payType == 2" class="doc-parent-info bg-white">
      <div class="inner-info paddingT10 paddingB10">
        <img src="../../assets/img/second.png" class="doc-icon fl" alt="">
        <div class="doc-info fl fs16 marginT10">
          <span>王大帅</span>医生的咨询服务
        </div>
      </div>
    </div>
    <div v-if="payType == 1" class="doc-parent-info bg-white">
      <div class="inner-info paddingT10 paddingB10 pos-relate">
        <h2 class="paddingB10">新签约医生</h2>
        <img :src="payInfo.doctor_img" class="doc-icon fl" alt="">
        <div class="doc-info fl fs16">
          <span>{{payInfo.name}}</span><br>
          <span class="color-profession">{{payInfo.department}} {{payInfo.grade}}</span>
        </div>
        <div class="doctor-type pos-absolute">
            <span class="heart pos-absolute bg-button">
              <i class="iconfont icon-aixin color-white fs14"></i>
            </span>
          <span class="main-tip fs14 bg-button color-white">主管医生</span>
        </div>
      </div>
    </div>

    <div v-if="payType == 3" class="parent-info bg-white marginT10 fs16">
      <div class="inner-info">
        就诊时间： 2017-03-22 周三 上午
      </div>
    </div>
    <div v-if="payType == 3" class="parent-info bg-white marginT10 fs16">
      <div class="inner-info">
        <span>预约服务费</span>
        <span class="fr">￥6.00</span>
      </div>
    </div>
    <div v-if="payType == 3" class="parent-info bg-white marginT10 fs16">
      <div class="inner-info">
        <span>患者姓名</span>
        <span class="fr">王倩</span>
      </div>
    </div>
    <div class="parent-info bg-white marginT10 fs16">
      <div class="inner-info">
        <div v-show="payType == 1 || payType == 2">
          <span>支付金额</span>
          <span class="fr color-warn">￥{{payInfo.change_money}}</span>
        </div>
        <div class="record-instruct border-bot">
          <input v-model="isChecked" @click="getValue(payInfo.integral)" type="checkbox" class="input-checkbox"/>使用积分(您现有{{payInfo.integral}}，可用100抵￥1.00)
          <i class="iconfont icon-wenhao1 color-grey" @click="openMessage"></i>
        </div>
        <div>
          <span>应付款</span>
          <span class="fr color-warn">￥{{shouldPay}}</span>
        </div>
        <div class="menu-box">
          <a @click="goToPay" class="btn-pay bg-button color-white fs18">确认下单</a><br>
          <span v-show="payType == 3" class="fs14 color-grey paddingB10">若订单失败，服务费会原路返回退还给您</span>
          <span v-show="payType == 2" class="fs14 color-grey paddingB10 paddingT10">1.图文咨询有效期24小时，有效期内可向医生发送消息。<br/>2.医生可能会在门诊或手术中，如无法及时回复请谅解。<br>3.平台承诺，超时后若医生未回复，将全额退款。4.若病情危急请直接前往医院就诊。</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui';
  import NetWorkUtils from '../../components/NetWrokUtils';
  export default{
    data(){
      return {
        payType: '',
        params: {
          doctorId: '',
          authentication: auth
        },
        payInfo: '',
        point: null,
        isChecked: false,
        shouldPay: null,
        costScore: null,
        requestJson: {
          authentication: auth,
          orderid: '',
          cost: null
        }
      }
    },
    created(){
    },
    mounted(){
      this.getType();
    },

    methods: {
      getType(){
        this.payType = this.$route.params.type;
        console.log(this.$route.params.type);
        this.params.authentication = auth;
        this.params.doctorId = this.$route.query.doctorId;
        if (this.payType == 1) {
          NetWorkUtils.post('/wx/baochuan_p/getchangeorder', this.params, (resp)=> {
            this.payInfo = resp.data.content;
            if (this.isChecked) {
              this.point = parseInt(this.payInfo.integral);
              if ((this.payInfo.change_money - parseInt(this.point / 100)) > 0) {
                this.shouldPay = this.payInfo.change_money - this.point / 100;
                this.costScore = this.point;
              } else {
                this.shouldPay = 0;
                this.costScore = this.payInfo.change_money * 100;
              }
            } else {
              this.shouldPay = this.payInfo.change_money;
              this.costScore = 0;
            }
          }, (error)=> {

          })
        } else if (this.payType == 2) {

        } else if (this.payType == 3) {

        }
      },
      getValue(val){
        this.isChecked = !this.isChecked;
        if (!this.isChecked) {
          this.shouldPay = this.payInfo.change_money;
          this.costScore = 0;
        } else {
          this.point = parseInt(val);
          if ((this.payInfo.change_money - this.point / 100) > 0) {
            this.shouldPay = this.payInfo.change_money - this.point / 100;
            this.costScore = this.point;
          } else {
            this.shouldPay = 0;
            this.costScore = this.payInfo.change_money * 100;
          }
        }
      },
      goToPay(){
        let param = {
          authentication: auth,
          doctorId: this.params.doctorId,
          account: this.payInfo.change_money,
          score: this.costScore,
          cost: this.shouldPay
        };
        NetWorkUtils.post('/wx/baochuan_p/createchangeorder', param, (resp)=> {
          if (resp.data.content.order_id) {
            if (this.shouldPay == 0) {
              MessageBox.alert('支付成功!');
              wx.closeWindow();
            } else {
              this.requestJson.cost = this.shouldPay;
              this.requestJson.orderid = resp.data.content.order_id;
              localStorage.setItem('pat_cost',this.requestJson.cost);
              localStorage.setItem('orderId',this.requestJson.orderid);
              this.requestJson.authentication = this.params.authentication;
              this.$router.push('/baochuan_p/payment');
            }
          }
        }, (error)=> {
        })
      },
      openMessage(){
        MessageBox.alert('1、积分如何获得？在医院就诊时，与门诊医生签约慢病管理服务即可获得相应积分。<br/>2、积分如何使用？积分可代替现金（兑换比例100:1），购买咨询、预约等医生服务。<br/>3、积分有效期积分不可提现，用户获得但未使用的积分，将在下一个自然月过期。', '关于积分');
      },

    },
  }
</script>
