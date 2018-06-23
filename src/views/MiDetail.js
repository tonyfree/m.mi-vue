import fetch from '@/api/fetch.js'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import MiComment from '../tmp/MiComment.vue'
export default {
  components: {
    MiComment
  },
  data () {
    return {
      productData: null,
      galleryView: null,
      titleView: null,
      canJoinActs: null
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
      this.productData = data
      this.galleryView = data.view_content.galleryView.galleryView
      this.titleView = data.view_content.titleView.titleView
      this.canJoinActs = this.titleView.canJoinActs[0]
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
          lazy: {
            loadPrevNext: true
          }
        })
      })
    }
  }
}