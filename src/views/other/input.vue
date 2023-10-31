<template>
  <div class="m-[20px_auto] w-1/2">
    <MyInput ref="MyInputRef" v-model="data" placeholder="地址">
      <template #prepend>
        <el-select v-model="select" placeholder="Select" style="width: 115px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
      <template #append>
        <el-button :icon="Search" />
      </template>
    </MyInput>
  </div>
</template>
  
<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const select: Ref<string> = ref('')
const data: Ref = ref('')
const MyInputRef: any = ref(null)

onMounted(() => {
    // 拿到组件内部的ref
    console.log(MyInputRef.value)
    MyInputRef.value.focus();
})
</script>
  
<style lang="scss" scoped>
</style>