<template>
  <div class="app-shell">
    <MiSearch/>
    <div class="app-view-wrapper">
      <div class="container app-view app-view-with-header app-view-with-footer">
        <div class="list-navbar">
          <ul>
            <li
              v-for="(list,index) in categoryList"
              :key="index"
              :class="index==curIndex?'active':''"
              @click="changeIndex(index)">
              <a>
                <span>{{list.category_name}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="list-wrap">
          <div
            v-for="(list,index) in categoryList"
            :key="list.category_id"
            :ref="'category'+index"
            class="list-item">
            <div class="component-list-main">
              <div class="cells_auto_fill">
                <a class="exposure items">
                  <img :src="list.category_img" lazy="loaded">
                </a>
              </div>
              <template v-for="item in list.category_list">
                <div class="category_title">
                  <span>{{item.category_title}}</span>
                </div>
                <div class="category_group box-flex">
                  <div class="box">
                    <div
                      v-for="product in item.category_group"
                      :key="product.category_id"
                      class="product">
                      <a class="exposure item">
                        <div class="img">
                          <img class="big" :src="product.img_url" lazy="loaded">
                        </div>
                        <div class="name">{{product.product_name}}</div>
                      </a>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MiSearch from '../components/MiSearch.vue'
export default {
  components: {
    MiSearch
  },
  data () {
    return {
      categoryList: null,
      curIndex: 0
    }
  },
  created () {
    this.getLists()
  },
  methods: {
    getLists () {
      this.$fetch('category').then(res => {
        this.categoryList = res.data.lists
      })
    },
    changeIndex (index) {
      this.curIndex = index
      let top = this.$refs['category'+index][0].offsetTop
      document.querySelector('.list-wrap').scrollTo(0, top)
    }
  }
}
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  flex-basis: 100%;
}
.container .list-navbar {
  position: fixed;
  top: 40px;
  bottom: 140px;
  left: 0;
  width: 80px;
  border-right: 1px solid #efefef;
  overflow: hidden;
}
.container .list-navbar ul {
  z-index: 90;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  /* 隐藏滚动条 */
  right: -6px;
  padding: 8px 6px 8px 0;
  background: #fefefe;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.container .list-navbar ul li.active {
  color: #fb7d34;
  transform: scale(1);
}
.container .list-navbar ul li {
  font-size: 18px;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: transform 0.1s linear;
  transform-origin: center center;
  transform: scale(0.76);
}
.container .list-navbar ul li span {
  display: inline-block;
}
.container .list-wrap {
  position: absolute;
  left: 80px;
  right: 0;
  top: 49px;
  bottom: 52px;
  padding: 2px 16px;
  overflow: auto;
}
.component-list-main .cells_auto_fill .items {
  height: auto!important;
  display: block;
}
.cells_auto_fill .items img {
  width: 260px;
  height: 104px;
}
.component-list-main .category_title {
  background: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  margin-top: 10px;
  height: 66px;
  line-height: 66px;
  overflow: hidden;
}
.component-list-main .category_title span {
  position: relative;
}
.component-list-main .category_title span:after, .component-list-main .category_title span:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 30px;
  border-top: 1px solid #e0e0e0;
  transform: translate3d(-150%,-50%,0);
}
.component-list-main .category_title span:after {
  left: auto;
  right: 0;
  transform: translate3d(150%,-50%,0);
}
.component-list-main .category_group .box {
  width: 100%;
  overflow: hidden;
}
.box-flex>*, .box-inline-flex>* {
  flex: 1 1 auto;
}
.component-list-main .category_group .product {
  float: left;
  width: 33.333333333333336%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 15px;
  overflow: hidden;
}
.component-list-main .category_group .product .img {
  width: 52px;
  height: 52px;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
}
.component-list-main .img {
  display: block;
  position: relative;
  overflow: hidden;
}
.component-list-main .category_group .product .img img {
  width: 100%;
}
.category_group .big {
  height: 100%!important;
  width: auto!important;
}
.component-list-main .category_group .name {
  margin-top: 14px;
  white-space: nowrap;
  font-size: 12px;
  color: rgba(0,0,0,.54);
}
</style>
