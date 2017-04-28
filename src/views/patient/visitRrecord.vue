<!-- 复诊记录页 -->
<template>
    <div class="visitRrecord">
      <div class="visitRrecord-title-box">
          <span class="visitRrecord-title-text">下次复诊时间</span>
          <span class="visitRrecord-title-text">{{visitTime}}</span>
      </div>

      <div class="visitRrecord-cue-box" v-show="content.length > 0">
        <span class="visitRrecord-cue-text">..医生设置的复诊时间</span>
      </div>

      <div class="visitRrecord-list-box pos-relate" v-show="content.length > 0">
          <div class="visitRrecord-listheader-box border-bot-dash">
            <i class="iconfont icon-jilu"></i>
            <span class="visitRrecord-listtitle-text">复诊记录</span>
          </div>
          <span class="bg-grey half-circle-left circleleft pos-absolute"></span>
          <span class="bg-grey half-circle-right circleright pos-absolute"></span>

        <mt-loadmore
          :top-method="loadTop" ref="loadmore"
          :bottom-method="loadBottom"
          :bottom-all-loaded="allLoaded"
          :autoFill="false">
            <div class="visitRrecord-listcontent-box" v-for="item in content">
              <span class="visitRrecord-listitem-left-text fl fs15">第一次复诊</span>
              <span class="visitRrecord-listitem-right-text fr fs15">2017.3.1</span>
            </div>
          </mt-loadmore>
      </div>

      <div class="visitRrecord-listitem-empty-box" v-show="content.length <= 0">
        <img src="../../assets/img/integralAccount_empty_icon.png" class="visitRrecord-listitem-empty-img">
        <br/>
        <span class="visitRrecord-listitem-empty-text">暂无复诊</span>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          visitTime:'2017-01-01',
          allLoaded: false,
          nowPage: 1,
          content: [],
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

  .visitRrecord{
    height:100vh;
    width:100%;
    background: #fcfcfc;
    padding-top: 20px;
    padding-bottom:20px;

    .visitRrecord-title-box{
      background: #5da096;
      margin-left: 10px;
      margin-right: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
      border-radius: 5px;
      text-align: center;
      display: flex;
      flex-direction:column;
      justify-content:center;

      .visitRrecord-title-text{
        color: #fff;
        font-size: 15px;
        display: inline-block;
        line-height: 30px;
      }
    }

    .visitRrecord-cue-box{
      width:100%;
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 10px;

      .visitRrecord-cue-text{
        color: #666666;
        font-size: 14px;
      }
    }

    .visitRrecord-list-box{
      margin: 10px;
      background: #fff;
      border-radius: 5px;
      -webkit-box-shadow:0 0 50px #dbe5e4;
      -moz-box-shadow:0 0 50px #dbe5e4;
      box-shadow:0 0 50px #dbe5e4;

      .visitRrecord-listheader-box{
         padding : 20px;

        .visitRrecord-listtitle-text{
          color: #232323;
          font-size: 16px;
        }
      }

      .circleleft{
        top:50px;
        left:0;
        display:block;
      }

      .circleright{
        top:50px;
        right:0;
        display:block;
      }

      .visitRrecord-listcontent-box{
        padding : 20px;
        overflow:hidden;
        .visitRrecord-listitem-left-text{
          color: #232323;
        }

        .visitRrecord-listitem-right-text{
          color: #232323;
        }
      }
    }

    .visitRrecord-listitem-empty-box{
      width:100%;
      text-align:center;
      line-height: 40px;

      .visitRrecord-listitem-empty-img{
        padding-top: 20vh;
        width:70px;
        height: 70px;
      }

      .visitRrecord-listitem-empty-text{
        display:inline-block;
        font-size: 16px;
        color: #d7d7d7;
      }
    }

  }

</style>
