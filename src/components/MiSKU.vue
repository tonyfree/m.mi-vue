<template>
  <transition name="sdk">
    <div class="pop" v-show="showSKU">
      <div class="close"  @click="closeSKU">
        <i class="iconfont icon-close"></i>
      </div>
      <div v-if="selectedGood" class="pro-info layout row align-center justify-space-around">
        <div class="product-img">
          <img :src="selectedGood.img_url">
        </div>
        <div class="product-desc flex layout column justify-start">
          <div class="cur-price">
            <div class="price">{{selectedGood.price}}</div>
          </div>
          <div class="name">{{selectedGood.name}}</div>
        </div>
      </div>
      <div class="max5">
        <div
          v-for="option in buyOption"
          :key="option.prop_cfg_id"
          class="border-top-1px mt2x"
          :class="{'no_price':!option.hasPrice}">
          <div class="option-title pt32">
            {{option.name}}
            <span style="display: none;">请选择： {{option.name}}</span>
          </div>
          <div class="options-group align-center justify-start layout wrap">
            <div
              v-for="(item,index) in option.list"
              :key="item.prop_value_id"
              :class="{'on':item.isOn,'line':option.hasPrice,'justify-space-between':option.hasPrice}"
              class="option-item border-1px align-center justify-center ui-flex"
              @click="chooseItem(option,index)">
              <p>{{item.name}}</p>
              <p v-if="option.hasPrice">{{item.price}}</p>
            </div>
          </div>
        </div>
        <div v-if="selectedGood" class="border-top-1px pd32 layout align-center justify-space-between">
          <div class="option-title">购买数量</div>
          <div class="xm-input-number">
            <div class="input-sub"
              :class="{active:selectedGood.buyNumber>1}"
              @click="decrease">
              <i class="iconfont icon-move"></i>
            </div>
            <div class="input-num">
              <span>{{selectedGood.buyNumber}}</span>
            </div>
            <div class="input-add"
              :class="{active:selectedGood.buyNumber<selectedGood.buy_limit}"
              @click="increase">
              <i class="iconfont icon-add"></i>
            </div>
          </div>
        </div>
        <div class="ywb">
          <div
            v-for="(bargin,index) in serviceBargins"
            :key="index"
            class="border-top-1px pd32">
            <div class="option-title">
              {{bargin.type_name}}
              <a :href="bargin.service_url" class="service-url">
                <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhFNUZBNEJBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhFNUZBNENBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEE0ODY5NEE2NzUxMUU3QkY4M0QxMUYzMTU1MkNERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOEU1RkE0QUE2ODYxMUU3QkY4M0QxMUYzMTU1MkNERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqoKySAAAALWSURBVHjatJfPS1RRFMef9002Q9BiRlPIzE2TusgWQZQFFS364aJwUZBEYW3atAv6S1y0K3chSEUbqQaSQoqKirJGwppxMaZvIaSTaPo98L1xebxf900d+KDMu/d+7zn33PPOa3KSmQuKYA/YBQogy2d1sAgqoAy+gvW4BZtinufAEXAIzINpMAsWwIoxpgV0gW7QBl6ASWOMlfB+MEAPnoGfCaMjmzjBCD0C7xLOcxQ4D24xrGlN5t7mWirOYxkwBJrBPfDbacy2gcvgFxgFf8KEz4F2cCckQeQ8DzLJJMHyoAo8JtZUSGIOM0fGzR+19YHDFA3ytAPcBL0UzfH37UyoXibYZ7BmzNsAH8EZel4zhWWRq+AuM9Zv4tkNjpNMnQAl8IZCeW6gwCiWffPXed0ugFeyMS18nLt5GXJWQ/RKbAS8Z3g9eiAh7qF4F6/Smm+NJa6xA3xT9Fru6ZMQ0TzP1KFANWTclO9YguwptVzF+zbP6uNELOqFJI82z7fZIFukVjFD4emYBccSXJ2dxv9zEeNEa6/ihO8N3tcO5onDxKpGjP0hmuJxq0U5DLJ9YJAZX2WhiDIJdUuGb5l6StFBFhTt6WjUi4Emz7OZBjw9Zog+5r1ObIreZi1Fc8aZ2orK3LpipWpNkUy6ZJYs54rWgmJC7E4Z7nKKOaI15zLcB8Bri8mSIDOs00uWwqekxit2GG0s8DbCcfc1yAqs1V9cvraaWeQ/WZyx3qxnITzASM3olmSSjVrSVuc0uE5sWqFuav3thSR0D8Altiv/2raCi+ChLjBmB1Jjh9gP3vIIwmwL29wy/8b15FfYCJSSNHvSjaz+r2bP9Q0ULz+ATvZIlRTXxTzTa3zz3TdFg4S1uLwzl9kjtfMYli0a+rPgpFFON9J8whxlu1JjwZhlJ2F+whTYa/Xwmknv9jztJ0zQR1uRIcwbtXqFd7nCYpToo21TgAEAWy6shL93DD4AAAAASUVORK5CYII="> -->
                <i class="iconfont icon-question"></i>
              </a>
              <span>{{bargin.selectedServiceDesc}}</span>
            </div>
            <div
              v-for="(info,infoIndex) in bargin.service_info"
              :key="info.phone_accidentIns_sku"
              class="options-group">
              <div class="ui-flex align-center justify-start">
                <div :class="{'on':info.selected}" class="option-item border-1px w49">
                  <p>{{info.service_short_name}}  {{info.service_price}}元</p>
                </div>
              </div>
              <div class="options-agree">
                <div :class="{'checked':info.selected}" class="choose"
                  @click="changeService(bargin,info,infoIndex)">
                  <i
                    :class="info.selected?'icon-roundcheckfill':'icon-round'"
                    class="iconfont"></i>
                </div>
                <span>我已阅读</span>
                <a
                  v-for="(accidentIns,index) in info.phone_accidentIns"
                  :key="index"
                  href="accidentIns.url" class="org">{{accidentIns.desc}} | </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-bottom" @click="addToCart">
        <div class="action-box flex">
          <a data-log_code="" class="btn buy-btn">加入购物车</a>
        </div>
      </div>
    </div>
  </transition>  
