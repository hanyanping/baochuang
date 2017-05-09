<template>
  <div class="docConsult-box">
    <mt-navbar v-model="selected">
      <mt-tab-item id="personal">个人资料</mt-tab-item>
      <mt-tab-item id="talk">患者聊天</mt-tab-item>
      <mt-tab-item id="report">检查报告</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="personal">
        <div class="personal-box">
          <div class="personal-info">
            <div class="personal-info-flex">
              <div>姓名</div>
              <div class="detail">{{perInfo.name}}</div>
            </div>
            <div class="personal-info-flex">
              <div>性别</div>
              <div class="detail">{{perInfo.sex}}</div>
            </div>
            <div class="personal-info-flex">
              <div>年龄</div>
              <div class="detail">{{perInfo.age}}</div>
            </div>
            <div class="personal-info-flex">
              <div>主疾病</div>
              <div style="color:#bbb;">{{perInfo.disease}}</div>
            </div>
            <div class="more" :class="{'yincang':More}">
              <span @click="perChakan">查看更多 <i class="iconfont icon-zhankai2"></i></span>
            </div>
            <div class="shouqi" :class="{'yincang':!More}">
              <div class="personal-info-flex" v-if="perInfo.status == 2">
                <div>手机号</div>
                <div style="color:#bbb;">{{perInfo.mobile}}</div>
              </div>
              <div class="more">
                <span  @click="perShouqi" style="text-align: center">收起 <i class="iconfont icon-zhankai-copy"></i></span>
              </div>
            </div>
            <b></b>
            <b></b>
          </div>
          <div v-if="perInfo.status == 2" class="remark-info" >
            <a class="personal-info-flex">
              <div>备注信息</div>
              <div class="iconfont icon-jiantou"></div>
            </a>
            <div class="beizhu-info">
              <a  v-if = "perInfo.remark == ''" @click="toBeizhu"  href="" style="color:#82AAA1;">点击添加备注信息 </a>
              <span  @click="toBeizhu" v-else>{{perInfo.remark}}</span>
            </div>
            <b></b>
            <b></b>
          </div>
          <div v-if="perInfo.status == 2" class="futher-info">
            <a class="personal-info-flex" @click="toFuzhen">
              <div>复诊信息</div>
              <div class="iconfont icon-jiantou"></div>
            </a>
            <div class="beizhu-info" @click="openPicker">
              <a v-if="perInfo.revisit_time == ''" style="color:#82AAA1;">点击设置复诊时间 </a>
              <span v-else>下次复诊：{{revisit_time}}</span>
            </div>
            <mt-datetime-picker
              v-model="pickerValue"
              type="date"
              ref="picker"
              @confirm="handleChange"
              :startDate="now"
              year-format="{value} 年"
              month-format="{value} 月"
              date-format="{value} 日">
            </mt-datetime-picker>
            <b></b>
            <b></b>
          </div>
          <div class="visit-info">
            <a class="personal-info-flex">
              <div>就诊记录</div>
              <div class="iconfont icon-jiantou"></div>
            </a>
            <div class="visit-box-info">
              <div v-if="" class="no-visit">暂无就诊记录</div>
              <div class="visit-box" v-for="item in perInfo.visit_list">
                <div class="visit-detail">
                  <div class="visit-core">
                  </div>
                </div>
                <div class="visit-xixin">
                  <div>
                    03-15 门诊
                  </div>
                  <div>
                    <span class="visit-jiancha">检查</span>
                    <span class="visit-jiancha">处方</span>
                    <span class="visit-jiancha">检验</span>
                  </div>
                </div>
              </div>
              <div class="visit-box">
                <div class="visit-detail">
                  <div class="visit-core">
                  </div>
                </div>
                <div class="visit-xixin">
                  <div>
                    03-15 门诊
                  </div>
                  <div>
                    <span class="visit-jiancha">检查</span>
                    <span class="visit-jiancha">处方</span>
                    <span class="visit-jiancha">检验</span>
                  </div>
                </div>
              </div>
              <div class="visit-box">
                <div class="visit-detail">
                  <div class="visit-core">
                  </div>
                </div>
                <div class="visit-xixin">
                  <div>
                    03-15 门诊
                  </div>
                  <div>
                    <span class="visit-jiancha">检查</span>
                    <span class="visit-jiancha">处方</span>
                    <span class="visit-jiancha">检验</span>
                  </div>
                </div>
              </div>
            </div>
            <b></b>
            <b></b>
          </div>
          </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="talk">
        <div class="talk-box" >
          <div class="chatroom">
            <div class="box" :class="{'boxBottom':bottomShow}" ref="box" @click="shouqi">
              <mt-loadmore :top-method="loadTop" ref="loadmore">
                <div class="record clearfix" v-for="(item, key) in message">
                  <div class="talkTime" v-if="item.ctime!==''">{{item.ctime}}</div>
                  <div class="avatar left" v-if="item.from_id == item.patient_user_id">
                    <img class="imgLogo" :src="item.logo" alt="" width="45" height="45">
                    <span v-if="item.message!= ''">{{item.message}}</span>
                    <img class="imgbox" v-else :src="item.picture_url" width="45" height="45"/>
                  </div>
                  <div class="avatar right" v-if="item.from_id != item.patient_user_id">
                    <img class="imgLogo" :src="item.logo" alt="" width="45" height="45">
                    <span v-if="item.message!= ''">{{item.message}}</span>
                    <img class="imgbox" v-if="item.message == ''" :src="item.picture_url" width="40%" height="40%"/>
                  </div>
                </div>
              </mt-loadmore>
            </div>
            <div class="reply" ref="reply">
              <div class="input-box">
                <input type="text" v-model="form.content" @focus="shouqi"/>
                <span v-if="fasong" @click="messages($event)" >发送</span>
                <span v-else @click="tangchu($event)" ref="messageSpan" class="iconfont icon-jiahao"></span>
              </div>
              <div class="foot-box">
                <div v-if="jiaStatius == '1'"  @click="fuzhenDialog">
                  <img src="../../assets/img/fuzhen.png"/>
                  <p class="text">复诊提醒</p>
                </div>
                <div @click="outpatientDialog">
                  <img src="../../assets/img/visit-time.png"/>
                  <p class="text">门诊时间</p>
                </div>
                <div v-if="jiaStatius == '1'" click="phoneDialog">
                  <img src="../../assets/img/phone.png"/>
                  <p class="text">电话随访</p>
                </div>
                <div style="position:relative;">
                  <form class="file" id="form1" enctype="multipart/form-data" method="post">
                    <input name="imgLocal" id="img"  type="file" @change="uploadFile" class="uploadinput" accept="image/*"/>
                  </form>
                  <img src="../../assets/img/paizhao.png"/>
                  <p class="text">照片</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="report">
        <div class="report-box">
          <div class="info-container">
            <div class="info-box">
              <div class="info-set">
                <div class="consult-set">
                  电解质检查
                </div>
                <div class="consult-right">
                  <span style="font-size:15px;">2017-03-23</span>
                  <i class="iconfont icon-jiantou"></i>
                </div>
              </div>
              <div class="info-set">
                <div class="consult-set">
                  尿常规
                </div>
                <div class="consult-right">
                  <span style="font-size:15px;">2017-04-30</span>
                  <i class="iconfont icon-jiantou"></i>
                </div>
              </div>
              <div class="info-set">
                <div class="consult-set">
                  尿常规
                </div>
                <div class="consult-right">
                  <span style="font-size:15px;">2017-04-30</span>
                  <i class="iconfont icon-jiantou"></i>
                </div>
              </div>
            </div>
            <b></b>
            <b></b>
            <!--<i class="docInfoI"></i>-->
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  import axios from 'axios'
  import { Toast, MessageBox, Loadmore, Indicator, DatetimePicker } from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  import moment from 'moment/moment.js';
  export default {
    name: 'docConsult',
    data () {
      return {
        authentication:'9abada2c209a05e2ebd462f7bf68c5cf',
        patientId:2,
        postId:0,
        maxId:'',
        minId:'',
        number:10,
        talkData:{},
        threadId:'',
        baseImg:'',
        contentType:'',
        content:'',
        pageAll: 6,
        patientName:'',
        selected:'talk',
        perStatus:'',
        perInfo:'',
        allLoaded: false,
        jiaStatius:'',
        More:false,
        bottomShow:false,
        message:[],
        pickerValue:'',
        revisit_time:'',
        now: new Date(''),
        form: {
          file_name: '',
          content: '',
          usiid: ''
        },
        fasong: false
      }
    },
    watch: {
        'form.content' () {
            if (this.form.content) {
                this.fasong = true
            } else {
              this.fasong = false
            }
        }
    },
    created() {
        eventBus.$on('some', (thing) => {
          this.patientId = thing;
        })
    },
    mounted(){
      this.consultList(this.postId,-5);
      this.personalInfo()
      setInterval(() => {
        this.consultList(this.maxId,10)
      },10000)
    },
    updated() {
    },
    destroyed () {
      eventBus.$emit('some',this.patientId);
    },
    methods: {
  //        聊天窗口
      consultList(postId, number) {
        var params = {
          authentication: this.authentication,
          patientId: this.patientId,
          postId:postId,
          number:number,
        }
        var that = this;
        console.log(postId,number)
        netWrokUtils.postConsult('/wx/baochuan_d/getconsultrecordlist', params, function (result) {
        console.log(postId,number)
          that.talkData = result.data.content;
//        判断是获取已有数据还是最新数据
          if(number>0){
            for (let i in that.talkData) {
              that.maxId = that.talkData[that.talkData.length-1].postId;
              that.message.push(that.talkData[i])
            }
          }else{
            for (let i in that.talkData) {
              that.minId = that.talkData[0].postId;
              that.message.unshift(that.talkData[i])
            }
          }
        }, function (error_result) {
//          Indicator.close();
//          Toast(error_result);
        })
      },
//      上拉刷新加载更多数据
      loadTop() {
        var postId = this.postId
        postId++
        console.log(this.talkData)
        if (this.talkData == "") {
            Toast('没有更多数据了')
        } else {
          this.consultList(this.minId,-5)
        }
        this.$refs.loadmore.onTopLoaded();
      },
      //  上传图片
      uploadFile (el) {
        console.log(el)
        var form=document.getElementById("form1");
        var formdata=new FormData(form);
        var file = el.target.files[0]
        var type = file.type.indexOf('image')
        var size = file.size / 1024 / 1024
        var filename = file.name
        var k = filename.substr(filename.lastIndexOf('.'))
        var fd = new FormData()
        fd.append("file", file)
        var oFReader = new FileReader();
        oFReader.readAsDataURL(file);
        var that = this;
        oFReader.onload = function (oFREvent) {
          that.baseImg = oFREvent.target.result
          var params = {
            authentication:that.authentication,
            patientId: that.patientId,
            contentType:2,
            imgBase64:that.baseImg,
          }
          console.log(params)
          netWrokUtils.postConsult('/wx/baochuan_d/sendconsultpost', params, function (result) {
            console.log(result)
          }, function (error_result) {
//          Indicator.close();
//          Toast(error_result);
          })
        };
console.log(this.baseImg)

      },
//      点击加号
      tangchu() {
        this.bottomShow = !this.bottomShow;
        if(this.$refs.reply.className === 'reply prop') {
          return false
        } else {
          this.$refs.reply.className += ' prop'
        }
        var params = {
            authentication:this.authentication,
             patientId: this.patientId
        }
        var that = this;
        netWrokUtils.postConsult('/wx/baochuan_d/getconsultmenushow', params, function (result) {
          that.jiaStatius =  result.data.content.is_show
        }, function (error_result) {
//          Indicator.close();
//          Toast(error_result);
        })
      },
//      复诊提醒
      fuzhenDialog() {
        var params = {
            authentication: this.authentication,
            patientId:2
        }
        var _this = this;
        netWrokUtils.postConsult('/wx/baochuan_d/revisitremind', params, function (result) {
          var outpatientContent = [];
          outpatientContent = result.data.content;
          if(outpatientContent == ''){
            var str = '<h3>您还未设置复诊时间，请去设置</h3>'
            MessageBox({
              title: '',
              message: str,
              confirmButtonText:'去设置',
              cancelButtonText:'以后再说',
              showCancelButton: true
            }).then((result) => {
              if(result == "confirm"){
                _this.$router.push({ path:'/baochuan_d/docVisitInfo'});
              }
            });
          }else{
            MessageBox({
              title: '您即将发送消息',
              message: outpatientContent,
              showCancelButton: true
            }).then((result) => {
              if(result == "confirm"){
//                  调取发送信息接口
                var paramsFuzhen = {
                  authentication:_this.authentication,
                  patientId: _this.patientId,
                  contentType:1,
                  content:outpatientContent,
                }
                console.log(paramsFuzhen)
                netWrokUtils.postConsult('/wx/baochuan_d/sendconsultpost', paramsFuzhen, (result) => {
                }, (error_result) => {
                  Toast(error_result.data.msg);
                })
              }
            });
          }
        }, function (error_result) {
//          Indicator.close();
          Toast(error_result);
        })
      },
//      门诊提醒
      outpatientDialog() {
        var that = this;
        var params = {
          authentication: '9abada2c209a05e2ebd462f7bf68c5cf'
        }
        netWrokUtils.postConsult('/wx/baochuan_d/clinicremind', params, (result) => {
          var outpatientContent = result.data.content;
          if(outpatientContent == ''){
            var str = '<h3>您还未设置门诊时间，请去设置</h3>'
            MessageBox({
              title: '',
              message: str,
              confirmButtonText:'去设置',
              cancelButtonText:'以后再说',
              showCancelButton: true
            }).then((result) => {
              if(result == "confirm"){
                that.$router.push({ path:'/baochuan_d/docAppointmentSetting'});
              }
            });
          }else{
            var str = '<h3 style="text-align: center;">您好,我的门诊时间是:</h3>'
            for (let i in outpatientContent) {
              str += '<div style="text-align: center;">'+ outpatientContent[i] +'</div>'
            }
            MessageBox({
              title: '您即将发送消息',
              message: str,
              showCancelButton: true
            }).then((result) => {
              if(result=="confirm"){
                outpatientContent = "您好,我的门诊时间是:"+outpatientContent;
                var params = {
                  authentication:this.authentication,
                  patientId: that.patientId,
                  contentType:1,
                  content:outpatientContent,
                  img:'',
                }
                netWrokUtils.postConsult('/wx/baochuan_d/sendconsultpost', params, (result) => {
                }, (error_result) => {
                  Toast(error_result.data.msg);
                })
              }
            });
          }
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      },
//      电话随访
      phoneDialog() {},
      // input,focus收起
      shouqi() {
        this.$refs.reply.className = 'reply'
      },
      //  回复消息
      messages() {
          var that = this;
        var params = {
          authentication:this.authentication,
          patientId: this.patientId,
          contentType:1,
          content:this.form.content,
        }
        netWrokUtils.postConsult('/wx/baochuan_d/sendconsultpost', params, (result) => {
          that.consultList(1)
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      },

//      个人资料start
      personalInfo() {
        var that = this
        var params = {
          authentication: this.authentication,
          patientId: 2,
        }
        netWrokUtils.postConsult('/wx/baochuan_d/patientcase', params, (result) => {
          that.perInfo = result.data.content
          that.patientName = result.data.content.name
          that.perStatus = result.data.content.status
          that.now = new Date(result.data.content.now);
          that.revisit_time = result.data.content.revisit_time
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      },
//      复诊提醒
      toFuzhen(id) {
        this.$router.push({ path:'/baochuan_d/docVisitInfo'});
      },
      openPicker() {
        this.$refs.picker.open();
      },
      handleChange(value) {
          console.log(value)
        console.log('value===' + moment(value).format('YYYY-MM-DD'));
        this.settingVisitTime(moment(value).format('YYYY-MM-DD'));
      },
      settingVisitTime(timeValue){
        let that = this;
        var params = {
          authentication: that.authentication,
          patientId: 2,
          revisitTime: timeValue
        }
        netWrokUtils.postConsult('/wx/baochuan_d/setrevisit', params, (result) => {
          this.$refs.picker.close();
          Toast(result.data.msg);
          that.revisit_time = timeValue;
        }, (error_result) => {
          this.$refs.picker.close();
          Toast(error_result.data.msg);
        })
      },
      perChakan() {
        this.More = !this.More;
      },
      perShouqi() {
        this.More = !this.More;
      },
      toBeizhu () {
        this.$router.push({ path:"/baochuan_d/docToBeiZhu"});
      }
    }
  }

</script>

<style lang="scss">
  .mint-msgbox-message{
    line-height: 25px!important;
  }
  .docConsult-box{
    .mint-navbar{
      border-bottom: 1px solid #f4f4f4;
    }
    .mint-navbar .mint-tab-item.is-selected {
      border-bottom: 3px solid #66B2AA;
      color: #66B2AA;
      margin-bottom: 0px;
      .mint-tab-item-label{
        font-size:16px;
        color:#66B2AA;
      }
    }
    .mint-tab-item{
      .mint-tab-item-label{
        font-size:16px;
        color:#232323;
      }
    }
    .talk-box{
      background:#f8f8f8;
      .chatroom {
        display:flex;
        flex-direction:column;
        min-height:90vh;
        .box{
          flex:1;
          margin-bottom:100px;
          .record {
            margin-top: 25px;
            .talkTime{
              background:#E0E0E0;
              color:#fff;
              width:60%;
              margin:auto;
              text-align: center;
              border-radius: 50px;
              padding:6px 10px;
            }
            .avatar {
              margin-top: 25px;
              width: 100%;
              clear: both;
              overflow: hidden;
              padding-left:5px;
              &.right{
                img, span{
                  float: right;
                }
               .imgLogo{
                  border-radius:50%;
                  margin-right:10px;
                }
                span{
                  background: #7cfc00;
                  padding: 10px;
                  border-radius: 10px;
                  float: right;
                  margin: 6px 10px 0 10px;
                  max-width: 64%;
                  border: 1px solid #FCFCFC;
                  font-size:16px;
                  color:#232323;
                  line-height:20px;
                }
                span:before{
                  content: '';
                  font-size: 24pt;
                  width: 0;
                  height: 0;
                  border-top:10px solid transparent;
                  border-bottom:10px solid transparent;
                  border-left:10px solid #7cfc00;
                  color: #fff;
                  float:right;
                  position: relative;
                  top: 0px;
                  right:-20px;
                }
               }
               &.left{
                 img, span{
                   float:left;
                 }
                span{
                  background: #fff;
                  padding: 10px;
                  border-radius: 10px;
                  float: left;
                  margin: 0px 10px 0 10px;
                  max-width: 64%;
                  border: 1px solid #FCFCFC;
                  /*box-shadow: 0 0 3px #ccc;*/
                  font-size:16px;
                  color:#232323;
                  line-height:18px;
                }
                span:before{
                  content: '';
                  width:0;
                  height:0;
                  font-size:0;
                  border-color:#ccc;
                  border-top:10px solid transparent;
                  border-bottom:10px solid transparent;
                  border-right:10px solid #fff;
                  color: #fff;
                  float: left;
                  position: relative;
                  top: 0px;
                  left:-20px;
                }
              }
              .imgLogo {
                border-radius: 50%;
                display: inline-block;
                margin-right:6px;
              }
              .name {
                font-size: 12px;
                color: #807f8a;
              }
            }
            .message {
              float: left;
              margin: 0 10px;
              .date {
                font-size: 12px;
                color: #807f8a;
              }
              &.right {
                 float: right;
                 text-align: right;
               }
              .content {
                display: inline-block;
                background-color: #EFEFEF;
                color: #027EE5;
                border: 1px solid #cccccc;
                border-radius: 10px;
                padding: 10px;
                a {
                  color: red;
                  cursor: pointer;
                }
              }
            }
          }
        }
        .box.boxBottom{
          margin-bottom:120px;
        }
        .reply {
          width:100%;
          position:fixed;
          bottom:0;
          height:40px;
          line-height:30px;
          background:#f4f4f4;
          border-top:1px solid #E2E2E4;
          padding:10px 0;
          &.prop {
             bottom:120px;
           }
          .input-box{
            padding-bottom:10px;
            padding-left:10px;
            border-bottom:1px solid #E2E2E4;
            .icon-jiahao{
              font-size:28px;
              color:#bbb;
              text-align: center;
              vertical-align: middle;
            }
            input{
              height:35px;
              width:85%;
              border:1px solid #E2E2E4;
              border-radius: 5px;
            }
          }
          .foot-box{
            background: #f4f4f4;
            padding:10px;
            display:flex;
            justify-content:space-around;
            .file {
              position: absolute;
              display: inline-block;
              border: 1px solid #f4f4f4;
              border-radius: 4px;
              padding: 4px 12px;
              overflow: hidden;
              text-decoration: none;
              text-indent: 0;
              line-height: 20px;
              left:0;
              width:60px;
              height:60px;
              input {
                position: absolute;
                font-size: 100px;
                right: 0;
                top: 0;
                opacity: 0;
              }
            }
            .file:hover {
              text-decoration: none;
            }
            img{
              height:60px;
              width:60px;
            }
            .text{
              text-align: center;
              font-size:14px;
              color:#808080;
            }
          }

          .upload_format {
            width: 200px;
            text-overflow: ellipsis;
            white-space:nowrap;
            overflow: hidden;
          }
          textarea {
            border: none !important;
          }
        }

      }
    }
    .report-box{
      .info-container{
        position: relative;
        margin:15px 16px;
        background:#fff;
        -webkit-box-shadow:0 0 19px #E5EBED;
        -moz-box-shadow:0 0 19px #E5EBED;
        box-shadow:0 0 19px #E5EBED;
        border-radius:5px;
       .info-box{
        .info-set:nth-last-child(1){
          border-bottom:none;
        }
        .info-set{
          display:flex;
          justify-content: space-between;
          padding:15px 16px;
          border-bottom:1px dashed #f4f4f4;
          .consult-set{
            font-size:16px;
            color:#232323;
          }
          .consult-right{
            color:#bbb;
            .icon-jiantou{
              font-size:14px;
            }
          }
        }
      }
      b:nth-of-type(1){
        left: -1px;
        border-radius: 0 14px 14px 0;
      }
      b:nth-of-type(2){
        right: -1px;
        border-radius: 14px 0 0 14px;
      }
      b{
        position: absolute;
        width: 7px;
        height: 14px;
        top: 40px;
        border: 1px solid #f4f4f4;
        z-index: 33;
        background:#f4f4f4;
      }
      }
    }
    .personal-box{
      margin:22px 16px;
      .personal-info, .remark-info, .futher-info, .visit-info{
        position: relative;
        margin-bottom:15px;
        background:#fff;
        border-radius:5px;
        -webkit-box-shadow:0 0 19px #E5EBED;
        -moz-box-shadow:0 0 19px #E5EBED;
        box-shadow:0 0 25px #E5EBED;

        /*box-shadow: 10px 10px 5px #EBEFF0; !*底边阴影*!*/
        .visit-box:nth-of-type(1){
          margin-top:10px;
        }
        .visit-box-info{
          padding-bottom:15px;
          .no-visit{
            color:#82AAA1;
            padding:16px;
            font-size:15px;
          }
          .visit-box{
            height:60px;
            .visit-xixin{
              position:relative;
              display:flex;
              justify-content: space-between;
              padding:0 16px 0 30px;
              top:-38px;
              .visit-jiancha{
                color:#60A39B;
                border:1px solid #60A39B;
                border-radius:10px;
                padding:1px 3px;
                margin-left:4px;
                font-size:14px;
                vertical-align:middle ;
              }
            }
            .visit-detail{
              position:relative;
              height:60px;
              width:2px;
              background:#60A39B;
              margin:0 16px;
              .visit-core{
                position:absolute;
                height:8px;
                width:8px;
                border-radius:50%;
                background:#60A39B;
                left:-5px;
                top:24px;
                border:2px solid #fff;
              }
            }
          }
        }
        b:nth-of-type(1){
          left: -1px;
          border-radius: 0 14px 14px 0;
        }
        b:nth-of-type(2){
          right: -1px;
          border-radius: 14px 0 0 14px;
        }
        b{
          position: absolute;
          width: 7px;
          height: 14px;
          top: 40px;
          border: 1px solid #f4f4f4;
          z-index: 33;
          background:#f4f4f4;
          FILTER: alpha(opacity=0); /*androd*/
          appearance:none;  /*下拉框去掉右侧图标*/
          -moz-appearance:none;
          -webkit-appearance:none;
        }
        .personal-info-flex{
          display:flex;
          justify-content: space-between;
          padding:15px 16px;
          border-bottom:1px dashed #f4f4f4;
          .detail{
            color:#bbb;
          }
        }
        .more{
          padding:16px;
          text-align: center;
          font-size:15px;
          color:#bbb;
        }
        .yincang{
          display:none;
        }
        .beizhu-info{
          padding:12px 16px;
          font-size:15px;
          color:#bbb;
          line-height:20px;
        }
      }
    }
  }
</style>
