<!-- 查化验单页-选择框 -->
<template>
  <div class="selectTestReportCheck">
    <div class="selectTestReportCheck-titlebg-box"></div>
    <div class="selectTestReportCheck-list-box pos-relate">
      <div class="selectTestReportCheck-listheader-box border-bot-dash">
        <span class="selectTestReportCheck-listtitle-text">您的化验单,点击看详情:</span>
      </div>
      <span class="bg-grey half-circle-left circleleft pos-absolute"></span>
      <span class="bg-grey half-circle-right circleright pos-absolute"></span>

      <mt-loadmore
        :top-method="loadTop" ref="loadmore"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :autoFill="false">
        <div class="selectTestReportCheck-listcontent-box" v-for="item in content" v-show="content.length > 0">
          <i class="iconfont selectTestReportCheck-listcontent-yuan icon-yuan fl"></i>
          <span class="selectTestReportCheck-listitem-left-text fl fs14">HCV基因分型</span>
          <div class="selectTestReportCheck-listitem-right-box fr">
            <span class="selectTestReportCheck-listitem-right-text fs14">{{visitTime}}</span>
            <i class="iconfont selectTestReportCheck-listitem-right-icon icon-jiantou"></i>
          </div>
        </div>
      </mt-loadmore>

      <div class="selectTestReportCheck-listitem-empty-box" v-show="content.length <= 0">
        <img src="../../assets/img/integralAccount_empty_icon.png" class="selectTestReportCheck-listitem-empty-img">
        <br/>
        <span class="selectTestReportCheck-listitem-empty-text">暂无预约</span>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        allLoaded: false,
        nowPage: 1,
        content: [],
        isShow: false,
        postData: {
          authentication: 'f9780de6803b8077534534f44fe0535d',
          rows: 10,
          page: 1
        },
        idCard: ''
      }
    },
    created(){
      eventBus.$on('idCard', (thing) => {
        this.idCard = thing;
    })
    },
    mounted() {
      //this.getIntegralList();
    },
    methods: {
      loadTop()
      {
      },
      loadBottom()
      {
      }
//      getIntegralList() {
//        let that = this;
//        that.util.request.post('/wx/baochuan_p/myscore?' + that.util.formatPara(that.postData) + '&page=1').then((resp) = > {
//          console.log(resp.data);
//        that.message = resp.data.data.rows;
//        that.$refs.loadmore.onTopLoaded();
//      }).
//        catch((error) = > {
//          console.log(error);
//      })
//      },
//      loadTop() {
//        console.log(2);
//        this.getReserveList();
//      },
//      loadBottom() {
//        console.log(1);
//        let _this = this;
//        _this.nowPage++;
//        _this.util.request.post('/product/app/getBuyProductServiceByPatientIdPage.htm?' + _this.util.formatPara(_this.postData) + '&page=' + _this.nowPage)
//          .then((resp) = > {
//          console.log(resp);
//        if (_this.nowPage * _this.postData.rows >= resp.data.total) {
//          _this.allLoaded = true;
//        } else {
//          _this.message = _this.message.concat(resp.data.data.rows);
//        }
//        _this.$refs.loadmore.onBottomLoaded();
//      }).
//        catch((error) = > {
//          console.log(error);
//      })
//        ;
//      }
    }
  }
</script>

<style lang="scss">

  .selectTestReportCheck {
    height: 100vh;
    width: 100%;
    background: #f4f4f4;

  .selectTestReportCheck-titlebg-box {
    background: url(../../assets/img/selectTestReportCheck_bg.png) no-repeat center/cover;
    height: 30vh;
  }

  .selectTestReportCheck-list-box {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: -48px;
    background: #fff;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 50px #dbe5e4;
    -moz-box-shadow: 0 0 50px #dbe5e4;
    box-shadow: 0 0 50px #dbe5e4;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    height: 75%;

  .selectTestReportCheck-listheader-box {
    padding: 15px;

  .selectTestReportCheck-listtitle-text {
    color: #232323;
    font-size: 16px;
  }

  }

  .circleleft {
    top: 40px;
    left: 0;
    display: block;
  }

  .circleright {
    top: 40px;
    right: 0;
    display: block;
  }

  .selectTestReportCheck-listcontent-box {
    padding: 15px 10px;
    overflow: hidden;

  .selectTestReportCheck-listcontent-yuan {
    margin-top: 1px;
  }

  .selectTestReportCheck-listitem-left-text {
    color: #232323;
    font-size: 15px;
    margin-top: 2px;
    margin-left: 5px;
  }

  .selectTestReportCheck-listitem-right-box {

  .selectTestReportCheck-listitem-right-text {
    color: #999999;
    font-size: 15px;
  }

  .selectTestReportCheck-listitem-right-icon {
    margin-left: 5px;
    color: #b2b1b1;
  }

  }
  }

  .selectTestReportCheck-listitem-empty-box {
    width: 100%;
    text-align: center;
    line-height: 40px;

  .selectTestReportCheck-listitem-empty-img {
    padding-top: 10vh;
    width: 70px;
    height: 70px;
  }

  .selectTestReportCheck-listitem-empty-text {
    display: inline-block;
    font-size: 16px;
    color: #d7d7d7;
  }

  }
  }

  }

</style>