</template>

<script>
import {default_goods_id, buy_option, goods_info} from '@/mock/sdk.js'
export default {
  props: {
    showSKU: {
      type: Boolean,
      default: false,
      required: true
    },
    productData: {
      required: true
    }
  },
  data () {
    return {
      buyOption: null,
      goodsInfo: null,
      selectedGood: null,
      selectedSKU: [],
      serviceBargins: null,
    }
  },
  watch: {
    selectedGood: {
      deep: true,
      handler (val) {
        this.$emit('selectSKU', val)
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      // let productData = JSON.parse(JSON.stringify(this.productData))
      // let goods_info = productData.goods_info
      // let default_goods_id = productData.default_goods_id
      // let buyOption = productData.buy_option

      // mock数据
      let buyOption = buy_option
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
      this.selectedSKU = JSON.parse(JSON.stringify(this.selectedGood.prop_list))
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
      let curSKUIndex = this.selectedSKU.findIndex(item => {
        return item.prop_cfg_id === option.prop_cfg_id
      })
      this.selectedSKU[curSKUIndex].prop_value_id = option.list[curIndex].prop_value_id

      this.selectedGood = this.goodsInfo.find(item => {
        return JSON.stringify(item.prop_list) === JSON.stringify(this.selectedSKU)
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
      // todo:放到购物车模块实现
      this.closeSKU()
    },
    closeSKU () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.pop {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* width: 375px; */
  background-color: #fff;
  color: #000;
  padding: 16px 16px 66px;
  z-index: 110;
  min-height: 250px;
  max-height: 480px;
  text-align: left;
}
.pop .close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 26px;
  height: 26px;
}
.pop .close .icon-close {
  /* width: 20px;
  height: 20px;
  background-image: url(../assets/images/icon-close.png); */
  font-size: 20px;
  line-height: 20px;
  color: #bababa;
}
/* .image-icons {
  display: inline-block;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
} */
.pop .pro-info {
  min-height: 75px;
}
.pop .pro-info .product-img {
  position: relative;
  width: 104px;
  height: 104px;
  text-align: center;
  background: #fff;
}
.pop .pro-info .product-img img {
  height: 100%;
  width: auto;
  margin: 0 auto;
}

.pop .pro-info .product-desc {
  position: relative;
  width: 225px;
  margin: 16px 8px;
  text-align: left;
}
.pop .pro-info .product-desc .price {
  display: inline;
  color: #ff6700;
  font-size: 24px;
  line-height: 19px;
}
.pop .pro-info .product-desc .name {
  font-size: 14px;
  color: rgba(0,0,0,.87);
  line-height: 20px;
}
.pop .option-title {
  position: relative;
  padding-bottom: 8px;
  line-height: 12px;
  font-size: 12px;
  color: rgba(0,0,0,.87);
}
.pop .option-title span {
  color: rgba(0,0,0,.54);
  margin-left: .5em;
  vertical-align: middle;
}

.pop .options-group {
  padding-bottom: 16px;
}
.pop .option-item.line {
  width: 100%;
  padding: 12px 16px !important;
}
.pop .option-item.on {
  color: #f56600;
}
.pop .option-item {
  height: 36px;
  line-height: 36px;
  min-width: 72px;
  box-sizing: border-box;
  padding: 0 4px;
  text-align: center;
  margin: 8px 0 0 8px;
  overflow: visible;
  font-size: 12px;
}
.pop .option-item:before {
  content: '';
  border-color: rgba(0,0,0,.15);
  border-radius: 2px;
}
.pop .option-item.on:before {
  border-color: #f56600;
}
.no_price .option-item p {
  width: 100%;
}
.pop .pd32 {
  padding: 16px 0;
}
.pop .xm-input-number {
  display: inline-block;
  border: 1px solid #eee;
}
/* .pop .xm-input-number .icon-line {
  background-image: url(../assets/images/icon-line.png);
} */
/* .pop .xm-input-number .icon-cross {
  background-image: url(../assets/images/icon-cross.png);
} */
/* .pop .xm-input-number .image-icons {
  opacity: .3;
  width: 30px;
  height: 30px;
  background-size: 15px 15px;
} */
.icon-move, .icon-add {
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: #857c7c;
}
.icon-move {
  color: #bababa;
}
.pop .xm-input-number .input-num {
  display: inline-block;
  vertical-align: middle;
  min-width: 30px;
  padding: 0 6px;
  text-align: center;
  font-size: 16px;
}
.pop .xm-input-number .input-add, .pop .xm-input-number .input-sub {
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  vertical-align: middle;
  background-color: #fafafa;
  text-align: center;
}
.pop .xm-input-number .input-add.active, .pop .xm-input-number .input-sub.active {
  background-color: #ddd;
}
.pop .service-url {
  display: inline-block;
  width: 14px;
  height: 14px;
  /* margin-left: 5px; */
  vertical-align: middle;
}
/* .pop .service-url img {
  width: 100%;
  height: auto;
} */
.pop .service-url i {
  font-size: 16px;
  left: 14px;
  color: #999;
}
.pop .options-group {
  padding-bottom: 16px;
}

.pop .options-agree {
  margin-top: 8px;
  line-height: 20px;
  text-align: left;
  font-size: 12px;
}
.pop .choose {
  display: inline-block;
  /* width: 30px; */
  padding: 0 4px 0 8px;
  height: 20px;
  position: relative;
  top: 3px;
}
.pop .choose i {
  font-size: 24px;
  line-height: 20px;
  color: #ddd;
}
.pop .choose.checked i {
  color: #f56600;
}
/* .pop .choose.unchecked {
  background: url(../assets/images/check_normal.png) 50% 50% no-repeat;
  background-size: 20px 20px;
} */
.pop .options-agree .org {
  color: #f56600;
}
.pop .btn-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.sdk-enter-active, .sdk-leave-active {
  transition: all .5s;
}
.sdk-enter {
  transform: translateY(100%);
}
.sdk-enter-to, .sdk-leave {
  transform: translateX(0);
}
.sdk-leave-to {
  transform: translateY(100%);
}
</style>
