<template>
  <div class="sidebar-user">
    <div class="sidebar-user-head user-none">
      <img :src="head" alt="" />
      <div class="sidebar-user-info" v-show="sidebarState">
        <p class="user-name">dlnest</p>
        <p class="user-status">管理员</p>
      </div>
    </div>
    <div class="sidebar-user-ctrl" v-show="sidebarState">
      <div class="user-ctrl-btn">
        <svg-icon name="sidebar_user_download"></svg-icon>
      </div>
      <div class="user-ctrl-btn">
        <svg-icon name="sidebar_user_notice"></svg-icon>
      </div>
      <div class="user-ctrl-btn">
        <svg-icon name="sidebar_user_setup"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import head from "@/assets/head.jpg";
import SvgIcon from "@/components/global/svgIcon/SvgIcon.vue";

defineProps<{
  sidebarState: boolean;
}>();
</script>
<style scoped lang="scss">
.sidebar-user {
  width: 100%;
  height: 60px;
  padding: 10px 12px 10px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .sidebar-user-head {
    height: 100%;
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    &:hover {
      background-color: #36393f;
    }
    img {
      height: 100%;
      border-radius: 50%;
      margin-right: 7px;
      margin-left: 4.5px;
    }
    .sidebar-user-info {
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        line-height: 1.2;
      }
      .user-name {
      }
      .user-status {
        color: #dcddde;
        font-size: 0.5em;
      }
    }
  }
  .sidebar-user-ctrl {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .user-ctrl-btn {
      height: 28px;
      width: 28px;
      border-radius: 4px;
      &:hover {
        background-color: #36393f;
      }
      svg {
        height: 28px;
        width: 28px;
      }
    }
  }
}
</style>
