<template>
<div class="app-shell app-shell-bottom-navigation">
  <div class="app-view-wrapper">
    <div class="content app-view app-view-with-footer">
      <header class="hd">
        <div class="user ui-flex align-center">
          <div class="img">
            <img src="//m.mi.com/static/img/avatar.76a75b8f17.png" lazy="loaded">
          </div>
          <div class="name">
            <p>1313124239</p>
            <div class="account">1313124239</div>
          </div>
          <!-- <div class="name">
            登录/注册
          </div> -->
        </div>
      </header>
      <div class="b1 ui-flex align-center justify-space-between">
        <div class="cite">我的订单</div>
        <div class="span ui-flex align-center">
          <a href="/order/list" class="">全部订单</a>
        </div>
      </div>
      <ul class="b2 ui-flex align-center justify-space-between">
        <li class="dfk">
          <a href="/order/list?type=7">
            <div class="icon"></div>
            <span>待付款</span>
            <em>1</em>
          </a>
        </li>
        <li class="dah">
          <a href="/order/list?type=8">
            <div class="icon"></div>
            <span>待收货</span>
          </a>
        </li>
        <li class="thx">
          <a href="/legacy/#/aftersale/list">
            <div class="icon"></div>
            <span>退换修</span>
          </a>
        </li>
      </ul>
      <div class="ui-line"></div>
      <ul class="items">
        <li class="i-member">
          <a href="/mpointsmall">
            <cite>会员中心</cite>
          </a>
        </li>
        <li class="i-wallet">
          <a href="/user/coupon">
            <cite>我的优惠</cite>
          </a>
        </li>
      </ul>
      <div class="ui-line"></div>
      <ul class="items">
        <li class="i-service">
          <a href="/services">
            <cite>服务中心</cite>
          </a>
        </li>
        <li class="i-mihome">
          <a href="/mihome/citys">
            <cite>小米之家</cite>
          </a>
        </li>
      </ul>
      <div class="ui-line"></div>
      <ul class="items">
        <li class="i-fcode">
          <a href="/fcode">
            <cite>F码通道</cite>
          </a>
        </li>
      </ul>
      <div class="ui-line"></div>
      <ul class="items">
        <li class="i-setting">
          <a href="/user/set">
            <cite>设置</cite>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div> 
</template>

<style scoped>
.content {
  background: #f5f5f5;
}
.hd {
  background: url(../assets/images/user-bg.png) center 0 #f37d0f;
  background-size: auto 100%;
  padding: 16px 0;
}
.hd .img {
  margin: 0 8px 0 16px;
  width: 48px;
  height: 48px;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 100%;
  border: 3px solid hsla(0,0%,100%,.4);
  text-align: center;
}
.hd .img img {
  width: auto;
  height: 100%;
  margin: 0 auto;
}
.hd .name {
  color: #fff;
  font-size: 12px;
  text-align: left;
}
.hd .account {
  color: hsla(0,0%,100%,.6);
}
.b1 {
  background-color: #fff;
  height: 40px;
  border-bottom: 1px solid rgba(0,0,0,.15);
  color: rgba(0,0,0,.54);
  position: relative;
  padding-right: 28px;
}
.b1 .cite {
  font-size: 14px;
  padding: 0 0 0 16px;
  color: rgba(0,0,0,.87);
}
.b1 .span, .b1 a {
  font-size: 12px;
  color: rgba(0,0,0,.87);
}
.b1:after {
  content: "";
  position: absolute;
  right: 16px;
  top: 50%;
  width: 8px;
  height: 8px;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0,-50%,0) rotate(135deg);
}
.b2 {
  padding: 0 40px;
  background-color: #fff;
}
.b2 li {
  display: flex;
  align-content: space-between;
  position: relative;
  padding: 20px 0;
}
.b2 li .icon {
  width: 24px;
  height: 24px;
  margin: 0 auto 8px;
  background: url(../assets/images/user-order1.png) no-repeat center 0;
  background-size: 100% auto;
}
.b2 li.dah .icon {
  background-image: url(../assets/images/user-order2.png);
}
.b2 li.thx .icon {
  background-image: url(../assets/images/user-order3.png);
}
.b2 li span {
  color: rgba(0,0,0,.87);
  font-size: 12px;
}
.b2 li em {
  position: absolute;
  min-width: 14px;
  line-height: 14px;
  height: 14px;
  box-sizing: border-box;
  padding: 0 3px;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
  border-radius: 100%;
  background: #ed4d41;
  color: #fff;
  top: 50%;
  left: 50%;
  right: auto;
  transform: translate3d(50%,-200%,0);
  font-style: normal;
}
.ui-line {
  height: 10px;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
}
.items {
  background: #fff;
}
.items li {
  position: relative;
  color: rgba(0,0,0,.54);
  background: url(../assets/images/user-member.png) no-repeat 16px;
  background-size: 24px auto;
  line-height: 0;
}
.items li.i-wallet {
  background-image: url(../assets/images/user-wallet.png);
}
.items li.i-fcode {
  background-image: url(../assets/images/user-fcode.png);
}
.items li.i-mihome {
  background-image: url(../assets/images/user-mihome.png);
}
.items li.i-service {
  background-image: url(../assets/images/user-service.png);
}
.items li.i-setting {
  background-image: url(../assets/images/user-setting.png);
}
.items li:after {
  content: "";
  position: absolute;
  right: 16px;
  top: 50%;
  width: 10px;
  height: 10px;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0,-50%,0) rotate(135deg);
}
.items li>a {
  display: block;
  padding-right: 28px;
  margin-left: 56px;
  border-bottom: 1px solid rgba(0,0,0,.15);
  height: 52px;
  line-height: 52px;
  display: box;
  box-align: center;
  box-pack: justify;
  text-align: left;
  color: currentColor;
}
.items li:last-child>a {
  border-bottom-color: #fff;
}
.items li>a cite {
  font-size: 16px;
  font-style: normal;
  color: rgba(0,0,0,.87);
}
</style>
