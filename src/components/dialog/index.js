import Vue from 'vue'
import MiDialog from './MiDialog.vue'

// 函数调用
let instance

const initInstance = () => {
  instance = new (Vue.extend(MiDialog))({
    el: document.createElement('div')
  })

  instance.$on('input', value => {
    instance.value = value
  })

  document.body.appendChild(instance.$el)
}

const Dialog = options => {
  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance()
    }

    Object.assign(instance, {
      resolve,
      reject,
      ...options
    })
  })
}

Dialog.defaultOptions = {
  value: false,
  title: '',
  message: '',
  beforeClose: null,
  showConfirmButton: true,
  showCancelButton: false,
  callback: action => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action)
  }
}

Dialog.confirm = options => Dialog({
  ...Dialog.defaultOptions,
  showCancelButton: true,
  value: true,
  ...options
})


// 作为组件插件使用
Dialog.install = () => {
  Vue.component('MiDialog', MiDialog)
}

export default Dialog
