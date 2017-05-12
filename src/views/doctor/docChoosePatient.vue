<template>
  <div v-if="list.allPatientList.length != 0" class="docChoose-ptient">
    <div class="myPatientBox">
      <mt-search  v-model="sousuoContent">
      </mt-search>
    </div>
    <div class="sousuo-content" :class="{'noPatientList': !listActive}">
      <div class="patient-list guanzhu-list"  >
        <div class="patient-box" v-for="(item, index) in souPatientList" @click="chooseSousuoItem($event)">
          <span class="iconfont icon-yuan1" ref="patientSpanSou" @click="chooseSousuoItem($event)" :data-name="item.name" :data-id="item.patient_id" ></span>
          <img :src="item.logo" >
          <span class="patientName">{{item.name}}</span>
          <span class="patientSex">{{item.age}}岁</span>
          <span class="patientJibing">{{item.diseaseName}}</span>
        </div>
      </div>
    </div>
    <div class="choose-content" :class="{'noPatientList': listActive}">
      <div class="input-box">
        <span class="iconfont icon-2" :class="{'icon-yuan1':unshow1}" @click="chooseAll"></span>
        <input type="checkbox" value="全部患者" />
        <span class="paddingLeft">全部患者 ({{count.allPatientCount}})</span>
      </div>
      <div class="input-box float-box">
        <span class="iconfont icon-2" :class="{'icon-yuan1':unshow2}" @click="chooseQian"></span>
        <input type="checkbox" value="签约患者" />
        <span class="paddingLeft">签约患者 ({{count.managePatientCount}})</span>
        <div class="iconfont  fr" :class="{'icon-zhankai':activeQian,'icon-zhankai-copy':unactiveQian}" @click="openQianYue"></div>
      </div>
      <div class="patient-list" :class="{'closeQian':closeShow}">
        <div class="patient-box" v-for="(item, index) in list.managePatientList">
          <span class="iconfont icon-yuan1" ref="patientSpan" @click="chooseQianItem($event, index)" :data-name="item.name" :data-id="item.patient_id"></span>
          <img :src="item.logo" >
          <span class="patientName" ref="bbb">{{item.name}}</span>
          <span class="patientAge">{{item.age}}岁</span>
          <span class="patientJibing">{{item.diseaseName}}</span>
        </div>
      </div>
      <div class="closeHeight" :class="{'showHeight':closeHeight}"></div>
      <div class="input-box float-box" :class="{'guanzhu-list':closeActive}">
        <span class="iconfont  icon-2" :class="{'icon-yuan1':unshow3}" @click="chooseGuan"></span>
        <input  type="checkbox" value="关注患者"/>
        <span class="paddingLeft">关注患者 ({{count.attentionPatientCount}})</span>
        <div class="iconfont  fr" :class="{'icon-zhankai':activeGuan,'icon-zhankai-copy':unactiveGuan}" @click="openGuanZhu"></div>
      </div>
       <div class="patient-list guanzhu-list" :class="{'closeGuan':closeActive}">
          <div class="patient-box" v-for="(item, index) in list.attentionPatientList" >
            <span ref="patientSpanGuan" class="iconfont icon-yuan1" @click="chooseGuanItem($event,item.patient_id)" :data-id="item.patient_id" :data-name="item.name" ></span>
            <img :src="item.logo" >
            <span class="patientName">{{item.name}}</span>
            <span class="patientSex">{{item.age}}岁</span>
            <span class="patientJibing">{{item.diseaseName}}</span>
          </div>
        </div>
    </div>
    <div class="footer">
      <button v-if="active"  @click="wancheng" class="button-box">完成</button>
      <button v-else class="nobutton-box"  disabled>完成</button>
    </div>
  </div>
  <div v-else id="nodataList">
    <img src="../../assets/img/nodatatips.png"/>
    <p class="nodataText">暂无患者</p>
  </div>
