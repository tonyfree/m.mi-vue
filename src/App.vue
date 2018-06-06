<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
    <TheFooter />
  </div>
</template>

<script>
// import TheFooter from '../tmp/TheFooter.vue'
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
