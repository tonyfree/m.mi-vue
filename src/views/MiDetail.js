import fetch from '@/api/fetch.js'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import MiComment from '@/components/MiComment.vue'
import MiRecommend from '@/components/MiRecommend.vue'
import { buy_option, goods_info} from '@mock/sdk.js'
export default {
  components: {
    MiComment,
    MiRecommend
  },
  data () {
    return {
      productData: null,
      galleryView: null,
      titleView: null,
      canJoinActs: null,
      commentView: null,
      descTabsView: null,
      descTabsViewIndex: 0,
      id: '',
      showMask: false,
      showSDK: false,
      buyOption: null,
      goodsInfo: null
    }
  },
  computed: {
    tabContent () {
      return this.descTabsView[this.descTabsViewIndex].tabContent
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.name) {
      fetch('productView', {
        commodity_id: to.params.id
      }).then(res => {
        next(vm => vm.setProductData(res, to.params.id))
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
        this.setProductData(res, this.$route.params.id)
      })
    },
    setProductData (res, id) {
      this.id = id
      let data = res.data
      let viewContent = data.view_content
      let descTabsView = viewContent.descTabsView.descTabsView
      descTabsView.forEach(item => {
        let tabContent = item.tabContent
        if (tabContent.length > 3) {
          item.showTabContent = tabContent.slice(0, 3)
          item.moreTabContent = tabContent.slice(3)
        } else {
          item.showTabContent = tabContent
        }
        item.showMore = false
      })
      this.productData = data
      this.galleryView = viewContent.galleryView.galleryView
      this.titleView = viewContent.titleView.titleView
      this.canJoinActs = this.titleView.canJoinActs[0]
      this.commentView = viewContent.commentView.commentView
      this.descTabsView = descTabsView
      this.buyOption = buy_option
      this.goodsInfo = goods_info
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
    },
    addToCart () {

    }
  }
}