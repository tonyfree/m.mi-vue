import fetch from '@/api/fetch.js'
export default {
  data () {
    return {
      product: null,
      galleryView: null
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.name) {
      fetch('productView', {
        commodity_id: to.params.id
      }).then(res => {
        next(vm => vm.setProductData(res))
      })
    } else {
      next(vm => vm.getProductData())
    }
  },
  methods: {
    getProductData () {
      this.$fetch('productView', {
        commodity_id: this.$route.params.id
      }).then(res => {
        this.setProductData(res)
      })
    },
    setProductData (res) {
      let data = res.data
      this.product = data
      this.galleryView = data.view_content.galleryView.galleryView
    }
  }
}