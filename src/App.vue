<template>
  <el-config-provider
    :size="'small'"
    :z-index="3000"
    :locale="locale === 'zh' ? zhCn : en"
  >
    <app-curl />
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import AppCurl from "@/components/AppCtrl.vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

onMounted(() => {});
</script>
<style scoped lang="scss"></style>
