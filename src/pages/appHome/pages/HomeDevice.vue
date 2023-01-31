<template>
  <div class="HomeDevice">
    <el-button @click="toggles">语言切换</el-button>
    <el-button @click="healthy">healthy</el-button>
    <el-button @click="post">post</el-button>
    <el-button @click="restful">restful</el-button>
    <el-button @click="init">Init</el-button>
    <el-tag>{{ useStorage.access_token }}</el-tag>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
import { getHealthy, login, userEntity } from "@/service";
import { useStorageStore } from "@/stores/storageStore";
import { useRouter } from "vue-router";

const router = useRouter();
const useStorage = useStorageStore();

function toggles() {
  locale.value = locale.value === "zh" ? "en" : "zh";
}

function healthy() {
  getHealthy().then((data) => {
    console.log(data.data);
  });
  useStorage.increment();
}

async function post() {
  const data = await login({
    username: "ddd",
    password: "aaa",
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
  router.push("/init");
}

onMounted(() => {});
</script>
<style scoped lang="scss"></style>
