<template>
  <div class="app-shell app-shell-bottom-navigation">
    <MiTitle title="订单详情" />
    <div class="app-view-wrapper" v-if="data">
      <div class="container app-view app-view-with-header">
        <div class="page-order-view page-wrap pov-with-footer">
          <div class="order-view-section">
            <div class="order-view-block order-view-num">
              <div class="ui-flex align-start justify-space-between">
                <div class="order-view-info-text">
                  <p>订单编号：{{data.order_id}}</p>
                  <p>订单状态：{{data.order_status_info.info}}</p>
                </div>
                <div class="order-view-info-action"></div>
              </div>
            </div>
            <div class="order-view-block order-view-status">
              <ol>
                <li
                  v-for="trace in data.order_status_info.trace"
                  :key="trace.text"
                  :class="{done:trace.time}">
                  <span class="status">{{trace.text}}</span>
                  <span v-if="trace.time" class="time">{{trace.time}}</span>
                </li>
              </ol>
            </div>
            <div class="order-view-block order-view-product">
              <ol>
                <li v-for="product in data.product" :key="product.goods_id">
                  <img :src="product.image_url">
                  <div class="infor">
                    <div class="product-name">{{product.product_name}}</div>
                    <div class="product-price" v-if="product.price>0">
                      售价： {{product.price}} x {{product.product_count}}
                      <span>{{product.subtotal}}元</span>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div class="order-view-block order-view-text order-view-orderInfor">
            <p>下单日期：{{data.add_time}}</p>
            <p class="address">
              收货地址：<span>{{data.province}}{{data.city}}{{data.district}}{{data.area}}{{data.address}}</span>
            </p>
            <p>收货人名：{{data.consignee}}  {{data.tel}}</p>
            <p>收货时间：{{data.best_time}}</p>
            <p>发票类型：{{data.invoice_type_name}}</p>
            <p>发票抬头：{{data.invoice_title}}</p>
          </div>
          <div class="order-view-block order-view-download">
            <div class="title">下载小米商城客户端后可以查看电子发票</div>
            <a href="//m.mi.com/p?fallback=http%3A%2F%2Fs1.mi.com%2Fm%2Fappdownload%2F%3Fmfull_ad" class="btn-download">下载小米商城客户端</a>
          </div>
          <div class="order-view-block order-view-text order-view-orderInfor">
            <p>商品价格：{{data.original_price}} 元</p>
            <p>已优惠：{{data.reduce_price}} 元</p>
            <p>配送费用：{{data.shipment_expense}} 元</p>
            <p>应付总额：{{data.goods_amount}} 元</p>
          </div>
        </div>
      </div>
      <div v-if="data.order_status==3" class="order-view-block order-view-action box-flex">
        <div class="price-box">
          <span>应付总额：</span>
          <br>
          <strong>{{data.goods_amount}}</strong>
          <span>元</span>
        </div>
        <a href="javascript:;" class="btn disable black btn-gray">取消订单</a>
        <a href="/order/pay/5180916799502733/false" class="btn"> 立即支付</a>
      </div>
    </div>
  </div>
</template>

<script>
import Order from '../api/order'
export default {
  data () {
    return {
      data: null,
      id: this.$route.params.id
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.name) {
      Order.view({
        id: to.params.id
      }).then(res => {
        next(vm => vm.setData(res))
      })
    } else {
      next(vm => vm.getData())
    }
  },
  methods: {
    getData () {
      Order.view({
        id: this.id
      }).then(res => {
        this.setData(res)
      })
    },
    setData (res) {
      this.$NProgress.done()
      this.$store.commit('setViewLoading', false)
      this.data = res.data
    }
  }
}
</script>

<style>
.page-order-view {
  text-align: left;
  background: #f5f5f5;
  font-size: 12px;
  position: relative;
}
.page-order-view.pov-with-footer {
  padding-bottom: 50px;
}
.page-order-view .order-view-num {
  position: relative;
}
.page-order-view .order-view-block {
  padding: 13px 18px;
  margin-bottom: 10px;
  background: #fff;
}
.page-order-view .order-view-num .order-view-info-text {
  line-height: 1.5em;
  flex: 1 0 auto;
}
.page-order-view .order-view-status {
  border-bottom: 1px solid #f6f6f6;
  margin-bottom: 0;
}
.page-order-view .order-view-status ol {
  display: box;
  display: -webkit-box;
}
.page-order-view .order-view-status ol li {
  box-flex: 1;
  -webkit-box-flex: 1;
  margin-right: 2px;
  width: 100%;
  list-style: none;
}
.page-order-view .order-view-status ol li span {
  display: block;
}
.page-order-view .order-view-status ol li .status {
  background: #ccc;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  margin-bottom: 14px;
}
.page-order-view .order-view-status ol .done .status {
  background: #0c6;
}
.page-order-view .order-view-status ol li .time {
  font-size: 10px;
  text-align: center;
}
.page-order-view .order-view-product li {
  margin-bottom: 10px;
  display: box;
  display: -webkit-box;
  -webkit-box-align: center;
  box-align: center;
  box-pack: center;
  -webkit-box-pack: center;
}
.page-order-view .order-view-product li img {
  margin-right: 10px;
  width: 50px;
  height: 50px;
}
.page-order-view .order-view-product li .infor {
  -webkit-box-flex: 1;
  box-flex: 1;
}
.page-order-view .order-view-product li .infor .product-name {
  margin-bottom: 5px;
}
.page-order-view .order-view-product li .infor .product-price span {
  float: right;
}
.page-order-view .order-view-text p {
  line-height: 1.8em;
}
.page-order-view .order-view-orderInfor .address {
  display: box;
  display: -webkit-box;
}
.page-order-view .order-view-download {
  padding: 10px;
  background: #f5f5f5;
  text-align: center;
  padding-top: 0;
}
.page-order-view .order-view-download .title {
  padding: 10px 0;
  color: rgba(0,0,0,.6);
}
.page-order-view .order-view-download .btn-download {
  display: block;
  font-size: 12px;
  background: #fff;
  border: 1px solid #eee;
  width: 200px;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  color: #333;
}
.order-view-action {
  background: #fff;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin-bottom: 0;
  z-index: 1000;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
}
.order-view-action .price-box {
  font-size: 13px;
  color: #999;
  width: 100%;
  text-align: center;
  padding-top: 8px;
}
.order-view-action .price-box strong {
  font-size: 20px;
  color: #ff5722;
  margin-right: .2em;
}
.order-view-action .disable {
  background: #f4f4f4;
  border: 1px solid #f4f4f4;
}
.order-view-action .black {
  color: #333;
}
</style>
