<template>
  <div class="docChoose-ptient">
    <div class="myPatientBox">
      <mt-search>
      </mt-search>
    </div>
    <div class="choose-content">
      <div class="input-box">
        <span class="iconfont icon-2" :class="{'icon-yuan1':unshow1}" @click="chooseAll"></span>
        <input type="checkbox" value="全部患者" />
        <span>全部患者</span>
      </div>
      <div class="input-box float-box">
        <span class="iconfont icon-2" :class="{'icon-yuan1':unshow2}" @click="chooseQian"></span>
        <input type="checkbox" value="签约患者" />
        <span >签约患者</span>
        <div class="iconfont  fr" :class="{'icon-zhankai':activeQian,'icon-zhankai-copy':unactiveQian}" @click="openQianYue"></div>
      </div>
      <div class="patient-list" :class="{'closeQian':closeShow}">
        <div class="patient-box">
          <span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}" @click="chooseGuan" ></span>
          <img src="../../assets/img/docinfo.png"/>
          <span class="patientName">王倩</span>
          <span class="patientAge">34</span>岁
          <span class="patientJibing">乙肝</span>
        </div>
        <div class="patient-box">
          <span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}"@click="chooseGuan" ></span>
          <img src="../../assets/img/docinfo.png"/>
          <span class="patientName">王倩</span>
          <span class="patientSex">55</span>岁
          <span class="patientJibing">乙肝</span>
        </div>
      </div>
      <div class="input-box float-box">
        <span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}" @click="chooseGuan" ></span>
        <input  type="checkbox" value="关注患者"/>
        <span >关注患者</span>
        <div class="iconfont  fr" :class="{'icon-zhankai':activeGuan,'icon-zhankai-copy':unactiveGuan}" @click="openGuanZhu"></div>
      </div>
      <div class="patient-list" :class="{'closeGuan':closeActive}">
        <div class="patient-box">
          <span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}" @click="chooseGuan" ></span>
          <img src="../../assets/img/docinfo.png"/>
          <span class="patientName">王倩</span>
          <span class="patientSex">女</span>
          <span class="patientJibing">乙肝</span>
        </div>
        <div class="patient-box">
          <span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}"@click="chooseGuan" ></span>
          <img src="../../assets/img/docinfo.png"/>
          <span class="patientName">王倩</span>
          <span class="patientSex">55</span>岁
          <span class="patientJibing">乙肝</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <button class="button-box" :class="{isButton: active}" >完成</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'docChoosePatient',
    data () {
      return {
        active : true,
        unshow1 : true,
        unshow2 : true,
        unshow3 : true,
        activeQian: false,
        unactiveQian:true,
        activeGuan:false,
        unactiveGuan:true,
        closeShow:true,
        closeActive:true
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '选择发送患者';
    },
    watch: {

    },
    methods: {
      openQianYue() {
          console.log(12)
        this.activeQian = !this.activeQian;
        this.unactiveQian = !this.unactiveQian;
        this.closeShow = !this.closeShow;
      },
      openGuanZhu () {
        this.activeGuan = !this.activeGuan;
        this.unactiveGuan = !this.unactiveGuan;
        this.closeActive = !this.closeActive;
      },
      chooseAll () {
        this.unshow1 = !this.unshow1;
      },
      chooseQian () {
        this.unshow2 = !this.unshow2;
      },
      chooseGuan() {
        this.unshow3 = !this.unshow3;
      },
    }
  }
</script>

<style lang="scss">
  .docChoose-ptient{
    min-height:100vh;
    background:#FCFCFC;
  select {
    direction: rtl;
  }
  select option {
    direction: ltr;
  }
    .choose-content{
      .patient-list{
        background:#FCFCFC;
          .patient-box:nth-of-type(1){
            -webkit-box-shadow:2px 4px 6px #D2E6E3;
            -moz-box-shadow:5px 0px 5px #D2E6E3;
            box-shadow:inset -4px 6px 6px #D2E6E3;
          }
          .patient-box{
            font-size:16px;
            color:#232323;
            width:100%;
            border-bottom:1px solid #bbb;
            padding:16px 30px;
            .icon-2{
              vertical-align: middle;
              font-size:18px;
              color:#529D98;
            }
            .icon-yuan1{
              color:#bbb
            }
            img{
              height:40px;
              width:40px;
              border-radius:50%;
              vertical-align: middle;
            }
            .patientName, .patientSex{
              color:#232323;
              font-size:15px;
              line-height:33px;
            }
            .patientJibing{
              border:1px solid #fff;
              background:#bbb;
              color:#fff;
              font-size:14px;
              padding:1px 5px;
              border-radius:10px;
            }
        }
      }
      .closeQian,.closeGuan{
        display:none;
      }
      .input-box {
        padding:16px;
        background:#fff;
        border-bottom:1px solid #ccc;
        font-size:16px;
        color:#232323;
        .icon-2{
          color:#529D98;
          font-size:18px;
        }
        .icon-yuan1{
          color:#bbb;
        }
        input{
          outline: none;
          display: none;
        }
      }
    }
    .myPatientBox {
      height: 60px;
      .mint-searchbar{
        background:#FCFCFC !important;
        .mint-searchbar-inner{
          background:#ECECEC !important;
          .mintui-search{
            text-align: center;
          }
          .mint-searchbar-cancel{
            color:#bbb!important;
          }
          .mint-searchbar-core{
            background:#ECECEC;
          }
          input::-webkit-input-placeholder{
            color:#D2D2D2;
            text-align: center;
          }
          input{
            color:#232323;
          }
        }
        }
    }
    .footer{
      position:fixed;
      bottom:0px;
      width:100%;
      margin:auto;
      .button-box{
        display: block;
        width: 95%;
        height:45px;
        margin:15px auto;
        background:#86B8B8;
        color: #ffffff;
        border:1px solid #86B8B8;
        border-radius:22px;
        outline:none;
        font-size:18px;
      }
      .button-box.isButton {
        background:#529D98;
        border:1px solid #f4f4f4;
        -webkit-box-shadow:0 0 10px #f4f4f4;
        -moz-box-shadow:0 0 10px #f4f4f4;
        box-shadow:0 0 10px #f4f4f4;
      }
    }
  }
</style>
