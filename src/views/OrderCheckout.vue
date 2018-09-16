<template>
  <div class="app-shell app-shell-bottom-navigation">
    <MiTitle title="用户结算" :show-search-icon="false"/>
    <div class="app-view-wrapper">
      <div class="checkout app-view app-view-with-header">
        <div class="page-wrap">
          <div class="b1 more">
            <router-link :to="{name: 'addressList', query:{type: 'checkout'}}" v-if="address.address_id">
              <div class="b11">
                <p>
                  <span>{{address.consignee}}</span>
                  <span>{{address.tel}}</span>
                </p>
              </div>
              <div class="b13">
                <p>{{address.province}} {{address.city}} {{address.district}} {{address.area}} {{address.address}} ({{address.zipcode}})</p>
              </div>
            </router-link>
            <router-link :to="{name: 'addressEdit', query:{type: 'checkout'}}" v-else>
              <div class="b14">添加收货地址</div>
            </router-link>
          </div>
          <div class="ui-line"></div>
          <div class="b2">
            <ul class="">
              <li v-for="(pay,index) in paymethod" :key="pay.type">
                <div
                  class="item ui-flex align-center"
                  :class="{on:pay.checked}"
                  @click="chosePay(index)">
                  <a href="javascript:;" :class="pay.type">{{pay.value}}</a>
                  <div class="flex">{{pay.subtitle}}</div>
                </div>
              </li>
            </ul>
            <div class="payment-fold-switch ui-flex align-center justify-center">
              <span>收起其他支付方式 </span>
              <i class="iconfont icon-back unfold"></i>
            </div>
          </div>
          <div class="ui-line"></div>
          <div class="b3">
            <dl>
              <dt class="ui-flex align-center justify-space-between">
                <strong>包邮</strong>
                <div class="ui-flex align-center">
                  <span>不限送货时间</span>
                  <span style="display: none;">工作日送货</span>
                  <span style="display: none;">双休日、假日送货</span>
                  <i class="iconfont icon-back"></i>
                </div>
              </dt>
              <div class="gap-line" style="margin: 0px 0.4rem;"></div>
            </dl>
          </div>
          <div class="b3">
            <dl>
              <dt class="ui-flex align-center justify-space-between">
                <strong>电子发票</strong>
                <div class="ui-flex align-center">
                  <span>个人</span>
                  <i class="iconfont icon-back"></i>
                </div>
              </dt>
              <div class="gap-line" style="margin: 0px 0.4rem;"></div>
            </dl>
          </div>
          <div class="b3">
            <dl>
              <dt class="ui-flex align-center justify-space-between">
                <strong>优惠券</strong>
                <div class="ui-flex align-center">
                  <span>已优惠<em>0元</em></span>
                  <i class="iconfont icon-back"></i>
                </div>
              </dt>
            </dl>
          </div>
          <div class="ui-line"></div>
          <div class="b8">
            <div class="b8w" v-for="list in cartList" :key="list.goodsId">
              <div class="b81">
                <img :src="list.image_url">
              </div>
              <div class="b82">
                <div class="name">
                  <p>
                    <span>{{list.short_name}}</span>
                  </p>
                </div>
              </div>
              <div class="b83">
                <div class="item-price">
                  <span v-if="list.num>1">x {{list.num}} = </span>
                  <strong>{{list.subtotal}}</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="ui-line"></div>
          <div class="b5">
            <div class="b51">
              <p>
                <strong>商品价格：</strong>
                <span>1997.00</span>
              </p>
            </div>
            <div class="b52">
              <p>
                <strong>已优惠：</strong>
                <span>0.00</span>
              </p>
            </div>
            <div class="b53">
              <p>
                <strong>配送费用：</strong>
                <span>0.00</span>
              </p>
            </div>
          </div>
          <div class="ui-line"></div>
        </div>
      </div>
      <div class="ui-mask" style="display: none;"></div>
      <div class="b7">
        <div class="info-tips">
          <p>配送至：{{address.province}} {{address.city}} {{address.district}} {{address.area}} {{address.address}}</p>
        </div>
        <div class="ui-flex">
          <div class="b71 ui-box-flex">
            <span>共{{total}}件 合计: </span>
            <strong>{{productMoney}}</strong>
          </div>
          <div class="b72 ui-box-flex">
            <a class="ui-button" @click="toPay">
              <span>去付款</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Order from '../api/order'
import Dialog from '@/components/dialog'
export default {
  data () {
    return {
      cartList: [],
      address: {},
      paymethod: [],
      productMoney: 0,
      total: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.name) {
      Order.checkout().then(res => {
        next(vm => vm.setData(res))
      })
    } else {
      next(vm => vm.getData())
    }
  },
  methods: {
    getData () {
      Order.checkout().then(res => {
        this.setData(res)
      })
    },
    setData (res) {
      this.$store.commit('setViewLoading', false)
      this.$NProgress.done()
      let data = res.data
      this.cartList =  data.cartlist.items
      this.address =  data.address
      this.paymethod =  data.paymethod
      this.productMoney =  data.productMoney
      this.total =  data.total
    },
    chosePay (index) {
      this.paymethod.forEach((pay, i) => {
        pay.checked = i === index
      })
    },
    toPay () {
      if (!this.address.address_id) {
        Dialog.alert({
          title: '温馨提示',
          message: '请添加收货地址'
        })
        return
      }
    }
  }
}
</script>

