<template>
  <div class="demo">
    <div class="card-container">
      <XScroll>
        <div class="card-list">
          <div class="card">
            <img src="https://picsum.photos/1000/800?r=1" alt="" />
          </div>
          <div class="card">
            <img src="https://picsum.photos/1000/800?r=2" alt="" />
          </div>
          <div class="card">
            <img src="https://picsum.photos/1000/800?r=3" alt="" />
          </div>
          <div class="card">
            <img src="https://picsum.photos/1000/800?r=4" alt="" />
          </div>
          <div class="card">
            <img src="https://picsum.photos/1000/800?r=5" alt="" />
          </div>
          <div class="card">
            <img src="https://picsum.photos/1000/800?r=6" alt="" />
          </div>
          <div class="card">
            <img src="https://picsum.photos/1000/800?r=7" alt="" />
          </div>
          <div class="card">
            <img src="https://picsum.photos/1000/800?r=8" alt="" />
          </div>
        </div>
      </XScroll>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.card-container {
  width: 100%;
  height: 100vh; // XScroll组件外层需要设置高度填满屏幕高度，否则有会多余的空间滚动条
}
.card-list {
  display: flex;
}
.card {
  flex: 1 0 auto;
  width: 1000px;
  height: 800px;
}
</style>