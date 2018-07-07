<template>
  <div class="app-view-wrapper">
    <div class="content app-view app-view-with-footer">
      <header class="hd">
        <div class="user ui-flex align-center">
          <div class="img">
            <img src="//s1.mi.com/m/images/m/default.png" lazy="loaded">
          </div>
          <div class="name">
            <p>1313124239</p>
            <div class="account">1313124239</div>
          </div>
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
</template>
