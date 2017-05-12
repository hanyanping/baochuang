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
        <router-link class="btn-menu" to="patientMain"> 我的 </router-link>
      </li>
      <li>
        <router-link class="btn-menu" to="patientMain"> 账户 </router-link>
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

    methods : {

    },
    mounted () {
    }
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
