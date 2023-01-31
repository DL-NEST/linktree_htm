<template>
  <div
    class="init-content flex flex-col items-center justify-center rounded-xl pl-24 pr-24"
  >
    <p class="mb-8 text-2xl tracking-widest text-white">配置数据库</p>
    <from-dropdowns
      v-model:value="dbType"
      :title="'数据库选择'"
      :data="['MySQL', 'SQLite']"
    />
    <from-input
      :alert="alert"
      :title="'数据库地址'"
      v-model:value="db.addr"
      :disabled="disabled()"
    />
    <from-input
      :alert="alert"
      :title="'数据库名称'"
      :disabled="disabled()"
      v-model:value="db.dataname"
    />
    <from-input
      :alert="alert"
      :title="'数据库用户'"
      :disabled="disabled()"
      v-model:value="db.username"
    />
    <from-input
      :alert="alert"
      :title="'数据库密码'"
      :type="'password'"
      :disabled="disabled()"
      v-model:value="db.password"
    />
    <from-button :title="'下一步'" @click="next" :loading="btnLoading" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FromButton, FromInput, FromDropdowns } from "@pages/init/components";
import { useRouter } from "vue-router";
import { VerifyDB } from "@/service/init";
import { ElMessage } from "element-plus";
import { useInitStore } from "@/stores/initStore";
import { storeToRefs } from "pinia";

const router = useRouter();
const store = useInitStore();
const alert = ref(false);
const btnLoading = ref(false);
const dbType = ref<"MySQL" | "SQLite">("MySQL");
const { db } = storeToRefs(store);

function disabled() {
  return dbType.value === "SQLite";
}

function next() {
  btnLoading.value = true;
  if (!disabled()) {
    VerifyDB(db.value)
      .then(() => {
        btnLoading.value = false;
        router.push("/redis");
      })
      .catch(() => {
        alert.value = true;
        btnLoading.value = false;
        ElMessage.error("数据库连接失败");
      });
    return;
  }
  router.push("/redis");
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
