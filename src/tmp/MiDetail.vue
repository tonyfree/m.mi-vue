<template>
  <div class="app-shell">
    <div class="app-view-wrapper">
      <div class="app-view">
        <div class="container fluid">
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
          <div class="swiper-container gallery-view swiper-container-horizontal">
            <div class="swiper-wrapper">
              <div class="swiper-slide h792 swiper-slide-active" style="width: 375px;">
                <img class="img swiper-lazy swiper-lazy-loaded" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a4842f9afc615164af83c2088a412fc0.jpg?thumb=1&amp;w=720&amp;h=792">
              </div>
              <div class="swiper-slide h792 swiper-slide-next" style="width: 375px;">
                <img class="img swiper-lazy swiper-lazy-loaded" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bef0f60896e9adcc9251fe9940bf8317.jpg?thumb=1&amp;w=720&amp;h=792">
              </div>
              <div class="swiper-slide h792" style="width: 375px;">
                <img class="img swiper-lazy swiper-lazy-loaded" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/640cd4de9154ab608110093bfa257b59.jpg?thumb=1&amp;w=720&amp;h=792">
              </div>
              <div class="swiper-slide h792" style="width: 375px;">
                <img class="img swiper-lazy swiper-lazy-loaded" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/785d1bc33ef9af9123f81a5572d13d87.jpg?thumb=1&amp;w=720&amp;h=792">
              </div>
              <div class="swiper-slide h792" style="width: 375px;">
                <img class="img swiper-lazy swiper-lazy-loaded" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/991e5b368684c9b974e1c9e9ea48de41.jpg?thumb=1&amp;w=720&amp;h=792">
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-white swiper-pagination-bullets">
              <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
            </div>
          </div>
          <div class="overview">
            <div class="goods-name ui-flex align-center justify-start">小米6X</div>
            <div class="goods-brief">
              <font color="#ff4a00">「4GB+32GB立减100元」「4GB+64GB赠价值49元移动电源」</font>
              前置2000万“治愈系”自拍 / 后置2000万 AI双摄 / “杨柳腰”纤薄机身 / 标配骁龙660 AIE处理器
            </div>
            <div class="goods-price layout align-end justify-start">
              <div class="price cur-price">1599</div>
              <div class="price origin-price">1499</div>
            </div>
          </div>
          <div class="product-section more">
            <div class="border-top-1px ui-flex align-start justify-start J_linksign-customize">
              <div class="title">促销</div>
              <div class="flex pt1-2x">
                <div class="ui-flex align-center justify-start act-icon mb2x">
                  <div class="icon-desc border-1px">赠品</div>
                  <div class="icon-title">赠移动电源</div>
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
              <div class="comment-count">用户评价(8825)</div>
              <div class="comment-degree">
                96.6%
                <span>满意</span>
              </div>
            </a>
            <div class="comment-box">
              <div class="item">
                <div class="comment-header layout align-center">
                  <div class="avatar-img-box">
                    <img src="//s1.mi-img.com/mfsv2/avatar/fdsc3/p017UcFwpbQW/GJilSq8FbRrOUx_90.jpg">
                  </div>
                  <div class="user-info flex">
                    <p class="name">黄之南</p>
                    <p class="comment-date">2018-06-04</p>
                  </div>
                  <div class="like">
                    <span>超爱</span>
                  </div>
                </div>
                <div class="comment-content">
                  <div class="text">恰好今天毕业了，用中午刚到的小米6x拍了几张毕业留恋照。没几天就要高考了，希望能给我带来好运。。。</div>
                  <div class="photos p6">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b115797abcb3ef5199a53b51c7743014.webp" lazy="loaded">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/0bc7aaa403cca148faff52adc7ea912e.webp" lazy="loaded">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/8e4669e01f931a74fa698b13d1460c3a.webp" lazy="loaded">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c180c65344d83f5cf905d5c9624306be.webp" lazy="loaded">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/68adc354dd5ce45b8c0fceb030d75dd7.webp" lazy="loaded">
                    <img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/5450e974962d0145552db5e25de628be.webp" lazy="loaded">
                  </div>
                </div>
                <div class="comment-reply">
                  <div class="comment-replay-item official">
                    <div class="text">
                      <div class="avatar"></div>
                      <span>官方回复：</span>
                      又到六月高考日，梓梓学子挥汗如雨。从来是天道酬勤，一笔在手，淋漓大气生。今看你，论文韬武略，古今经典；家谋国计，上品斯文。一气呵成，行云流水，锦绣华章不染尘。还须问？上战场夺魁居榜首，临考场横扫千军！祝愿高考旗开得胜，前程似锦。感谢您对小米的支持。
                    </div>
                  </div>
                  <div class="comment-replay-item">
                    <div class="text">
                      <div class="avatar">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/f790b51a76afd7b41522048fa779d69d.jpg">
                      </div>
                      <span>相信lie：</span>
                      是全网通嘛
                    </div>
                  </div>
                  <div class="comment-replay-item">
                    <div class="text">
                      <div class="avatar">
                        <img src="https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01UFdS2LciC/7HzZGBbR3CXp0f.jpg">
                      </div>
                      <span>咖啡少年不加糖：</span>
                      哪里的考生
                    </div>
                  </div>
                  <div class="comment-replay-item">
                    <div class="text">
                      <div class="avatar">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c52c11c915d43e0ac3286161eec4fcaf.jpg">
                      </div>
                      <span>涂山月初：</span>
                      待电怎么样，还有充电速度怎么样
                    </div>
                  </div>
                  <!-- <div class="more border-top-1px">查看全部8条评论</div> -->
                </div>
              </div>
            </div>
          </div>
          <div class="description-view space-top">
            <div class="tab-header">
              <div class="tab-header-inner border-bottom-1px box-flex align-center">
                <a class="flex on">概述</a>
                <a class="flex">参数</a>
              </div>
            </div>
            <div class="tab-view">
              <div class="tab-item" style="">
                <section>
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e996427a3e66b49399abcd4d0f03387b.jpg?w=1080&amp;h=1920" lazy="loaded">
                  </div>
                </section>
                <section>
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d5cf4d958e3ee021b68fc07c23550c62.jpg?w=1080&amp;h=855" lazy="loaded">
                  </div>
                </section>
                <section>
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8920ef08f50965a43b08dee549511a04.jpg?w=1080&amp;h=713" lazy="loaded">
                  </div>
                </section>
                <section style="display:none;">
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/171cd5f240fcf62bc93d1c520e050dab.jpg?w=1080&amp;h=1474" lazy="loaded">
                  </div>
                </section>
                <section style="display:none;">
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3f7eecf3f77f28cd71669913b005e412.jpg?w=1080&amp;h=1382" lazy="loaded">
                  </div>
                </section>
                <section style="display:none;">
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/020b8b5a0c9c923babed2628e32f0615.jpg?w=1080&amp;h=1475" lazy="loaded">
                  </div>
                </section>
                <section style="display:none;">
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ca626a8f020ce91d912ff8d169d2ba88.jpg?w=1080&amp;h=960" lazy="loaded">
                  </div>
                </section>
                <section style="display:none;">
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aa27c0965135cde1d9f94e3609c9b241.jpg?w=1080&amp;h=774" lazy="loaded">
                  </div>
                </section>
                <section style="display:none;">
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2dd9770847f0335513460853aa4b60ca.jpg?w=1080&amp;h=1716" lazy="loaded">
                  </div>
                </section>
                <section style="display:none;">
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8630b7ae21209ed7469be6de4ddb2a1.jpg?w=1080&amp;h=877" lazy="loaded">
                  </div>
                </section>
                <section style="display:none;">
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f4555a1c851b8d88b87cbe6988f25670.jpg?w=1080&amp;h=1664" lazy="loaded">
                  </div>
                </section>
                <section style="display:none;">
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/048e8b533d1a7a5affe82720f1cfba71.jpg?w=1080&amp;h=1977" lazy="loaded">
                  </div>
                </section>
                <section style="display:none;">
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ed24a95fcbc201d27e859c48529a6d8e.jpg?w=1080&amp;h=833" lazy="loaded">
                  </div>
                </section>
                <section style="display:none;">
                  <div class="desc-img-box">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <a class="show-all-desc">查看全部图文详情 &gt;</a>
              </div>
              <div class="tab-item" style="display: none;">
                <section>
                  <div class="desc-img-box">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <section>
                  <div class="desc-img-box">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <section>
                  <div class="desc-img-box">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <section>
                  <div class="desc-img-box">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <section>
                  <div class="desc-img-box">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <section>
                  <div class="desc-img-box">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <section>
                  <div class="desc-img-box">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <section>
                  <div class="desc-img-box">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <section>
                  <div class="desc-img-box">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <section>
                  <div class="desc-img-box">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
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
                  <span>手机意外摔落/进水/碾压等损坏</span>
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

    <!-- 地址选择 -->
    <!-- <div class="h1">
      <p>收货地址</p>
    </div>
    <div class="max5">
      <div class="border-bottom-1px address-item">
        <div class="address-item-line1 layout align-center justify-start">
          <i class="image-icons icon-location"></i>
          <div class="address-item-name">tony</div>
          <div class="address-item-province">北京</div>
        </div>
        <div class="address-item-line2">北京小胡同</div>
      </div>
    </div>
    <div class="btn-bottom">
      <div class="action-box flex">
        <a href="/address/position?from=product&amp;product_id=8274" class="btn buy-btn">选择新地址</a>
      </div>
    </div> -->

    
  </div>
