<template>
  <button
    type="submit"
    class="transition-colors mt-10 group relative flex w-full justify-center rounded-md border border-transparent bg-fork-dark py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
<style scoped lang="scss"></style>
