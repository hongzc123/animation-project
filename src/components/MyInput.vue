<template>
  <div class="my-input">
    <el-input ref="input" size="large" v-bind="$attrs">
      <!-- 插槽 -->
      <!-- <template v-for="(value, name) in $slots" #[name]>
        <slot :name="name"></slot>
      </template>-->

      <!-- 作用域插槽 -->
      <template v-for="(value, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}"></slot>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$attrs);
    console.log(this.$slots);
  },
  mounted() {
    console.log(this.$refs.input);
    // 将this.$refs.input提到当前实例上
    const entries = Object.entries(this.$refs.input);
    for (const [key, value] of entries) {
      this[key] = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.my-input {
  transition: 0.3s;
}
.my-input:hover,
.my-input:focus-within {
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
}
</style>