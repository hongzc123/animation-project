<template>
  <div class="container">
    <div v-resize="handleSizeChange" ref="chartRef" class="charts"></div>
  </div>
</template>

<script setup>
// import { useCharts } from "../utils/useCharts";
const chartRef = ref(null);
const width = ref(500);
// useCharts(width, chartRef);

const handleSizeChange = size => {
  width.value = size.width;
  console.log(width.value);
  console.log(size.value);
};
</script>

<style lang="scss" scoped>
</style>