<template>
  <div class="insurance-pop">
    <div class="ui-mask" v-show="value&&overlay" @click="clickOverlay"></div>
    <transition :name="transition">
      <div class="pop" v-show="value">
        <div class="close" @click="close">
          <i class="image-icons iconfont icon-close"></i>
        </div>
        <slot></slot> 
      </div>
    </transition> 
  </div>    
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'bottom-up'
    }
  },
  methods: {
    close () {
      this.$emit('input', false)
    },
    clickOverlay () {
      if (!this.closeOnClickOverlay) return
      this.close()
    }
  }
}
</script>

<style scoped>
.pop {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* width: 375px; */
  background-color: #fff;
  color: #000;
  padding: 16px 16px 66px;
  z-index: 110;
  min-height: 250px;
  max-height: 480px;
  text-align: left;
}
.pop .close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 26px;
  height: 26px;
}
.pop .close .icon-close {
  /* width: 20px;
  height: 20px;
  background-image: url(../assets/images/icon-close.png); */
  font-size: 20px;
  line-height: 20px;
  color: #bababa;
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
