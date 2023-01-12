<template>
  <div class="HomeDevice">
    <el-button @click="toggles">语言切换</el-button>
    <el-button @click="healthy">请求</el-button>
    <el-button @click="healthy_only">单独请求</el-button>
    <el-tag>{{ useCounter.access_token }}</el-tag>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
import { getHealthy, login } from "@/service";
import { useStorageStore } from "@/stores/StorageStore";

const useCounter = useStorageStore();

function toggles() {
  locale.value = locale.value === "zh" ? "en" : "zh";
}

function healthy() {
  getHealthy().then((data) => {
    console.log(data.data);
  });
  useCounter.increment();
}

async function healthy_only() {
  const data = await login({
    username: "root",
    password: "qq2002123",
  });
  if (data) {
    console.log(data.data.username);
  }
}

onMounted(() => {});
</script>
<style scoped lang="scss"></style>
