<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
    <TheFooter />
  </div>
</template>

<script>
// import TheFooter from '@/tmp/TheFooter.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheFooter
  },
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    '$route' (to, from) {
      // 页面刷新时不需要过渡
      if (!from.meta.index) {
        this.transitionName = ''
        return
      }
      this.transitionName = to.meta.index < from.meta.index ? 'page-right' : 'page-left'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

/* 通用样式 */
.app-shell {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.app-view-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 375px;
  margin: 0 auto;
}
.app-view {
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* height: 100%; */
  overflow-x: hidden;
  overflow-y: auto;
  will-change: transform;
  background: #fff;
  color: #3c3c3c;
}
.app-view-with-footer {
  padding-bottom: 52px;
}
.app-view-with-header {
  padding-top: 50px;
}
.align-center {
  align-items: center;
}
.ui-flex {
  display: flex;
}
.exposure {
  display: block;
}
.flex {
  flex: 1 1 auto;
}
.box-flex {
  display: flex;
}
.layout {
  display: flex;
}
.layout.wrap {
  flex-wrap: wrap;
}
.layout.row {
  flex-direction: row;
}
.justify-space-between {
  justify-content: space-between;
}
.align-content-start {
  align-content: flex-start;
}

/* 头部通用样式 */
.app-header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: #f2f2f2;
  color: #666;
  padding: 0;
}
.app-header-wrapper>div {
  display: flex;
  align-items: center;
}
.app-header-item {
  display: block;
  width: 32px;
  margin: 0 10px;
}
.app-header-middle {
  flex: 1;
}

/* 首页内容切换过渡、底部路由导航切换过渡 */
.page-left-enter-active, .page-left-leave-active {
  transition: all .5s;
}
.page-left-enter {
  transform: translateX(100%);
}
.page-left-enter-to, .page-left-leave {
  transform: translateX(0);
}
.page-left-leave-to {
  transform: translateX(-100%);
}
.page-right-enter-active, .page-right-leave-active {
  transition: all .5s;
}
.page-right-enter {
  transform: translateX(-100%);
}
.page-right-enter-to, .page-right-leave {
  transform: translateX(0);
}
.page-right-leave-to {
  transform: translateX(100%);
}
</style>
