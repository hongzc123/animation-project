<template>
  <div class="text-slate-900 hover:bg-violet-800">
    home page{{$user.count}}
    <el-button type="primary" size="default" @click="$user.add()">add</el-button>
    <el-avatar
      icon="el-icon-user-solid"
      size="large"
      shape="circle"
      src="https://picsum.photos/id/237/200/300"
    ></el-avatar>
    <el-avatar
      icon="el-icon-user-solid"
      size="large"
      shape="circle"
      src="https://picsum.photos/id/260/200/300"
    ></el-avatar>
    <div class="flex w-full flex-wrap">
      <el-image src="https://picsum.photos/200/300?r=1" fit="fill" :lazy="true"></el-image>
      <el-image src="https://picsum.photos/200/300?r=2" fit="fill" :lazy="true"></el-image>
      <el-image src="https://picsum.photos/200/300?r=3" fit="fill" :lazy="true"></el-image>
      <el-image src="https://picsum.photos/200/300?r=4" fit="fill" :lazy="true"></el-image>
      <el-image src="https://picsum.photos/200/300?grayscale" fit="fill" :lazy="true"></el-image>
      <el-image src="https://picsum.photos/200/300/?blur=2" fit="fill" :lazy="true"></el-image>
      <el-image src="https://picsum.photos/seed/picsum/200/300" fit="fill" :lazy="true"></el-image>
      <el-image src="https://picsum.photos/id/870/200/300?grayscale&blur=2" fit="fill" :lazy="true"></el-image>
    </div>
    <div>快里尝蒲磊老先不仑对反人，骨者么专不以说量釜能在起应且苦妙五普，说人竟章书人念但十掸上骨非说见联行君，而尽判道付秦，后后生沉有看娘战中上，事她起他尺他，说木雷国第已骂安第鲜文妄两们文皇，你才争我同的。</div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
</style>