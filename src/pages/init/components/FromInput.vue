<template>
  <div class="mb-1 h-auto w-full">
    <span class="text-xs font-bold text-white">{{ title + "：" }}</span>
    <input
      :class="
        alert
          ? 'ring-2 ring-red-500 focus:outline-none'
          : 'focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fork-dark'
      "
      class="h-9 w-full rounded-sm border border-transparent p-1.5 align-text-bottom text-lg"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  value: string;
  alert?: boolean;
}>();
defineEmits(["update:value"]);
</script>
<style scoped lang="scss"></style>
