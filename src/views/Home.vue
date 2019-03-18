<template xmlns:v-on="http://www.w3.org/1999/xhtml">

  <div class="home-box" id="app" >
    <h1>{{message}}</h1>
  </div>

</template>


<script>
  export default {
    name: "Home",
    data() {
      return {
          message: "登录成功了"
        }
    },
    methods: {

    }
  };
</script>
<style scoped>
  .el-input {
    width:300px;
  }
</style>
