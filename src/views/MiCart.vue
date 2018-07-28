<template>
  <div class="app-shell app-shell-bottom-navigation">
    <MiTitle title="购物车"/>
    <div class="app-view-wrapper">
      <div class="container fluid app-view app-view-with-header app-view-with-footer">
        <div class="page-wrap">
          <div v-if="!isLogin" class="nologin">
            <router-link :to="{name: 'login', query: {redirect: '/cart'}}" class="box-flex align-center justify-space-between">
              <span class="flex">登录后享受更多优惠</span>
              <em class="flex">去登录</em>
            </router-link>
          </div>
          <div v-if="cartList&&cartList.length" class="cart-list">
            <ol>
              <li v-for="(item, index) in cartList" :key="item.goodsId" class="item">
                <div class="ui-flex align-center justify-center">
                  <div class="choose flex"
                    :class="{checked:item.sel_status}"
                    @click="cartSelect(item, index)">
                    <i v-if="!item.parent_goodsId" class="iconfont" :class="item.sel_status?'icon-roundcheckfill':'icon-round'"></i>
                  </div>
                  <router-link :to="{name: 'detail', params: {id: item.goodsId}}" class="imgProduct flex">
                    <img v-lazy="item.image_url">
                  </router-link>
                  <div class="info flex">
                    <p class="name">
                      <span class="flex">{{item.product_name}}</span>
                    </p>
                    <div v-if="item.price" class="price-without">
                      <span>售价：</span>
                      <span>{{item.price}}元</span>
                      <template v-if="item.isService">
                        <span>合计：</span>
                        <span>{{item.price*item.num}}元</span>
                      </template>
                    </div>
                    <div class="num">
                      <div class="xm-input-number">
                        <div
                          :class="{active:item.num>1&&item.price}"
                          class="input-sub"
                          @click="cartEdit(item, -1)">
                          <i class="iconfont icon-move"></i>
                        </div>
                        <div class="input-num">
                          <span>{{item.num}}</span>
                        </div>
                        <div
                          :class="{active:item.num<item.buy_limit&&item.price}"
                          class="input-add"
                          @click="cartEdit(item, 1)">
                          <i class="iconfont icon-add"></i>
                        </div>
                      </div>
                      <div v-if="item.price" class="delete" @click="cartDelete(item, index)">
                        <i class="iconfont icon-delete"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="item.sel_status" class="append flex">
                  <div
                    v-for="service in item.serviceList"
                    :key="service.service_goods_id"
                    @click="toCartSelService(item)">
                    <div class="insurance">
                      <div class="i1">
                        <img v-lazy="service.service_image_url">
                      </div>
                      <div class="i2">
                        <span> {{service.service_short_name}} {{service.service_price}}元</span>
                      </div>
                      <div class="i3">
                        <span>选购</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
            <div class="point-box">
              <div class="point">
                <span class="act act_gift">赠品</span>
                <span>赠小米蓝牙耳机</span>
              </div>
              <div class="point">
                <span class="act act_special">活动</span>
                <span>下单立减100元</span>
              </div>
              <div class="point" style="display: none;">
                <span class="act act_special">包邮</span>
                <span></span>
              </div>
              <div class="point">
                <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
              </div>
            </div>
            <div class="ui-line"></div>
          </div>
          <div v-else class="noitems">
            <router-link :to="{name: 'home'}" class="router-link-active">
              <span>购物车还是空的</span>
              <em>去逛逛</em>
            </router-link>
          </div>
          <MiRecommend />
        </div>
        <div class="bottom-submit box-flex">
          <div class="price-box flex">
            <span>共{{totalNumber}}件 金额：</span>
            <br>
            <strong>{{totalPrice}}</strong>
            <span>元</span>
          </div>
          <router-link :to="{name: 'category'}" class="btn disable black flex">继续购物</router-link>
          <a class="btn flex">去结算</a>
        </div>
        <MiPop v-model="showServiceInfo"
          :close-on-click-overlay="true"
          :overlay-style="{'background-color': 'rgba(0,0,0,.4)'}">
          <div class="h1">购买服务</div>
          <div class="max5">
            <div
              v-for="list in serviceInfoList"
              :key="list.type_name"
              class="border-top-1px mt2x">
              <div v-if="list.service_info.length" class="option-title pt32">
                {{list.type_name}}
                <a :href="list.service_url" class="service-url">
                  <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhFNUZBNEJBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhFNUZBNENBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEE0ODY5NEE2NzUxMUU3QkY4M0QxMUYzMTU1MkNERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOEU1RkE0QUE2ODYxMUU3QkY4M0QxMUYzMTU1MkNERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqoKySAAAALWSURBVHjatJfPS1RRFMef9002Q9BiRlPIzE2TusgWQZQFFS364aJwUZBEYW3atAv6S1y0K3chSEUbqQaSQoqKirJGwppxMaZvIaSTaPo98L1xebxf900d+KDMu/d+7zn33PPOa3KSmQuKYA/YBQogy2d1sAgqoAy+gvW4BZtinufAEXAIzINpMAsWwIoxpgV0gW7QBl6ASWOMlfB+MEAPnoGfCaMjmzjBCD0C7xLOcxQ4D24xrGlN5t7mWirOYxkwBJrBPfDbacy2gcvgFxgFf8KEz4F2cCckQeQ8DzLJJMHyoAo8JtZUSGIOM0fGzR+19YHDFA3ytAPcBL0UzfH37UyoXibYZ7BmzNsAH8EZel4zhWWRq+AuM9Zv4tkNjpNMnQAl8IZCeW6gwCiWffPXed0ugFeyMS18nLt5GXJWQ/RKbAS8Z3g9eiAh7qF4F6/Smm+NJa6xA3xT9Fru6ZMQ0TzP1KFANWTclO9YguwptVzF+zbP6uNELOqFJI82z7fZIFukVjFD4emYBccSXJ2dxv9zEeNEa6/ihO8N3tcO5onDxKpGjP0hmuJxq0U5DLJ9YJAZX2WhiDIJdUuGb5l6StFBFhTt6WjUi4Emz7OZBjw9Zog+5r1ObIreZi1Fc8aZ2orK3LpipWpNkUy6ZJYs54rWgmJC7E4Z7nKKOaI15zLcB8Bri8mSIDOs00uWwqekxit2GG0s8DbCcfc1yAqs1V9cvraaWeQ/WZyx3qxnITzASM3olmSSjVrSVuc0uE5sWqFuav3thSR0D8Altiv/2raCi+ChLjBmB1Jjh9gP3vIIwmwL29wy/8b15FfYCJSSNHvSjaz+r2bP9Q0ULz+ATvZIlRTXxTzTa3zz3TdFg4S1uLwzl9kjtfMYli0a+rPgpFFON9J8whxlu1JjwZhlJ2F+whTYa/Xwmknv9jztJ0zQR1uRIcwbtXqFd7nCYpToo21TgAEAWy6shL93DD4AAAAASUVORK5CYII="> -->
                  <i class="iconfont icon-question"></i>
                </a>
              </div>
              <div
                v-for="service in list.service_info"
                :key="service.service_goods_id"
                class="options-group"
                @click="selectService(list, service)">
                <div class="align-center justify-start layout wrap">
                  <div :class="{on:service.sel_status}"
                    class="option-item border-1px align-center justify-center ui-flex">
                    <p>{{service.service_short_name}}  {{service.service_price}}元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-bottom align-center justify-canter layout">
            <div class="flex">{{serviceSelectMessage}}</div>
            <div class="btn" @click="serviceSelectSubmit">确定</div>
          </div>
        </MiPop>
      </div>
    </div>
  </div>
