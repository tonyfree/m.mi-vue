<template>
  <div class="popup-regions-box">
    <div class="ui-mask"></div>
    <div class="ui-pop">
      <div class="ui-pop-close">
        <a>
          <i class="image-icons iconfont icon-close"></i>
        </a>
      </div>
      <div class="ui-pop-title">选择地址</div>
      <div class="ui-pop-conten">
        <div class="region-tab">
          <span>北京</span>
          <span>北京市</span>
          <span>东城区</span>
          <span class="active">请选择</span>
        </div>
        <div class="region-list">
          <dl class="rl1">
            <dd>安定门街道</dd>
            <dd>北新桥街道</dd>
            <dd>朝阳门街道</dd>
            <dd>崇文门外街道</dd>
            <dd>东花市街道</dd>
            <dd>东华门街道</dd>
            <dd>东四街道</dd>
            <dd>东直门街道</dd>
            <dd>和平里街道</dd>
            <dd>建国门街道</dd>
            <dd>交道口街道</dd>
            <dd>景山街道</dd>
            <dd>龙潭街道</dd>
            <dd>前门街道</dd>
            <dd>体育馆路街道</dd>
            <dd>天坛街道</dd>
            <dd>永定门外街道</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-regions-box {
  font-size: 12px;
}
.popup-regions-box .ui-pop {
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  position: fixed;
  overflow: hidden;
  z-index: 101;
  text-align: left;
}
.popup-regions-box .ui-pop .ui-pop-close {
  display: block;
  top: 10px;
  right: 0;
  position: absolute;
  z-index: 1;
}
.popup-regions-box .ui-pop .ui-pop-close i {
  color: #a6a6a6;
  font-size: 20px;
  font-weight: 900;
  line-height: 40px;
}
.popup-regions-box .ui-pop-title {
  font-size: 15px;
  text-align: center;
  line-height: 50px;
}
.popup-regions-box .region-tab {
  border-bottom: 1px solid #f6f6f6;
  padding: 0 10px;
}
.popup-regions-box .region-tab span {
  padding: 8px;
  display: inline-block;
}
.popup-regions-box .region-tab span.active {
  border-bottom: 2px solid #f60;
  color: #f60;
}
.popup-regions-box .region-list {
  height: 200px;
  overflow: auto;
}
.popup-regions-box .region-list dl {
  padding: 5px 10px;
}
.popup-regions-box .region-list dd {
  display: block;
  padding: 5px 8px;
}
.bottom-up-enter-active, .bottom-up-leave-active {
  transition: all .5s;
}
.bottom-up-enter {
  transform: translateY(100%);
}
.bottom-up-enter-to, .bottom-up-leave {
  transform: translateX(0);
}
.bottom-up-leave-to {
  transform: translateY(100%);
}
</style>
