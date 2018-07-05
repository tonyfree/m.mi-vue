<template>
  <div class="insurance-pop">
    <div v-show="value&&overlay"
      :class="overlayClass"
      :style="overlayStyle"
      @click="clickOverlay">
    </div>
    <transition :name="transition">
      <div v-show="value" class="pop">
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
    overlayClass: {
      type: String,
      default: 'ui-mask'
    },
    overlayStyle: {
      type: Object
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
