<template>
  <div class="docConsult">
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
              <div class="detail">王倩</div>
            </div>
            <div class="personal-info-flex">
              <div>性别</div>
              <div class="detail">女</div>
            </div>
            <div class="personal-info-flex">
              <div>年龄</div>
              <div class="detail">22</div>
            </div>
            <div class="personal-info-flex">
              <div>主疾病</div>
              <div>脂肪肝</div>
            </div>
            <div class="more">
              <span>查看更多 <i class="iconfont icon-jiantou"></i></span>
            </div>
            <b></b>
            <b></b>
          </div>
          <div class="remark-info">
            <a class="personal-info-flex">
              <div>备注信息</div>
              <div class="iconfont icon-jiantou"></div>
            </a>
            <div class="beizhu-info">
              <span>重点关注，有高血压，糖尿病伴随疾病，有家族遗传史（母亲有乙肝）</span>
            </div>
            <b></b>
            <b></b>
          </div>
          <div class="futher-info">
            <a class="personal-info-flex">
              <div>复诊信息</div>
              <div class="iconfont icon-jiantou"></div>
            </a>
            <div class="beizhu-info">
              <span>下次复诊：2017年5月21日</span>
            </div>
            <b></b>
            <b></b>
          </div>
          <div class="visit-info">
            <a class="personal-info-flex">
              <div>就诊记录</div>
              <div class="iconfont icon-jiantou"></div>
            </a>
            <div class="visit-box-info">
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
            <div class="box" ref="box" @click="shouqi">
              <div class="record clearfix" v-for="(item, key) in message">
                <div class="avatar left" v-if="item.admin_id === null">
                  <img src="../../assets/img/code.png" alt="" width="38" height="38">
                  <span>{{item.content}}</span>
                </div>
                <div class="avatar right" v-else>
                  <img  src="../../assets/img/second.png" alt="" width="38" height="38">
                  <span >{{item.content}}</span>
                </div>
                <!--<div class="message" v-if="item.admin_id === null">-->
                  <!--<p class="date">{{item.gmt_create|dateFormat('Y-M-D h-m-s')}}</p>-->
                  <!--<div class="content">-->
                    <!--<span>{{item.content}}</span>-->
                    <!--<a :href="item.uploadName" v-if="item.uploadName != '#'">{{item.file_name}}</a>-->
                  <!--</div>-->
                <!--</div>-->
                <div class="message right" v-else>
                  <p class="date">{{item.gmt_create|dateFormat('Y-M-D h-m-s')}}</p>
                  <div class="content">
                    <span>{{item.content}}</span>
                    <a :href="item.uploadName" v-if="item.uploadName != '#'">{{item.file_name}}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="reply" ref="reply">
              <div class="input-box">
                <input type="text" v-model="form.content" @focus="shouqi"/>
                <span v-if="fasong" @click="messages($event)" >发送</span>
                <span v-else @click="tangchu($event)" ref="messageSpan">+</span>
              </div>
              <div class="foot-box">
                <img src="../../assets/img/code.png"/>
                <img src="../../assets/img/code.png"/>
                <img src="../../assets/img/code.png"/>
                <img src="../../assets/img/code.png"/>
                <img src="../../assets/img/code.png"/>
                <img src="../../assets/img/code.png"/>
                <img src="../../assets/img/code.png"/>
                <img src="../../assets/img/code.png"/>
                <img src="../../assets/img/code.png"/>
                <img src="../../assets/img/code.png"/>
                <img src="../../assets/img/code.png"/>
                <img src="../../assets/img/code.png"/>
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
  export default {
    name: 'docConsult',
    data () {
      return {
        selected:'talk',
        message:[],
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
      document.getElementsByTagName('title')[0].innerHTML = '王倩'
      this.message = [
        {
          avatar_url: '../../assets/img/code.png',
          content: 'chenchenchen',
          admin_id: null
        },
        {
          avatar_url: '../../assets/img/second.png',
          content: '看快递费看hanhjv剧看风景你看快hanhjv剧看风景你看快递费看 ',
          admin_id: '11'
        },
        {
          avatar_url: '../../assets/img/second.png',
          content: 'hanhanhan',
          admin_id: '1'
        },
        {
          avatar_url: '/src/assets/img/code.png',
          content: 'chenchenchen',
          admin_id: null
        },
      ]
    },
    methods: {
      // input,focus收起
      shouqi() {
        this.$refs.reply.className = 'reply'
      },
      //  回复消息
      messages() {
        this.item.content= this.form.content;
      },
      tangchu() {
        if(this.$refs.reply.className === 'reply prop') {
            return false
        } else {
          this.$refs.reply.className += ' prop'
        }
      },
    }
  }

</script>

<style lang="scss">
  .docConsult{
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
        .box {
          flex:1;
          .record {
            margin-top: 5px;
            .avatar {
              margin-top: 10px;
              width: 100%;
              clear: both;
              overflow: hidden;
              &.right{
                img, span{
                  float: right;
                }
                span{
                  background: #7cfc00;
                  padding: 10px;
                  border-radius: 10px;
                  float: right;
                  margin: 6px 10px 0 10px;
                  max-width: 64%;
                  border: 1px solid #ccc;
                  box-shadow: 0 0 3px #ccc;
                }
                span:before{
                  content: '';
                  font-size: 24pt;
                  width: 0;
                  height: 0;
                  /*background:#ccc;*/
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
                  border: 1px solid #ccc;
                  box-shadow: 0 0 3px #ccc;
                }
                span:before{
                  content: '';
                  width:0;
                  height:0;
                  font-size:0;
                  border-color:#ccc;
                  border-top:10px solid transparent;
                  border-bottom:10px solid transparent;
                  border-right:10px solid #ccc;
                  color: #fff;
                  float: left;
                  position: relative;
                  top: 0px;
                  left:-20px;
                }
              }
              img {
                border-radius: 50%;
                display: inline-block;
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
             bottom:100px;
           }
          .input-box{
            padding-bottom:10px;
            padding-left:10px;
            border-bottom:1px solid #E2E2E4;
            input{
              height:35px;
              width:80%;
              border:1px solid #E2E2E4;
              border-radius: 5px;
            }
          }
          .foot-box{
            width:100%;
            background:#f4f4f4;
            padding:10px;
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
