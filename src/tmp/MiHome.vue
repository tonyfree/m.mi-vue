<template>
  <header class="header">
    <div class="app-header-wrapper">
      <div class="app-header-left">
        <div class="app-header-item logo">
          <img src="../assets/images/searchlogo.png" alt="">
        </div>
      </div>
      <div class="app-header-middle">
        <div class="app-header-title">
          <i class="image-icons app-header-icon icon-search"></i>
          搜索商品名称
        </div>
      </div>
      <div class="app-header-right">
        <div class="app-header-item">
          <i class="image-icons app-header-icon icon-user"></i>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="nav-item">
        <span style="color: rgb(237, 91, 0); border-color: rgb(237, 91, 0);">推荐</span>
      </div>
      <div class="nav-item">
        <span style="color: rgb(116, 116, 116); border-color: rgb(242, 242, 242);">手机</span>
      </div>
      <div class="nav-item">
        <span style="color: rgb(116, 116, 116); border-color: rgb(242, 242, 242);">智能</span>
      </div>
      <div class="nav-item">
        <span style="color: rgb(116, 116, 116); border-color: rgb(242, 242, 242);">电视</span>
      </div>
      <div class="nav-item">
        <span style="color: rgb(116, 116, 116); border-color: rgb(242, 242, 242);">电脑</span>
      </div>
      <div class="nav-item">
        <span style="color: rgb(116, 116, 116); border-color: rgb(242, 242, 242);">双摄</span>
      </div>
      <div class="nav-item">
        <span style="color: rgb(116, 116, 116); border-color: rgb(242, 242, 242);">全面屏</span>
      </div>
      <div class="nav-item">
        <span style="color: rgb(116, 116, 116); border-color: rgb(242, 242, 242);">生活周边</span>
      </div>
      <div class="nav-item">
        <span style="color: rgb(116, 116, 116); border-color: rgb(242, 242, 242);">盒子</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
  background: #f2f2f2;
}
.app-header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: #f2f2f2;
  color: #666;
  padding: 0;
}
.app-header-item {
  display: block;
  width: 32px;
  margin: 0 6px;
}
.app-header-item img {
  width: 80%;
}
.app-header-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #e5e5e5;
  text-align: left;
  width: 100%;
  color: rgba(0,0,0,.3);
  background-color: #fff;
  border-radius: .04rem;
}
</style>
