import { defineStore } from "pinia";
import { ref } from "vue";
import { PiniaName } from "@/stores/index";

// 持久化存储
export const useStorageStore = defineStore(
  PiniaName.Storage,
  () => {
    const access_token = ref("234");

    function increment() {
      access_token.value = access_token.value + "sa";
    }

    return { access_token, increment };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          storage: localStorage, //自定义存储位置
        },
      ],
    },
  }
);
