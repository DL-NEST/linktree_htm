<template>
  <div class="HomeDevice">
    <el-button @click="toggles">语言切换</el-button>
    <el-button @click="healthy">请求</el-button>
    <el-button @click="healthy_only">单独请求</el-button>
    <el-button @click="restful">restful</el-button>
    <el-button @click="init">Init</el-button>
    <el-tag>{{ useCounter.access_token }}</el-tag>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
import { getHealthy, login, userEntity } from "@/service";
import { useStorageStore } from "@/stores/StorageStore";
import { useRouter } from "vue-router";

const $router = useRouter();
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

function restful() {
  userEntity.get().then((data) => {
    console.log(data.data[0]);
    console.log(data.data[0].UserID);
    console.log(data.data[0].Password);
  });
}

function init() {
  $router.push("/init");
}

onMounted(() => {});
</script>
<style scoped lang="scss"></style>
