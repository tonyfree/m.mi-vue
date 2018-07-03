import { cartIndex } from '@/mock/cart.js'
import MiSearch from '@/components/MiSearch.vue'
import fetch from '@/api/fetch.js'

export default {
  components: {
    MiSearch
  },
  data () {
    return {
      cartList: null
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.name) {
      fetch('cartIndex').then(res => {
        next(vm => vm.setCartList(res))
      })
    } else {
      next(vm => vm.getCartList())
    }
  },
  methods: {
    getCartList () {
      this.$fetch('cartIndex').then(res => {
        this.setCartList(res)
      })
    },
    setCartList (res) {
      // this.cartList = res.data.data.items
      let items = cartIndex.data.items
      let serviceSelect = []
      items.forEach(item => {
        if (item.service_info) {
          item.serviceList = []
          item.service_info.forEach(list => {
            list.service_info.forEach(info => {
              if (!info.sel_status) {
                item.serviceList.push(info)
              } else if (item.sel_status) {
                serviceSelect.push({
                  ...info,
                  parent_goodsId: item.goodsId
                })
              }
            })
          })
        }
      })
      serviceSelect.forEach(info => {
        let index = items.findIndex(item => {
          return item.goodsId === info.parent_goodsId
        })
        items.splice(index + 1, 0, {
          buy_limit: items[index].num,
          goodsId: info.service_goods_id,
          image_url: info.service_image_url,
          num: info.num,
          price: info.service_price,
          product_name: info.service_short_name,
          sel_status: 1,
          parent_goodsId: info.parent_goodsId,
          isService: true
        })
      })
      let giftSelect = []
      items.forEach(item => {
        if (item.sel_status && item.gift) {
          item.gift.forEach(gift => {
            giftSelect.push({
              ...gift,
              parent_goodsId: item.goodsId
            })
          })
        }
      })
      giftSelect.forEach(gift => {
        let index = items.findIndex(item => {
          return item.goodsId == gift.parent_goodsId
        })
        items.splice(index + 1, 0, {
          buy_limit: items[index].num,
          goodsId: gift.actId,
          image_url: gift.image_url,
          num: items[index].num,
          product_name: gift.product_name,
          sel_status: 1,
          parent_goodsId: gift.parent_goodsId,
          isGift: true
        })
      })
      this.cartList = items
    },
    cartSelect (item, index) {
      let sel_status = item.sel_status ? 0 : 1
      this.$fetch('cartSelect', {
        goodsId: item.goodsId,
        sel_status
      }).then(res => {
        item.sel_status = sel_status
        if (!item.sel_status) {
          this.cartList.forEach((list, index) => {
            if (list.parent_goodsId === item.goodsId) {
              this.cartList.splice(index, 1)
            }
          })
          item.service_info.forEach(list => {
            list.service_info.forEach(info => {
              if (info.sel_status) {
                info.sel_status = 0
                item.serviceList.push(info)
              }
            })
          })
        } else {
            if (item.gift) {
              item.gift.forEach(gift => {
                this.cartList.splice(index + 1, 0, {
                  buy_limit: item.num,
                  goodsId: gift.actId,
                  image_url: gift.image_url,
                  num: item.num,
                  product_name: gift.product_name,
                  sel_status: 1,
                  parent_goodsId: item.goodsId,
                  isGift: true
                })
              })
            }
        }
      })
    },
    cartEdit (item, num) {
      if (num < 0 && item.num === 1) return
      if (num > 0 && item.num == item.buy_limit) return
      let consumption = num > 0 ? 2 : 1
      this.$fetch('cartEdit', {
        goodsId: item.goodsId,
        consumption
      }).then(res => {
        item.num += num
        this.cartList.forEach(list => {
          if (list.parent_goodsId === item.goodsId) {
            list.buy_limit = item.num
            if (list.isGift) {
              list.num = item.num
            }
          }
        })
      })
    }
  }
}