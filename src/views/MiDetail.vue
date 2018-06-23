<template>
  <div class="app-shell">
    <div class="app-view-wrapper">
      <div class="app-view">
        <div class="container fluid" v-if="productData">
          <header>
            <div class="fill-height layout align-center">
              <a class="header-btn">
                <i class="iconfont icon-back"></i>
              </a>
              <div class="placeholder"></div>
              <a class="header-btn share-btn">
                <i class="iconfont icon-share"></i>
              </a>
            </div>
          </header>
          <div class="swiper-container gallery-view">
            <div class="swiper-wrapper">
              <div
                v-for="(imgUrl,index) in galleryView"
                :key="index"
                class="swiper-slide">
                <img class="img swiper-lazy" :data-src="imgUrl">
                <div class="swiper-lazy-preloader"></div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="overview">
            <div class="goods-name ui-flex align-center justify-start">{{titleView.name}}</div>
            <div class="goods-brief" v-html="titleView.product_desc"></div>
            <div class="goods-price layout align-end justify-start">
              <div class="price cur-price">{{titleView.price}}</div>
            </div>
          </div>
          <div class="product-section more">
            <div class="border-top-1px ui-flex align-start justify-start J_linksign-customize">
              <div class="title">促销</div>
              <div class="flex pt1-2x">
                <div class="ui-flex align-center justify-start act-icon mb2x">
                  <div class="icon-desc border-1px">{{canJoinActs.type_desc}}</div>
                  <div class="icon-title">{{canJoinActs.title}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="product-section more mt2x padding-16-32">
            <div class="ui-flex align-start justify-start J_linksign-customize">
              <div class="title">已选</div>
              <div class="flex">
                <div class="info">小米6X 4GB+64GB 曜石黑 x1</div>
              </div>
            </div>
          </div>
          <div class="product-section more padding-16-32">
            <div class="border-top-1px ui-flex align-start justify-start J_linksign-customize">
              <div class="title">送至</div>
              <div class="flex">
                <div class="info">
                  <span class="mr1x">珠海市 香洲区</span>
                  <span class="on">有现货</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-section padding-16-32">
            <div class="border-top-1px ui-flex align-center justify-start J_linksign-customize service-policy-list">
              <div class="flex service-policy-item">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==" class="mr1x img-icon">
                <span class="fsc1">7天无理由退货</span>
              </div>
              <div class="flex service-policy-item">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==" class="mr1x img-icon">
                <span class="fsc1">15天质量问题换货</span>
              </div>
              <div class="flex service-policy-item">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==" class="mr1x img-icon">
                <span class="fsc1">365天保修</span>
              </div>
            </div>
          </div>
          <div class="comment-view space-top">
            <a href="/comment/list/2181500027" class="comment-info border-bottom-1px box-flex align-center justify-space-between entry-more">
              <div class="comment-count">用户评价({{commentView.detail.comments_total}})</div>
              <div class="comment-degree">
                {{commentView.detail.satisfy_per}}%
                <span>满意</span>
              </div>
            </a>
            <MiComment :comment="commentView.list[0]" />
          </div>
          <div class="description-view space-top">
            <div class="tab-header">
              <div class="tab-header-inner border-bottom-1px box-flex align-center">
                <a
                  v-for="(desc,index) in descTabsView"
                  :key="index"
                  class="flex"
                  :class="descTabsViewIndex==index?'on':''"
                  @click="descTabsViewIndex=index">{{desc.name}}</a>
              </div>
            </div>
            <div class="tab-view">
              <div
                v-show="descTabsViewIndex==index"
                v-for="(desc,index) in descTabsView"
                :key="'desc'+index"
                class="tab-item">
                <section v-for="(showDesc,index) in desc.showTabContent" :key="'showDesc'+index">
                  <div class="desc-img-box">
                    <img :src="showDesc.plainView.img">
                  </div>
                </section>
                <section v-show="desc.showMore" v-for="(showDesc,index) in desc.moreTabContent" :key="'moreDesc'+index">
                  <div class="desc-img-box">
                    <img :src="showDesc.plainView.img">
                  </div>
                </section>
                <a v-show="!desc.showMore" class="show-all-desc" @click.stop="desc.showMore=true">查看全部图文详情 &gt;</a>
              </div>
            </div>
          </div>
          <div class="recommend-box space-top">
            <div class="recommend-title">为你推荐</div>
            <div class="recommend-list layout row wrap align-center align-content-start justify-space-between J_linksign-customize">
              <div class="goods-item">
                <a data-log_code="recom_product_12-0#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=6259" class="exposure">
                  <div class="goods-img-box">
                    <img class="lazy" src="//i8.mifile.cn/v1/a1/f0ea0c6b-96b5-c85b-d2b4-e4aeaabea277!360x360.webp" lazy="loaded">
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">小米5X 64GB</div>
                    <div class="goods-price price">1499</div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a data-log_code="recom_product_12-1#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=8030" class="exposure">
                  <div class="goods-img-box">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8612f157af2c116b7e3fc47356cdb7be.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">红米S2 4GB+64GB</div>
                    <div class="goods-price price">1299</div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a data-log_code="recom_product_12-2#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=7768" class="exposure">
                  <div class="goods-img-box">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/850d316b25648c9862c7c22aefba9280.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">红米Note 5</div>
                    <div class="goods-price price">1399<!----></div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a data-log_code="recom_product_12-3#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=6701" class="exposure">
                  <div class="goods-img-box">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d68da7f79cc9800a34b1b48e1a439e44.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">小米MIX 2 </div>
                    <div class="goods-price price">
                      2599
                      <del class="price">3299</del>
                    </div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a data-log_code="recom_product_12-4#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=7909" class="exposure">
                  <div class="goods-img-box">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e54e6d531611a372e1509c1f1e85c9b3.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">小米6X 标准高透贴膜</div>
                    <div class="goods-price price">19<!----></div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a data-log_code="recom_product_12-5#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=7910" class="exposure">
                  <div class="goods-img-box">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6156db2b5b3b270e87e8bcbe140cabc2.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">小米6X保护壳</div>
                    <div class="goods-price price">29<!----></div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a data-log_code="recom_product_12-6#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=4917" class="exposure">
                  <div class="goods-img-box">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/570c5d0701fd7a4a56688654ad4f1133.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">最生活毛巾</div>
                    <div class="goods-price price">19.9<!----></div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a data-log_code="recom_product_12-7#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=5059" class="exposure">
                  <div class="goods-img-box">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/359594c6feed269a51eec5d0e59e42b1.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">活塞耳机 </div>
                    <div class="goods-price price">29<!----></div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a data-log_code="recom_product_12-8#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=7244" class="exposure">
                  <div class="goods-img-box">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/806866db7cfac7efdb561e9d796b4a33.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">米兔指尖积木</div>
                    <div class="goods-price price">9.9<!----></div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a data-log_code="recom_product_12-9#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=7092" class="exposure">
                  <div class="goods-img-box">
                    <img class="lazy" src="//i8.mifile.cn/v1/a1/2f258afa-bf3c-e02f-54ce-e490a922ffae!360x360.webp" lazy="loaded">
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">USB充电器</div>
                    <div class="goods-price price">29.9<!----></div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a data-log_code="recom_product_12-10#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=6825" class="exposure">
                  <div class="goods-img-box">
                    <img class="lazy" src="//i8.mifile.cn/v1/a1/b9964239-82d5-7564-7a73-a117008157fb!360x360.webp" lazy="loaded">
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">Type C数据线</div>
                    <div class="goods-price price">16.9<!----></div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a data-log_code="recom_product_12-11#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=7463" class="exposure">
                  <div class="goods-img-box">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d75a2f3b510b1f003f9eef17e757fc7f.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">新小米移动电源2 (10000mAh)</div>
                    <div class="goods-price price">79</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="ui-mask" style="display:none;"></div>
        <div class="pop" style="display:none;">
          <div class="close">
            <i class="iconfont icon-close"></i>
          </div>
          <div class="pro-info layout row align-center justify-space-around">
            <div class="product-img">
              <img src="//i8.mifile.cn/a1/pms_1524621089.05828574!720x7200.jpg">
            </div>
            <div class="product-desc flex layout column justify-start">
              <div class="cur-price">
                <div class="price">1599</div>
              </div>
              <div class="name">小米6X 4GB+64GB 曜石黑</div>
            </div>
          </div>
          <div class="max5">
            <div class="border-top-1px mt2x">
              <div class="option-title pt32">
                版本
                <span style="display: none;">请选择： 版本</span>
              </div>
              <div class="options-group align-center justify-start layout wrap">
                <div class="option-item border-1px align-center justify-center ui-flex on line justify-space-between">
                  <p>4GB+64GB</p>
                  <p>1599元</p>
                </div>
                <div class="option-item border-1px align-center justify-center ui-flex line justify-space-between">
                  <p>4GB+32GB</p>
                  <p>1399元</p>
                </div>
                <div class="option-item border-1px align-center justify-center ui-flex cos line justify-space-between">
                  <p>6GB+64GB</p>
                  <p>1799元</p>
                </div>
                <div class="option-item border-1px align-center justify-center ui-flex line justify-space-between">
                  <p>6GB+128GB</p>
                  <p>1999元</p>
                </div>
              </div>
            </div>
            <div class="border-top-1px mt2x sdk_color">
              <div class="option-title pt32">
                颜色
                <span style="display: none;">请选择： 颜色</span>
              </div>
              <div class="options-group align-center justify-start layout wrap">
                <div class="option-item border-1px align-center justify-center ui-flex">
                  <p>流沙金</p>
                </div>
                <div class="option-item border-1px align-center justify-center ui-flex on">
                  <p>曜石黑</p>
                </div>
                <div class="option-item border-1px align-center justify-center ui-flex">
                  <p>赤焰红</p>
                  </div>
                <div class="option-item border-1px align-center justify-center ui-flex">
                  <p>冰川蓝</p>
                </div>
                <div class="option-item border-1px align-center justify-center ui-flex">
                  <p>樱花粉</p>
                </div>
              </div>
            </div>
            <div class="border-top-1px pd32 layout align-center justify-space-between">
              <div class="option-title">购买数量</div>
              <div class="xm-input-number">
                <div class="input-sub">
                  <i class="iconfont icon-move"></i>
                </div>
                <div class="input-num">
                  <span>1</span>
                </div>
                <div class="input-add active">
                  <i class="iconfont icon-add"></i>
                </div>
              </div>
            </div>
            <div class="ywb">
              <div class="border-top-1px pd32">
                <div class="option-title">
                  保障服务
                  <a href="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/4a15d767c1fe.html" class="service-url">
                    <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhFNUZBNEJBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhFNUZBNENBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEE0ODY5NEE2NzUxMUU3QkY4M0QxMUYzMTU1MkNERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOEU1RkE0QUE2ODYxMUU3QkY4M0QxMUYzMTU1MkNERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqoKySAAAALWSURBVHjatJfPS1RRFMef9002Q9BiRlPIzE2TusgWQZQFFS364aJwUZBEYW3atAv6S1y0K3chSEUbqQaSQoqKirJGwppxMaZvIaSTaPo98L1xebxf900d+KDMu/d+7zn33PPOa3KSmQuKYA/YBQogy2d1sAgqoAy+gvW4BZtinufAEXAIzINpMAsWwIoxpgV0gW7QBl6ASWOMlfB+MEAPnoGfCaMjmzjBCD0C7xLOcxQ4D24xrGlN5t7mWirOYxkwBJrBPfDbacy2gcvgFxgFf8KEz4F2cCckQeQ8DzLJJMHyoAo8JtZUSGIOM0fGzR+19YHDFA3ytAPcBL0UzfH37UyoXibYZ7BmzNsAH8EZel4zhWWRq+AuM9Zv4tkNjpNMnQAl8IZCeW6gwCiWffPXed0ugFeyMS18nLt5GXJWQ/RKbAS8Z3g9eiAh7qF4F6/Smm+NJa6xA3xT9Fru6ZMQ0TzP1KFANWTclO9YguwptVzF+zbP6uNELOqFJI82z7fZIFukVjFD4emYBccSXJ2dxv9zEeNEa6/ihO8N3tcO5onDxKpGjP0hmuJxq0U5DLJ9YJAZX2WhiDIJdUuGb5l6StFBFhTt6WjUi4Emz7OZBjw9Zog+5r1ObIreZi1Fc8aZ2orK3LpipWpNkUy6ZJYs54rWgmJC7E4Z7nKKOaI15zLcB8Bri8mSIDOs00uWwqekxit2GG0s8DbCcfc1yAqs1V9cvraaWeQ/WZyx3qxnITzASM3olmSSjVrSVuc0uE5sWqFuav3thSR0D8Altiv/2raCi+ChLjBmB1Jjh9gP3vIIwmwL29wy/8b15FfYCJSSNHvSjaz+r2bP9Q0ULz+ATvZIlRTXxTzTa3zz3TdFg4S1uLwzl9kjtfMYli0a+rPgpFFON9J8whxlu1JjwZhlJ2F+whTYa/Xwmknv9jztJ0zQR1uRIcwbtXqFd7nCYpToo21TgAEAWy6shL93DD4AAAAASUVORK5CYII="> -->
                    <i class="iconfont icon-question"></i>
                  </a>
                </div>
                <div class="options-group">
                  <div class="ui-flex align-center justify-start">
                    <div class="option-item border-1px w49">
                      <p>意外保障服务  179元</p>
                    </div>
                  </div>
                  <div class="options-agree">
                    <div class="choose">
                      <i class="iconfont icon-round"></i>
                    </div>
                    <span>我已阅读</span>
                    <a href="https://order.mi.com/static/jrUrl?url=https%3A%2F%2Fapi.jr.mi.com%2Finsurance%2Fdocument%2Fphone_accidentIns.html%3Ffrom%3Dins_phonedetail_bxtk%26insuranceSku%3D19411%26couponFrom%3Drule" class="org">服务条款 | </a>
                    <a href="https://order.mi.com/static/jrUrl?url=https%3A%2F%2Fapi.jr.mi.com%2Finsurance%2Fdocument%2Fphone_accidentIns.html%3Ffrom%3Dins_phonedetail_cjwt%26insuranceSku%3D19411%26couponFrom%3Dquestion" class="org">常见问题</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-bottom">
            <div class="action-box flex">
              <a data-log_code="" class="btn buy-btn">加入购物车</a>
            </div>
          </div>
        </div>
        <footer>
          <div class="fill-height layout align-center">
            <a class="footer-btn router-link-active">
              <i class="iconfont icon-home"></i>
              <span>首页</span>
            </a>
            <a class="footer-btn">
              <i class="iconfont icon-cart"></i>
              <span>购物车</span>
            </a>
            <div class="action-box flex">
              <a class="btn buy-btn">加入购物车</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script src="./MiDetail.js"></script>

<style scoped src="./MiDetail.css"></style>

<style>
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 5px;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
</style>