<style scoped>
.checkout {
  padding-bottom: 78px;
  text-align: left;
  font-size: 12px;
}
.b1 {
  background: #fff url(//s1.mi.com/m/images/m/bd1.png) 0 0 repeat-x;
  background-size: 26px 4px;
  padding: 13px 20px;
  padding-top: 20px;
  padding-bottom: 15px;
  position: relative;
}
.b1 a {
  display: block;
  text-align: left;
  color: #3c3c3c;
}
.b1 .b11 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 16px;
}
.b1 .b11 span {
  margin-right: 5px;
}
.b1 .b14 {
  font-size: 13px;
  font-weight: 700;
}
.b1 .b13 {
  line-height: 14px;
  color: #757575;
  margin-right: 15px;
  font-size: 12px;
}
.more:after {
  content: "";
  position: absolute;
  right: 16px;
  top: 50%;
  width: 10px;
  height: 10px;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0, -50%, 0) rotate(135deg);
}
.checkout .ui-line {
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
.b2 {
  background: #fff;
}
.b2 ul {
  overflow: hidden;
  max-height: 100rem;
  transition: max-height 0.3s ease-in-out;
  list-style: none;
}
.b2 li {
  margin: 0 20px;
  border-bottom: 1px solid #eee;
}
.b2 .item {
  padding-right: 30px;
  background-image: url(//s1.mi.com/m/images/m/check_normal.png);
  background-position: 100% 50%;
  background-repeat: no-repeat;
  background-size: 20px 20px;
}
.b2 .item a {
  display: block;
  font-size: 13px;
  line-height: 25px;
  padding-left: 35px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #333;
  text-decoration: none;
}
.b2 .item .flex {
  margin-left: 10px;
  color: #999;
  font-size: 12px;
}
.b2 .item.on {
  background-image: url(//s1.mi.com/m/images/m/check_press.png);
}
.b2 .item a.weixin_wap {
  background: url(//s1.mi.com/m/images/m/pay_wx.png) 0 50% no-repeat;
  background-size: 25px 25px;
}
.b2 .item a.alipaywap {
  background: url(//s1.mi.com/m/images/m/pay_zfb2.png) 0 50% no-repeat;
  background-size: 25px 25px;
}
.b2 .item a.micash_wap {
  background: url(//s1.mi.com/m/images/m/micash_wap.png) 0 50% no-repeat;
  background-size: 25px 25px;
}
.b2 .item a.unionpaywap {
  background: url(//s1.mi.com/m/images/m/pay_yl1.png) 0 50% no-repeat;
  background-size: 25px 25px;
}
.b2 .item a.bestpay_wap {
  background: url(//s1.mi.com/m/images/m/pay_yzf.png) 0 50% no-repeat;
  background-size: 25px 25px;
}
.b2 .item a.mifinanceinstal_m {
  background: url(//s1.mi.com/m/images/m/pay_mifinanceinstal.png) 0 50%
    no-repeat;
  background-size: 25px 25px;
}
.b2 .item a.antinstal_m {
  background: url(//s1.mi.com/m/images/m/pay_antinstalment.png) 0 50% no-repeat;
  background-size: 25px 25px;
}
.b2 .payment-fold-switch {
  color: #bdbdbd;
  line-height: 40px;
  text-align: center;
  margin: 0 20px;
  border-top: 1px solid #eee;
  font-size: 12px;
}
.b2 .payment-fold-switch .iconfont.unfold {
  transform: rotate(90deg);
}
.b2 .payment-fold-switch .iconfont {
  margin-left: 4px;
  transform: rotate(-90deg);
  transition: transform 0.2s linear;
}
.b3 dt {
  padding: 13px 20px;
}
b,
strong {
  font-weight: bolder;
  font-size: 12px;
}
.b3 dt span {
  float: right;
  color: #bdbdbd;
  font-size: 12px;
}
.b3 .iconfont {
  margin-left: 4px;
  font-size: 12px;
  transform: rotate(-90deg);
  transition: transform 0.2s linear;
  color: #bdbdbd;
}
.b3 dt em {
  color: #f60;
  margin-left: 5px;
}
.b8w {
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 15px;
  margin: 0 20px;
  padding: 7px 0;
  border-bottom: 1px solid #eee;
}
.b8w .b81 {
  margin-right: 10px;
}
.b8w .b81 img {
  width: 40px;
}
.b8w .b82 {
  flex: 1;
  margin-right: 30px;
}
.b8w .b82 .name p {
  display: box;
  box-align: start;
  text-align: left;
}
.b8w .b82 .name p>span {
  display: block;
  font-size: 12px;
}
.b8w .b82 .name p>span:first-child {
  margin-right: 5px;
}
.b8w .b82 .name p>span:last-child {
  box-flex: 1;
  width: 100%;
}
.b83 .item-price span {
  font-size: 12px;
}
.b5 {
  padding: 13px 20px;
  background: #fff;
  font-size: 12px;
  text-align: left;
}
.b52, .b53 {
  margin-top: 5px;
}
.b7 {
  transform: none;
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-top: 1px solid #e0e0e0;
}
.b7 .info-tips {
  background: #fbf3c4;
  color: #b57842;
  padding: 6px 10px;
  opacity: .7;
}
.b7 .info-tips p {
  line-height: 15px;
  font-size: 12px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #b57842;
}
.b7 .ui-flex {
  align-items: center;
}
.b7 .b71 {
  font-size: 16px;
  color: #ff4d14;
  width: 100%;
  text-align: center;
}
.b7 .b71 strong {
  font-size: 16px;
}
.b7 .b72 {
  width: 100%;
}
.b7 .ui-button {
  display: block;
  background-color: #ff5722;
  text-align: center;
  height: 50px;
  line-height: 50px;
  border: 1px solid #ff5722;
  font-size: 15px;
  color: #fff;
}
</style>



