<template>
  <div class="flex flex-col justify-center">
    <el-button-group class="m-auto mb-5">
      <el-button type="primary" color="white">春</el-button>
      <el-button type="primary" color="white">夏</el-button>
      <el-button type="primary" color="white">秋</el-button>
      <el-button type="primary" color="white">冬</el-button>
    </el-button-group>
    <el-button-group>
      <el-button>1月</el-button>
      <el-button>2月</el-button>
      <el-button>3月</el-button>
      <el-button>4月</el-button>
      <el-button>5月</el-button>
      <el-button>6月</el-button>
      <el-button>7月</el-button>
      <el-button>8月</el-button>
      <el-button>9月</el-button>
      <el-button>10月</el-button>
      <el-button>11月</el-button>
      <el-button>12月</el-button>
    </el-button-group>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["change"]);
</script>

<style lang="scss" scoped>
</style>