import fetch from '@/api/fetch.js'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import MiComment from '@/components/MiComment.vue'
import MiRecommend from '@/components/MiRecommend.vue'
import {default_goods_id, buy_option, goods_info} from '@/mock/sdk.js'
import { runInThisContext } from 'vm';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';
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
      goodsInfo: null,
      selectedGood: null,
      selectedSDK: [],
      serviceBargins: null
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
      goods_info.forEach(item => {
        item.buyNumber = 1
        item.buy_limit = parseInt(item.buy_limit)
        item.service_bargins.forEach(list => {
          list.service_info.forEach(info => {
            info.selected = false
          })
        })
      })
      this.goodsInfo = goods_info
      this.selectedGood = this.goodsInfo.find(item => {
        return item.goods_id == default_goods_id
      })
      this.selectedGood.service_bargins.forEach(item => {
        item.selectedServiceDesc = ''
      })
      this.serviceBargins = this.selectedGood.service_bargins
      this.selectedSDK = JSON.parse(JSON.stringify(this.selectedGood.prop_list))
      let buyOption = buy_option
      buyOption.forEach(item => {
        item.hasPrice = item.list[0].price != ''
        item.list.forEach(list => {
          list.isOn = false
        })
      })
      this.selectedGood.prop_list.forEach(item => {
        let curOpion = buyOption.find(option => {
          return option.prop_cfg_id === item.prop_cfg_id
        })
        let curIndex = curOpion.list.findIndex(list => {
          return list.prop_value_id === item.prop_value_id   
        })
        curOpion.list[curIndex].isOn = true
      })
      this.buyOption = buy_option
      this.$nextTick(() => {
        let xx = new Swiper('.swiper-container', {
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
    chooseItem (option, index) {
      let curIndex = 0
      option.list.forEach((item, i) => {
        if (i === index) {
          curIndex = i
          item.isOn = true
        } else {
          item.isOn = false
        }
      })
      let curSDKIndex = this.selectedSDK.findIndex(item => {
        return item.prop_cfg_id === option.prop_cfg_id
      })
      this.selectedSDK[curSDKIndex].prop_value_id = option.list[curIndex].prop_value_id

      this.selectedGood = this.goodsInfo.find(item => {
        return JSON.stringify(item.prop_list) === JSON.stringify(this.selectedSDK)
      })
      this.serviceBargins = this.selectedGood.service_bargins
    },
    decrease () {
      if (this.selectedGood.buyNumber === 1) return
      this.selectedGood.buyNumber--
    },
    increase () {
      if (this.selectedGood.buyNumber === this.selectedGood.buy_limit) return
      this.selectedGood.buyNumber++
    },
    changeService (bargin, info, infoIndex) {
      bargin.selectedServiceDesc = !info.selected ? info.service_desc : ''
      bargin.service_info.forEach((item, index) => {
        index === infoIndex ? (item.selected = !item.selected) : (item.selected = false)
      })
    },
    addToCart () {
      this.showMask = false
      this.showSDK = false
      // todo:放到购物车模块实现
    }
  }
}