import fetch from '@/api/fetch.js'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data () {
    return {
      product: null,
      galleryView: null,
      productInfo: null
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
      this.productInfo = data.product_info
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true
        })
      })
    }
  }
}