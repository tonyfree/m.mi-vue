import bus from '@/bus.js'
const mixins = {
  methods: {
    goback () {
      this.$router.go(-1)
      bus.$emit('transitionName', 'page-right')
    }
  }
}

export default mixins