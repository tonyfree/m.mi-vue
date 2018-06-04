<template>
  <footer class="app-bottom-navigator-wrapper app-shell-footer">
    <div class="fill-height box-flex align-center">
      <a class="flex" data-stat-id="401412da34b5fdbc">
        <i class="image-icons app-bottom-icon icon-home"></i>
        <span>首页</span>
      </a>
      <a class="flex on" data-stat-id="5d3730c2c7dd75e7">
        <i class="image-icons app-bottom-icon icon-category"></i>
        <span>分类</span>
      </a>
      <a class="flex" data-stat-id="47682d137d1cef22">
        <i class="image-icons app-bottom-icon icon-cart"></i>
        <span>购物车</span>
      </a>
      <a class="flex" data-stat-id="234879e482356cfa">
        <i class="image-icons app-bottom-icon icon-user"></i>
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
  display: block;
}
</style>

