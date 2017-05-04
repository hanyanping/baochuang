<!-- 完善信息 -->
<template>
  <div class="perfectInfoContainer">
    <div class="perfectInfoTopBox">
      <div class="perfectInfoTopName">
        <span class="perfectInfoTopNameSpan">姓名</span>
        <input class="perfectInfoTopNameInput" placeholder="请输入姓名" maxlength="6" v-model="requestJson.name">
      </div>

      <div class="perfectInfoTopDepartment">
        <span class="perfectInfoTopDepartmentSpan">科室</span>
        <select class="perfectInfoTopDepartmentSelect" id="selectDepar" v-model="requestJson.hospitalDepartmentId">
          <option value="">请选择科室</option>
          <option v-for="dapart in hospitalDapartList" :value="dapart.id">{{dapart.name}}</option>
        </select>
      </div>

      <div class="perfectInfoTopTitle">
        <span class="perfectInfoTopTitleSpan">职称</span>
        <select class="perfectInfoTopTitleSelect" id="selectGrade" v-model="requestJson.grade">
          <option value="">请选择职称</option>
          <option v-for="(position, index) in grade" :value="index" >{{position}}</option>
        </select>
      </div>
    </div>

    <button class="perfectInfoBottomButton" @click="commitInfo">确 认</button>
  </div>
</template>

<script>

  import axios from 'axios'
  import {Toast} from 'mint-ui';

  export default {
    name: 'doctorPerfectInfo',
    data () {
      return {

        data: {},
        hospitalDapartList: [],
        grade: [],
        requestJson: {
          authentication: 'd1126e11b0392a446acaf724ba9e36c7',
          name: '',
          hospitalDepartmentId: '',
          grade: '',
          mobile: ''
        },
      }
    },
    created() {
    },

    mounted() {
      this.getPerfectinfo();
    },

//    watch: {
//      'selectGrade' () {
//        console.log(document.getElementById("selectGrade").value);
//        this.selectGrade = document.getElementById("selectGrade").value;
//      },
//      'selectDepar' () {
//        console.log(document.getElementById("selectDepar").value);
//        this.selectDepar = document.getElementById("selectDepar").value;
//      }
//    },

    methods: {
      // 获取科室、职称
      getPerfectinfo () {
        axios.get('/api/wx/baochuan_d/perfectinfo', {
          params: {
            authentication: this.authentication
          }
        }).then((result) => {
          console.log(result);
          this.data = result.data;
          this.hospitalDapartList = result.data.content.hospitalDapartList;
          this.grade = result.data.content.grade;
        }).catch((error) => {
          console.log(error);
          Toast('网络不给力 ! 请稍后再试');
        })
      },
      // 完善信息提交
      commitInfo () {
        console.log('点击了提交按钮');
        if (this.requestJson.name == '' || this.requestJson.name == undefined) {
          Toast('请输入姓名');
          return;
        } else if (this.requestJson.hospitalDepartmentId == '' || this.requestJson.name == undefined) {
          Toast('请选择科室');
          return;
        } else if (this.requestJson.grade == '' || this.requestJson.name == undefined) {
          Toast('请选择职称');
          return;
        } else  {
          Toast('可以提交了');
          console.log(this.requestJson.name);
          console.log(this.requestJson.hospitalDepartmentId);
          console.log(this.requestJson.grade);
          axios.post('/api/wx/baochuan_d/saveinfo', this.requestJson, {
            params: {
              authentication: 'd1126e11b0392a446acaf724ba9e36c7',
              name: this.requestJson.name,
              hospitalDepartmentId: this.requestJson.hospitalDepartmentId,
              grade: this.requestJson.grade,
            }
          }).then((result) => {
            console.log(result);
          })
        }
      },
    }
  }
</script>

<style lang="scss">
  .perfectInfoContainer {
    position: fixed; /* 固定 */
    height: 100vh;
    width: 100%;
    background-image: url('../../assets/img/bgPerfectInfo.png');
    background-size: 100% 100%;

    .perfectInfoTopBox {
      margin: 50px auto;
      width: 70%;

      .perfectInfoTopName {

        .perfectInfoTopNameSpan {
          color: #ffffff;
        }

        .perfectInfoTopNameInput {
          background-color:transparent;
          color:#fff;
          FILTER: alpha(opacity=0); /*androd*/
          appearance:none;  /*下拉框去掉右侧图标*/
          -moz-appearance:none;
          -webkit-appearance:none;
          float: right;
          outline: none;
          text-align: center;
          width: 80%;
          border-bottom: 1px solid #fff;
          padding-bottom: 10px;
        }
      }

      .perfectInfoTopDepartment {
        padding-top: 70px;

        .perfectInfoTopDepartmentSpan {
          color: #ffffff;
        }

        .perfectInfoTopDepartmentSelect {
          float: right;
          color: #ffffff;
          width: 80%;
          border: none;
          border-bottom: 1px solid #ffffff;
          padding-bottom: 10px;
          padding-left: 25%;
          outline: none;
          /*background: rgba(255,255,255,0);*/
          background-color:transparent;
          -webkit-appearance:none;
          -webkit-border-radius: 0px;
          font-size: 15px;
        }
      }

      .perfectInfoTopTitle {
        padding-top: 70px;

        .perfectInfoTopTitleSpan {
          color: #ffffff;
        }

        .perfectInfoTopTitleSelect {
          float: right;
          color: #ffffff;
          width: 80%;
          border: none;
          border-bottom: 1px solid #ffffff;
          padding-bottom: 10px;
          padding-left: 25%;
          outline: none;
          /*background: rgba(255,255,255,0);*/
          background-color:transparent;
          -webkit-appearance:none;
          -webkit-border-radius: 0px;
          font-size: 15px;
        }
      }
    }

    .perfectInfoBottomButton {
      display: block;
      width: 90%;
      height:45px;
      margin: auto;
      /*background:#529D98;*/
      background: rgba(0,0,0,0);
      color: #ffffff;
      border:1px solid #86B8B8;
      border-radius:22px;
      margin-top:160px;
      outline: none;
      font-size: 16px;
    }
  }
</style>
