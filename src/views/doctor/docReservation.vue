<!-- 预约管理 -->
<template>
  <div class="doc-reservation-box">
    <div style="padding:10px 16px;">
      <div v-for="item in items" class="doc-reservation-list-box">
        <div class="doc-reservation-list-content-top">
          <div class="doc-reservation-list-content-top-left">
            <span class="doc-reservation-list-content-top-span doc-reservation-list-content-top-name">张飞</span>
            <span class="doc-reservation-list-content-top-span">男</span>
            <span class="doc-reservation-list-content-top-span">28</span>
            <span class="doc-reservation-list-content-top-span">丙肝</span>
          </div>
          <div class="doc-reservation-list-content-top-right">
            <span class="doc-reservation-list-content-top-span-status">待确认</span>
          </div>
        </div>
        <div class="doc-reservation-list-content-mid">
          <div class="doc-reservation-list-content-mid-top">
            <span>就诊时间:</span>
            <span>2017-02-02</span>
            <span>周二</span>
            <span>上午</span>
          </div>
          <div class="doc-reservation-list-content-mid-line"></div>
        </div>
        <div class="doc-reservation-list-content-bottom">
          2017-02-01
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'docReservation',
    data () {
      return {
        items : [1,2,3,3,3,3,3,3,3]
      }
    }
  }
</script>

<style lang="scss">
  .doc-reservation-box {
    background-color: #f4f4f4;
    min-height: 100vh;

    .doc-reservation-list-box {
      /*margin: 20px;*/
      /*padding-top: 20px;*/
      margin-top: 20px;
      background-color: #fff;
      box-shadow:0px 0px 5px #7e8c8d; /* 边框阴影效果 */
      border-radius: 3px;

        .doc-reservation-list-content-top {
          display: flex;
          justify-content: space-between;
          flex-wrap: nowrap;
          padding-top: 20px;

          .doc-reservation-list-content-top-left {
            color: #232323;
            font-size: 12px;

            .doc-reservation-list-content-top-span {
              padding-left: 15px;
            }

            .doc-reservation-list-content-top-name {
              font-size: 14px;
            }

          }
          .doc-reservation-list-content-top-right {
            font-size: 14px;
            padding-right: 15px;

            .doc-reservation-list-content-top-span-status {
              color: #ff0000;
            }
          }
        }
        .doc-reservation-list-content-mid {
          padding-top: 15px;

          .doc-reservation-list-content-mid-top {
            padding-left: 15px;
            font-size: 12px;
          }

          .doc-reservation-list-content-mid-line {
            height: 1px;
            background: #eeeeee;
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
          }
        }

        .doc-reservation-list-content-bottom {
          padding-top: 10px;
          padding-bottom: 12px;
          text-align: right;
          padding-right: 15px;
          font-size: 12px;
          color: #D2D2D2;
        }
    }
  }
</style>
<!--<style scoped>-->
  <!--.doc-reservation-box{-->
    <!--background: #f4f4f4;-->
    <!--height:100vh;-->
  <!--}-->
  <!--.doc-reservation-list-box{-->
    <!--margin-top:10px;-->
    <!--font-size: 12px;-->
    <!--background: #fff;-->

  <!--}-->
<!--</style>-->
