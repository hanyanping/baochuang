<!--完善信息页-->
<style lang="scss" scoped>
  .bg-complete{
    background: url(../../assets/img/bgPerfectInfo.png) no-repeat center/cover;
    .inner-box{
      width: 72%;
      margin: 0 14%;
      color: white;
    .item-mes{
        width:100%;
        height: 50px;
        line-height:50px;
        display:flex;
        justify-content: space-between;
      .name{
        width:62%;
        background: rgba(0,0,0,0);
        color: white;
        border-bottom:1px solid #fff;
        margin-bottom:-3px;
      }
        select{
          width:62%;
          background: rgba(0,0,0,0);
          color: white;
          outline: none;
          border:none;
          font-size:18px;
          border-bottom:1px solid #fff;
          -webkit-appearance: none;
        }
      }
      .bot-menu{
        position:fixed;
        bottom:30px;
        left:0;
        width:100%;
        text-align:center;
        color: #c4d5d8;
        .submit-btn{
          margin-top:20px;
          display:inline-block;
          width:80%;
          height:40px;
          line-height: 40px;
          text-align: center;
          border-radius: 30px;
          border: 1px solid #fff;
          color:#fff;
          box-shadow: 0 0 4px #f5f5f5;
        }
      }
    }
  }
  input::-webkit-input-placeholder {
    color:white;
  }
  input:-moz-placeholder {
    color:white;
  }
  .active{
    color: #e662a1;
  }
</style>

<template>
    <div class="device-height bg-complete">
      <div class="inner-box">
        <div class="item-mes paddingT10">
          <label for="name">姓名</label>
          <input type="text" id="name" placeholder="请输入姓名" class="name" v-model="requestJson.name">
        </div>
        <div class="item-mes paddingT10">
          <label class="sex">性别</label>
          <div class="fs20">
            <i class="iconfont color-white" v-for="radio in radioArray"   @click="activeChangeStatus()" :value="radio.value">
              {{radio.text}}
            </i>
          </div>
        </div>
        <div class="item-mes paddingT10">
          <label for="birth">出生年份</label>
          <select name="" id="birth" v-model="requestJson.birthYear">
            <option value="">请选择出生年份</option>
            <option :value="item"  v-for="item in yearArray">{{item}}</option>
          </select>
        </div>
        <div class="item-mes paddingT10">
          <label for="disease">所患疾病</label>
          <select name="" id="disease" v-model="requestJson.disease">
            <option value="">请选择疾病</option>
            <option :value="item.diseaseId" v-for="item in diseaseList">{{item.diseaseName}}</option>
          </select>
        </div>
        <div class="item-mes paddingT10" v-show="false">
          <label for="idcard">身份证号</label>
          <input type="text" id="idcard" readonly="readonly"  class="name" v-model="requestJson.idcard">
        </div>
        <div class="bot-menu">
          <span class="fs16">完善信息，以便医生更好地为您服务</span>
          <a href="#" class="submit-btn" @click="submitInfo">提交</a>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';
  import {Toast} from 'mint-ui';
  import util from '../../components/util'
    export default {
        data(){
            return{
              isActive: false,
              authentication: '33d08dceca0f5fe821b644a0d909a09e',
              requestJson: {
                  name: '',
                  sex: 1,
                  birthYear: '',
                  disease: ''
              },
              radioArray: [
                {radioClass: 'icon-iconfontiocnnan fs18', text: '男', value: '1'},
                {radioClass: 'icon-xingbienv fs20', text: '女', value: '0'},
              ],
              yearArray: [
                '1940', '1941', '1942', '1943', '1944','1945', '1946', '1947',
                '1948', '1949', '1950', '1951', '1952','1953', '1954', '1955', '1956', '1957','1958',
                '1959', '1960', '1961', '1962', '1963','1964', '1965', '1966', '1967', '1968','1969',
                '1970', '1971', '1972', '1973', '1974','1975', '1976', '1977', '1978', '1979','1980',
                '1981', '1982', '1983', '1984', '1985','1986', '1987', '1988', '1989', '1990','1991',
                '1992', '1993', '1994', '1995', '1996','1997', '1998', '1999', '2000', '2001','2002',
                '2003', '2004', '2005', '2006', '2007','2008', '2009', '2010', '2011', '2012','2013',
                '2014', '2015', '2016', '2017',
              ],
              diseaseList: [],
            }
        },
        mounted() {
          this.getDiseaseLabel();
        },
        methods: {

          getDiseaseLabel(){
              axios.get('/api/wx/baochuan_p/getpatientmaindisease',{
                  params:{
                    authentication: this.authentication
                  }
              }).then((result)=>{
                 this.diseaseList = result.data.content;
              }).catch((error) => {
                  console.log(error);
              })
          },

            //改变性别选中状态
          activeChangeStatus() {
              this.isActive = false;
          },

          submitInfo(){
            if(this.requestJson.name == '' || this.requestJson.name == undefined){
              Toast('请输入正确姓名');
              return false;
            }else if(this.requestJson.birthYear == '' || this.requestJson.birthYear == undefined){
              Toast('请选择出生年份');
              return false;
            } else if(this.requestJson.disease == '' || this.requestJson.disease == undefined){
              Toast('请选择疾病类型');
              return false;
            } else{
                console.log(this.authentication);
                console.log(this.requestJson.name);
                console.log(this.requestJson.sex);
                console.log(this.requestJson.birthYear);

                axios.post('/api/wx/baochuan_p/saveinfo', {
                    params:{
                      authentication: this.authentication,
                      name: this.requestJson.name,
                      sex: this.requestJson.sex,
                      birthday: this.requestJson.birthYear,
                      disease_id: this.requestJson.disease
                    }
                }).then((resp) => {
                    console.log(resp);
                }).catch((error) => {
                  Toast('网路不给力哦');
                })
            }
          },

        }
    }
</script>

