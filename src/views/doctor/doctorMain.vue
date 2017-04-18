<template>
  <div>
    <div @click="getData" style="width:100px;height:100px;background: red;"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      getData : function () {
        const ajaxUrl='http://testmanage.aiganyisheng.net';
        this.$http.post(ajaxUrl+'/product/app/getProductList.htm',{sign:'7f187df2e535ba793353ac6b9814a63b'})
          .then((response) => {
            // get body data
            console.log(response.data)
          })
          .catch((response) => {
            // error callback
          })
      }
    }
  }
</script>
