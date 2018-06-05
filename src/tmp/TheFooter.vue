<template>
  <footer class="app-bottom-navigator-wrapper app-shell-footer">
    <div class="fill-height box-flex align-center">
      <a class="flex on">
        <i class="iconfont icon-homefill"></i>
        <span>首页</span>
      </a>
      <a class="flex">
        <i class="iconfont icon-goods"></i>
        <span>分类</span>
      </a>
      <a class="flex">
        <i class="iconfont icon-cart"></i>
        <span>购物车</span>
      </a>
      <a class="flex">
        <i class="iconfont icon-people"></i>
        <span>我的</span>
      </a>
    </div>
  </footer>
</template>

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
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
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

