<!--预约订单列表-->
<template>
  <div class="bg-grey device-height">
    <div class="page-loadmore">
      <mt-loadmore
        @top-status-change="handleTopChange"
        :top-method="loadTop" ref="loadmore"
        :bottom-method="loadBottom"
        @bottom-status-change="handleBottomChange"
        :bottom-all-loaded="allLoaded">
        <dl class="order-reserve-item bg-white fs16" v-for="item in message">
          <dt class="item-header border-bot">
            <span class="fl">就诊时间：{{item.buyTime}}</span>
            <span class="fr color-warn">待确认{{item.doctorId}}</span>
          </dt>
          <dd class="item-content">
            <span class="doc-info">
              <img class="fl" src="../../assets/img/second.png" alt="正在加载">
              <span class="doc-info-tip fl">
                <em>王鲲鹏 主任医师</em>
                <p class="doc-hospital color-disable fs16">保定市传染病医院</p>
              </span>
            </span>
            <span class="item-tips border-top">建议您在2017-03-24 17:00~18:00到达医院就诊</span>
          </dd>
        </dl>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <mt-spinner type="snake"></mt-spinner>
          <span v-show="topStatus === 'loading'">正在刷新</span>
        </div>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'pull' }">加载更多</span>
          <mt-spinner type="snake"></mt-spinner>
          <span v-show="bottomStatus === 'loading'">正在加载</span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<style scoped>
  .order-reserve-item{
    width:92%;
    margin:4% 4% 0;
    border-radius:3px;
    box-shadow: 0 0 8px #d2e0e0;
  }
  .item-header,.item-content{
    width:92%;
    padding:15px 0;
    margin:0 4%;
    overflow: hidden;
  }
  .item-content{
    padding:0;
  }

  .doc-info{
    display:block;
    overflow: hidden;
    padding:10px 0;
  }
  .doc-info img{
    width:50px;
    height:50px;
    border-radius: 50%;
  }
  .doc-info-tip{
    width: 78%;
    margin:6px 0 0 6px;
    line-height:22px;
    flex-direction: column;

  }
  .doc-info-tip .doc-hospital{
    width:100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .item-tips{
    padding:14px 0;
    display: inline-block;
    line-height:20px;
  }

</style>


<script>
  import util from '../../components/util';
  import _ from 'lodash';
    export default{
      data() {
          return {
              topStatus:false,
              bottomStatus:false,
              allLoaded: false,
              nowPage: 1,
              message: [],
              postData : {
                sign: 'f9780de6803b8077534534f44fe0535d',
                patientId: 6647,
                rows: 2
              },
          }
      },
      mounted () {
          this.getReserveList();
      },
      methods: {
        handleTopChange(status){
            this.topStatus=status;
        },
        handleBottomChange(status) {
          this.bottomStatus = status;
        },
        getReserveList(){
            let that=this;
            that.util.request.post('/product/app/getBuyProductServiceByPatientIdPage.htm?' + that.util.formatPara(that.postData) +'&page=' + that.nowPage).then((resp)=>
            {that.message = resp.data.data.rows;
            }).catch((error) => {console.log(error);
            })
        },
        loadTop() {
          console.log(2);
//          this.getReserveList();
//          window.location.href;
          this.$refs.loadmore.onTopLoaded();
        },
        loadBottom(){
            console.log(1);
          let _this = this;
          _this.nowPage++;
          _this.util.request.post('/product/app/getBuyProductServiceByPatientIdPage.htm?' + _this.util.formatPara(_this.postData) +'&page=' + _this.nowPage)
            .then((resp)=>{
                console.log(resp);
                if(_this.nowPage * _this.postData.size >= resp.data.total){
                    _this.allLoaded = true;
                }else{
                  _this.message = _this.message.concat(resp.data.data.rows);
                }
          }).catch((error) => {
            console.log(error);
          });
        this.$refs.loadmore.onBottomLoaded();
        }

      }

    }
</script>

