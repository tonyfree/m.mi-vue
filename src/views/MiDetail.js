import fetch from '@/api/fetch.js'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import MiComment from '@/components/MiComment.vue'
export default {
  components: {
    MiComment
  },
  data () {
    return {
      productData: null,
      galleryView: null,
      titleView: null,
      canJoinActs: null,
      commentView: null,
      descTabsView: null,
      descTabsViewIndex: 0
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