</template>
<script>
  import axios from 'axios'
  import { Toast, MessageBox, Indicator, DatetimePicker } from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  export default {
    name: 'docChoosePatient',
    data () {
      return {
        authentication: '9abada2c209a05e2ebd462f7bf68c5cf',
        status: 0,
        sousuoContent: '',
        count: {
          allPatientCount: '',
          managePatientCount: '',
          attentionPatientCount: '',
        },
        localStoragePatientId: '',
        listActive: false,
//          完成按钮显示状态
        active: false,
//        全部患者未选中
        unshow1: true,
//        签约患者未选中
        unshow2: true,
//        关注患者未选中
        unshow3: true,
//        签约收起
        activeQian: false,
        unactiveQian: true,
//        关注收起
        activeGuan: false,
        unactiveGuan: true,
        closeShow: true,
//        关注患者关闭，签约患者较多时
        closeActive: true,
        closeHeight: false,
        obj: {
          z1: false,
          z2: false
        },
        content: '',
        soumessage: [],
        list: {
          allPatientList: [],
          attentionPatientList: [],
          managePatientList: []
        },
        souPatientList: [],
        patientId: [],
        patientName: []
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '选择发送患者';
    },
    watch: {
      'sousuoContent'() {
        this.listActive = true;
        if(this.sousuoContent == ''){
          this.listActive = false;
        }
        this.sousuoContent = this.sousuoContent.replace(/(^\s+)|(\s+$)/g,"");//去掉前后空格
        var params = {
          authentication: this.authentication,
          name: this.sousuoContent
        }
        netWrokUtils.post('/wx/baochuan_d/choosepatientlist', params,  (result)=> {
          this.souPatientList = result.data.content.allPatientList
          console.log(result.data.content.allPatientCount)
          if(result.data.content.allPatientCount == 0){
            Toast('未找到患者');
            return;
          }
        }, (error_result)=> {
//          Indicator.close();
          Toast(error_result);
        })
      },
       chooseGuan(){
        if (this.unshow3){
            this.active = true;
        }
      },
      'obj.z1' () {
          if(this.obj.z1 || this.obj.z2){
            this.active = true
          }else{
            this.active = false
          }
      },
      'obj.z2' () {
        if(this.obj.z1 || this.obj.z2){
          this.active = true
        }else{
          this.active = false
        }
      },
      'unshow2'() {
        if(!this.unshow2){
              this.active = true;
        }
          if((this.unshow2 == false) && (this.unshow3 == false)){
              this.unshow1 = false
          }else{
            this.unshow1 = true
          }
      },
      'unshow3'() {
        if(!this.unshow3){
          this.active = true;
        }
        if((this.unshow2 == false) && (this.unshow3 == false)){
          this.unshow1 = false
        }else{
          this.unshow1 = true
        }
      }
    },
    mounted(){
      this.getPatientList(this.authentication)
    },
    methods: {
      getChoosePatient() {
          this.$nextTick(() => {
            this.localStoragePatientId = window.localStorage.getItem('patientId');
            if(this.localStoragePatientId){
              var cheSpans = this.$refs.patientSpan,
                  cheSpanG = this.$refs.patientSpanGuan;
              var arr = []
              for (let i in cheSpans) {
                arr.push(cheSpans[i]);
              }
              for (let i in cheSpanG) {
                arr.push(cheSpanG[i]);
              }
              var patientIdArr = this.localStoragePatientId.split(",");
                for(let i in arr){
                  for(let j in patientIdArr){
                      if((arr[i].attributes.getNamedItem('data-id').nodeValue) == patientIdArr[j]){
                        arr[i].classList.value = 'iconfont icon-2'
                      }
                  }
                }
                   var aaa = 0,
                      bbb = 0

                  for(let i in this.$refs.patientSpanGuan) {
                    if (this.$refs.patientSpanGuan[i].className == 'iconfont icon-2') {
                      aaa++
                    }
                  }
                  for(let i in this.$refs.patientSpan) {
                    if (this.$refs.patientSpan[i].className == 'iconfont icon-2') {
                      bbb++
                    }
                  }
                  if(aaa > 0){
                    this.obj.z2 = true
                  }
                  if(bbb > 0){
                    this.obj.z1 = true
                  }
                  if (bbb == this.$refs.patientSpan.length) {
                    this.unshow2 = false
                  }
                  if (aaa == this.$refs.patientSpanGuan.length) {
                    this.unshow3 = false
                  }
            }
          })
      },
      getPatientList(auth,name) {
        var that = this;
        var params = {
          authentication: auth,
          name: name
        }
        netWrokUtils.post('/wx/baochuan_d/choosepatientlist', params, function (result) {
          that.list.allPatientList = result.data.content.allPatientList
          that.list.attentionPatientList = result.data.content.attentionPatientList
          that.list.managePatientList = result.data.content.managePatientList
          that.count.allPatientCount = result.data.content.allPatientCount
          that.count.attentionPatientCount = result.data.content.attentionPatientCount
          that.count.managePatientCount = result.data.content.managePatientCount
          that.getChoosePatient()
        }, function (error_result) {
//          Indicator.close();
          Toast(error_result);
        })
      },
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
        this.unshow3 = !this.unshow3;
        this.unshow2 = !this.unshow2;
        if(!this.unshow3){
          this.obj.z1 = true;
        }else{
          this.obj.z1 = false;
        }
        var Spans = this.$refs.patientSpan
        var spanGuan = this.$refs.patientSpanGuan
        if (!this.unshow3 ) {
          // 全选
          for (let i in Spans) {
            Spans[i].classList.value = 'iconfont icon-2'
            console.log( Spans[i].classList)
          }
          for (let i in spanGuan) {
            spanGuan[i].classList.value = 'iconfont icon-2'
          }
        } else {
          for (let i in Spans) {

            Spans[i].classList.value = 'iconfont icon-yuan1'
          }
          for (let i in spanGuan) {
            spanGuan[i].classList.value = 'iconfont icon-yuan1'
          }
        }
      },
      chooseGuan() {
        this.unshow3 = !this.unshow3;
        if(!this.unshow3){
          this.obj.z2 = true;
        }else{
          this.obj.z2 = false
        }
        var SpanG = this.$refs.patientSpanGuan
        if (!this.unshow3) {
          // 全选
          for (let i in SpanG) {
            SpanG[i].classList.value = 'iconfont icon-2'
          }
        } else {
          for (let i in SpanG) {
            SpanG[i].classList.value = 'iconfont icon-yuan1'
          }
        }
      },
      chooseQian () {
        this.unshow2 = !this.unshow2
        if(!this.unshow2){
          this.obj.z1 = true;
        }else{
          this.obj.z1 = false;
        }
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
      chooseQianItem(ele) {
        this.unshow2 = true
        if (ele.target.className.indexOf('icon-yuan1') > 0) {
          ele.target.className = 'iconfont icon-2'
        } else {
          ele.target.className = 'iconfont icon-yuan1'
        }
        var aa = this.$refs.patientSpan
        var num = 0
        for (let i in aa) {
          if (aa[i].classList.value.indexOf('icon-2') > 0) {
            this.obj.z1 = true
            num++
          }
          if (num == 0) {
            this.obj.z1 = false
          }
          if (num == aa.length) {
            this.unshow2 = false
          }
        }
      },
      chooseGuanItem(ele) {
        this.unshow3 = true
        if (ele.target.className.indexOf('icon-yuan1') > 0) {
          ele.target.className = 'iconfont icon-2'
        } else {
          ele.target.className = 'iconfont icon-yuan1'
        }
        var aa = this.$refs.patientSpanGuan
        var num = 0
        for (let i in aa) {
          if (aa[i].classList.value.indexOf('icon-2') > 0) {
            this.obj.z2 = true
            num++
          }
          if (num == 0) {
            this.obj.z2 = false
          }
          if (num == aa.length) {
            this.unshow3 = false
          }
        }
      },
      chooseSousuoItem(ele) {
          console.log(123)
        if (ele.target.className.indexOf('icon-yuan1') > 0) {
          ele.target.className = 'iconfont icon-2'
        } else {
          ele.target.className = 'iconfont icon-yuan1'
        }
        var aa = this.$refs.patientSpanSou
        var num = 0
        for (let i in aa) {
          if (aa[i].classList.value.indexOf('icon-2') > 0) {
            this.obj.z1 = true
            num++
          }
          if (num == 0) {
            this.obj.z1 = false
          }
//          if (num == aa.length) {
//            this.unshow2 = false
//          }
        }
      },
      wancheng () {
        this.patientId = [];
        this.patientName = [];
        var cheSpans = this.$refs.patientSpan,
            cheSpanG = this.$refs.patientSpanGuan,
            arr = cheSpans.concat(cheSpanG);
        for (let i in arr) {
            if (arr[i].classList.value.indexOf('icon-2') > 0) {
              this.patientId.push(arr[i].attributes.getNamedItem('data-id').nodeValue)
              this.patientName.push(arr[i].attributes.getNamedItem('data-name').nodeValue)
            }
        }
        window.localStorage.setItem('patientId',this.patientId.join(','));
        window.localStorage.setItem('patientName',this.patientName.join(','));
        if(this.patientId.join(',') != ''){
          this.$router.push({ path:"/baochuan_d/docFaTongzhi"});
        }

      }
    }
  }
</script>

<style lang="scss">
  .docChoose-ptient{
    min-height:100vh;
    background:#FCFCFC;
    .noPatientList{
      display:none;
    }
    select {
      direction: rtl;
    }
    select option {
      direction: ltr;
    }
    .choose-content,.sousuo-content {
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
        background:#fff !important;
        padding:15px 10px;
        .mint-searchbar-inner{
          background:#ECECEC !important;
          border-radius:30px;
          .mintui-search{
            text-align: center;
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
        .mint-searchbar-cancel{
          color:#bbb;
          font-size:16px;
        }
      }
    }
    .footer{
      position:fixed;
      bottom:0;
      width:100%;
      margin:auto;
    }
  }
</style>
