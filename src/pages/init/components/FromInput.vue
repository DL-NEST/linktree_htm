<template>
  <div class="mb-1 h-auto w-full">
    <span class="text-xs font-bold text-white">{{ title + "：" }}</span>
    <input
      :class="[
        alert
          ? 'ring-2 ring-red-500 focus:outline-none'
          : 'focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fork-dark',
        disabled ? 'cursor-not-allowed' : '',
      ]"
      class="h-9 w-full rounded-md border border-transparent p-1.5 align-text-bottom text-sm font-medium"
      :type="type"
      :value="value"
      :disabled="disabled"
      :placeholder="title"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    value: string;
    type?: "textarea" | "text" | "password";
    disabled?: boolean;
    alert?: boolean;
  }>(),
  {
    title: "默认标题",
    value: "",
    type: "text",
    disabled: false,
    alert: false,
  }
);

defineEmits(["update:value"]);
</script>
<style scoped lang="scss"></style>
