<template>
  <div class="app-shell app-shell-bottom-navigation">
    <MiTitle title="商品订单" />
    <div class="app-view-wrapper">
      <div class="page-order-list app-view app-view-with-header app-view-with-footer">
        <ol class="tab">
          <li
            v-for="list in types"
            :key="list.type"
            :class="{active:type==list.type}"
            @click="changeTab(list.type)">
            <a>{{list.name}}</a>
          </li>
        </ol>
        <div class="page-con">
          <div v-for="list in types" :key="list.type">
            <transition :name="transitionName">
              <div v-show="type==list.type" class="page-con-items">
                <div v-if="orderList&&orderList.length>0" class="container">
                  <div class="order-list">
                    <ol>
                      <li
                        v-for="order in orderList"
                        :key="order.order_id"
                        @click="toView(order)">
                        <div class="order-item">
                          <div class="item-box-top">
                            <div class="top-left">
                              <p class="order-data">
                                <strong>订单日期：</strong>
                                <span>{{order.add_time}}</span>
                              </p>
                              <p class="order-num">
                                <strong>订单编号：</strong>
                                <span>{{order.order_id}}</span>
                              </p>
                            </div>
                            <div class="top-right">{{order.order_status_info}}</div>
                          </div>
                          <div
                            v-for="product in order.product"
                            :key="product.goods_id"
                            class="item-box-center ui-flex align-center">
                            <img v-lazy="product.image_url" class="lazy">
                            <span class="flex">{{product.product_name}}</span>
                          </div>
                          <div class="item-box-bottom">
                            <span>共{{order.goods_numbers}}件商品</span>
                            <span>总金额：</span>
                            <strong>{{order.goods_amount}}元</strong>
                          </div>
                        </div>
                        <div class="item-box-btn">
                          <template v-if="order.order_status==3">
                            <a class="btn btn-bordered btn-gray">取消订单</a>
                            <a class="btn btn-bordered">立即付款</a>
                          </template>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <div v-if="orderList&&orderList.length==0" class="container">
                  <div class="empty">您还没有 {{typeName}} 订单</div>
                  <MiRecommend />
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import Order from '../api/order'
import MiRecommend from '@/components/MiRecommend.vue'
export default {
  components: {
    MiRecommend
  },
  data () {
    return {
      orderList: null,
      type: parseInt(this.$route.query.type) || 1,
      types: [{
        type: 1,
        name: '全部'
      }, {
        type: 7,
        name: '待付款'
      }, {
        type: 8,
        name: '待收货'
      }],
      transitionName: 'page-left'
    }
  },
  computed: {
    typeName () {
      switch (this.type) {
        case 1:
          return ''
        case 7:
          return '待付款'
        case 8:
          return '待收货'
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.name) {
      Order.list({
        type: to.query.type || 1
      }).then(res => {
        next(vm => vm.setList(res))
      })
    } else {
      next(vm => vm.getList())
    }
  },
  methods: {
    getList () {
      Order.list({
        type: this.type
      }).then(res => {
        this.setList(res)
      })
    },
    setList (res) {
      let list = res.data.list
      list.forEach(order => {
        order.goods_numbers = order.product.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.product_count
        }, 0)
      })
      this.orderList = list
      this.$NProgress.done()
      this.$store.commit('setViewLoading', false)
    },
    changeTab (type) {
      this.transitionName = type > this.type ? 'page-left' : 'page-right'
      this.type = type
      this.getList()
    },
    toView (order) {
      this.$router.push({
        name: 'orderView',
        params: { id: order.order_id }
      })
    }
  }
}
</script>

<style>
.page-order-list .tab {
  border-bottom: 0.5px solid #ececec;
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 2;
}
.page-order-list .tab li {
  display: inline-block;
  width: 33.33%;
  text-align: center;
  line-height: 30px;
}
.page-order-list .tab li a {
  display: inline-block;
  padding: 0 5px;
  line-height: 30px;
  font-size: 14px;
}
.page-order-list .tab .active a {
  color: #ff6700;
  border-bottom: 1px solid #ff6700;
}
.page-order-list .page-con {
  position: relative;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
}
.page-order-list .page-con-items {
  position: absolute;
  left: 0;
  right: 0;
  background: #fff;
  transition: transform .4s cubic-bezier(.55,0,.1,1);
}
.page-order-list .container {
  padding-top: 30px;
  color: rgba(60,60,60,.87);
}
.page-order-list .container li {
  border-top: 10px solid #ececec;
  padding: 0 16px;
  font-size: 12px;
  display: block;
}
.page-order-list .container .item-box-top {
  border-bottom: 1px solid #ececec;
  display: box;
  display: -webkit-box;
  padding: 15px 0 10px;
}
.page-order-list .container .item-box-top .top-left {
  -webkit-box-flex: 1;
  box-flex: 1;
  width: 100%;
  text-align: left;
}
.page-order-list .container .item-box-top .top-left .order-data {
  font-size: 15px;
  margin-bottom: 3px;
}
.page-order-list .container strong {
  font-weight: 400;
}
.page-order-list .container .item-box-top .top-left .order-num {
  color: #999;
}
.page-order-list .container .item-box-top .top-right {
  color: #ff5722;
  font-size: 15px;
}
.page-order-list .container .item-box-center {
  padding: 10px 5px;
  text-align: left;
}
.page-order-list .container .item-box-center img {
  width: 50px;
  height: 50px;
  margin-right: 5px;
  display: block;
}
.page-order-list .container .item-box-center span {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.page-order-list .container .item-box-bottom {
  padding: 10px 0;
  text-align: right;
  border-top: 1px solid #ececec;
}
.page-order-list .container .item-box-bottom span {
  margin-left: 10px;
}
.page-order-list .container .item-box-bottom strong {
  font-size: 15px;
}
.page-order-list .container .item-box-btn {
  padding-bottom: 13px;
  overflow: hidden;
  text-align: right;
}
.page-order-list .container .item-box-btn .btn {
  display: inline-block;
  width: auto;
  height: auto;
  font-size: 14px;
  padding: 7px 10px;
  border-radius: 2px;
  margin-left: 10px;
  line-height: normal;
}
.page-order-list .empty {
  font-size: 15px;
  text-align: center;
  background: url(//s1.mi.com/m/images/m/empty.png) 50% 0 no-repeat;
  background-size: 100px 100px;
  padding-top: 125px;
  color: #999;
  margin: 40px 50px 0;
  display: box;
}
.btn-bordered.btn-gray {
  color: #999;
  border: 1px solid #999;
}
.btn-bordered {
  color: #ff6700;
  background: transparent;
  border: 1px solid #ff6700;
}
</style>
