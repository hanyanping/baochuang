<!-- 积分账户 -->
<template>
    <div class="integralAccount">
      <div class="integralAccount-titlebg-box">
        <div class="visitRrecord-titletop-box">
          <span class="visitRrecord-title-text">积分余额</span>
          <i class="iconfont icon-wenhao1 visitRrecord-title-icon"></i>
        </div>
        <span class="visitRrecord-money-text" >{{integral}}</span>
      </div>

      <mt-loadmore
        :top-method="loadTop" ref="loadmore"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :autoFill="false">
          <div class="integralAccount-list-box pos-relate" v-show="message.length > 0">
              <div class="integralAccount-listheader-box border-bot-dash">
                <span class="integralAccount-listtitle-text">积分明细</span>
              </div>
              <span class="bg-grey half-circle-left circleleft pos-absolute"></span>
              <span class="bg-grey half-circle-right circleright pos-absolute"></span>

                <div class="integralAccount-listcontent-box">
                  <div class="integralAccount-listitem-box border-bot-dash" v-for="item in message">
                    <div class="fl" style="width:70%;line-height: 22px;">
                      <span class="integralAccount-listitem-left-text  fs14" style="display:inline-block;">咨询王明医生</span><br>
                      <span class="integralAccount-listitem-leftbottom-text fs14" style="display:inline-block;">2017-09-12 09:10:00</span>
                    </div>
                    <span v-if="isShow" class="integralAccount-listitem-right-text fr fs14" style="margin-top:14px;">+100元</span>
                    <span v-else="isShow" class="integralAccount-listitem-right-text fr fs14" style="margin-top:14px;">-100元</span>
                  </div>
                </div>
          </div>
      </mt-loadmore>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          integral : 0.00,
          allLoaded: false,
          nowPage: 1,
          message: [],
          isShow : false,
          postData: {
            authentication: 'f9780de6803b8077534534f44fe0535d',
            rows: 10,
            page: 1
          },
        }
      },
      mounted() {
        //this.getIntegralList();
      },
      methods: {
        getIntegralList() {
          let that = this;
          that.util.request.post('/wx/baochuan_p/myscore?' + that.util.formatPara(that.postData) + '&page=1').then((resp) => {
            console.log(resp.data);
            that.message = resp.data.data.rows;
            that.$refs.loadmore.onTopLoaded();
          }).catch((error) => {
            console.log(error);
          })
        },
        loadTop() {
          console.log(2);
          this.getReserveList();
        },
        loadBottom() {
          console.log(1);
          let _this = this;
          _this.nowPage++;
          _this.util.request.post('/product/app/getBuyProductServiceByPatientIdPage.htm?' + _this.util.formatPara(_this.postData) + '&page=' + _this.nowPage)
            .then((resp) => {
              console.log(resp);
              if (_this.nowPage * _this.postData.rows >= resp.data.total) {
                _this.allLoaded = true;
              } else {
                _this.message = _this.message.concat(resp.data.data.rows);
              }
              _this.$refs.loadmore.onBottomLoaded();
            }).catch((error) => {
            console.log(error);
          });
        }
      }
    }
</script>

<style lang="scss">

  .integralAccount{
    height:100vh;
    width:100%;
    background: #f4f4f4;

    .integralAccount-titlebg-box{
      background: #5fa39b;
      height:26vh;
      text-align: center;
      padding-top:30px;

      .visitRrecord-titletop-box{

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
        }
      }
    }

  }

</style>
