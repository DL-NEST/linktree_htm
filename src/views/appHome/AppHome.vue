<template>
  <div class="app-home">
    <div
      class="app-sidebar"
      :class="sidebarState ? 'sidebar-open' : 'sidebar-shrink'"
    >
      <div class="sidebar-content">
        <div class="sidebar-title user-none">
          <div class="app-logo"></div>
          <p>linktree</p>
          <div class="sidebar-btn">
            <svg-icon
              name="sidebar_list"
              color="#b9bbbe"
              @click="setState"
            ></svg-icon>
          </div>
        </div>
        <div class="sidebar-list">
          <div
            v-for="(item, index) in sidebarList"
            :key="index"
            class="sidebar-list-item"
            :class="{ 'sidebar-list-activity': item.activity }"
            @click="item_btn(item)"
          >
            <div class="sidebar-list-item-span">
              <span></span>
            </div>
            <div class="sidebar-list-item-content user-none">
              <div class="sidebar-list-item-icon">
                <svg-icon
                  :name="'sidebar_' + item.path"
                  :color="item.activity ? '#ffffff' : '#b9bbbe'"
                ></svg-icon>
              </div>
              <div class="sidebar-list-item-text">
                {{ $t(`sidebar.${item.path}`) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar-bottom">
        <sidebar-user :sidebar-state="sidebarState" />
        <div class="sidebar-bottom-serialPort"></div>
      </div>
    </div>
    <div class="app-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import SvgIcon from "@/components/global/svgIcon/SvgIcon.vue";
import SidebarUser from "@views/appHome/components/SidebarUser.vue";
import { useRoute, useRouter } from "vue-router";

const $router = useRouter();

type sidebarType = {
  path: string;
  activity: boolean;
};
let sidebarState = ref<boolean>(true);
let sidebarList = reactive<sidebarType[]>([
  {
    path: "device",
    activity: true,
  },
  {
    path: "board",
    activity: false,
  },
  {
    path: "rule",
    activity: false,
  },
  {
    path: "scene",
    activity: false,
  },
  {
    path: "user",
    activity: false,
  },
  {
    path: "plugin",
    activity: false,
  },
  {
    path: "firmware",
    activity: false,
  },
]);

function setState() {
  sidebarState.value = !sidebarState.value;
}

onMounted(() => {
  for (let i = 0; i < sidebarList.length; i++) {
    if (sidebarList[i].path === useRoute().name) {
      item_btn(sidebarList[i]);
    }
  }
});

// 控制标签变换路由跳转, path: string
function item_btn(item: sidebarType) {
  sidebarList.forEach((i) => {
    i.activity = false;
  });
  item.activity = true;
  $router.push(`/home/${item.path}`);
}

onMounted(() => {});
</script>
<style scoped lang="scss">
.app-home {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  .sidebar-open {
    width: 230px;
  }
  .sidebar-shrink {
    width: 73px;
    .sidebar-title {
      .app-logo {
        display: none;
      }
      p {
        display: none;
      }
    }
    .sidebar-list-item-text {
      opacity: 0;
    }
    .sidebar-btn {
      transform: rotate(180deg);
    }
  }
  .app-sidebar {
    height: 100%;
    flex-shrink: 0;
    transition: width 0.66s cubic-bezier(0.66, 0, 0.01, 1);
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
        flex-shrink: 0;
        .sidebar-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          border-radius: 4px;
          &:hover {
            background-color: #36393f;
          }
          svg {
            width: 24px;
            height: 24px;
          }
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
  }
  .app-content {
    height: 100%;
    flex-grow: 1;
    background-color: #2f3136;
    border-start-start-radius: 8px;
    overflow: hidden;
  }
}

.sidebar-list {
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
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        svg {
          width: 24px;
          height: 24px;
          fill: #0063f8;
        }
      }
      .sidebar-list-item-text {
        white-space: nowrap;
        font-weight: 600;
        font-family: "monospace", sans-serif;
        font-size: 15px;
        margin-left: 4px;
        transition: opacity 0.5s cubic-bezier(0.66, 0, 0.01, 1);
      }
    }
  }
}
.sidebar-bottom {
  width: 100%;
  background-color: #292b2f;
  display: flex;
  flex-direction: column-reverse;
}
</style>
