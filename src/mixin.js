import TheFooter from '@/components/TheFooter.vue'
import MiTitle from '@/components/MiTitle.vue'
const mixins = {
  components: {
    TheFooter,
    MiTitle
  },
  methods: {
    goback () {
      this.$router.go(-1)
      this.$store.commit('setTransitionName', 'page-right')
    }
  }
}

export default mixins
