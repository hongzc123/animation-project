<template>
  <div class="controller">
    <el-button type="primary" size="default" plain @click="openMsg">显示弹窗</el-button>
  </div>
</template>

<script setup>
import { showMsg } from "@/utils/message";

const openMsg = () => {
  showMsg("dsdafa", close => {
    console.log("弹窗关闭");
    close();
  });
};
</script>

<style lang="scss" scoped>
.controller {
  display: flex;
  justify-content: center;
  column-gap: 20px;
}
</style>