<template>
  <el-config-provider
    :size="'small'"
    :z-index="3000"
    :locale="locale === 'zh' ? zhCn : en"
  >
    <slot></slot>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import { useI18n } from "vue-i18n";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
// element-plus的css
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/dialog/style/css";
import "element-plus/es/components/drawer/style/css";
import "element-plus/es/components/loading/style/css";
import "element-plus/es/components/message-box/style/css";
import "element-plus/es/components/notification/style/css";
import "element-plus/es/components/popconfirm/style/css";
import "element-plus/es/components/popover/style/css";

const { locale } = useI18n();
</script>
<style scoped lang="scss"></style>
