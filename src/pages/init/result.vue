<template>
  <div
    class="init-content flex flex-col items-center justify-center rounded-xl pl-24 pr-24"
  >
    <p class="mb-8 text-2xl tracking-widest text-white">结果页面</p>
    <from-button title="服务初始化完毕 ！" @click="next" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import FromInput from "@pages/init/components/FromInput.vue";
import FromButtonTwo from "@pages/init/components/FromButtonTwo.vue";
import { useRouter } from "vue-router";
import FromButton from "@pages/init/components/FromButton.vue";

type DBType = {
  addr: string;
  dbName: string;
  dbUser: string;
  dbPassword: string;
};

const $router = useRouter();

const alert = ref(false);
const db = reactive<DBType>({
  addr: "",
  dbName: "",
  dbUser: "",
  dbPassword: "",
});
function back() {
  $router.back();
}
function next() {
  $router.push("/home");
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
