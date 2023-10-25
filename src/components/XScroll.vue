<template>
  <div v-size-ob="handleSizeChange" class="scroll-container">
    <div class="v-scroll">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
const s = reactive({
  w: 0,
  h: 0,
});
const handleSizeChange = (size: any) => {
  s.w = size.width;
  s.h = size.height;
  console.log(size);
  console.log(s.w, s.h);
};
</script>
  
<style lang="scss" scoped>
.scroll-container {
  width: 100%;
  height: 100%;
  //   outline: 4px solid red;
}
.v-scroll {
  // width: 父元素的高度;
  // height: 父元素的宽度;
  //   width: calc(v-bind("s.h") * 1px);
  //   height: calc(v-bind("s.w") * 1px);
  //   outline: 4px solid darkcyan;

  --w: calc(v-bind("s.w") * 1px);
  --h: calc(v-bind("s.h") * 1px);
  width: var(--h);
  height: var(--w);
  //   border: 4px solid darkcyan;
  overflow: auto;
  position: relative;
  transform-origin: left top;
  transform: translateY(var(--h)) rotate(-90deg);
}
.content {
  position: absolute;
  top: 0;
  left: var(--h);
  height: var(--h);
  //   border: 2px solid blue;
  transform-origin: left top;
  transform: rotate(90deg);
}

// 隐藏滚动条
.v-scroll::-webkit-scrollbar {
  display: none;
}
</style>