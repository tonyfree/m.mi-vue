<template>
  <div class="app-shell">
    <MiTitle title="商品列表"/>
    <div class="app-view-wrapper">
      <div class="app-view app-view-with-header app-view-with-footer">
        <ol>
          <router-link
            tag="li"
            :to="{name: 'detail', params: {id: list.product_id}}"
            v-for="list in commodityList"
            :key="list.product_id"
            class="item ui-flex align-center">
            <a class="item-img exposure">
              <img v-lazy="list.img_url">
              <span>
                <img :src="list.icon_img">
              </span>
            </a>
            <div class="item-intro box-flex flex">
              <div class="item-name flex">
                <p>{{list.name}}</p>
              </div>
              <div class="item-brief flex">
                <p v-html="list.product_desc"></p>
              </div>
              <div class="item-intro-price flex">
                <span class="price">&nbsp;{{list.price}}</span>
              </div>
            </div>
          </router-link>
        </ol>
        <MiRecommend />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import MiRecommend from '@/components/MiRecommend.vue'
import fetch from '@/api/fetch.js'
import DOMPurify from 'dompurify'
export default {
  components: {
    MiRecommend
  },
  data () {
    return {
      commodityList: null
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.name) {
      fetch('commodity', {
        category_id: to.params.id
      }).then(res => {
        next(vm => vm.setLists(res))
      })
    } else {
      next(vm => vm.getLists())
    }
  },
  destroyed () {
    this.$NProgress.remove()
  },
  methods: {
    getLists () {
      this.$fetch('commodity', {
        category_id: this.$route.params.id
      }).then(res => {
        this.setLists(res)
      })
    },
    setLists (res) {
      this.$NProgress.done()
      let list = res.data.list
      list.forEach(item => {
        item.product_desc = DOMPurify.sanitize(item.product_desc)
      })
      this.commodityList = list
    }
  }
}
</script>

<style scoped>
.item:not(:last-child) {
  padding: 0 0 3px;
  position: relative;
}
.item:not(:last-child):after {
  content: "";
  position: absolute;
  bottom: 1px;
  left: 160px;
  right: 0;
  border-bottom: 1px solid #e4e4e4;
}
.item-img {
  position: relative;
  width: 156px;
  height: 156px;
  text-align: center;
  display: block;
}
.item-img img {
  width: auto;
  height: 100%;
}
.item-img span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 78px;
}
.item-img span img {
  width: auto;
  height: 16px;
}
.item-intro {
  display: block;
  padding: 0 16px 4px;
  width: 185px;
  box-sizing: border-box;
  text-align: left;
}
.item-intro .item-name {
  font-size: 16px;
  color: rgba(0,0,0,.87);
  margin-bottom: 8px;
}
.item-intro .item-brief {
  font-size: 12px;
  color: rgba(0,0,0,.54);
  margin-bottom: 8px;
  line-height: 16px;
  height: 32px;
  overflow: hidden;
}
.item-intro .item-brief p {
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.item-intro .item-intro-price {
  font-size: 16px;
  position: relative;
}
.item-intro span {
  color: #ff6000;
}
.price {
  position: relative;
  padding-left: 8px;
  line-height: 18px;
}
.price:before {
  content: "\A5";
  position: absolute;
  left: 0;
  top: 0;
  font-size: 16px;
  text-decoration: none;
}
</style>