</template>

<script src="./MiCart.js"></script>

<style scoped>
.nologin>a {
  height: 52px;
  padding: 0 28px 0 16px;
  position: relative;
  color: rgba(0,0,0,.54);
}
.nologin>a:after {
  content: "";
  position: absolute;
  right: 16px;
  top: 50%;
  width: 9px;
  height: 9px;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0,-50%,0) rotate(135deg);
}
.nologin>a span {
  font-size: 16px;
  color: rgba(0,0,0,.87);
  display: block;
  text-align: left;
}
.nologin>a em {
  font-style: normal;
  font-size: 14px;
  text-align: right;
}
.cart-list {
  background: #fff;
}
.cart-list .item {
  border-bottom: 1px solid #f6f6f6;
  line-height: 0;
}
.cart-list .item .ui-flex {
  padding: 12px 0;
}
.cart-list .item .choose {
  -webkit-box-flex: 0;
  flex: none;
  width: 30px;
  padding: 0 4px;
  height: 90px;
}
.cart-list .item .choose i {
  font-size: 24px;
  line-height: 90px;
  color: #ddd;
}
.cart-list .item .choose.checked i {
  color: #f56600;
}
/* .cart-list .item .choose.checked {
  background: url(//s1.mi.com/m/images/m/check_press.png) 50% 50% no-repeat;
  background-size: 20px 20px;
} */
.cart-list .item .imgProduct {
  -webkit-box-flex: 0;
  flex: none;
  display: block;
  position: relative;
  width: 90px;
  height: 90px;
  margin-right: 10px;
  border: 1px solid #eee;
  border-radius: 2px;
}
.cart-list .item .imgProduct img {
  width: auto;
  height: 100%;
}
.cart-list .item .info {
  text-align: left;
}
.cart-list .item .info .name {
  font-size: 14px;
  line-height: 16px;
  color: #666;
  margin-bottom: 6px;
  margin-right: 15px;
  display: -webkit-box;
  display: box;
  box-align: start;
}
.cart-list .item .info .name span {
  display: block;
}
.cart-list .item .info .price-without {
  padding: 6px 0;
  font-size: 12px;
  color: #999;
  margin-bottom: 6px;
}
.cart-list .item .info .price-without span {
  margin-right: 5px;
}
.cart-list .item .info .xm-input-number {
  display: inline-block;
  border: 1px solid #eee;
}
.cart-list .item .info .xm-input-number .input-sub {
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  vertical-align: middle;
  background-color: #fafafa;
  text-align: center;
}

