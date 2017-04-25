<template>
  <div class="docChoose-ptient">
    <div class="myPatientBox">
      <mt-search v-model="content">
      </mt-search>
    </div>
    <!--<div class="sousuo-content">-->
      <!--<div class="input-box">-->
        <!--<span class="iconfont icon-2" :class="{'icon-yuan1':unshow1}" @click="chooseAll"></span>-->
        <!--<input type="checkbox" value="全部患者" />-->
        <!--<span class="paddingLeft">全部患者</span>-->
      <!--</div>-->
      <!--<div class="input-box float-box">-->
        <!--<span class="iconfont icon-2" :class="{'icon-yuan1':unshow2}" @click="chooseQian"></span>-->
        <!--<input type="checkbox" value="签约患者" />-->
        <!--<span class="paddingLeft">签约患者</span>-->
        <!--<div class="iconfont  fr" :class="{'icon-zhankai':activeQian,'icon-zhankai-copy':unactiveQian}" @click="openQianYue"></div>-->
      <!--</div>-->
      <!--<div class="patient-list" :class="{'closeQian':closeShow}">-->
        <!--<div class="patient-box">-->
          <!--<span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}" @click="chooseGuan" ></span>-->
          <!--<img src="../../assets/img/docinfo.png"/>-->
          <!--<span class="patientName">王倩</span>-->
          <!--<span class="patientAge">34</span>岁-->
          <!--<span class="patientJibing">乙肝</span>-->
        <!--</div>-->
        <!--<div class="patient-box">-->
          <!--<span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}"@click="chooseGuan" ></span>-->
          <!--<img src="../../assets/img/docinfo.png"/>-->
          <!--<span class="patientName">王倩</span>-->
          <!--<span class="patientSex">55</span>岁-->
          <!--<span class="patientJibing">乙肝</span>-->
        <!--</div>-->
        <!--<div class="patient-box">-->
          <!--<span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}" @click="chooseGuan" ></span>-->
          <!--<img src="../../assets/img/docinfo.png"/>-->
          <!--<span class="patientName">王倩</span>-->
          <!--<span class="patientAge">34</span>岁-->
          <!--<span class="patientJibing">乙肝</span>-->
        <!--</div>-->
        <!--<div class="patient-box">-->
          <!--<span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}"@click="chooseGuan" ></span>-->
          <!--<img src="../../assets/img/docinfo.png"/>-->
          <!--<span class="patientName">王倩</span>-->
          <!--<span class="patientSex">55</span>岁-->
          <!--<span class="patientJibing">乙肝</span>-->
        <!--</div>-->
        <!--<div class="patient-box">-->
          <!--<span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}" @click="chooseGuan" ></span>-->
          <!--<img src="../../assets/img/docinfo.png"/>-->
          <!--<span class="patientName">王倩</span>-->
          <!--<span class="patientAge">34</span>岁-->
          <!--<span class="patientJibing">乙肝</span>-->
        <!--</div>-->
        <!--<div class="patient-box">-->
          <!--<span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}"@click="chooseGuan" ></span>-->
          <!--<img src="../../assets/img/docinfo.png"/>-->
          <!--<span class="patientName">王倩</span>-->
          <!--<span class="patientSex">55</span>岁-->
          <!--<span class="patientJibing">乙肝</span>-->
        <!--</div><div class="patient-box">-->
        <!--<span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}" @click="chooseGuan" ></span>-->
        <!--<img src="../../assets/img/docinfo.png"/>-->
        <!--<span class="patientName">王倩</span>-->
        <!--<span class="patientAge">34</span>岁-->
        <!--<span class="patientJibing">乙肝</span>-->
      <!--</div>-->
        <!--<div class="patient-box">-->
          <!--<span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}"@click="chooseGuan" ></span>-->
          <!--<img src="../../assets/img/docinfo.png"/>-->
          <!--<span class="patientName">王倩</span>-->
          <!--<span class="patientSex">55</span>岁-->
          <!--<span class="patientJibing">乙肝</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash;<div class="closeHeight" :class="{'showHeight':closeHeight}"></div>&ndash;&gt;-->
      <!--<div class="input-box float-box" :class="{'guanzhu-list':closeActive}">-->
        <!--<span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}" @click="chooseGuan" ></span>-->
        <!--<input  type="checkbox" value="关注患者"/>-->
        <!--<span class="paddingLeft">关注患者</span>-->
        <!--<div class="iconfont  fr" :class="{'icon-zhankai':activeGuan,'icon-zhankai-copy':unactiveGuan}" @click="openGuanZhu"></div>-->
      <!--</div>-->
      <!--<div class="patient-list guanzhu-list" :class="{'closeGuan':closeActive}">-->
        <!--<div class="patient-box">-->
          <!--<span class="iconfont icon-2" :class="{'icon-yuan1':unshow3}" @click="chooseGuan" ></span>-->
          <!--<img src="../../assets/img/docinfo.png"/>-->
          <!--<span class="patientName">王倩</span>-->
          <!--<span class="patientSex">女</span>-->
          <!--<span class="patientJibing">乙肝</span>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="choose-content">
      <div class="input-box">
        <span class="iconfont icon-2" :class="{'icon-yuan1':unshow1}" @click="chooseAll"></span>
        <input type="checkbox" value="全部患者" />
        <span class="paddingLeft">全部患者</span>
      </div>
      <div class="input-box float-box">
        <span class="iconfont icon-2" :class="{'icon-yuan1':unshow2}" @click="chooseQian"></span>
        <input type="checkbox" value="签约患者" />
        <span class="paddingLeft">签约患者</span>
        <div class="iconfont  fr" :class="{'icon-zhankai':activeQian,'icon-zhankai-copy':unactiveQian}" @click="openQianYue"></div>
      </div>
      <div class="patient-list" :class="{'closeQian':closeShow}">
        <div class="patient-box" v-for="(item, index) in lists">
          <span class="iconfont icon-yuan1" @click="chooseGuan($event, index)" :data-id="item.id" ref="patientSpan"></span>
          <img src="../../assets/img/docinfo.png"/>
          <span class="patientName">{{item.name}}</span>
          <span class="patientAge">{{item.age}}岁</span>
          <span class="patientJibing">{{item.bing}}</span>
        </div>
      </div>
      <!--<div class="closeHeight" :class="{'showHeight':closeHeight}"></div>-->
      <div class="input-box float-box" :class="{'guanzhu-list':closeActive}">
        <span class="iconfont icon-2" @click="chooseGuan"></span>
        <input  type="checkbox" value="关注患者"/>
        <span class="paddingLeft">关注患者</span>
        <div class="iconfont  fr" :class="{'icon-zhankai':activeGuan,'icon-zhankai-copy':unactiveGuan}" @click="openGuanZhu"></div>
      </div>
      <div class="patient-list guanzhu-list" :class="{'closeGuan':closeActive}">
        <div class="patient-box">
          <span class="iconfont icon-2" @click="chooseGuan" ></span>
          <img src="../../assets/img/docinfo.png"/>
          <span class="patientName">王倩</span>
          <span class="patientSex">女</span>
          <span class="patientJibing">乙肝</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <button class="button-box" :class="{isButton: active}" @click="wancheng">完成</button>
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
        activeQian: false,
        unactiveQian:true,
        activeGuan:false,
        unactiveGuan:true,
        closeShow:true,
        closeActive:true,
        closeHeight:false,
        content:'',
        lists: [
          {
            name: '狗韩',
            id: 1,
            age: 28,
            url: '',
            bing: '乙肝'
          },
          {
            name: '琛',
            id: 2,
            age: 24,
            url: '',
            bing: '没毛病'
          },
          {
            name: '韩',
            id: 3,
            age: 30,
            url: '',
            bing: '狂犬'
          }
        ],
        patientId: []
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '选择发送患者';
    },
    watch: {
      'content'() {
          console.log(this.content)
      }
    },
    methods: {
      openQianYue() {
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
        this.unshow2 = !this.unshow2
        var Spans = this.$refs.patientSpan
        if (!this.unshow2) {
            // 全选
            for (let i in Spans) {
              Spans[i].classList.value = 'iconfont icon-2'
            }
        } else {
          for (let i in Spans) {
            Spans[i].classList.value = 'iconfont icon-yuan1'
          }
        }
      },
      chooseGuan(ele) {
        if (ele.target.className.indexOf('icon-yuan1') > 0) {
          ele.target.className = 'iconfont icon-2'
        } else {
          ele.target.className = 'iconfont icon-yuan1'
        }
      },
      wancheng () {
        this.patientId = []
        var cheSpans = this.$refs.patientSpan
        for (let i in cheSpans) {
            if (cheSpans[i].classList.value.indexOf('icon-2') > 0) {
              this.patientId.push(cheSpans[i].attributes.getNamedItem('data-id').nodeValue)
            }
        }
        console.log(this.patientId.join(','))
      }
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
      .closeHeight{
        height:0;
        width:100%;
      }
      .showHeight{
        height:100px;
      }
      .patient-list{
          background:#FCFCFC;
          width:100%;
          overflow:hidden;
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
              padding-right:10px;
            }
            .icon-yuan1{
              color:#bbb;
              padding-right:10px;
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
      .guanzhu-list{
        margin-bottom:160px;
      }
      .closeQian,.closeGuan{
        display: none;
      }
      .input-box {
        padding:16px;
        background:#fff;
        border-bottom:1px solid #ccc;
        font-size:16px;
        color:#232323;
        .paddingLeft{
          padding-left:10px;
        }
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
      bottom:0;
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
