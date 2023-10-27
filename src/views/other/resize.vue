<template>
  <div class="container" v-size-ob="handleSizeChange" ref="chartRef">
    <div class="charts h-5 bg-slate-500"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
// import { useCharts } from "../utils/useCharts";
const chartRef: Ref = ref(null);
const width: Ref = ref(500);
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