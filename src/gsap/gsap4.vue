<template>
  <div class="h-[5000px] font-calc">
    <div class="screen1 w-full h-[100vh] bg-[pink]"></div>
    <div class="screen2 w-full h-[100vh] bg-[skyblue] relative">
      <div class="pic">
        <img class="pic1" src="../assets/image/pic1.jpg" alt />
        <img class="pic2" src="../assets/image/pic2.jpg" alt />
        <img class="pic3" src="../assets/image/pic3.jpg" alt />
        <img class="pic4" src="../assets/image/pic4.jpg" alt />
        <img class="pic5" src="../assets/image/pic5.jpg" alt />
        <img class="pic6" src="../assets/image/pic6.jpg" alt />
        <img class="pic7" src="../assets/image/pic7.jpg" alt />
      </div>
    </div>
    <div class="screen3 w-full h-[100vh] bg-[salmon]"></div>
  </div>
</template>
  
<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  ScrollTrigger.create({
    // 触发元素第二屏
    trigger: ".screen2",
    // 起始位置
    start: "top top",
    // 结束位置
    end: "+=1000",
    // 显示起始和结束位置
    markers: true,
    // 让screen2 改为固定定位
    pin: true,
    scrub: true,
    animation: gsap
      .timeline()
      .fromTo(".pic4", { width: "18.75em" }, { width: "16.75em" })
      .fromTo(".pic1", { left: "55.125em" }, { left: "14.3em" }, "<")
      .fromTo(".pic7", { right: "55.125em" }, { right: "14.3em" }, "<")
      .fromTo(".pic2", { left: "55.125em" }, { left: "26.1em" }, "<")
      .fromTo(".pic6", { right: "55.125em" }, { right: "26.1em" }, "<")
      .fromTo(".pic3", { left: "55.125em" }, { left: "39.8em" }, "<")
      .fromTo(".pic5", { right: "55.125em" }, { right: "39.8em" }, "<")
  });
});
</script>
  
<style lang="scss" scoped>
.font-calc {
  /* 计算方法 15 / (1920/100) */
  font-size: 0.78125vw !important;
  overflow: hidden;
}
.pic {
  position: absolute;
  width: 127em;
  //   top: 70%;
  //   top: 15em;
  top: 50%;
  transform: translateY(-50%);
}
.pic img {
  position: absolute;
  //   top: 15em;
  top: 0;
}
.pic1,
.pic7 {
  width: 11.266666666em;
}
.pic2,
.pic6 {
  width: 13.066666666em;
}
.pic3,
.pic5 {
  width: 14.866666666em;
}

.pic4 {
  width: 18.75em;
  left: 55.125em;
}
.pic1,
.pic2,
.pic3 {
  left: 55.125em;
  z-index: -1;
}
.pic5,
.pic6,
.pic7 {
  right: 55.125em;
  z-index: -1;
}
</style>