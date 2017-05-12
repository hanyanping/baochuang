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
export default {
  data() {
    return {
      params: '',
      paymentId: '',
      cost_temp: '',
      wxRequest: '',
      payRequest: '',
      authentication: auth,
      orderid: ''
    }
  },

  created() {
  },
  mounted() {
    this.getPayInfo();
  },
  methods: {
    getPayInfo() {
      this.cost_temp = localStorage.getItem('pat_cost');
    },
    pay() {
      console.log('payWx',this.$route.query.payWx);
      if(this.$route.query.payWx == undefined || this.$route.query.payWx == ""){
      }else{
        this.payRequest = JSON.parse(decodeURI(this.$route.query.payWx));
        console.log(this.payRequest);
        if (typeof WeixinJSBridge == "undefined"){
          if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
          }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
          }
        }else{
          WeixinJSBridge.invoke(
            'getBrandWCPayRequest',{
            "appId" : this.payRequest.appId,     //公众号名称，由商户传入
            "timeStamp": this.payRequest.timeStamp,         //时间戳，自1970年以来的秒数
            "nonceStr": this.payRequest.nonceStr, //随机串
            "package" : this.payRequest.package,     //统一订单号
            "signType": this.payRequest.signType,         //微信签名方式：
            "paySign": this.payRequest.paySign //支付签名
          }
        )
        }
//        wx.config({
////          debug: false,
//          appId: this.payRequest.appid,
//          timestamp: this.payRequest.timeStamp, // 必填，生成签名的时间戳
//          nonceStr: this.payRequest.nonceStr, // 必填，生成签名的随机串
//          signature: '',// 必填，签名，见附录1
//          jsApiList: ['chooseWXPay'] //
//        });
//        wx.ready(function () {
//          wx.chooseWXPay({
//            timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
//            nonceStr: '', // 支付签名随机串，不长于 32 位
//            package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
//            signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
//            paySign: '', // 支付签名
//            success: function (res) {
//              // 支付成功后的回调函数
//            }
//          });
//        })

      }
    }
  }
}
</script>
