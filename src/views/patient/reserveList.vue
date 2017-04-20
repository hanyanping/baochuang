<template>
  <div>
    dddddddddddd
    <mt-loadmore :top-method="loadTop" :top-status.sync="topStatus">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        msg: 'settingVisitTime'
      }
    }
  }

</script>
