<!--患者端菜单-->
<template>
  <div>
    <ul>
      <li>
        <router-link class="btn-menu" to="patientMain"> 预约 </router-link>
      </li>
      <li>
        <router-link class="btn-menu" to="patientMain"> 咨询 </router-link>
      </li>
      <li>
        <router-link class="btn-menu" to="reserveList"> 预约订单 </router-link>
      </li>
      <li>
        <router-link class="btn-menu" to="patientMain"> 咨询订单 </router-link>
      </li>
      <li>
        <router-link class="btn-menu" to="patientMain"> 登录 </router-link>
      </li>
      <li>
        <router-link class="btn-menu" to="patientMain"> 完善信息 </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

  .btn-menu{
    width:100%;
    text-align:center;
    padding:20px 0;
    display:inline-block;
    border-bottom:1px solid #ccc;
    background:rgba(84,159,152,0.8);
    color:#fff;
  }
</style>
