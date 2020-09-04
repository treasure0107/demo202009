<template>
  <div class="content">
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <div id="pieChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.drawLine();
      this.drawPie();
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue Index中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
    drawPie() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("pieChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "某站点用户访问来源",
          // subtext: "纯属虚构",
          // left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        // legend: {
        //   orient: "vertical",
        //   left: "left",
        //   data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
        // },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.main {
  .mt10 {
    margin-top: 10px;
  }
  .menu-con,
  .content {
    float: left;
  }
  .menu-con {
    height: 100%;
  }
}
</style>