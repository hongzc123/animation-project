<template>
  <div class="container" v-resize="handleSizeChange" ref="chartRef">
    <div class="charts h-5 bg-slate-500"></div>
  </div>
</template>

<script lang="ts" setup>
// import { useCharts } from "../utils/useCharts";
const chartRef = ref(null);
const width = ref(500);
// useCharts(width, chartRef);

const handleSizeChange = (size: any) => {
  width.value = size.width;
  console.log(width.value);
  console.log(size.width);
  chartRef.value.style.width = width.value + "px";
};
</script>

<style lang="scss" scoped>
</style>