<template>
  <header class="app-header-wrapper app-shell-header">
    <template>
      <div class="app-header-left" @click="goback">
        <a class="app-header-item">
          <i class="iconfont icon-back"></i>
        </a>
      </div>
      <div class="app-header-middle">
        <div class="app-header-title">{{title}}</div>
      </div>
      <div class="app-header-right">
        <a class="app-header-item">
          <i class="iconfont icon-search" v-if="showSearchIcon"></i>
        </a>
      </div>
    </template>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    showSearchIcon: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.app-shell-header {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
}
.app-header-title {
  width: 100%;
  font-size: 18px;
}
.iconfont {
  font-size: 24px;
}
</style>
