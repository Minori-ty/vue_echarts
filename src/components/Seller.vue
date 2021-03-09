<template>
  <div class="com-container">
    <div class="com-chart" ref="seller_ref"></div>
  </div>
</template>
<script>
var echarts = require('echarts')
export default {
  data () {
    return {
      chartInstance: null,
      allData: null
    }
  },
  created () {},
  mounted () {
    this.initChart()
    this.getData()
  },
  methods: {
    initChart () {
      this.chartInstance = echarts.init(this.$refs.seller_ref)
    },
    async getData () {
      const { data: res } = await this.$http.get('seller')
      this.allData = res
      this.updataChart()
    },
    updataChart () {
      const sellerNames = this.allData.map(i => i.name)
      const sellerValue = this.allData.map(i => i.value)
      const option = {
        xAxis: { type: 'value' },
        yAxis: {
          type: 'category',
          data: sellerNames
        },
        series: [
          {
            type: 'bar',
            data: sellerValue
          }
        ]
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped></style>
