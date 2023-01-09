<template>
  <div class="app-home">
    <div class="app-sidebar">
      <div class="sidebar-content">
        <div class="sidebar-title user-none">
          <div class="app-logo"></div>
          <p>linktree</p>
          <svg-icon name="sidebar_list" color="#b9bbbe"></svg-icon>
        </div>
        <div class="sidebar-list">
          <div
            v-for="(item, index) in sidebarList"
            :key="index"
            class="sidebar-list-item"
            :class="{ 'sidebar-list-activity': item.activity }"
            @click="item_btn($event, item)"
          >
            <div class="sidebar-list-item-span">
              <span></span>
            </div>
            <div class="sidebar-list-item-content">
              <div class="sidebar-list-item-icon">
                <svg-icon
                  :name="'sidebar_' + item.icon"
                  :color="item.activity ? '#ffffff' : '#b9bbbe'"
                ></svg-icon>
              </div>
              <div class="sidebar-list-item-text">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar-bottom"></div>
    </div>
    <div class="app-content">
      <!--  <router-view />-->
      <p style="color: white; font-weight: 500; font-size: 22px">link</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import SvgIcon from "@/components/global/svgIcon/SvgIcon.vue";

onMounted(() => {});

// defineProps<{
//   msg: string;
// }>();

type sidebarType = {
  icon: string;
  name: string;
  activity: boolean;
};
let sidebarList = reactive<sidebarType[]>([
  {
    icon: "device",
    name: "项目管理",
    activity: true,
  },
  {
    icon: "board",
    name: "数据看板",
    activity: false,
  },
  {
    icon: "rule",
    name: "设备规则",
    activity: false,
  },
  {
    icon: "scene",
    name: "场景列表",
    activity: false,
  },
  {
    icon: "user",
    name: "用户管理",
    activity: false,
  },
  {
    icon: "plugin",
    name: "系统插件",
    activity: false,
  },
  {
    icon: "firmware",
    name: "固件市场",
    activity: false,
  },
]);

// 控制标签变换路由跳转, path: string
function item_btn(ever: any, item: sidebarType) {
  sidebarList.forEach((i) => {
    i.activity = false;
  });
  item.activity = true;
  // console.log(`/home/${path}`)
  // routers.push(`/home/${path}`)
}

onMounted(() => {});
</script>
<style scoped lang="scss">
.app-home {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  .app-sidebar {
    height: 100%;
    width: 230px;
    flex-shrink: 1;
    transition: width 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .sidebar-content {
      width: 100%;
      flex-grow: 1;
      .sidebar-title {
        width: 100%;
        height: 74px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        font-family: "Outfit", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        color: white;
        svg {
          width: 24px;
          height: 24px;
        }
        .app-logo {
          height: 36px;
          width: 36px;
          background-color: #cccccc;
        }
      }
      .sidebar-list {
        width: 100%;
      }
    }
    .sidebar-bottom {
      width: 100%;
      height: 100px;
      background-color: #5372f0;
    }
  }
  .app-content {
    height: 100%;
    flex-grow: 1;
    background-color: #2f3136;
    border-start-start-radius: 8px;
  }
}
.sidebar-list {
  user-select: none;
  // 点击后
  .sidebar-list-activity {
    .sidebar-list-item-content {
      background-color: #5865f2 !important;
      color: white !important;
      .sidebar-list-item-icon {
        svg {
          fill: white !important;
        }
      }
    }
    .sidebar-list-item-span {
      span {
        height: 40px !important;
        margin-left: -4px !important;
      }
    }
  }
  .sidebar-list-item {
    width: 100%;
    height: 49px;
    margin-top: 5px;
    padding-left: 12px;
    padding-right: 12px;
    &:hover {
      .sidebar-list-item-content {
        background-color: #36393f;
      }
      .sidebar-list-item-span {
        span {
          height: 20px;
          margin-left: -4px;
        }
      }
    }
    &:active {
      .sidebar-list-item-content {
        transform: translate(0, 1px);
      }
    }
    .sidebar-list-item-span {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      contain: layout size;
      overflow: hidden;
      span {
        transition: margin-left 0.2s, height 0.2s;
        display: block;
        width: 8px;
        height: 0;
        border-radius: 0 4px 4px 0;
        margin-left: -8px;
        background-color: #ffffff;
      }
    }
    .sidebar-list-item-content {
      transition: background-color 0.2s;
      height: 100%;
      width: 100%;
      border-radius: 10px;
      color: #b9bbbe;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      .sidebar-list-item-icon {
        width: 49px;
        height: 49px;
        margin-right: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          width: 24px;
          height: 24px;
          fill: #0063f8;
        }
      }
      .sidebar-list-item-text {
        white-space: nowrap;
        font-weight: bold;
        font-family: "微軟正黑體", sans-serif;
        font-size: 16px;
        //letter-spacing: 1px;
      }
    }
  }
}
</style>
