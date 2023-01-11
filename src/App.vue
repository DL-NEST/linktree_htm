<template>
  <el-config-provider :size="'small'" :z-index="3000" :locale="zhCn">
    <app-curl />
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import AppCurl from "@/components/AppCtrl.vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

import { onMounted } from "vue";

onMounted(() => {});
</script>
<style scoped lang="scss"></style>
