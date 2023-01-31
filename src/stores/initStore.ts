import { defineStore } from "pinia";
import { reactive } from "vue";
import { PiniaName } from "@/stores/index";
import type { DBParam, RedisParam, SetupParam } from "@/service/type/init";

// 初始化的数据
export const useInitStore = defineStore(PiniaName.Init, () => {
  const db = reactive<DBParam>({
    addr: "175.178.181.203:3306",
    dataname: "linktree",
    username: "linktree",
    password: "dl2002123",
  });

  const redis = reactive<RedisParam>({
    addr: "localhost:7789",
    password: "",
  });

  function setupOpt(): SetupParam {
    return {
      db: db,
      redis: redis,
    };
  }

  return { db, redis, setupOpt };
});
