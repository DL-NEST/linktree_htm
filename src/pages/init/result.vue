<template>
  <div
    class="init-content flex flex-col items-center justify-center rounded-xl pl-24 pr-24"
  >
    <p class="mb-8 text-2xl tracking-widest text-white">结果页面</p>
    <from-button title="服务初始化完毕 ！" @click="next" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { FromButton } from "@pages/init/components";
import { useInitStore } from "@/stores/initStore";
import { SetSetup } from "@/service/init";
import { ElMessage } from "element-plus";

const router = useRouter();
const store = useInitStore();

function next() {
  SetSetup(store.setupOpt())
    .then(() => {
      ElMessage.info("时间");
    })
    .catch(() => {});
  router.push("/home");
}
</script>
<style scoped lang="scss">
.init-content {
  width: 450px;
  height: 550px;
  background: #292b2f;
  //border-radius: 12px;
}
</style>
