<template>
<transition name="bounce">
  <div v-if="value" class="xe-popup xe-dialog">
    <div class="xe-popup-mask"></div>
    <div class="xe-popup-box xe-popup-center">
      <div class="xe-popup-content">
        <div class="xe-dialog-box">
          <div class="xe-dialog-content">
            <template v-if="!$slots.default">
              <div class="xe-dialog-title fz-m">{{title}}</div>
              <div class="xe-dialog-text fz-s">{{message}}</div>
            </template>
            <slot></slot>
          </div>
          <div class="xe-dialog-action box-flex bd-top-1px">
            <div
              v-show="showCancelButton"
              class="xe-button xe-cancel-button bd-right-1px flex"
              @click="onClose('cancel')">
              <span class="fz-m">取消</span>
            </div>
            <div
              v-show="showConfirmButton"
              class="xe-button xe-confirm-buttom flex"
              @click="onClose('confirm')">
              <span class="fz-m">确认</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    },
    message: {
      type: String
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    callback: {
      type: Function
    }
  },
  methods: {
    onClose (action) {
      this.$emit('input', false)
      this.$emit(action)
      this.callback && this.callback(action)
    }
  }
}
</script>

<style scoped>
.xe-dialog {
  text-align: center;
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
.bounce-enter-active {
  animation: bounce-in .3s;
}
.bounce-leave-active {
  animation: bounce-in .3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
