<template>
  <div class="recommend-box space-top">
    <div v-if="id" class="recommend-title">为你推荐</div>
    <div v-else class="recommend-top-img">
      <img src="../assets/images/recommend.jpg">
    </div>
    <div class="recommend-list layout row wrap align-center align-content-start justify-space-between">
      <div
        v-for="list in lists"
        :key="list.action.path"
        class="goods-item">
        <a class="exposure">
          <div class="goods-img-box">
            <img v-lazy="list.image_url">
          </div>
          <div class="goods-info">
            <div class="goods-name no-wrap">{{list.name}}</div>
            <div class="goods-price price">
              ￥{{list.price}}
              <del class="price" v-show="list.showMarketPrice">￥{{list.market_price}}</del>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    }
  },
  data () {
    return {
      lists: null
    }
  },
  created () {
    if (this.id) {
      this.getReommend()
    } else {
      this.getReommendBlank()
    }
  },
  methods: {
    getReommendBlank () {
      this.$fetch('forRecommend').then(res => {
        let list = res.data.recom_list
        list.forEach(item => {
          item.showMarketPrice = Math.random() > 0.5
        })
        this.lists = list
      })
    },
    getReommend () {
      this.$fetch('recommend', {
        product_id: this.id
      }).then(res => {
        let list = res.data.recommend_list
        list.forEach(item => {
          item.showMarketPrice = Math.random() > 0.5
        })
        this.lists = list
      })
    }
  }
}
</script>

<style scoped>
.recommend-box {
  background: #fff;
  text-align: left;
}
.recommend-box .recommend-title {
  line-height: 40px;
  padding: 0 16px;
  font-size: 15px;
}
.recommend-box .recommend-top-img {
  width: 375px;
}
.recommend-box .recommend-top-img img {
  width: 375px;
  height: 62.5px;
}
.recommend-box .recommend-list {
  overflow: hidden;
}
.recommend-box .recommend-list .goods-item {
  flex: 0 1 49.5%;
  overflow: hidden;
}
.recommend-box .recommend-list .goods-item a {
  display: block;
}
.recommend-box .recommend-list .goods-img-box {
  position: relative;
}
.recommend-box .recommend-list .goods-img-box img {
  display: block;
  width: 100%;
  min-height: 186px;
  background-color: #eee;
}
.recommend-box .recommend-list .goods-info {
  padding: 9px 13px 11px;
}
.recommend-box .recommend-list .goods-name {
  font-size: 14px;
}
.recommend-box .recommend-list .goods-price {
  font-size: 14px;
  display: inline-block;
  color: #ff6700;
  margin-top: 5px;
}
/* .price:before {
  content: "\A5" !important;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 14px;
  text-decoration: none;
} */
.recommend-box .recommend-list .goods-price del {
  font-size: 12px;
  margin-left: 5px;
  color: rgba(0,0,0,.54);
  text-decoration: line-through;
}
/* del.price:before {
  font-size: 12px;
} */
</style>
