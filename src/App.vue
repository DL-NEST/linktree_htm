<template>
  <app-curl />
  <div class="app-box">
    <div class="app-sidebar">
      <div class="sidebar-content">
        <div class="sidebar-title">
          <div class="app-logo"></div>
          <p>link tree</p>
          <TextContinuous24Regular />
        </div>
        <div class="sidebar-list">

        </div>
      </div>
      <div class="sidebar-bottom"></div>
    </div>
    <div class="app-content"></div>
  </div>
  <!--  <router-view />-->
</template>
<script setup lang="ts">
import { TextContinuous24Regular } from "@vicons/fluent";
import { Icon } from "@vicons/utils";
import AppCurl from "@/components/AppCurl.vue";
import { onMounted } from "vue";

onMounted(() => {});
</script>
<style scoped lang="scss">
.app-box {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  .app-sidebar {
    height: 100%;
    width: 210px;
    flex-shrink: 1;
    transition: width 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .sidebar-content {
      width: 100%;
      height: 100px;
      .sidebar-title {
        width: 100%;
        height: 75px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        font-family: "Outfit";
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        color: white;
        svg {
          width: 28px;
          height: 28px;
        }
        .app-logo {
          height: 40px;
          width: 40px;
          background-color: #cccccc;
        }
      }
      .sidebar-list {
        width: 100%;
        height: 100px;
        background-color: #686f8c;
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
    background-color: #36393f;
    border-start-start-radius: 8px;
  }
}
</style>
