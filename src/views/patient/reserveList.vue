<!--预约订单列表-->
<template>
  <div class="bg-grey device-height">
    <mt-loadmore  :top-method="loadTop" :top-status.sync="topStatus">
      <dl class="order-reserve-item bg-white fs16">
        <dt class="item-header border-bot">
          <span class="fl">就诊时间：2017-03-27 周一 上午</span>
          <span class="fr color-warn">待确认</span>
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
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
  import util from '../../components/util';
    export default{
      data() {
          return {

          }
      },
      mounted () {
          this.getReserveList();
      },
      methods: {
        getReserveList(){
          this.util.formatPara();
          this.util.request.post('/')
        },
        loadTop: {

        }
      }

    }
</script>

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
