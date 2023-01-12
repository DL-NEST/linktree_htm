<template>
  <app-layouts>
    <app-curl />
    <router-view />
  </app-layouts>
</template>
<script setup lang="ts">
import AppCurl from "@/components/AppCtrl.vue";
import AppLayouts from "@/layouts/AppLayouts.vue";

import { onMounted } from "vue";

onMounted(() => {});
</script>
<style scoped lang="scss"></style>
