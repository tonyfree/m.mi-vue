import fetch from '@/api/fetch.js'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import MiComment from '@/components/MiComment.vue'
import MiRecommend from '@/components/MiRecommend.vue'
import MiSKU from '@/components/MiSKU.vue'
import MiPop from '@/components/MiPop.vue'
import {mapGetters, mapState, mapActions} from 'vuex'
import MiAddressAll from '@/components/MiAddressAll.vue'

export default {
  components: {
    MiComment,
    MiRecommend,
    MiSKU,
    MiPop,
    MiAddressAll
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
      showSKU: false,
      selectedGood: null,
      detailSwiper: null,
      showAddressPop: false,
      deliveryData: null,
      showRegions: false
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'isLogin',
      addressDefault: 'address/default'
    }),
    ...mapState({
      addressList: state => state.address.list
    })
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
  created () {
    if (this.isLogin) {
      this.getAddressList(() => {
        if (this.addressDefault) {
          this.$fetch('estDelivery', {
            address_id: this.addressDefault.address_id
          }).then(res => {
            this.deliveryData = res.data
          })
        }
      })
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.$fetch('estDelivery', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }).then(res => {
            this.deliveryData = res.data
          })
        })
      }
    }
  },
  destroyed () {
    if (Array.isArray(this.detailSwiper)) {
      this.detailSwiper.forEach(item => {
        item.destroy()
      })
    } else {
      this.detailSwiper.destroy()
    }
  },
  methods: {
    ...mapActions({
      getAddressList: 'address/getList'
    }),
    selectAddress (item) {
      this.$fetch('estDelivery', {
        address_id: item.address_id
      }).then(res => {
        this.deliveryData = res.data
        this.showAddressPop = false
      })
    },
    getProductData () {
      this.$fetch('productView', {
        commodity_id: this.$route.params.id
      }).then(res => {
        this.setProductData(res, this.$route.params.id)
      })
    },
    setProductData (res, id) {
      this.$NProgress.done()
      this.$store.commit('setViewLoading', false)
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
      
      this.$nextTick(() => {
        this.detailSwiper = new Swiper('.swiper-container', {
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
    closeSKU () {
      this.showMask = false
      this.showSKU = false
    },
    selectSKU (val) {
      this.selectedGood = val
    },
    changeRegion (region) {
      let {province_id, city_id, district_id, area_id} = region
      this.$fetch('estDelivery', {
        province_id,
        city_id,
        district_id,
        area_id
      }).then(res => {
        this.deliveryData = res.data
      })
    }
  }
}