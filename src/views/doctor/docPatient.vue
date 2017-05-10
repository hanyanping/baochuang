<template>
  <div class="docBox">
    <div class="myPatientBox">
      <mt-search  v-model="sousuoContent">
      </mt-search>
    </div>
    <div class="myPatientContent">
      <div class="sousuo-patient" :class="{'noPatientList': !listActive}">
        <div class="patient-box">
          <div class="patient-list" v-for="item in soumessage"  @click="goConsult(item.patient_id)">
            <div class="patient-info-box">
              <div class="patient-img">
                <img :src="item.logo" >
              </div>
              <div class="patient-info">
                <!--签约患者-->
                <div class="patient-name-info"  v-if="item.revisit != ''">
                  <span class="patient-name">{{item.name}}</span>
                  <span class="patient-age">{{item.age}}岁</span>
                  <i v-if="item.sex == 0" class="iconfont icon-nv"></i>
                  <i v-else class="iconfont icon-nan"></i>
                  <span class="jibing">{{item.diseaseName}}</span>
                </div>
                <!--关注患者无互动信息-->
                <div class="patient-name-info" style="line-height:44px;" v-if="item.revisit == '' && item.activite == ''">
                  <span class="patient-name">{{item.name}}</span>
                  <span class="patient-age">{{item.age}}</span>
                  <i v-if="item.sex == 0" class="iconfont icon-nv"></i>
                  <i v-else class="iconfont icon-nan"></i>
                  <span class="jibing">{{item.diseaseName}}</span>
                </div>
                <!--关注患者有互动信息-->
                <div class="patient-name-info" v-if="item.revisit == '' && item.activite != ''">
                  <span class="patient-name">{{item.name}}</span>
                  <span class="patient-age">{{item.age}}</span>
                  <i v-if="item.sex == 0" class="iconfont icon-nv"></i>
                  <i v-else class="iconfont icon-nan"></i>
                  <span class="jibing">{{item.diseaseName}}</span>
                </div>
                <div class="visit-time" v-if="item.revisit == '' && item.activite !=''">
                  {{item.activite}}
                </div>
                <!--签约患者复诊信息-->
                <div class="visit-time" v-if="item.revisit != ''">
                  复诊时间 : {{item.revisit}}
                </div>
              </div>
            </div>
            <!--签约关系是否有信息-->
            <div class="patient-time" v-if="item.revisit != '' && item.activite !=''">
              {{item.activite}}
            </div>
          </div>
        </div>
      </div>
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" :class="{'noPatientList': listActive}">
        <div class="qianyueBox">
          <div class="qianyue float-box"  @click="qianyue">
            <span ref="qianyuePatient" class="qianyuePatient">签约患者</span>
            (<span ref="qianyueNum" class="qianyueNum">{{managePatientCount}}</span>)
            <span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai2': active, 'icon-shouqi': unActive}">
            </span>
          </div>
          <div class="list-box" :class="{yincang:unShow}">
            <div class="guanzhu float-box" @click="firstLine">
              <span ref="guanzhuPatient">关注患者</span>
              <span ref='guanzhuNum' class="fr">{{attentionPatientCount}}</span>
            </div>
            <div class="line-box"></div>
            <div class="all-patient" @click="secondLine">
              <span ref="quanbuPatient">全部患者</span>
              <span ref="quanbuNum" class="fr">{{allPatientCount}}</span>
            </div>
          </div>
          <div class="zhegaiceng" :class="{yincang:unShow}">
            <div class="list-bottom"></div>
          </div>

          <div class="patient-box">
            <div class="patient-list" v-for="item in message"   @click="goConsult(item.patient_id)">
              <div class="patient-info-box">
                <div class="patient-img">
                  <img :src="item.logo" >
                </div>
                <div class="patient-info">
                  <!--签约患者-->
                  <div class="patient-name-info"  v-if="item.revisit != ''">
                      <span class="patient-name">{{item.name}}</span>
                      <span class="patient-age">{{item.age}}岁</span>
                      <i v-if="item.sex == 0" class="iconfont icon-nv"></i>
                      <i v-else class="iconfont icon-nan"></i>
                      <span class="jibing">{{item.diseaseName}}</span>
                  </div>
                  <!--关注患者无互动信息-->
                  <div class="patient-name-info" style="line-height:44px;" v-if="item.revisit == '' && item.activite == ''">
                    <span class="patient-name">{{item.name}}</span>
                    <span class="patient-age">{{item.age}}</span>
                    <i v-if="item.sex == 0" class="iconfont icon-nv"></i>
                    <i v-else class="iconfont icon-nan"></i>
                    <span class="jibing">{{item.diseaseName}}</span>
                  </div>
                  <!--关注患者有互动信息-->
                  <div class="patient-name-info" v-if="item.revisit == '' && item.activite != ''">
                    <span class="patient-name">{{item.name}}</span>
                    <span class="patient-age">{{item.age}}</span>
                    <i v-if="item.sex == 0" class="iconfont icon-nv"></i>
                    <i v-else class="iconfont icon-nan"></i>
                    <span class="jibing">{{item.diseaseName}}</span>
                  </div>
                  <div class="visit-time" v-if="item.revisit == '' && item.activite !=''">
                    {{item.activite}}
                  </div>
                  <!--签约患者复诊信息-->
                  <div class="visit-time" v-if="item.revisit != ''">
                    复诊时间 : {{item.revisit}}
                  </div>
                </div>
              </div>
              <!--签约关系是否有信息-->
              <div class="patient-time" v-if="item.revisit != '' && item.activite !=''">
                {{item.activite}}
              </div>
            </div>
          </div>
        </div>
      </mt-loadmore>
      <div class="fa-tongzhi" @click="fasongTongzhi">发送<br/> 通知</div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import { Toast, MessageBox, Loadmore, Indicator, DatetimePicker } from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  export default {
    name: 'myPatient',
    data () {
      return {
        authentication:'9abada2c209a05e2ebd462f7bf68c5cf',
        status:2,
        name:'',
        page:'',
        pages:{
          qianyuePage:1,
          guanzhuPage:1,
          quanbuPage:1,
        },
        sousuoContent:'',
        patientId:'',
        listActive:false,
        allLoaded:false,
        active: true,
        unActive: false,
        unShow:true,
        value:"1",
        selected:'qianyue-patient',
        dataContent:[],
        message:[],
        soumessage:[],
        allPatientCount:'',
        attentionPatientCount:'',
        managePatientCount:''
      }
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
            name: this.sousuoContent,
            status:0
          }

          netWrokUtils.post('/wx/baochuan_d/patientlist', params, (result) => {
            this.soumessage = '';
            if(result.data.content.list == ''){
              Toast('未找到患者')
            }else{
                this.soumessage = result.data.content.list
            }
          }, (error_result)=>  {
//          Indicator.close();
            Toast(error_result);
          })

      }
    },
    created() {
        console.log(this.a)
      document.getElementsByTagName('title')[0].innerHTML = '我的患者'
    },
    destroyed () {
      eventBus.$emit('patientId', this.patientId);
    },
    mounted(){
        this.getPatientList(this.authentication, this.status, this.name, this.pages.qianyuePage)
    },
    methods: {
      getPatientList(auth, status ,name, page) {
          var that = this;
        var params = {
          authentication: auth,
          status: status,
          name: name,
          page: page
        }
        netWrokUtils.post('/wx/baochuan_d/patientlist', params, function (result) {
          that.dataContent = result.data.content.list;
          that.allPatientCount = result.data.content.allPatientCount
          that.attentionPatientCount = result.data.content.attentionPatientCount
          that.managePatientCount = result.data.content.managePatientCount
          if(that.status == 2){
            that.pages.qianyuePage++
              if(page == 1){
                that.message = []
              }
            for (let i in that.dataContent) {
              that.message.push(that.dataContent[i])
            }
            if( that.dataContent ==''){
              Toast('没有更多数据了')
            }
          }else if(that.status == 1){
            that.pages.guanzhuPage++
            if(page == 1){
              that.message = []
            }
            for (let i in that.dataContent) {
              that.message.push(that.dataContent[i])
            }
            if(that.dataContent ==''){
              Toast('没有更多数据了')
            }
          }else if(that.status == 0){
            that.pages.quanbuPage++
            if(page == 1){
              that.message = []
            }
            for (let i in that.dataContent) {
              that.message.push(that.dataContent[i])
            }
            if(that.dataContent ==''){
              Toast('没有更多数据了')
            }
          }
        }, function (error_result) {
//          Indicator.close();
          Toast(error_result);
        })
      },
      loadBottom() {
          if(this.status == 2){
            this.getPatientList(this.authentication, this.status ,name, this.pages.qianyuePage)
          }else if(this.status == 1){
            this.getPatientList(this.authentication, this.status ,name, this.pages.guanzhuPage)
          }else{
            this.getPatientList(this.authentication, this.status ,name, this.pages.quanbuPage)
          }
        // 若数据已全部获取完毕
//        this.allLoaded = true;
        this.$refs.loadmore.onBottomLoaded();
      },
      goConsult (id) {
        this.patientId = id;
        this.$router.push({ path:"/baochuan_d/docConsult"});
      },
      fasongTongzhi() {
        this.$router.push({ path: '/baochuan_d/docFaTongzhi' });
      },
      qianyue() {
        this.unShow = !this.unShow;
        if(this.unActive){
        }
//          this.$refs.qianyueSpan.className = 'iconfont icon-shouqi'
        this.active = !this.active
        this.unActive = !this.unActive
      },
      firstLine() {
        var firstHTML = this.$refs.qianyuePatient.innerHTML;
        this.$refs.qianyuePatient.innerHTML = this.$refs.guanzhuPatient.innerHTML;
        this.$refs.guanzhuPatient.innerHTML = firstHTML
        var firstNum = this.$refs.qianyueNum.innerHTML
        this.$refs.qianyueNum.innerHTML = this.$refs.guanzhuNum.innerHTML;
        this.$refs.guanzhuNum.innerHTML = firstNum;
         this.unShow = !this.unShow;
         this.active = !this.active
         this.unActive = !this.unActive;
        var statusContent =  this.$refs.qianyuePatient.innerHTML
        if(statusContent == "关注患者"){
          this.status = 1
          this.pages.guanzhuPage = 1;
          this.getPatientList(this.authentication, this.status, this.name, this.pages.guanzhuPage)
         }else if(statusContent == "签约患者"){
          this.status = 2
          this.pages.qianyuePage = 1;
          this.getPatientList(this.authentication, this.status, this.name, this.pages.qianyuePage)
        }else if(statusContent == "全部患者"){
          this.status = 0
          this.pages.quanbuPage = 1;
          this.getPatientList(this.authentication, this.status, this.name, this.pages.quanbuPage)
        }
      },
      secondLine() {
        var secontinnerHTML =  this.$refs.qianyuePatient.innerHTML;
        this.$refs.qianyuePatient.innerHTML = this.$refs.quanbuPatient.innerHTML;
        this.$refs.quanbuPatient.innerHTML = secontinnerHTML;
        var secondNum =  this.$refs.qianyueNum.innerHTML;
        this.$refs.qianyueNum.innerHTML = this.$refs.quanbuNum.innerHTML;
        this.$refs.quanbuNum.innerHTML = secondNum;
        this.unShow = !this.unShow;
        this.active = !this.active
        this.unActive = !this.unActive
        var statusContent =  this.$refs.qianyuePatient.innerHTML
        if(statusContent == "关注患者"){
          this.status = 1
          this.pages.guanzhuPage = 1;
          this.getPatientList(this.authentication, this.status, this.name, this.pages.guanzhuPage)
        }else if(statusContent == "签约患者"){
          this.status = 2
          this.pages.qianyuePage = 1;
          this.getPatientList(this.authentication, this.status, this.name, this.pages.qianyuePage)
        }else if(statusContent == "全部患者"){
          this.status = 0
          this.pages.quanbuPage = 1;
          this.getPatientList(this.authentication, this.status, this.name, this.pages.quanbuPage)
        }
      }
    }
  }
