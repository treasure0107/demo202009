<!-- home -->
<template>
  <div>
    <h1>home</h1>
    <div>用户名login:{{this.$store.state.login.useName}}</div>

    <div>
      <el-button type="primary" @click="getData">获取</el-button>
      <el-button type="primary" @click="getList">获取...</el-button>
    </div>
  </div>
</template>

<script>
import Api from "@/utils/api.js";
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    getData() {
      console.log(Api);

      this.$axios.get(Api.login.topics, null, (res) => {
        console.log(res);
      });
    },
    getList() {
      this.$axios.get(
        Api.login.topics,
        { id: "5efb4c5d13f8b244e57cc632" },
        (res) => {
          console.log(res);
        }
      );
    },
  },
};
</script>
<style lang='scss' scoped>
</style>