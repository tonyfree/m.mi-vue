<template>
  <div class="app-shell app-shell-bottom-navigation">
    <MiTitle title="商品订单" />
    <div class="app-view-wrapper">
      <div class="page-order-list app-view app-view-with-header app-view-with-footer">
        <ol class="tab">
          <li class="active"><a>全部</a></li>
          <li class=""><a>待付款</a></li>
          <li class=""><a>待收货</a></li>
        </ol>
        <div class="page-con">
          <div class="page-con-items" style="">
            <div class="container">
              <div class="order-list">
                <ol>
                  <li>
                    <div class="order-item">
                      <div class="item-box-top">
                        <div class="top-left">
                          <p class="order-data">
                            <strong>订单日期：</strong>
                            <span>2018/09/14  17:21</span>
                          </p>
                          <p class="order-num">
                            <strong>订单编号：</strong>
                            <span>5180914734400865</span>
                          </p>
                        </div>
                        <div class="top-right">等待付款</div>
                      </div>
                      <div class="item-box-center ui-flex align-center">
                        <img src="//i1.mifile.cn/a1/pms_1527060327.66235934!180x1800.jpg" class="lazy">
                        <span class="flex">小米电视4C 32英寸 黑色 32英寸</span>
                      </div>
                      <div class="item-box-center ui-flex align-center">
                        <img src="//i1.mifile.cn/a1/pms_1527735134.03584233!180x1800.jpg" class="lazy">
                        <span class="flex">小米8 全网通版 6GB内存 64GB 黑色</span>
                      </div>
                      <div class="item-box-center ui-flex align-center">
                        <img src="//i1.mifile.cn/a1/pms_1501236937.96732594!180x1800.jpg" class="lazy">
                        <span class="flex">米粉卡日租卡</span>
                      </div>
                      <div class="item-box-bottom">
                        <span>共4件商品</span>
                        <span>总金额：</span>
                        <strong>6097元</strong>
                      </div>
                    </div>
                    <div class="item-box-btn">
                      <a href="javascript:;" class="btn btn-bordered btn-gray">取消订单</a>
                      <a href="javascript:;" class="btn btn-bordered">立即付款</a>
                    </div>
                  </li>
                  <li>
                    <div class="order-item">
                      <div class="item-box-top">
                        <div class="top-left">
                          <p class="order-data">
                            <strong>订单日期：</strong>
                            <span>2018/08/03  11:39</span>
                          </p>
                          <p class="order-num">
                            <strong>订单编号：</strong>
                            <span>5180803963902874</span>
                          </p>
                        </div>
                        <div class="top-right">已退款</div>
                      </div>
                      <div class="item-box-center ui-flex align-center">
                        <img src="//i1.mifile.cn/a1/T1PXhgBbdT1RXrhCrK!180x1800.jpg" class="lazy">
                        <span class="flex">九号平衡车 白色</span>
                      </div>
                      <div class="item-box-bottom">
                        <span>共1件商品</span>
                        <span>总金额：</span>
                        <strong>1949元</strong>
                      </div>
                    </div>
                    <div class="item-box-btn"></div>
                  </li>
                </ol>
              </div>
              <div class="empty">您还没有 待付款 订单</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>  
</template>

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

