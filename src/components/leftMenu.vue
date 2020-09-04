<template>
  <div class="menu-nav">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 10px;" class="btn-collapse">
      <el-radio-button class="btn" :label="true">
        <i class="el-icon-d-arrow-left"></i>
      </el-radio-button>
      <el-radio-button class="btn" :label="false">
        <i class="el-icon-d-arrow-right"></i>
      </el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-left"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>-->
      </el-submenu>
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">Home</span>
      </el-menu-item>
      <el-menu-item index="message">
        <i class="el-icon-document"></i>
        <span slot="title">账号管理</span>
      </el-menu-item>
      <el-menu-item index="user">
        <i class="el-icon-setting"></i>
        <span slot="title">用户中心</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      isCollapse: true,
      menuList: [],
    };
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang='scss' scoped>
.menu-nav {
  position: relative;
  height: 100%;
  .btn-collapse {
    position: absolute;
    top: 50%;
    right: -60px;
    z-index: 666;
    .btn {
      font-size: 16px;
      /deep/ .el-radio-button__inner {
        padding: 4px 6px;
      }
    }
  }
}
.el-menu-left:not(.el-menu--collapse) {
  width: 160px;
  min-height: 600px;
}
.el-menu-left {
  height: calc(100vh - 96px);
  /deep/ .el-submenu .el-menu-item {
    min-width: 160px;
  }
}
</style>