</template>

<style scoped>
.app-view {
  padding-bottom: 52px;
}
.container {
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  /* padding-bottom: 52px; */
  background: #efefef;
  margin-right: auto;
  margin-left: auto;
  -webkit-flex-basis: 100%;
  flex-basis: 100%;
}
.container.fluid {
  max-width: 100%;
  width: 100%;
}
header {
  height: 50px;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.fill-height {
  height: 100%;
}
.layout {
  display: flex;
  flex-wrap: nowrap;
}
header .header-btn {
  display: block;
  width: 32px;
  height: 32px;
  margin: 0 10px;
  color: #ddd;
  background: rgba(0,0,0,.6);
  border-radius: 50%;
}
header .iconfont {
  font-size: 20px;
  line-height: 32px;
}
header .placeholder {
  flex: 1;
}
.container .gallery-view {
  background: #ccc;
  width: 100%;
  height: 412px;
  position: relative;
}
.container .gallery-view .img {
  display: block;
  width: 375px;
  height: 412px;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
}
.swiper-pagination {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 10;
}
.container .overview {
  background: #fff;
  text-align: left;
  padding: 10px 16px 0;
}
.container .overview .goods-name {
  font-size: 18px;
  line-height: 28px;
}
.container .overview .goods-brief {
  font-size: 14px;
  line-height: 18px;
  color: rgba(0,0,0,.54);
}
.container .overview .goods-price {
  padding: 10px 0;
}
.container .overview .goods-price .cur-price {
  color: #ff6700;
  font-size: 24px;
  font-weight: 700;
}
.container .overview .goods-price .origin-price {
  margin-left: 8px;
  color: rgba(0,0,0,.54);
  font-size: 12px;
  text-decoration: line-through;
}
.align-end {
  align-items: flex-end;
}
.container .product-section {
  position: relative;
  padding: 10px 16px 0;
  background: #fff;
  border-top: 1px;
  text-align: left;
}
.border-top-1px {
  position: relative;
}

.border-top-1px:before {
  height: 1px;
  content: "";
  width: 100%;
  border-top: 1px solid #999;
  position: absolute;
  border-color: #f4f4f4;
  top: -10px;
  right: 0;
  transform: scaleY(.5);
}
.container .product-section .title {
  width: 41px;
  font-size: 12px;
  color: rgba(0,0,0,.54);
  line-height: 20px;
}
.pt1-2x {
  padding-top: 2px;
}
.container .product-section .act-icon {
  position: relative;
  padding-right: 10%;
  white-space: nowrap;
}
.mb2x {
  margin-bottom: 4px;
}
.container .product-section .act-icon .icon-desc {
  color: #f56600;
  border-radius: 1px;
  padding: 1.5px 2.5px 0.5px;
  margin: 0 0 0.5px;
  font-size: 8px;
}
.container .product-section .act-icon .icon-desc:before {
  border-color: #f56600;
}
.border-1px {
  position: relative;
}
.border-1px:before {
  content: "";
  pointer-events: none;
  box-sizing: border-box;
  position: absolute;
  width: 200%;
  height: 200%;
  left: 0;
  top: 0;
  border-radius: 0;
  border: 1px solid #999;
  transform: scale(.5);
  transform-origin: 0 0;
}
.container .product-section .act-icon .icon-title {
  margin-left: 4.17px;
  font-size: 12px;
  line-height: 20px;
  color: rgba(0,0,0,.87);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.more:after {
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
.container .product-section.padding-16-32 {
  padding: 8px 16px;
}
.mt2x {
  margin-top: 4px;
}
.container .product-section .info {
  font-size: 12px;
  color: rgba(0,0,0,.87);
  line-height: 20px;
  padding-right: 10px;
}
.container .product-section .service-policy-item {
  font-size: 12px;
  line-height: 20px;
  margin-right: 10px;
  flex: 0 1 auto;
}
.container .product-section .img-icon {
  height: 10px;
  width: auto;
}
.mr1x {
  margin-right: 4px;
}
.container .product-section .fsc1 {
  font-size: 10px;
  color: rgba(0,0,0,.54);
}
.container .comment-view {
  text-align: left;
  background: #fff;
}
.space-top {
  margin-top: 8px;
}
.container .comment-view .comment-info {
  padding: 16px 0;
  margin: 0 16px;
  font-size: 12px;
}
.border-bottom-1px {
  position: relative;
}
.container .comment-view .border-bottom-1px:before {
  border-color: #f4f4f4;
}
.border-bottom-1px:before {
  height: 1px;
  content: "";
  width: 100%;
  border-top: 1px solid #999;
  position: absolute;
  top: 100%;
  right: 0;
  transform: scaleY(.5);
  -webkit-transform: scaleY(.5);
}
.container .comment-view .comment-count,
.container .comment-view .comment-degree span {
  color: rgba(0,0,0,.54);
}
.container .comment-view .comment-degree {
  color: #ff6700;
  text-align: right;
}
.entry-more {
  position: relative;
  padding-right: 20px!important;
}
.entry-more:after {
  content: " ";
  width: 7px;
  height: 7px;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -3.5px;
  transform: rotate(45deg);
}
.box-flex>*, .box-inline-flex>* {
  flex: 1 1 auto;
}

.comment-box {
  background: #fff;
  text-align: left;
}
.comment-box .item {
    padding: 12px 16px 16px;
}
.comment-box .item .comment-header .avatar-img-box {
  margin-right: 12px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 100%;
}
.comment-box .item .comment-header .avatar-img-box img {
  width: 100%;
}
.comment-box .item .comment-header .name {
  font-size: 13px;
}
.comment-box .item .comment-header .comment-date {
  margin-top: 2.5px;
  color: rgba(0,0,0,.54);
  font-size: 11px;
}
.comment-box .item .comment-header .like {
  padding-left: 25px;
  background: transparent url(../assets/images/comment-like.png) no-repeat 0;
  background-size: auto 100%;
  width: 25px;
  height: 18px;
  line-height: 18px;
  color: #ff6700;
  font-size: 11px;
}
.comment-box .item .comment-content .text {
  padding: 16px 0;
  line-height: 20px;
  font-size: 13px;
}
.comment-box .item .comment-content .photos {
  margin-bottom: 6px;
}
.comment-box .item .comment-content .photos img {
  width: 83px;
  height: 83px;
  margin: 0 4px 4px 0;
}
.comment-box .item .comment-reply {
  padding: 8px;
  background: #f6f6f6;
}
.comment-box .item .comment-reply .comment-replay-item {
  overflow: hidden;
  padding: 2.5px 0;
}
.comment-box .item .comment-reply .comment-replay-item .text {
  font-size: 11px;
  line-height: 22px;
}
.comment-box .item .comment-reply .comment-replay-item.official .avatar {
  background: transparent url(../assets/images/milogo.png) no-repeat 50%;
  background-size: cover;
}
.comment-box .item .comment-reply .comment-replay-item .avatar {
  float: left;
  width: 16px;
  height: 16px;
  overflow: hidden;
  border-radius: 100%;
  margin-right: 10px;
}
.comment-box .item .comment-reply .comment-replay-item.official span {
  color: #ff6700;
}

.container .description-view .tab-header {
  height: 44px;
}
.container .description-view .tab-header-inner {
  height: 44px;
  background: #fff;
  will-change: scroll-position;
}
.container .description-view .tab-header-inner .flex.on {
  color: #ff6700;
}
.container .description-view .tab-header-inner .flex {
  display: block;
  font-size: 13px;
  width: 100%;
  border-right: 1px solid #f4f4f4;
}
.container .description-view .tab-view {
  background: #fff;
}
.container .description-view .tab-view section {
  overflow: hidden;
}
.container .description-view .tab-view img {
  display: block;
  width: 100%;
  vertical-align: middle;
}
.container .description-view .show-all-desc {
  display: block;
  background: #fff;
  line-height: 44px;
  font-size: 13px;
  color: #ff6700;
}

.recommend-box {
  background: #fff;
  text-align: left;
}
.recommend-box .recommend-title {
  line-height: 40px;
  padding: 0 16px;
  font-size: 15px;
}
.recommend-box .recommend-list {
  overflow: hidden;
}
.layout.row {
  flex-direction: row;
}
.align-content-start {
  align-content: flex-start;
}
.layout.wrap {
  flex-wrap: wrap;
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
  width: 185px;
  height: 185px;
}
.recommend-box .recommend-list .goods-info {
  padding: 9px 13px 11px;
}
.recommend-box .recommend-list .goods-name {
  font-size: 14px;
}
.recommend-box .recommend-list .goods-price {
  font-size: 16px;
  display: inline-block;
  color: #ff6700;
  margin-top: 5px;
}
.price {
  position: relative;
  padding-left: 10px;
  line-height: 16px;
}
.price:before {
  content: "\A5";
  position: absolute;
  left: 0;
  top: 0;
  font-size: 16px;
  text-decoration: none;
}
.recommend-box .recommend-list .goods-price del {
  font-size: 11px;
  margin-left: 5px;
  color: rgba(0,0,0,.54);
  text-decoration: line-through;
}
footer {
  height: 52px;
  background: #fff;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
footer .footer-btn {
  display: block;
  text-decoration: none;
  width: 72px;
  color: rgba(0,0,0,.54);
  border-left: 1px solid #f4f4f4;
  display: flex;
  flex-direction: column;
}
footer .footer-btn:first-child {
  border-left: none;
}
footer .iconfont {
  font-size: 20px;
}
footer .footer-btn span {
  font-size: 11px;
}
footer .action-box .buy-btn {
  height: 52px;
  line-height: 52px;
}
.btn {
  display: block;
  outline: 0;
  background: #ff6700;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 52px;
  line-height: 52px;
  font-size: 14px;
}

.ui-mask {
  background-color: rgba(0,0,0,.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
}

.pop {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* width: 375px; */
  background-color: #fff;
  color: #000;
  padding: 16px 16px 66px;
  z-index: 110;
  min-height: 250px;
  max-height: 480px;
  text-align: left;
}
.pop .close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 26px;
  height: 26px;
}
.pop .close .icon-close {
  /* width: 20px;
  height: 20px;
  background-image: url(../assets/images/icon-close.png); */
  font-size: 20px;
  line-height: 20px;
  color: #bababa;
}
/* .image-icons {
  display: inline-block;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
} */
.pop .pro-info {
  min-height: 75px;
}
.pop .pro-info .product-img {
  position: relative;
  width: 104px;
  height: 104px;
  text-align: center;
  background: #fff;
}
.pop .pro-info .product-img img {
  height: 100%;
  width: auto;
  margin: 0 auto;
}
.layout.column {
  flex-direction: column;
}
.pop .pro-info .product-desc {
  position: relative;
  width: 225px;
  margin: 16px 8px;
  text-align: left;
}
.pop .pro-info .product-desc .price {
  display: inline;
  color: #ff6700;
  font-size: 24px;
  line-height: 19px;
}
.pop .pro-info .product-desc .name {
  font-size: 14px;
  color: rgba(0,0,0,.87);
  line-height: 20px;
}
.pop .option-title {
  position: relative;
  padding-bottom: 8px;
  line-height: 12px;
  font-size: 12px;
  color: rgba(0,0,0,.87);
}
.pop .option-title span {
  color: rgba(0,0,0,.54);
  margin-left: .5em;
  vertical-align: middle;
}
.max5 {
  max-height: 300px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.pt32 {
  padding-top: 16px;
}
.pop .options-group {
  padding-bottom: 16px;
}
.pop .option-item.line {
  width: 100%;
  padding: 12px 16px !important;
}
.pop .option-item.on {
  color: #f56600;
}
.pop .option-item {
  height: 36px;
  line-height: 36px;
  min-width: 72px;
  box-sizing: border-box;
  padding: 0 4px;
  text-align: center;
  margin: 8px 0 0 8px;
  overflow: visible;
  font-size: 12px;
}
.pop .option-item:before {
  content: '';
  border-color: rgba(0,0,0,.15);
  border-radius: 2px;
}
.pop .option-item.on:before {
  border-color: #f56600;
}
.sdk_color .option-item p {
  width: 100%;
}
.pop .pd32 {
  padding: 16px 0;
}
.pop .xm-input-number {
  display: inline-block;
  border: 1px solid #eee;
}
/* .pop .xm-input-number .icon-line {
  background-image: url(../assets/images/icon-line.png);
} */
/* .pop .xm-input-number .icon-cross {
  background-image: url(../assets/images/icon-cross.png);
} */
/* .pop .xm-input-number .image-icons {
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
.pop .xm-input-number .input-num {
  display: inline-block;
  vertical-align: middle;
  min-width: 30px;
  padding: 0 6px;
  text-align: center;
  font-size: 16px;
}
.pop .xm-input-number .input-add, .pop .xm-input-number .input-sub {
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  vertical-align: middle;
  background-color: #fafafa;
  text-align: center;
}
.pop .xm-input-number .input-add.active, .pop .xm-input-number .input-sub.active {
  background-color: #ddd;
}
.pop .service-url {
  display: inline-block;
  width: 14px;
  height: 14px;
  /* margin-left: 5px; */
  vertical-align: middle;
}
/* .pop .service-url img {
  width: 100%;
  height: auto;
} */
.pop .service-url i {
  font-size: 16px;
  left: 14px;
  color: #999;
}
.pop .options-group {
  padding-bottom: 16px;
}
.w49 {
  width: 49%;
}
.pop .options-agree {
  margin-top: 8px;
  line-height: 20px;
  text-align: left;
  font-size: 12px;
}
.pop .choose {
  display: inline-block;
  /* width: 30px; */
  padding: 0 4px 0 8px;
  height: 20px;
  position: relative;
  top: 3px;
}
.pop .choose i {
  font-size: 24px;
  line-height: 20px;
  color: #ddd;
}
/* .pop .choose.unchecked {
  background: url(../assets/images/check_normal.png) 50% 50% no-repeat;
  background-size: 20px 20px;
} */
.pop .options-agree .org {
  color: #f56600;
}
.pop .btn-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.border-top-1px {
  position: relative;
}
.border-top-1px:before {
  height: 1px;
  content: "";
  width: 100%;
  border-top: 1px solid #f4f4f4;
  position: absolute;
  top: -8px;
  right: 0;
  transform: scaleY(.5);
  -webkit-transform: scaleY(.5);
}
</style>
