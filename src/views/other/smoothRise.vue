<template>
  <div class="container">
    <div v-slide-in class="item bg-gradient-to-r from-cyan-500 to-blue-500">
      1
    </div>
    <div v-slide-in class="item bg-gradient-to-r from-sky-500 to-indigo-500">
      2
    </div>
    <div
      v-slide-in
      class="item bg-gradient-to-r from-violet-500 to-fuchsia-500"
    >
      3
    </div>
    <div v-slide-in class="item bg-gradient-to-r from-purple-500 to-pink-500">
      4
    </div>
    <div v-slide-in class="item bg-gradient-to-r from-indigo-500">5</div>
    <div
      v-slide-in
      class="item bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      6
    </div>
    <div
      v-slide-in
      class="item bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    >
      7
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.container {
  margin: 1em auto;
  width: 80%;
}
.item {
  width: 500px;
  height: 300px;
  line-height: 300px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 30px;
  color: #fff;
}
</style>