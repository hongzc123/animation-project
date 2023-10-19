<template>
  <div class="h-[1500px]">
    <div class="screen1">
      <div class="pic">
        <img class="pic1" src="../assets/image/pic1.jpg" alt="" />
        <img class="pic2" src="../assets/image/pic2.jpg" alt="" />
        <img class="pic3" src="../assets/image/pic3.jpg" alt="" />
        <img class="pic4" src="../assets/image/pic4.jpg" alt="" />
        <img class="pic5" src="../assets/image/pic5.jpg" alt="" />
        <img class="pic6" src="../assets/image/pic6.jpg" alt="" />
        <img class="pic7" src="../assets/image/pic7.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  ScrollTrigger.create({
    trigger: ".pic",
    start: "top top",
    end: "+=1000",
    scrub: true,
    animation: gsap
      .timeline()
      .fromTo(".pic4", { width: "18.75em" }, { width: "16.75em" })
      .fromTo(".pic1", { left: "55.125em" }, { left: "14.3em" }, "<")
      .fromTo(".pic7", { right: "55.125em" }, { right: "14.3em" }, "<")
      .fromTo(".pic2", { left: "55.125em" }, { left: "26.1em" }, "<")
      .fromTo(".pic6", { right: "55.125em" }, { right: "26.1em" }, "<")
      .fromTo(".pic3", { left: "55.125em" }, { left: "39.8em" }, "<")
      .fromTo(".pic5", { right: "55.125em" }, { right: "39.8em" }, "<"),
  });
});
</script>

<style lang="scss" scoped>
html {
  /* 计算方法 15 / (1920/100) */
  font-size: 0.78125vw !important;
  overflow: hidden;
}
.screen1 {
  position: relative;
}
.pic {
  width: 127em;
}
.pic img {
  position: absolute;
  top: 15em;
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