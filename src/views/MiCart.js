import { cartIndex } from '@/mock/cart.js'
import MiSearch from '@/components/MiSearch.vue'
import fetch from '@/api/fetch.js'

export default {
  components: {
    MiSearch
  },
  data () {
    return {
      cartList: null,
      serviceInfoList: null,
      showServiceInfo: false,
      serviceSelectMessage: '请选择服务类型',
      serviceSelectCashArr: [],
      serviceSelectCashItem: null
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
      this.$NProgress.done()
      this.$store.commit('setViewLoading', false)
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
          let subIndex = this.cartList.findIndex(list => {
            return list.parent_goodsId === item.goodsId
          })
          while(subIndex > -1) {
            this.cartList.splice(subIndex, 1)
            subIndex = this.cartList.findIndex(list => {
              return list.parent_goodsId === item.goodsId
            })
          }
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
    },
    toCartSelService (item) {
      this.showServiceInfo = true
      let arr = []
      item.service_info.forEach((list, index) => {
        let curList = JSON.parse(JSON.stringify(list))
        curList.service_info = []
        list.service_info.forEach(service => {
          if (!service.sel_status) {
            curList.service_info.push(service)
          }
        })
        arr.push(curList)
      })
      this.serviceInfoList = arr
      this.serviceSelectCashItem = item
    },
    selectService (list, service) {
      if (service.sel_status) {
        service.sel_status = 0
      } else {
        list.service_info.forEach(info => {
          info.sel_status = 0
        })
        service.sel_status = 1
      }
      let arr = []
      this.serviceInfoList.forEach(list => {
        list.service_info.forEach(service => {
          if (service.sel_status) {
            arr.push(service)
          }
        })
      })
      this.serviceSelectMessage = arr.length ? `已选择${arr.length}项服务` : '请选择服务类型'
      this.serviceSelectCashArr = arr
    },
    serviceSelectSubmit () {
      let cashItem = this.serviceSelectCashItem
      this.$fetch('cartSelService', {
        parent_goodsId: cashItem.parent_goodsId,
        service_goods_id: cashItem.goodsId,
        sel_status: 1
      }).then(res => {
        let arr = this.serviceSelectCashArr
        if (arr.length) {
          arr.forEach(list => {
            let serviceListIndex = cashItem.serviceList.findIndex(service => {
              return service.service_goods_id === list.service_goods_id
            })
            cashItem.serviceList.splice(serviceListIndex, 1)
  
            cashItem.service_info.forEach(info => {
              info.service_info.forEach(service => {
                if (service.service_goods_id === list.service_goods_id) {
                  service.sel_status =1
                }
              })
            })
  
            let index = this.cartList.findIndex(item => {
              return item.goodsId === cashItem.goodsId
            })
            this.cartList.splice(index + 1, 0, {
              buy_limit: cashItem.num,
              goodsId: list.service_goods_id,
              image_url: list.service_image_url,
              num: list.num,
              price: list.service_price,
              product_name: list.service_short_name,
              sel_status: 1,
              parent_goodsId: cashItem.goodsId,
              isService: true
            })
  
          })
        }
        this.showServiceInfo = false
      })
    },
    cartDelete (item, index) {
      this.$fetch('cartDelete', {
        goodsId: item.goodsId
      }).then(res => {
        this.cartList.splice(index, 1)
        if (item.parent_goodsId) {
          let listIndex = this.cartList.findIndex(list => {
            return list.goodsId === item.parent_goodsId
          })
          this.cartList[listIndex].service_info.forEach(info => {
            info.service_info.forEach(service => {
              if (service.service_goods_id === item.goodsId) {
                service.sel_status = 0
                this.cartList[listIndex].serviceList.push(service)
              }
            })
          })
        }
        let subIndex = this.cartList.findIndex(list => {
          return list.parent_goodsId === item.goodsId
        })
        while (subIndex > -1) {
          this.cartList.splice(subIndex, 1)
          subIndex = this.cartList.findIndex(list => {
            return list.parent_goodsId === item.goodsId
          })
        }
      })
    }
  }
}