.cart-list .item .info .xm-input-number .input-num {
  display: inline-block;
  vertical-align: middle;
  min-width: 30px;
  padding: 0 6px;
  text-align: center;
  font-size: 16px;
}
.cart-list .item .info .xm-input-number .input-add,
.cart-list .item .info .xm-input-number .input-sub {
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  vertical-align: middle;
  background-color: #fafafa;
  text-align: center;
}
.cart-list .item .info .xm-input-number .input-add.active,
.cart-list .item .info .xm-input-number .input-sub.active {
  background-color: #ddd;
}
.cart-list .item .info .xm-input-number .input-add.active .image-icon,
.cart-list .item .info .xm-input-number .input-sub.active .image-icons {
  opacity: 1;
}
/* .cart-list .item .info .xm-input-number .icon-line {
  background-image: url(../assets/images/icon-line.png);
}
.cart-list .item .info .xm-input-number .icon-cross {
  background-image: url(../assets/images/icon-cross.png);
}
.cart-list .item .info .xm-input-number .image-icons {
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
.cart-list .item .info .delete {
  float: right;
  margin-right: 10px;
  display: block;
}
.cart-list .item .info .delete .icon-delete {
  /* width: 30px;
  height: 30px;
  background-image: url(../assets/images/icon-delete.png); */
  font-size: 20px;
  line-height: 30px;
}
.cart-list .item .append .insurance {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border: 1px solid #f6f6f6;
  padding: 7px 10px;
  border-radius: 2px;
  background: #f6f6f6;
  font-size: 12px;
  margin: 0 10px 10px;
}
.cart-list .item .append .insurance .i1 {
  margin-right: 6px;
}
.cart-list .item .append .insurance .i1 img {
  width: 25px;
  height: 25px;
}
.cart-list .item .append .insurance .i2 {
  -webkit-box-flex: 1;
  box-flex: 1;
  flex: 1;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-right: 10px;
}
.cart-list .item .append .insurance .i2 span {
  -webkit-box-flex: 1;
  flex: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
  height: 25px;
  line-height: 25px;
  text-align: left;
}
.cart-list .item .append .insurance .i3 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 38px;
  color: #ff5722;
}
.cart-list .point-box {
  background: #fff;
}
.cart-list .point-box .point {
  font-size: 11px;
  color: #999;
  border-top: 1px solid #f6f6f6;
  padding: 10px 15px;
  text-align: left;
}
.cart-list .point-box .point .act.act_gift {
  background: #5b77d6;
}
.cart-list .point-box .point .act {
  border-radius: 2px;
  color: #fff;
  padding: 1px 3px;
  margin-right: 5px;
}
.cart-list .point-box .point .act.act_special {
  background: #e53935;
}
.noitems {
  background: #ebebeb;
  padding: 10px;
}
.noitems>a {
  height: 72px;
  font-size: 12px;
  text-decoration: none;
  text-align: center;
}
.noitems>a span {
  display: inline-block;
  line-height: 40px;
  background: url(../assets/images/cart_noitems.png) no-repeat 0;
  background-size: auto 100%;
  padding: 0 8px 0 48px;
  color: rgba(0,0,0,.27);
}
.noitems>a em {
  display: inline-block;
  border: 1px solid rgba(0,0,0,.15);
  box-sizing: border-box;
  height: 25px;
  line-height: 25px;
  padding: 0 12px;
  color: rgba(0,0,0,.87);
  font-style: normal;
}
.bottom-submit {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 99;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
}
.bottom-submit .price-box {
  font-size: 13px;
  color: #999;
  width: 100%;
  text-align: center;
  padding-top: 7px;
}
.bottom-submit .price-box strong {
  font-size: 20px;
  color: #ff5722;
  margin-right: .2em;
}
.bottom-submit .disable {
  background: #f4f4f4;
  /* border: 1px solid #f4f4f4; */
}
.bottom-submit .black {
  color: #333;
}
.bottom-submit .btn {
  display: block;
  width: 100%;
}

