<style scoped lang="scss">
  .circle-left{
    left:0;
    top:40px;
  }
  .circle-right{
    right:0;
    top:40px;
  }
  .clinic-check-label{
    width:36px;
    height:18px;
    border-radius: 18px;
    border:1px solid #60ac9c;
    line-height:18px;
    text-align: center;
    margin-left:10px;
    padding:0 4px;
    display:inline-block;
    color: #60a39c;
  }
  .clinic-list-box{
    /*width: 88%;*/
    padding:15px 6%;
    .clinic-item-list{
      width:100%;
      border-left:2px solid #60a39c;
      height:55px;
      line-height: 55px;
      .list-style{
        margin-left:-8px;
      }
    }
  }
</style>

<template>
    <div class="device-height bg-grey over-hidden">
      <div class="parent-width parent-margin box-shade circular-bead pos-relate bg-white">
        <span class="half-circle-left pos-absolute bg-grey circle-left"></span>
        <span class="half-circle-right pos-absolute bg-grey circle-right"></span>
        <ul class="clinic-list-box fs16 color-black">
          <li class="clinic-item-list">
            <span class="circle-shaft bg-cure list-style"></span>
            <span>03-15 门诊</span>
            <span class="fr">
              <em class="clinic-check-label">检查</em>
              <em class="clinic-check-label">处方</em>
            </span>
          </li>
          <li class="clinic-item-list">
            <span class="circle-shaft bg-cure list-style"></span>
            <span>03-16 住院</span>
            <span class="fr">
              <em class="clinic-check-label fs14">检查</em>
              <em class="clinic-check-label fs14">处方</em>
            </span>
          </li>
          <li class="clinic-item-list">
            <span class="circle-shaft bg-cure list-style"></span>
            <span>03-17 住院</span>
            <span class="fr">
              <em class="clinic-check-label">检查</em>
              <em class="clinic-check-label">处方</em>
            </span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {}
        }
    }
</script>
