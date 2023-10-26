<template>
  <div class="container">
    <TypeSelector @change="handleChange" />
  </div>
</template>
  
<script lang="ts" setup>
import TypeSelector from "../../components/TypeSelector.vue";

const handleChange = (val: string) => {
  console.log(val);
};
</script>
  
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  padding-top: 30px;
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/image/bg1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.3s;
}
</style>