.pop .h1 {
  color: rgba(0,0,0,.87);
  font-size: 16px;
  text-align: center;
  padding: 12px 0;
}
.pop .option-title {
  position: relative;
  padding-bottom: 8px;
  line-height: 12px;
  font-size: 12px;
  color: rgba(0,0,0,.87);
}
.pop .service-url {
  display: inline-block;
  width: 14px;
  height: 14px;
  /* margin-left: 5px; */
  vertical-align: middle;
}
/* .pop .service-url img {
  width: auto;
  height: 90%;
} */
.pop .service-url i {
  font-size: 16px;
  left: 14px;
  color: #999;
}
.pop .options-group {
  padding-bottom: 16px;
}
.pop .option-item {
  height: 36px;
  line-height: 36px;
  width: 49%;
  box-sizing: border-box;
  padding: 0 4px;
  text-align: center;
  margin: 8px 8px 0 0;
  font-size: 12px;
}
.pop .option-item.on {
  color: #f56600;
}
.pop .option-item.on:before {
  border-color: #f56600;
}
.pop .btn-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.pop .btn-bottom .flex {
  padding-left: 16px;
  color: rgba(0,0,0,.54);
  font-size: 12px;
}
.pop .btn-bottom .btn {
  width: 50%;
  background-color: #f56600;
  color: #fff;
  font-size: 16px;
  line-height: 47px;
}
</style>
