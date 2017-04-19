<template>
  <div id="docConsult">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>
<script>
//  import { Navbar, TabItem } from 'mint-ui';
//  Vue.component(Navbar.name, Navbar);
//  Vue.component(TabItem.name, TabItem);

  export default {
    name: 'docConsult',
    data () {
      return {
        selected:'1'
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '王倩'
    }
  }

</script>

<style  >
  .docConsult{
    background:#f00;
    width:100%;
     height:40px;
    .consultBox{
      background:#ff0;
      height:4px;
    }
  }
</style>
