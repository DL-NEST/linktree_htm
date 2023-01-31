<template>
  <div class="mt-8 flex w-full flex-row">
    <from-button @click="emit('click1')" :title="title1" />
    <div class="w-20"></div>
    <from-button @click="emit('click2')" :title="title2" :loading="loading" />
  </div>
</template>

<script setup lang="ts">
import FromButton from "@pages/init/components/FromButton.vue";

defineProps<{
  title1: string;
  title2: string;
  loading?: boolean;
}>();
const emit = defineEmits<{
  (e: "click1"): void;
  (e: "click2"): void;
}>();
</script>
<style scoped lang="scss"></style>
