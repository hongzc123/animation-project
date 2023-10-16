<template>
  <div class="">
    <div class="w-[100px] h-[100px] rounded-full bg-[red] red"></div>
    <div class="w-[100px] h-[100px] rounded-full bg-[green] green"></div>
    <div class="w-[100px] h-[100px] rounded-full bg-[blue] blue"></div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  // 创建时间线
  const t = gsap.timeline();
  // 添加动画序列
  // t.to(".red", { x: 600, duration: 1 }, 3); //delay 3后执行
  t.to(".red", { x: 600, duration: 1 });
  // t.to(".green", { x: 400, duration: 2 });
  t.to(".green", { x: 400, duration: 2 }, "<"); //红色盒子在走的时候绿色盒子也跟着走
  // t.to(".blue", { x: 200, duration: 1 });
  t.to(".blue", { x: 200, duration: 1 }, "-=1"); //绿色盒子结束前一秒蓝色盒子走
});
</script>

<style lang="scss" scoped>
p img {
  width: 50px;
  height: 50px;
}
</style>