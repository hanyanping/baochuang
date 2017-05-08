<!-- 积分账户 -->
<template>
    <div class="integralAccount">
      <div class="integralAccount-titlebg-box">
        <div class="visitRrecord-titletop-box">
          <span class="visitRrecord-title-text">积分余额</span>
          <i class="iconfont icon-wenhao1 visitRrecord-title-icon" @click="showMessageBox"></i>
        </div>
        <span class="visitRrecord-money-text" >{{score}}</span>
      </div>

      <div class="integralAccount-list-box pos-relate" v-show="integralList.length > 0">
          <div class="integralAccount-listheader-box border-bot-dash">
            <span class="integralAccount-listtitle-text">积分明细</span>
          </div>
          <span class="bg-grey half-circle-left circleleft pos-absolute"></span>
          <span class="bg-grey half-circle-right circleright pos-absolute"></span>

          <div class="integralAccount-listcontent-box">
            <mt-loadmore
              :top-method="loadTop" ref="loadmore"
              :bottom-method="loadBottom"
              :bottom-all-loaded="allLoaded"
              :autoFill="false">
              <div class="integralAccount-listitem-box border-bot-dash" v-for="item in integralList">
                <div class="fl" style="width:70%;line-height: 22px;">
                  <span class="integralAccount-listitem-left-text  fs14" style="display:inline-block;">{{item.source}}</span><br>
                  <span class="integralAccount-listitem-leftbottom-text fs14" style="display:inline-block;">{{item.date}}</span>
                </div>
                <span v-if="item.scoreCount < 0" class="integralAccount-listitem-right-red-text fr fs14" style="margin-top:14px;">{{item.scoreCount}}</span>
                <span v-else="item.scoreCount => 0" class="integralAccount-listitem-right-text fr fs14" style="margin-top:14px;">{{item.scoreCount}}</span>
              </div>
            </mt-loadmore>
          </div>
      </div>

      <div class="integralAccount-listitem-empty-box" v-show="integralList.length <= 0">
          <img src="../../assets/img/integralAccount_empty_icon.png" class="integralAccount-listitem-empty-img">
          <br/>
          <span class="integralAccount-listitem-empty-text">暂无积分</span>
      </div>

    </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  import { MessageBox } from 'mint-ui';
  import {Indicator} from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  import moment from 'moment/moment.js';

    export default {
      data() {
        return {
          score : 0.00,
          allLoaded: false,
          nowPage: 1,
          integralList: [],
          isShow : false,
          postData: {
            authentication: '4d89652b270cc60c30365868b229ca15',
            rows: 10,
            page: 1
          }
        }
      },
      mounted() {
        this.getIntegralList();
      },
      methods: {
        showMessageBox(){
          var str='<div>1、积分如何获得？在医院就诊时，与门诊医生签约慢病管理服务即可获得相应积分。</div>'+'<div>2、积分如何使用？积分可代替现金（兑换比例100:1），购买咨询、预约等医生服务</div>'
          MessageBox({
            title: '关于积分',
            message: str,
            confirmButtonText: '我知道了'
          });
        },
        getIntegralList() {
          let _that = this;
          var params = {
            authentication: this.postData.authentication,
          }
          netWrokUtils.post('/wx/baochuan_p/myscore', params, (result) => {
            _that.integralList = result.data.content.list;
            _that.score = result.data.content.score;
          }, (error_result) => {
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

//        loadTop() {
//          console.log(2);
//          this.getReserveList();
//        },
//        loadBottom() {
//          console.log(1);
//          let _this = this;
//          _this.nowPage++;
//          _this.util.request.post('/product/app/getBuyProductServiceByPatientIdPage.htm?' + _this.util.formatPara(_this.postData) + '&page=' + _this.nowPage)
//            .then((resp) => {
//              console.log(resp);
//              if (_this.nowPage * _this.postData.rows >= resp.data.total) {
//                _this.allLoaded = true;
//              } else {
//                _this.message = _this.message.concat(resp.data.data.rows);
//              }
//              _this.$refs.loadmore.onBottomLoaded();
//            }).catch((error) => {
//            console.log(error);
//          });
//        }
      }
    }
</script>

<style lang="scss">

  .integralAccount{
    height:100vh;
    width:100%;
    background: #fcfcfc;

    .integralAccount-titlebg-box{
      background: #5fa39b;
      height:26vh;
      text-align: center;
      padding-top:30px;

      .visitRrecord-titletop-box{

        .mint-msgbox-message{
          text-align: left;
        }

        .visitRrecord-title-icon{
          color: white;
          margin-left: 5px;
        }
      }

      .visitRrecord-title-text{
        color: #e5eeed;
        font-size: 17px;
        display: inline-block;
        line-height: 30px;
      }

      .visitRrecord-money-text{
        color: white;
        font-size: 30px;
        display: inline-block;
        line-height: 40px;
      }
    }

    .integralAccount-list-box{
      margin-left: 10px;
      margin-right: 10px;
      margin-top: -55px;
      background: #fff;
      border-radius: 5px;
      -webkit-box-shadow:0 0 50px #dbe5e4;
      -moz-box-shadow:0 0 50px #dbe5e4;
      box-shadow:0 0 50px #dbe5e4;
      padding-left : 10px;
      padding-right : 10px;

      .integralAccount-listheader-box{
         padding : 18px;
        .integralAccount-listtitle-text{
          color: #232323;
          font-size: 16px;
        }
      }

      .circleleft{
        top:48px;
        left:0;
        display:block;
      }

      .circleright{
        top:48px;
        right:0;
        display:block;
      }

      .integralAccount-listcontent-box{

        .integralAccount-listitem-box{
          overflow:hidden;
          padding : 15px;

          .integralAccount-listitem-left-text{
            color: #232323;
            font-size: 16px;
          }

          .integralAccount-listitem-leftbottom-text{
            color: #999999;
            font-size: 15px;
            margin-top: 2px;
          }

          .integralAccount-listitem-right-text{
            color: #232323;
            font-size: 16px;
          }

          .integralAccount-listitem-right-red-text{
            color: #d80200;
            font-size: 16px;
          }
        }
      }
    }

    .integralAccount-listitem-empty-box{
      width:100%;
      text-align:center;
      line-height: 40px;

      .integralAccount-listitem-empty-img{
        padding-top: 10vh;
        width:70px;
        height: 70px;
      }

      .integralAccount-listitem-empty-text{
        display:inline-block;
        font-size: 16px;
        color: #d7d7d7;
      }
    }

  }

</style>
