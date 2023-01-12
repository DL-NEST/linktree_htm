<template>
  <div class="task-manager">
    <div class="task-ctrl">
      <n-button type="success" size="small" @click="func('DevTool')"
        >DevTool</n-button
      >
      <n-button type="success" size="small" @click="func('IpcLog')"
        >IpcLog</n-button
      >
      <n-button type="success" size="small" @click="func('Show')"
        >Show</n-button
      >
      <n-button type="error" size="small" @click="func('Kill')">Kill</n-button>
      <n-button class="ctrl-right" type="info" size="small"
        >MainDevTool</n-button
      >
    </div>
    <div class="task-list">
      <n-data-table
        :columns="dataRule"
        :data="data"
        :row-props="rowProps"
        :single-line="true"
      />
    </div>
  </div>
  <div
    class="YMenu"
    v-show="YMenu.show"
    :style="{ left: `${YMenu.x}px`, top: `${YMenu.y}px` }"
    @blur="
      () => {
        YMenu.show = false;
      }
    "
  >
    <ul class="YMenu-list" v-for="(list, index) in menuData" :key="index">
      <li class="YMenu-item" v-for="(item, index) in list" :key="index">
        <button class="menu-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-corner-up-right"
          >
            <polyline points="15 14 20 9 15 4"></polyline>
            <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
          </svg>
          {{ item.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { NButton, NDataTable } from "naive-ui";
import { onMounted, ref } from "vue";
import type {
  Process,
  MenuOp,
  menuList,
  processManageType,
} from "@/views/win/type";

const menuData: menuList[][] = [
  [
    {
      icon: "显示",
      name: "显示(window)",
      onClick: () => func("Show"),
    },
    {
      icon: "DevTool",
      name: "DevTool",
      onClick: () => func("DevTool"),
    },
    {
      icon: "Ipc",
      name: "Ipc日记",
      onClick: () => func("IpcLog"),
    },
  ],
  [
    {
      icon: "挂起进程",
      name: "挂起进程(未实现)",
    },
    {
      icon: "结束进程",
      name: "结束进程",
      onClick: () => func("Kill"),
    },
  ],
];

const dataRule: any = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Pid",
    key: "pid",
  },
  {
    title: "Mark",
    key: "mark",
  },
  {
    title: "Memory",
    key: "memory",
  },
  {
    title: "Status",
    key: "status",
  },
];

let data = ref<processManageType[]>();
let YMenu = ref<MenuOp>({
  show: false,
  x: 0,
  y: 0,
});
const dss = ref<string>();

function showMenu(even: any) {
  YMenu.value.show = !YMenu.value.show;
  YMenu.value.y = even.pageY;
  YMenu.value.x = even.pageX;
}

const rowProps = (row: any) => {
  return {
    style: `cursor: pointer;${
      row.name === dss.value ? "background-color: rgba(93, 157, 196, 0.4);" : ""
    }`,
    onmouseup: (even: any) => {
      if (even.button === 2) {
        dss.value = row.name;
        showMenu(even);
      }
      if (even.button === 0) {
        dss.value = row.name;
      }
    },
  };
};

onMounted(() => {
  get();
  document.onclick = () => {
    if (YMenu.value.show) {
      YMenu.value.show = false;
    }
  };
  // window.$ipc.on("taskManager_get_to", (event, args) => {
  //   data.value = args;
  // });
  setInterval(() => {
    get();
  }, 1000);
});

function get() {
  // window.$ipc.send("taskManager_get", "");
}

function func(funcName: string) {
  // let args = {
  //   funcName: funcName,
  //   processName: dss.value,
  // };
  // if (dss.value) {
  //   window.$ipc.send("taskManager_func", args);
  // }
}

// function MainDevTool() {
//   window.$ipc.send("MainDevTool", "");
// }
</script>

<style lang="scss">
:root {
  --n-td-color-hover: rgb(192, 80, 80) !important;
}
.task-manager {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  .task-ctrl {
    width: 100%;
    height: 40px;
    background-color: rgb(203, 203, 204);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    -webkit-app-region: drag;
    button {
      -webkit-app-region: no-drag;
      margin-right: 5px;
      font-size: 1.1em;
    }
    .ctrl-right {
      position: absolute;
      right: 12px;
    }
  }
  .task-list {
    width: 100%;
    height: 100%;
    background-color: #d0d6df;
    overflow: auto;
    user-select: none;
  }
}
.YMenu {
  -webkit-app-region: no-drag;
  font-family: "Inter", sans-serif;
  position: absolute;
  z-index: 200;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(64, 64, 64, 0.15);
  .YMenu-list {
    margin: 0;
    display: block;
    width: 100%;
    padding: 8px;
  }
  .YMenu-list + .YMenu-list {
    border-top: 1px solid #ddd;
  }
  .YMenu-item {
    position: relative;
  }
  .menu-button {
    font: inherit;
    border: 0;
    padding: 6px 36px 6px 8px;
    width: 100%;
    border-radius: 8px;
    text-align: left;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #ffffff;
    &:hover {
      background-color: #e2e7ee;
    }
    svg {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }
}
ol,
ul {
  list-style: none;
}

.task-list::-webkit-scrollbar {
  width: 0.7rem;
}
.task-list::-webkit-scrollbar-track {
  background: rgba(231, 231, 231, 0.5);
  border-radius: 2px;
  -webkit-border-radius: 2px;
}
// 滚动条的颜色
.task-list::-webkit-scrollbar-thumb {
  background: rgba(71, 71, 71, 0.5);
  -webkit-border-radius: 3px;
}
// 滚动条的选中的颜色
.task-list::-webkit-scrollbar-thumb:hover {
  background: rgba(147, 147, 147, 0.8);
}

.task-list::-webkit-scrollbar-corner {
  background: #545454;
}
.n-data-table .n-data-table-td {
  user-select: none;
  background-color: rgba(93, 157, 196, 0) !important;
}
.n-data-table .n-data-table-tr {
  transition: background-color 0.2s ease-in-out;
}
</style>
