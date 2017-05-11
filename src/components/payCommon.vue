<style lang="scss" scoped>
  .btn_pay{
    width:100%;
    height:44px;
    line-height:42px;
    text-align:center;
    border-radius: 22px;
    display:inline-block;
    text-decoration: none;
    margin-top:20px;
  }
  .circle-left{
    top:118px;
    left:0;
  }
  .circle-right{
    top:118px;
    right:0;
  }
</style>
<template>
    <div class="device-width">
      <div class="parent-width parent-margin circular-bead box-shade pos-relate">
        <h2 class="text-center fs16 paddingT15 paddingB10">爱肝一生</h2>
        <div class="fs18 text-center paddingT10">支付金额</div>
        <div class="fs30 color-warn text-center paddingT10">￥{{this.cost_temp}}</div>
        <div class="item-height over-hidden marginT15 border-top-dash">
          <div class="parent-width parent-margin">
            <span class="font-bold">收款方</span>
            <span class="fr">爱肝一生</span>
          </div>
        </div>
        <span class="half-circle-left circle-left pos-absolute bg-grey"></span>
        <span class="half-circle-right circle-right pos-absolute bg-grey"></span>
      </div>
      <div class="parent-width parent-margin">
        <a @click="pay"  class="fs20 bg-button color-white btn_pay">确认支付</a>
      </div>
    </div>
</template>

<script>
  import NewWorkUtils from '../components/NetWrokUtils';
    export default{
      data(){
        return {
          orderid: '',
          params: '',
          paymentId: '',
          cost_temp: ''
        }
      },
      created(){
        eventBus.$on('requestJson',(val)=> {
          this.params = val;
          this.cost_temp = val.cost;
        });
      },
      mounted(){
        this.getPayInfo();
      },
      methods: {
        getPayInfo(){
          NewWorkUtils.post('/wx/baochuan_p/paymentorder',this.params, (resp)=>{
//              console.log(resp);
              this.paymentId = resp.data.content.paymentid;
          }, (error)=> {})
        },
        pay(){
          NewWorkUtils.post('/wx/common_p/payment',{
            paymentid: this.paymentId,
            authentication: this.params.authentication
          }, (resp)=>{
              console.log(resp);
              window.location.href=resp.data.content;
          }, (error)=> {})
        }
      }
    }
</script>
