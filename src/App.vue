<template>
  <app-curl />
  <router-view />
</template>
<script setup lang="ts">
import AppCurl from "@/components/AppCtrl.vue";
import { onMounted } from "vue";

onMounted(() => {});
</script>
<style scoped lang="scss"></style>
