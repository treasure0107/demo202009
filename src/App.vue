<template>
  <div id="app">
    <div>
      <Header v-if="!$route.meta.isHeaderHide"/>
      <el-container>
        <!-- <el-aside> -->
          <leftMenu v-if="!$route.meta.isMenuHide"/>
        <!-- </el-aside> -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import leftMenu from "@/components/leftMenu.vue";
export default {
  name: "App",
  components: { Header, leftMenu },
};
</script>

<style>
</style>
