<template>
  <div class="wrap w-[100vw] h-[100vh] relative">
    <div
      class="grid grid-cols-2 gap-[30px] w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <div class="item" v-for="(url, i) in images" :key="i">
        <img
          class="object-cover rounded-[5px]"
          crossorigin="anonymous"
          @mouseenter="handleMouseEnter($event.target, i)"
          @mouseleave="handleMouseLeave"
          :src="url"
          :style="{ opacity: hoverIndex === -1 ? 1 : i === hoverIndex ? 1 : 0.2}"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ColorThief from "colorThief";
const colorThief = new ColorThief();
const html = document.documentElement;

const images = [];
for (let i = 1; i <= 4; i++) {
  images.push(`https://picsum.photos/800/800?r=${i}`);
}

const hoverIndex = ref(-1);

const handleMouseEnter = async (img, i) => {
  hoverIndex.value = i;
  console.log(img);
  console.log(hoverIndex.value);

  const colors1 = await colorThief.getColor(img, 3);
  console.log(colors1);
  const colors = await colorThief.getPalette(img, 3);
  console.log(colors);
  const colorsMap = colors.map(c => `rgb(${c[0]}, ${c[1]}, ${c[2]})`);
  console.log(colorsMap);

  html.style.setProperty("--color-1", colorsMap[0]);
  html.style.setProperty("--color-2", colorsMap[1]);
  html.style.setProperty("--color-3", colorsMap[2]);
};

const handleMouseLeave = () => {
  hoverIndex.value = -1;
  html.style.setProperty("--color-1", "#fff");
  html.style.setProperty("--color-2", "#fff");
  html.style.setProperty("--color-3", "#fff");
};
</script>

<style lang="scss" scoped>
html {
  background: var(--color-1);
}
.wrap {
  //   background: var(--color-1);
  // background: linear-gradient(
  //   360deg,
  //   var(--color-1) 0%,
  //   var(--color-2) 50%,
  //   var(--color-3) 100%
  // );
  // background: linear-gradient(
  //   180deg,
  //   var(--color-1) 0%,
  //   var(--color-2) 50%,
  //   var(--color-3) 100%
  // );
  background: linear-gradient(
    var(--color-1) 0%,
    var(--color-2) 50%,
    var(--color-3) 100%
  );
}
img:hover {
  border: 4px solid #fff;
  border-radius: 5px;
  transform: scale(1.1);
  transition: 0.5s ease-in-out;
}
</style>