</script>

<style lang="scss">
  .docBox{
    background:#fff;
    .myPatientContent{
      position:relative;
      width:100%;
      height: auto;
      top:6px;
    .noPatientList{
      display:none;
    }
      .sousuo-patient{
          .patient-box{
            border-top:1px solid #F4F0EF;
            .patient-list:nth-last-child(1){
              -webkit-box-shadow:0 0 25px #fff;
              -moz-box-shadow:0 0 25px #fff;
              box-shadow:0 0 25px #fff;
            }
            .patient-list{
              padding:16px;
              background:#fff;
              border-bottom:10px solid #F4F0EF;
            .patient-info-box{
              display:flex;
              justify-content: flex-start;
              .patient-img{
                height:60px;
                width:60px;
                padding-right:10px;
                img{
                  height:60px;
                  width:60px;
                  border-radius:50%;
                }
              }
               .patient-info{
                .patient-name-info{
                  padding-bottom:10px;
                  padding-top:5px;
                  .patient-name, .patient-age{
                    font-size:16px;
                    color:#232323;
                   }
                  .jibing{
                    padding:1px 5px;
                    text-align: center;
                    border-radius:10px;
                    background:#bbb;
                    font-size:14px;
                    color:#fff;
                  }
                  .icon-nv{
                    color:#F388C2;
                    font-size:15px;
                  }
                  .icon-nan{
                    color:#49C8F6;
                    font-size:15px;
                  }
                }
                .visit-time{
                  font-size:15px;
                  color:#bbb;
                }
              }
            }
              .patient-time{
                margin-left:66px;
                padding-top:10px;
                margin-top:5px;
                border-top:1px solid #bbb;
                font-size:15px;
                color:#bbb;
              }
            }
          }
      }
      .fa-tongzhi{
        position:fixed;
        right:15px;
        bottom:20px;
        height:46px;
        width:46px;
        color:#fff;
        font-size:16px;
        border-radius:50%;
        background:#5da096;
        text-align: center;
        padding:10px 5px 0px;
      }
      .qianyueBox{
        background:#f4f4f4;
        min-height:100vh;
        .list-box{
          position: absolute;
          top: 44px;
          width:100%;
          height:100px;
          background:#fff;
          opacity:1;
          filter: alpha(opacity=100);
          .guanzhu, .all-patient{
            padding:16px;
            font-size:16px;
            color:#232323;
            .fr{
              border:1px solid #fff;
              border-radius:10px;
              padding:2px 10px;
              text-align: center;
              background:#61C6B4;
              color:#fff;
              font-size:14px;
            }
          }
          .line-box{
            height:1px;
            background:#f4f4f4;
            margin:auto 16px;
          }
        }
        .zhegaiceng{
          position:absolute;
          min-height:100vh;
          width:100%;
          top:144px;
          background:#000;
          opacity:0.5;
          filter: alpha(opacity=50);
        }
        .yincang{
          display:none;
        }
        .qianyue {
          height: 44px;
          line-height: 44px;
          padding-left: 16px;
          background:#fff;
          border-top:1px solid #f4f4f4;
          -webkit-box-shadow:0 5px 5px #D2E6E3;
          -moz-box-shadow:0 5px 5px #D2E6E3;
          box-shadow:0 5px 5px #D2E6E3;
          margin-bottom:10px;
          font-size:16px;
          color:#232323;
          .iconfont{
            font-size:16px;
            padding-right:16px;
            color:#bbb;
          }
        }
        .patient-box{
        /*background:#f4f4f4;*/
          .patient-list:nth-last-child(1){
            -webkit-box-shadow:0 0 25px #fff;
            -moz-box-shadow:0 0 25px #fff;
            box-shadow:0 0 25px #fff;
          }
          .patient-list{
            padding:16px;
            background:#fff;
            -webkit-box-shadow:0 0 25px #E5EBED;
            -moz-box-shadow:0 0 25px #E5EBED;
            box-shadow:0 0 25px #E5EBED;
            margin-bottom:10px;
            .patient-info-box{
              display:flex;
              justify-content: flex-start;
              .patient-img{
                height:60px;
                width:60px;
                padding-right:10px;
                img{
                  height:60px;
                  width:60px;
                  border-radius:50%;
                }
              }
              .patient-info{
                .patient-name-info{
                  padding-bottom:10px;
                  padding-top:5px;
                  .patient-name, .patient-age{
                    font-size:16px;
                    color:#232323;
                  }
                  .jibing{
                    padding:1px 5px;
                    text-align: center;
                    border-radius:10px;
                    background:#bbb;
                    font-size:14px;
                    color:#fff;
                  }
                  .icon-nv{
                    color:#F388C2;
                    font-size:15px;
                  }
                   .icon-nan{
                     color:#49C8F6;
                     font-size:15px;
                   }
                }
                .visit-time{
                  font-size:15px;
                  color:#bbb;
                }
              }
            }
            .patient-time{
             margin-left:66px;
              padding-top:10px;
              margin-top:5px;
              border-top:1px solid #bbb;
              font-size:15px;
              color:#bbb;
            }
          }
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
  }

</style>
