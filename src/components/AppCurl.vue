<template>
  <div class="app-curl" data-tauri-drag-region="">
    <div class="app-title" data-tauri-drag-region="">linktree</div>
    <div class="app-curl-list">
      <Icon class="minimize" @click="appMinimize">
        <Subtract12Regular />
      </Icon>
      <Icon class="maximize" @click="appMaximize">
        <CheckboxUnchecked12Regular />
      </Icon>
      <Icon class="close" @click="appClose">
        <Dismiss12Regular />
      </Icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CheckboxUnchecked12Regular,
  Subtract12Regular,
  Dismiss12Regular,
} from "@vicons/fluent";
import { Icon } from "@vicons/utils";
import { appWindow } from "@tauri-apps/api/window";

function appMinimize() {
  appWindow.minimize();
}
function appMaximize() {
  appWindow.isMaximized().then((res: boolean) => {
    if (res) {
      appWindow.unmaximize();
    } else {
      appWindow.maximize();
    }
  });
}
function appClose() {
  appWindow.close();
}
</script>

<style scoped lang="scss">
.app-curl {
  position: relative;
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  flex-shrink: 1;
  .app-title {
    font-family: "Outfit", sans-serif;
    font-size: 0.6em;
    color: rgb(185, 187, 190);
    font-weight: 700;
    user-select: none;
  }
  .app-curl-list {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      width: 30px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(185, 187, 190);
      &:hover {
        background-color: #33363b;
      }
      &.close:hover {
        background-color: #ed4245;
        color: white;
      }
    }
  }
}
</style>
