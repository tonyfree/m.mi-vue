<template>
<div class="app-view-wrapper">
  <div class="app-view">
    <header class="header">
      <div class="app-header-wrapper">
        <div class="app-header-left">
          <div class="app-header-item logo">
            <img src="../assets/images/searchlogo.png" alt="">
          </div>
        </div>
        <div class="app-header-middle">
          <div class="app-header-title">
            <i class="iconfont icon-search"></i>&nbsp;&nbsp;
            搜索商品名称
          </div>
        </div>
        <div class="app-header-right">
          <div class="app-header-item">
            <i class="iconfont icon-people" @click="toUser"></i>
          </div>
        </div>
      </div>
      <div class="nav swiper-container">
        <div v-if="navList&&navList.length" class="swiper-wrapper">
          <div
            v-for="(nav,index) in navList"
            :key="nav.page_id"
            class="nav-item swiper-slide"
            :class="{'nav_active':curIndex == index}"
            @click="changeIndex(index)">
            <span>{{nav.name}}</span>
          </div>
        </div>
      </div>
    </header>
    <transition-group class="page-wrap" tag="div" :name="transitionName" >
      <div
        v-for="(nav,index) in navList"
        :key="nav.page_id"
        v-show="index==curIndex"
        class="bodys" >
        {{nav.name}}
      </div>
    </transition-group>
  </div>
</div>
</template>

<script>
import Swiper from 'swiper'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

export default {
  data () {
    return {
      navList: null,
      curIndex: 0,
      homeSwiper: null,
      slidesPerView: 6,
      transitionName: ''
    }
  },
  watch: {
    navList: {
      deep: true,
      handler (val, oldVal) {
        // console.log(val)
      }
    }
  },
  created () {
    this.getNavList()
  },
  destroyed () {
    this.homeSwiper.destroy()
    NProgress.remove()
  },
  methods: {
    getNavList () {
      this.$fetch('navList').then(res => {
        let list = res.data.list
        list.forEach(item => {
          item.hasData = false
        })
        this.navList = list
        this.getHomePage()
        this.$nextTick(() => {
          this.homeSwiper = new Swiper('.swiper-container', {
            slidesPerView: this.slidesPerView,
            freeMode: true
          })
        })
      })
    },
    changeIndex (index) {
      document.querySelector('.page-wrap').scrollTo(0, 0)
      this.transitionName = index > this.curIndex ? 'page-left' : 'page-right'
      this.curIndex = index
      let toIndex = 0
      if (index > this.slidesPerView / 2) {
        toIndex = index - this.slidesPerView / 2
      }
      this.homeSwiper.slideTo(toIndex, 1000, false)
      !this.navList[index].hasData && this.getHomePage()
    },
    getHomePage () {
      NProgress.start()
      this.$fetch('homePage', {
        page_id: this.navList[this.curIndex].page_id
      }).then(res => {
        this.navList[this.curIndex].hasData = true
        NProgress.done()
      })
    },
    toUser () {
      console.log(111)
      this.$router.push('user')
    }
  }
}
</script>

<style scoped>
.app-view {
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* height: 100%; */
  overflow-x: hidden;
  overflow-y: auto;
  will-change: transform;
  background: #fff;
  color: #3c3c3c;
  padding-bottom: 52px;
}
.header {
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
  background: #f2f2f2;
}

.app-header-item img {
  width: 80%;
}

.app-header-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #e5e5e5;
  text-align: left;
  width: 100%;
  color: rgba(0,0,0,.3);
  background-color: #fff;
  border-radius: 4px;
  height: 32px;
  padding-left: 12px;
}
.icon-people {
  font-size: 24px;
}
.nav {
  /* overflow-x: auto; */
  background: #f2f2f2;
  font-size: 14px;
  white-space: nowrap;
  z-index: 2;
}
/* .swiper-wrapper {
  width: 600px;
} */
.nav .nav-item {
  display: inline-block;
  padding: 0 14px;
  width: auto !important;
}
.nav .nav-item span {
  display: inline-block;
  line-height: 32px;
  border-bottom: 2px solid rgba(237, 91, 0, 0);
  color: rgb(116, 116, 116);
  border-color: rgb(242, 242, 242);
}
.nav-item.nav_active span {
  color: rgb(237, 91, 0);
  border-color: rgb(237, 91, 0);
}
.page-wrap {
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.bodys {
  position: absolute;
  top: 82px;
  left: 0;
  right: 0;
  background: rgba(237, 91, 0, 0.1);
  height: 800px;
  line-height: 800px;
  font-size: 72px;
}
</style>
<style>
#nprogress .bar {
  background-color: rgba(237, 91, 0, 0.5);
}
#nprogress .peg {
  box-shadow: 0 0 10px rgba(237, 91, 0, 0.5), 0 0 5px rgba(237, 91, 0, 0.5);
}
</style>
