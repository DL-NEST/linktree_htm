<template>
  <div
    class="init-content flex flex-col items-center justify-center rounded-xl pl-24 pr-24"
  >
    <p class="mb-8 text-2xl tracking-widest text-white">配置数据库</p>
    <from-input :alert="alert" :title="'数据库地址'" v-model:value="db.addr" />
    <from-input
      :alert="alert"
      :title="'数据库名称'"
      v-model:value="db.dataname"
    />
    <from-input
      :alert="alert"
      :title="'数据库用户'"
      v-model:value="db.username"
    />
    <from-input
      :alert="alert"
      :title="'数据库密码'"
      v-model:value="db.password"
    />
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
import type { DBParam } from "@/service/type/init";
import { VerifyDB } from "@/service/init";
import { ElMessage } from "element-plus";

const router = useRouter();
const alert = ref(false);
const db = reactive<DBParam>({
  addr: "175.178.181.203:3306",
  dataname: "linktree",
  username: "linktree",
  password: "dl2002123",
});
function back() {
  router.back();
}
function next() {
  VerifyDB(db)
    .then(() => {
      router.push("/redis");
    })
    .catch(() => {
      ElMessage.error("err");
    });
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
