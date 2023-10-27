<template>
  <div class="page-container" :style="{ backgroundImage: `url(${url})`}">
    <TypeSelector @change="handleChange" />
  </div>
</template>
  
<script lang="ts" setup>
import { ref, type Ref, computed } from 'vue';
import TypeSelector from "../../components/TypeSelector.vue";
const name: Ref<string> = ref('')

const handleChange = (val: string) => {
    // console.log(val);
    name.value = val
    // console.log(name.value)
};

const url: string = computed(() => {
    // new URL() 接收两个参数，第一个参数是当前页面的 URL，第二个参数是目标页面的 URL
    // 第一个参数是相对路径，在url地址上拼接上name
    // 第二个参数是基准路劲，通过import.meta.url来获取当前模块的基准路径
    const obj = new URL(`../../assets/image/${name.value}.jpg`, import.meta.url)
    // console.log(obj)
    // console.log(import.meta.url)
    return obj.pathname
})
</script>
  
<style lang="scss" scoped>
.page-container {
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