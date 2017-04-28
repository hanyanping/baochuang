<!-- 预约列表页 -->
<template>
  <div class="subscribeList bg-grey">
    <div class="subscribeList-box">
      <div class="subscribeList-header-box">
        <img src="../../assets/img/second.png" class="subscribeList-title-img fl">
        <div class="doctor-icon-info fl">
          <div class="doctor-profession">
            <span class="fs15" style="color: #232323">王医生</span>
            <span class="fs14" style="color: #5b5b5b">主治医生</span>
          </div>
          <p>
            <span class="fs14" style="color: #5b5b5b">保定市传染病医院</span>
            <span class="fs14" style="color: #5b5b5b">传染科</span>
          </p>
        </div>
      </div>
    </div>

    <div class="subscribeList-list-box" v-show="content.length > 0">
      <mt-loadmore
        :top-method="loadTop" ref="loadmore"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :autoFill="false">
        <div class="subscribeList-listitem-box" v-for="item in content">
          <div class="subscribeList-listitem-line"></div>
          <div class="subscribeList-listitem-row">
            <i class="iconfont icon-shijian" style="color: #545454"></i>
            <span class="fs14" style="color: #545454">2017-05-01</span>
          </div>
          <div class="subscribeList-listitem-row">
            <span class="fs14" style="color: #545454">星期一下午</span>
            <span class="fs14" style="color: #545454">余号6人</span>
          </div>
          <i class="iconfont icon-jiantou subscribeList-listitem-icon"></i>
        </div>
      </mt-loadmore>
    </div>

    <div class="subscribeList-listitem-empty-box" v-show="content.length <= 0">
      <img src="../../assets/img/integralAccount_empty_icon.png" class="subscribeList-listitem-empty-img">
      <br/>
      <span class="subscribeList-listitem-empty-text">暂无预约</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visitTime: '2017-01-01',
        content:[],
        allLoaded: false,
        nowPage: 1,
        message: [],
        isShow : false,
        postData: {
          authentication: 'f9780de6803b8077534534f44fe0535d',
          rows: 10,
          page: 1
        }
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

  .subscribeList {
    height: 100vh;
    width: 100%;
    background: #fcfcfc;
    overflow:hidden;
    text-align: center;

    .subscribeList-box{
      width:92%;
      margin: 15px 4%;
      background: white;
      border-radius: 5px;

      .subscribeList-header-box{
        padding : 10px;
        overflow:hidden;
        .subscribeList-title-img{
          border-radius: 50%;
        }
        .doctor-icon-info{
          margin-left:5px;margin-top:6px;
          .doctor-profession{
            margin-bottom:4px;
          }
        }
      }
    }

    .subscribeList-list-box{
      width: 92%;
      margin: 10px 4%;
      background: white;

      .subscribeList-listitem-box {
        -webkit-box-shadow:0 0 50px #dbe5e4;
        -moz-box-shadow:0 0 50px #dbe5e4;
        box-shadow:0 0 50px #dbe5e4;
        margin-bottom: 2vh;
        height: 60px;

        .subscribeList-listitem-line {
          width: 10px;
          height: 100%;
          float: left;
          background: #06b80a;
        }

        .subscribeList-listitem-row {
          padding: 5px 10px;
          width: 70%;
          float: left;
        }

        .subscribeList-listitem-icon {
          float: right;
          margin-top: -8px;
          margin-right: 10px;
        }
      }
    }

    .subscribeList-listitem-empty-box{
      width:100%;
      text-align:center;
      line-height: 40px;

      .subscribeList-listitem-empty-img{
        padding-top: 10vh;
        width:70px;
        height: 70px;
      }

      .subscribeList-listitem-empty-text{
        display:inline-block;
        font-size: 16px;
        color: #d7d7d7;
      }
    }

  }

</style>
