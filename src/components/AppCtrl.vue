<template>
  <div class="app-curl" data-tauri-drag-region="" v-if="isPC()">
    <div class="app-title" data-tauri-drag-region="">linktree</div>
    <div class="app-curl-list">
      <span class="ctrl-minimize" @click="appMinimize">
        <svg-icon name="ctrl_minimize"></svg-icon>
      </span>
      <span class="ctrl-maximize" @click="appMaximize">
        <svg-icon name="ctrl_maximize"></svg-icon>
      </span>
      <span class="ctrl-close" @click="appClose">
        <svg-icon name="ctrl_close"></svg-icon>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/global/svgIcon/SvgIcon.vue";
import { isPC, appMinimize, appMaximize, appClose } from "@/tauri";
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
  flex-shrink: 0;
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
      svg {
        width: 14px;
        height: 14px;
      }
      &:hover {
        background-color: #33363b;
      }
      &.ctrl-close:hover {
        background-color: #ed4245;
        color: white;
      }
    }
  }
}
</style>
