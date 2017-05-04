<!-- 预约管理 -->
<template>
  <div class="doc-reservation-box">
    <div style="padding:10px 15px;">
      <div v-for="item in content" class="doc-reservation-list-box" @click="pushReservationDetail(item.order_id)">
        <div class="doc-reservation-list-content-top">
          <div class="doc-reservation-list-content-top-left">
            <span class="doc-reservation-list-content-top-span doc-reservation-list-content-top-name">{{item.patient_name}}</span>
            <span class="doc-reservation-list-content-top-span" v-if="item.sex==1">男</span>
            <span class="doc-reservation-list-content-top-span" v-else>女</span>
            <span class="doc-reservation-list-content-top-span">{{item.age}}</span>
            <span class="doc-reservation-list-content-top-span-style">{{item.disease_name}}</span>
          </div>
          <div class="doc-reservation-list-content-top-right">
            <span v-if="item.status==1" class="doc-reservation-list-content-top-span-status">待支付</span>
            <span v-else-if="item.status==2" class="doc-reservation-list-content-top-span-status">已支付等待审核</span>
            <span v-else-if="item.status==3" class="doc-reservation-list-content-top-span-status">审核通过等待医生确认</span>
            <span v-else-if="item.status==4" class="doc-reservation-list-content-top-span-status">医生已确认</span>
            <span v-else-if="item.status==5" class="doc-reservation-list-content-top-span-status">已就诊</span>
            <span v-else-if="item.status==6" class="doc-reservation-list-content-top-span-status">未就诊</span>
            <span v-else-if="item.status==7||item.status==8||item.status==9||item.status==10||item.status==11
            ||item.status==12||item.status==13" class="doc-reservation-list-content-top-span-status">已取消</span>
          </div>
        </div>
        <div class="doc-reservation-list-content-mid">
          <div class="doc-reservation-list-content-mid-top">
            <span>就诊时间:</span>
            <span>{{item.appointment_date}}</span>
            <span>{{item.week}}</span>
            <span v-if="item.am_or_pm==0">上午</span>
            <span v-else>下午</span>
          </div>
          <div class="doc-reservation-list-content-mid-line"></div>
        </div>
        <div class="doc-reservation-list-content-bottom">{{item.order_ctime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {Toast} from 'mint-ui';

  export default {
    name : 'docReservation',
    data () {
      return {
        authentication: 'd1126e11b0392a446acaf724ba9e36c7',
        data: {},
        content: [],
        order_id:''
      }
    },
    mounted () {
      this.getReservationList();
    },

    destroyed () {
      eventBus.$emit('some', this.order_id);
    },

    methods: {
      // 获取预约列表数据
      getReservationList () {
        axios.post('/api/wx/baochuan_d/getappointmentrecordlist', {
            authentication: this.authentication
        }).then((result) => {
          this.data = result.data;
          this.content = result.data.content;
          console.log(this.content);
//          for (var i=0; i<this.content.length; i++) {
//            switch (this.content[i].status) {
//              case 1:
//                this.status = '待支付'
//                break;
//              case 2:
//                this.status = '已支付等待审核'
//                break;
//              case 3:
//                this.status = '审核通过等待医生确认'
//                break;
//              case 4:
//                this.status = '医生已确认'
//                break;
//              case 5:
//                this.status = '已就诊'
//                break;
//              case 6:
//                this.status = '未就诊'
//                break;
//              case 7:
//                this.status = '失败 医生取消'
//                break;
//              case 8:
//                this.status = '失败 超时未支付自动取消'
//                break;
//              case 9:
//                this.status = '失败 未支付取消'
//                break;
//              case 10:
//                this.status = '失败 审核失败'
//                break;
//              case 11:
//                this.status = '失败 预约前一天已审核未确认自动取消'
//                break;
//              case 12:
//                this.status = '失败 运营取消'
//                break;
//              case 13:
//                this.status = '失败 预约前一天未审核 自动取消'
//                break;
//              default:
//                break;
//            }
//          }
        }).catch((error) => {
          console.log(error);
        })
      },

      pushReservationDetail (order_id) {
        this.order_id = order_id;
        this.$router.push({ path:"/baochuan_d/docReservationDetail/"});
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
          padding-top: 23px;

          .doc-reservation-list-content-top-left {
            color: #232323;
            font-size: 14px;

            .doc-reservation-list-content-top-span {
              padding-left: 15px;

            }
            .doc-reservation-list-content-top-span-style {
              color:#fff;
              /*border:1px solid #60A39B;*/
              border-radius:10px;
              padding:1px 6px;
              margin-left:4px;
              font-size:14px;
              vertical-align:middle ;
              background-color: #cfcfcf;
            }

            .doc-reservation-list-content-top-name {
              font-size: 15px;
            }

          }
          .doc-reservation-list-content-top-right {
            font-size: 15px;
            padding-right: 15px;

            .doc-reservation-list-content-top-span-status {
              color: #ff0000;
            }
          }
        }
        .doc-reservation-list-content-mid {
          padding-top: 18px;

          .doc-reservation-list-content-mid-top {
            padding-left: 15px;
            font-size: 14px;
          }

          .doc-reservation-list-content-mid-line {
            height: 1px;
            background: #eeeeee;
            margin-top: 18px;
            margin-left: 10px;
            margin-right: 10px;
          }
        }

        .doc-reservation-list-content-bottom {
          padding-top: 15px;
          padding-bottom: 12px;
          text-align: right;
          padding-right: 15px;
          font-size: 15px;
          color: #D2D2D2;
        }
    }
  }
</style>
