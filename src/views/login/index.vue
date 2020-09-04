<template>
  <div>
    <div class="login">
      <h1>登录</h1>
      <el-button type="primary" @click="handleLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    handleLogin() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style lang='scss' scoped>
.login {
  text-align: center;
  margin-top: 100px;
  h1 {
    font-size: 30px;
    margin-bottom: 60px;
  }
}
</style>