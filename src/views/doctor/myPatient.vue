<template>
  <div class="docBox">
    <div class="myPatientBox">
      <mt-search>
      </mt-search>
    </div>
    <div class="myPatientContent">
      <div class="qianyueBox">
        <div class="qianyue float-box" @click="qianyue">签约患者 （34）<span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai': active, 'icon-shouqi': unActive}"></span></div>
        <div class="patient-box">
          <div class="patient-list">
            <div class="patient-info-box">
              <div class="patient-img">
                <img src="../../assets/img/bgPerfectInfo.png"/>
              </div>
              <div class="patient-info">
                <div class="patient-name-info">
                  <span class="patient-name">王倩</span>
                  <span class="patient-age">55岁</span>
                  <i class="iconfont icon-nan"></i>
                  <span class="jibing">乙肝</span>
                </div>
                <div class="visit-time">
                  复诊时间：2017-04-12
                </div>
              </div>
            </div>
            <div class="patient-time">
              3月23日咨询过我
            </div>
          </div>
          <div class="patient-list">
            <div class="patient-info-box">
              <div class="patient-img">
                <img src="../../assets/img/second.png"/>
              </div>
              <div class="patient-info">
                <div class="patient-name-info">
                  <span class="patient-name">王倩</span>
                  <span class="patient-age">55岁</span>
                  <i class="iconfont icon-nv"></i>
                  <span class="jibing">乙肝</span>
                </div>
                <div class="visit-time">
                  复诊时间：2017-04-12
                </div>
              </div>
            </div>
            <div class="patient-time">
              3月23日咨询过我
            </div>
          </div>
          <div class="patient-list">
            <div class="patient-info-box">
              <div class="patient-img">
                <img src="../../assets/img/second.png"/>
              </div>
              <div class="patient-info">
                <div class="patient-name-info">
                  <span class="patient-name">王倩</span>
                  <span class="patient-age">55岁</span>
                  <i class="iconfont icon-nv"></i>
                  <span class="jibing">乙肝</span>
                </div>
                <div class="visit-time">
                  复诊时间：2017-04-12
                </div>
              </div>
            </div>
            <div class="patient-time">
              3月23日咨询过我
            </div>
          </div>
        </div>
        <div class="zhegaiceng">
          <div class="list-box">

          </div>
          <div class="list-bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'myPatient',
    data () {
      return {
        active: false,
        unActive: true,
        value:"1"
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '我的患者'
    },
    methods: {
      qianyue() {
        if(this.unActive){
          console.log(1)
        }
//          this.$refs.qianyueSpan.className = 'iconfont icon-shouqi'
        this.active = !this.active
        this.unActive = !this.unActive

      }
    }
  }
</script>

<style lang="scss">
  .docBox{
    background:#fff;
    .myPatientContent{
      width:100%;
      height: auto;
      .qianyueBox{
        .qianyue {
          height: 44px;
          line-height: 44px;
          padding-left: 16px;
          border-top:1px solid #f4f4f4;
          -webkit-box-shadow:0 5px 5px #D2E6E3;
          -moz-box-shadow:0 5px 5px #D2E6E3;
          box-shadow:0 5px 5px #D2E6E3;
          margin-bottom:10px;
          .iconfont{
            font-size:16px;
            padding-right:16px;
          }
        }
        .patient-box{
        /*background:#f4f4f4;*/
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
          .zhegaiceng{
            position:relative;
            min-height:500px;
            top:-71vh;
            background:#000;
            opacity:0.1;
            filter: alpha(opacity=10);
            .list-box{
              height:60px;
              background:#fff;
            }
            .list-bottom{
              height:440px;
              background:#000;
              opacity:0.1;
              filter: alpha(opacity=10);
            }
          }
      }
    }
    .myPatientBox {
      height: 60px;
      .mint-searchbar{
        background:#fff !important;
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
  }

</style>
