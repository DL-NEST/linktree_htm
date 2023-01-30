<template>
  <div
    class="init-content flex flex-col items-center justify-center rounded-xl pl-24 pr-24"
  >
    <p class="mb-8 text-2xl tracking-widest text-white">服务基础设置</p>
    <from-input :alert="alert" :title="'数据库地址'" :value="db.addr" />
    <from-input :alert="alert" :title="'数据库名称'" :value="db.dbName" />
    <from-input :alert="alert" :title="'数据库用户'" :value="db.dbUser" />
    <from-input :alert="alert" :title="'数据库密码'" :value="db.dbPassword" />
    <from-button-two
      :title1="'上一步'"
      :title2="'下一步'"
      @click1="back"
      @click2="next"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import FromInput from "@pages/init/components/FromInput.vue";
import FromButtonTwo from "@pages/init/components/FromButtonTwo.vue";
import { useRouter } from "vue-router";

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
  $router.push("/result");
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
