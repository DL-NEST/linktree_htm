<template>
  <div
    class="init-content flex flex-col items-center justify-center rounded-xl pl-24 pr-24"
  >
    <p class="mb-8 text-2xl tracking-widest text-white">配置缓存方式</p>
    <from-dropdowns
      v-model:value="redisType"
      :title="'缓存方式选择'"
      :data="['Redis', 'Cache']"
    />
    <from-input
      :alert="alert"
      :title="'Redis数据库地址'"
      v-model:value="redis.addr"
      :disabled="disabled()"
    />
    <from-input
      :alert="alert"
      :title="'Redis数据库密码'"
      :type="'password'"
      :disabled="disabled()"
      v-model:value="redis.password"
    />
    <from-button-two
      :title1="'上一步'"
      :title2="'下一步'"
      @click1="back"
      @click2="next"
      :loading="btnLoading"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  FromButtonTwo,
  FromInput,
  FromDropdowns,
} from "@pages/init/components";
import { useRouter } from "vue-router";
import { useInitStore } from "@/stores/initStore";
import { storeToRefs } from "pinia";
import { VerifyRedis } from "@/service/init";
import { ElMessage } from "element-plus";

const router = useRouter();
const store = useInitStore();
const alert = ref(false);
const btnLoading = ref(false);
const redisType = ref<"Redis" | "Cache">("Redis");
const { redis } = storeToRefs(store);

function disabled() {
  return redisType.value === "Cache";
}
function back() {
  router.back();
}
function next() {
  btnLoading.value = true;
  if (!disabled()) {
    VerifyRedis(redis.value)
      .then(() => {
        setTimeout(() => {
          btnLoading.value = false;
          router.push("/setup");
        }, 500);
      })
      .catch(() => {
        alert.value = true;
        btnLoading.value = false;
        ElMessage.error("缓存数据库连接失败");
      });
    return;
  }
  router.push("/setup");
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
