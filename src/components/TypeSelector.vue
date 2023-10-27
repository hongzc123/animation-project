<template>
  <div class="flex flex-col justify-center">
    <el-button-group class="m-auto mb-5">
      <el-button
        v-for="(item, i) in season"
        :key="i"
        type="primary"
        color="white"
        @click="handleClick(item)"
      >{{item.label}}</el-button>
    </el-button-group>
    <el-button-group>
      <el-button v-for="(item, i) in month" :key="i" @click="handleClick(item)">{{item.label}}</el-button>
    </el-button-group>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';

const month: Ref = ref([
    {
      value: "1",
      label: "1月"
    },
    {
      value: "2",
      label: "2月"
    },
    {
      value: "3",
      label: "3月"
    },
    {
      value: "4",
      label: "4月"
    },
    {
      value: "5",
      label: "5月"
    },
    {
      value: "6",
      label: "6月"
    },
    {
      value: "7",
      label: "7月"
    },
    {
      value: "8",
      label: "8月"
    },
    {
      value: "9",
      label: "9月"
    },
    {
      value: "10",
      label: "10月"
    },
    {
      value: "11",
      label: "11月"
    },
    {
      value: "12",
      label: "12月"
    },
]);
const season: Ref = ref([
    {
      value: "spring",
      label: "春"
    },
    {
      value: "summer",
      label: "夏"
    },
    {
      value: "autumn",
      label: "秋"
    },
    {
      value: "winter",
      label: "冬"
    }
])   

const handleClick = (item: any) => {
  emit("change", item.value);
}

const emit = defineEmits(["change"]);
</script>

<style lang="scss" scoped>
</style>