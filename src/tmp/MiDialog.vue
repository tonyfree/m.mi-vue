<template>
  <div class="xe-popup xe-dialog">
    <div class="xe-popup-mask"></div>
    <div class="xe-popup-box xe-popup-center">
      <div class="xe-popup-content">
        <div class="xe-dialog-box">
          <div class="xe-dialog-content">
            <div class="xe-dialog-title fz-m">提示</div>
            <div class="xe-dialog-text fz-s">确定删除当前地址?</div>
          </div>
          <div class="xe-dialog-action box-flex bd-top-1px">
            <div class="xe-button xe-cancel-button bd-right-1px flex">
              <span class="fz-m">取消</span>
            </div>
            <div class="xe-button xe-confirm-buttom flex">
              <span class="fz-m">确认</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.xe-dialog {
  text-align: center;
  opacity: 1;
  transform: scale(1);
}
.xe-popup {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
}
.xe-popup .xe-popup-mask {
  background-color: rgba(0,0,0,.3);
  z-index: 999;
}
.xe-popup .xe-popup-box,
.xe-popup .xe-popup-mask {
  position: absolute;
  width: 100%;
  height: 100%;
}
.xe-popup .xe-popup-box {
  transform: translate(100%,100%);
  z-index: 1000;
}
.xe-popup .xe-popup-center .xe-popup-content {
  position: absolute;
  top: -50%;
  left: -50%;
  width: auto;
  transform: translate(-50%,-50%);
}
.xe-popup .xe-popup-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  transform: translate(-100%,-100%);
}
.xe-dialog .xe-dialog-box {
  width: 338px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}
.xe-dialog .xe-dialog-content {
  padding: 0 16px;
}
.xe-dialog .xe-dialog-content .xe-dialog-title {
  text-align: center;
  margin-top: 24px;
  font-size: 18px;
  line-height: 18px;
}
.xe-dialog .xe-dialog-content .xe-dialog-text {
  margin: 24px;
  line-height: 20px;
  color: #676767;
}
.bd-bottom-1px, .bd-left-1px, .bd-right-1px, .bd-top-1px {
  position: relative;
}
.bd-top-1px:before {
  border-top: 1px solid #d9d9d9;
  left: 0;
  top: 0;
  width: 100%;
  transform-origin: 0 top;
}
.bd-right-1px:after {
  border-right: 1px solid #d9d9d9;
  top: 0;
  right: 0;
  height: 100%;
  transform-origin: right 0;
}
.bd-bottom-1px:after, .bd-bottom-1px:before, .bd-left-1px:after, .bd-left-1px:before, .bd-right-1px:after, .bd-right-1px:before, .bd-top-1px:after, .bd-top-1px:before {
  content: "";
  display: block;
  position: absolute;
  transform-origin: 0 0;
}
.xe-dialog .xe-dialog-action .xe-button {
  width: 100%;
  height: 52px;
  line-height: 52px;
  color: #676767;
}
.xe-dialog .xe-dialog-action .xe-confirm-buttom {
  color: #ff6700;
}
</style>

