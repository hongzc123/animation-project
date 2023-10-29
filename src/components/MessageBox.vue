<template>
  <div class="modal">
    <div class="box">
      <div class="text">{{msg}}</div>
      <el-button type="primary" size="default" @click="emit('click')">确定</el-button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["click"]);

defineProps({
  msg: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.box {
  width: 30%;
  min-height: 150px;
  border-radius: 12px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>