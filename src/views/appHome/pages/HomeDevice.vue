<template>
  <div class="HomeDevice">
    <el-button @click="toggles">语言切换</el-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

function toggles() {
  locale.value = locale.value === "zh" ? "en" : "zh";
}

onMounted(() => {
  console.log(import.meta.env);
});
</script>
<style scoped lang="scss"></style>
