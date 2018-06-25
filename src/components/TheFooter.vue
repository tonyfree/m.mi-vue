<template>
  <footer class="app-bottom-navigator-wrapper app-shell-footer">
    <div class="fill-height box-flex align-center">
      <router-link
        v-for="nav in navigation"
        :key="nav.icon"
        class="flex"
        active-class="on"
        :to="{name: nav.link}">
        <i class="iconfont" :class="nav.link==$route.name?nav.iconon:nav.icon"></i>
        <span>{{nav.name}}</span>
      </router-link>
    </div>
  </footer>
</template>

<script>
const navigation = [
  {
    name: '首页',
    icon: 'icon-home',
    iconon: 'icon-homefill',
    link: 'home'
  },
  {
    name: '分类',
    icon: 'icon-goods',
    iconon: 'icon-goodsfill',
    link: 'category'
  },
  {
    name: '购物车',
    icon: 'icon-cart',
    iconon: 'icon-cartfill',
    link: 'cart'
  },
  {
    name: '我的',
    icon: 'icon-people',
    iconon: 'icon-peoplefill',
    link: 'user'
  }
]
export default {
  data () {
    return {
      navigation
    }
  }
}
</script>

<style scoped>
.app-shell-footer {
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  right: 0;
}
.app-bottom-navigator-wrapper {
  height: 52px;
  background: #fff;
  box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.fill-height {
  height: 100%;
}
.align-center {
  align-items: center;
}
.box-flex {
  display: flex;
}
.flex {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #999;
}
.iconfont {
  font-size: 24px;
}
.flex span {
  font-size: 12px;
}
.on {
  color: #ff6700;
}
</style>
