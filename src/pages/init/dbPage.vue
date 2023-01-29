<template>
  <div class="db-page flex items-center justify-center">
    <div
      class="init-content rounded-xl flex flex-col items-center justify-center"
    >
      <p class="text-2xl text-white">配置数据库</p>
      <input
        class="rounded-sm focus:ring-purple-600 border border-transparent focus:border-transparent focus:outline-none focus:ring-2"
      />
      <div class="h-12 w-12 bg-bga-dark"></div>
      <button class="bg-bga-light dark:bg-bga-dark" @click="onDark">
        Hover me
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
function onDark() {
  if (document.documentElement.className == "dark") {
    document.documentElement.className = "";
  } else {
    document.documentElement.classList.add("dark");
  }
}
</script>
<style scoped lang="scss">
.db-page {
  width: 100%;
  height: 100%;
  .init-content {
    width: 450px;
    height: 550px;
    background: #292b2f;
    //border-radius: 12px;
  }
}
</style>
