<template>
  <div id="app">
    <MiSkeleton v-if="viewLoading"/>
    <transition v-show="!viewLoading"
      :name="transitionName" @after-leave="afterLeave">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import MiSkeleton from '@/components/MiSkeleton.vue'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  components: {
    MiSkeleton
  },
  computed: mapState(['viewLoading', 'transitionName']),
  watch: {
    '$route' (to, from) {
      // 页面刷新时不需要过渡
      if (!from.name) {
        this.setTransitionName('')
        return
      }
      if (to.meta.index && from.meta.index) {
        let transitionName = to.meta.index < from.meta.index ? 'page-right' : 'page-left'
        this.setTransitionName(transitionName)
      }
    }
  },
  created () {
    this.getUserInfo()
    this.getCount()
  },
  methods: {
    ...mapMutations(['setTransitionName']),
    ...mapActions({
      getUserInfo: 'getUserInfo',
      getCount: 'cart/getCount'
    }),
    afterLeave () {
      this.setTransitionName('page-left')
    }
  }
}
</script>

<style>
#app {
  position: static;
  font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3c3c3c;
  user-select: none;
  touch-action: manipulation;
  text-size-adjust: none;
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
