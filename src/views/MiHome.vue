<template>
<div class="app-view-wrapper">
  <div class="app-view">
    <header class="header">
      <div class="app-header-wrapper">
        <div class="app-header-left">
          <div class="app-header-item logo">
            <img src="../assets/images/searchlogo.png" alt="">
          </div>
        </div>
        <div class="app-header-middle">
          <div class="app-header-title">
            <i class="iconfont icon-search"></i>&nbsp;&nbsp;
            搜索商品名称
          </div>
        </div>
        <div class="app-header-right">
          <div class="app-header-item">
            <i class="iconfont icon-people"></i>
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
    <div class="page-wrap">
      <div class="bodys">
        bodys
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      navList: null
    }
  },
  created () {
    this.getNavList()
  },
  methods: {
    getNavList () {
      this.$fetch('navList').then(res => {
        this.navList = res.data.list
      })
    }
  }
}
</script>

<style scoped>
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
  padding-bottom: 52px;
}
.header {
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
  background: #f2f2f2;
}
.app-header-wrapper>div, .app-header-wrapper {
  display: flex;
  align-items: center;
}
.app-header-wrapper {
  justify-content: space-between;
  height: 50px;
  background: #f2f2f2;
  color: #666;
  padding: 0;
}
.app-header-item {
  display: block;
  width: 32px;
  margin: 0 10px;
}
.app-header-item img {
  width: 80%;
}
.app-header-middle {
  flex: 1;
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
  border-radius: 4px;
  height: 32px;
  padding-left: 12px;
}
.icon-people {
  font-size: 24px;
}
.nav {
  overflow-x: auto;
  background: #f2f2f2;
  font-size: 14px;
  white-space: nowrap;
  z-index: 2;
}
.nav .nav-item {
  display: inline-block;
  padding: 0 14px;
}
.nav .nav-item span {
  display: inline-block;
  line-height: 32px;
  border-bottom: 2px solid rgba(237, 91, 0, 0);
}
.page-wrap {
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.bodys {
  position: absolute;
  top: 82px;
  left: 0;
  right: 0;
  background: rgba(237, 91, 0, 0.1);
  height: 800px;
  line-height: 800px;
  font-size: 72px;
}
</style>
