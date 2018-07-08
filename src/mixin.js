import TheFooter from '@/components/TheFooter.vue'
const mixins = {
  components: {
    TheFooter
  },
  methods: {
    goback () {
      this.$router.go(-1)
      this.$store.commit('setTransitionName', 'page-right')
    }
  }
}

export default mixins
