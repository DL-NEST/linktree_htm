<template>
  <div class="HomeDevice">
    <el-button>qwsdvavsf</el-button>
    <el-tag>{{ aa }}</el-tag>
    <el-tag>{{ ac }}</el-tag>
  </div>
</template>

<script setup lang="ts">
const aa = import.meta.env.MODE;
const ac = import.meta.env.DEV;
import { onMounted } from "vue";

onMounted(() => {
  console.log(import.meta.env);
});
</script>
<style scoped lang="scss"></style>
