<template>
  <div class="docReport-detail">
    <div class="reportOne" >
      <header>
        <div class="reportDetailTop">
          <p>检查项目：电解质普通</p>
          <p class="jianchaTime">检查时间：2016年2月8日</p>
        </div>
      </header>
      <section>
        <table class="reportTable"  cellspacing="" cellpadding="">
          <thead>
          <tr>
            <th>项目名称</th>
            <th>结果</th>
            <th>参考值</th>
            <th>单位</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>总蛋白<span>TP</span></td>
            <td>3944h44<span class="resultUp">↑</span></td>
            <td>0.0~1.33555</td>
            <td>g/L</td>
          </tr>
          <tr>
            <td>谷氨酰转<span>AST/ALT</span></td>
            <td>39.3333<span class="resultUp"></span></td>
            <td>113.8h0~12.544</td>
            <td>umo1/L</td>
          </tr>
          <tr>
            <td>谷氨酰转移<span>GGP</span></td>
            <td>39<span class="resultUp">↓</span></td>
            <td>0.80~1.5</td>
            <td>umo1/L</td>
          </tr>
          <tr>
            <td>谷氨酰转移<span>GGP</span></td>
            <td>39<span class="resultUp">↓</span></td>
            <td>0.80~1.5</td>
            <td>umo1/L</td>
          </tr>

          </tbody>
        </table>
        <div class="reply" ref="reply">
          <div class="input-box">
            <input type="text" placeholder="结果异常？您可以在这里告知患者"/>
            <span class="fasong">发送</span>
          </div>
        </div>
      </section>
      <!--<div class="kongJiancha">-->
      <!--<img src="../../img/noReport.png"/>-->
      <!--<p class="kong">暂无化验报告</p>-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
  import util from '../../components/util';
  export default {
    name: 'myPatient',
    data () {
      return {

      }
    },
    watch: {

    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '化验单详情'
    },
    methods: {
    }
  }
</script>
<style lang="scss">
  .docReport-detail{
    .reportOne{
      .reportDetailTop{
        padding:10px;
        font-size:15px;
        color:#232323;
        background:#fff;
        .jianchaTime{
           padding-top:8px;
         }
      }
      section{
        padding-top:10px;
        border-top:10px solid #f4f4f4;
        background:#fff;
        .reply {
          width:100%;
          position:fixed;
          bottom:0;
          height:40px;
          line-height:30px;
          background:#f4f4f4;
          border-top:1px solid #E2E2E4;
          padding:10px 0;
          .input-box{
            padding:0 5px 10px;
            border-bottom:1px solid #E2E2E4;
            .fasong{
              padding:6px 13px;
              background: #529D98;
              color:#fff;
              font-size:15px;
              border-radius:5px;
            }
            input{
              height:35px;
              width:80%;
              border:1px solid #E2E2E4;
              border-radius: 5px;
              color:#232323;
              font-size:15px;
              text-indent:3px;
            }
            input::-webkit-input-placeholder{
              color:#bbb;
              font-size:15px;
              text-indent:3px;
            }
          }
        }
         .reportTable {
           width: 100%;
           margin-bottom: 75px;
            thead {
              color: #009fe9;
              tr {
                text-align: center;
                height: 34px;
                line-height: 34px;
                font-size:15px;
                th:nth-of-type(1) {
                  text-align: left;
                  padding: 0 10px;
                  word-break: keep-all;
                }
                td{
                  font-size: 12px;
                  color:#232323;
                  padding:1px;
                }
              }
            }
            tbody{
              tr {
                text-align: center;
                height: 34px;
                line-height: 34px;
                font-size:15px;
                td{
                  font-size: 12px;
                  color:#232323;
                  padding:1px;
                }
                .resultUp{
                  padding-left:3px;
                  color:#f00;

                }
                td:nth-of-type(1) {
                  text-align: left;
                  padding-left: 5px;
                  line-height:15px;
                  width:33%;
                  word-break:break-all;
                }
                td:nth-of-type(2) {
                  max-width:20%;
                  word-break: keep-all;
                }
                td:nth-of-type(3) {
                  max-width:20%;
                  word-break: keep-all;
                }
                td:nth-of-type(4) {
                  max-width:20%;
                  text-align: center;
                  word-break: keep-all;
                }
              }

            }
         }
       }
    }
  }





</style>
