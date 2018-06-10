<template>
  <div class="recommend-box space-top">
    <div class="recommend-top-img">
      <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" lazy="loaded">
    </div>
    <div class="recommend-list layout row wrap align-center align-content-start justify-space-between">
      <div class="goods-item">
        <a class="exposure">
          <div class="goods-img-box">
            <img class="lazy" src="//i8.mifile.cn/v1/a1/48af122b-362c-dae5-8305-899805faf635!360x360.webp" lazy="loaded">
          </div>
          <div class="goods-info">
            <div class="goods-name no-wrap">红米5 16GB</div>
            <div class="goods-price price">
              ￥699
              <del class="price">￥799</del>
            </div>
          </div>
        </a>
      </div>
      <div class="goods-item">
        <a class="exposure">
          <div class="goods-img-box">
            <img class="lazy" src="//i8.mifile.cn/v1/a1/6bc9a546-b8d9-e886-e203-e476a405c40c!360x360.webp" lazy="loaded">
          </div>
          <div class="goods-info">
            <div class="goods-name no-wrap">红米5 Plus 32GB</div>
            <div class="goods-price price">
              ￥799
              <del class="price">￥999</del>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>  
</template>

<style scoped>
.recommend-box {
  background: #fff;
  text-align: left;
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
