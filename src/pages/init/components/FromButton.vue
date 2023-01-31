<template>
  <button
    type="submit"
    :class="
      loading
        ? 'bg-amber-100 bg-indigo-400 cursor-not-allowed'
        : 'hover:bg-indigo-700  focus:outline-none focus:ring-2'
    "
    :disabled="loading"
    class="group relative mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-fork-dark py-2 px-4 text-sm font-medium text-white transition-all"
  >
    <svg-icon
      v-if="loading"
      name="loading"
      color="#ffffff"
      class="svg mr-1 h-4 w-4 transition-all"
    ></svg-icon>
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/global/svgIcon/SvgIcon.vue";
withDefaults(
  defineProps<{
    title: string;
    loading?: boolean;
  }>(),
  {
    title: "默认标题",
    loading: false,
  }
);
</script>
<style scoped lang="scss">
.svg {
  animation: rotating 2s linear infinite;
}
</style>
