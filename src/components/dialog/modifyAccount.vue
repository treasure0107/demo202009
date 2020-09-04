<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClose" plain>取 消</el-button>
        <el-button type="primary" @click="handleSure">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisibleAccount: {
      type: Boolean,
    },
  },
  components: {},

  data() {
    return {
      dialogVisible: true,
    };
  },

  computed: {},

  created() {},

  mounted() {},
  watch: {
    dialogVisible: function (val) {
      console.log(val);
      this.$emit("handleDialogVisibleAccount", val);
    },
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
      // this.$emit("handleDialogVisibleAccount", false);
    },
    handleSure() {
      this.dialogVisible = false;
      // this.$emit("handleDialogVisibleAccount", false);
    },
  },
};
</script>
<style lang='scss' scoped>
</style>