<!-- 预约管理 -->
<template>
  <div class="doc-reservation-box">
    <div style="padding:10px 16px;">
      <div class="doc-reservation-list-box">
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
      </div>
    </div>

  </div>
</template>

<script>

</script>

<style lang="scss">
  .doc-reservation-box {
    background-color: #f4f4f4;
    height: 100vh;

    .doc-reservation-list-box {
      /*margin: 20px;*/
      /*padding-top: 20px;*/
      margin-top: 20px;
      background-color: #fff;
      border-radius: 3px;

        .doc-reservation-list-content-top {
          display: flex;
          justify-content: space-between;
          flex-wrap: nowrap;
          padding-top: 20px;

          .doc-reservation-list-content-top-left {
            color: #232323;
            font-size: 14px;

            .doc-reservation-list-content-top-span {
              padding-left: 10px;
            }

            .doc-reservation-list-content-top-name {
              font-size: 16px;
            }

          }
          .doc-reservation-list-content-top-right {
            font-size: 16px;
            padding-right: 10px;

            .doc-reservation-list-content-top-span-status {
              color: #ff0000;
            }
          }
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
