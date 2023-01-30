<template>
  <div class="mt-10 flex w-full flex-row">
    <button
      type="submit"
      @click="emit('click1')"
      class="group relative flex w-full justify-center rounded-md border border-transparent bg-fork-dark py-2 px-4 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2"
    >
      {{ title1 }}
    </button>
    <div class="w-20"></div>
    <button
      type="submit"
      @click="emit('click2')"
      class="group relative flex w-full justify-center rounded-md border border-transparent bg-fork-dark py-2 px-4 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2"
    >
      {{ title2 }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title1: string;
  title2: string;
}>();
const emit = defineEmits<{
  (e: "click1"): void;
  (e: "click2"): void;
}>();
</script>
<style scoped lang="scss"></style>
