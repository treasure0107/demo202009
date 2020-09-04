<template>
  <div class="header">
    <div>企业管理</div>
    <div class="user">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          用户名
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">修改账户</el-dropdown-item>
          <el-dropdown-item command="2">修改密码</el-dropdown-item>
          <el-dropdown-item command="3">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <modifyAccount
      v-if="dialogVisibleAccount"
      :dialog-visible-account="dialogVisibleAccount"
      @handleDialogVisibleAccount="handleDialogVisibleAccount"
    />
  </div>
</template>

<script>
import modifyAccount from "@/components/dialog/modifyAccount";
export default {
  components: {
    modifyAccount,
  },

  data() {
    return {
      dialogVisibleAccount: false,
    };
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    handleCommand(command) {
      this.$message.success("click on item " + command);
      if (command == 1) {
        this.dialogVisibleAccount = true;
      }
      if (command == 3) {
        this.$router.push({ path: "/login" });
      }
    },
    handleDialogVisibleAccount(val) {
      console.log("dialogVisibleAccount", val);
      this.dialogVisibleAccount = val;
    },
  },
};
</script>
<style lang='scss' scoped>
.header {
  height: 60px;
  line-height: 60px;
  padding: 0 30px;
  background-color: #ccc;
  display: flex;
  > div {
    flex: 1;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }
  .user {
    text-align: right;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>