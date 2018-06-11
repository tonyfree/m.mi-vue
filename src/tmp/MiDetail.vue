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
            <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
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
            <div data-v-39b0ff85="" class="comment-box">
              <div data-v-39b0ff85="" class="item">
                <div data-v-39b0ff85="" class="comment-header layout align-center">
                  <div data-v-39b0ff85="" class="avatar-img-box">
                    <img data-v-39b0ff85="" src="//s1.mi-img.com/mfsv2/avatar/fdsc3/p017UcFwpbQW/GJilSq8FbRrOUx_90.jpg">
                  </div>
                  <div data-v-39b0ff85="" class="user-info flex">
                    <p data-v-39b0ff85="" class="name">黄之南</p>
                    <p data-v-39b0ff85="" class="comment-date">2018-06-04</p>
                  </div>
                  <div data-v-39b0ff85="" class="like">
                    <span data-v-39b0ff85="">超爱</span>
                  </div>
                </div>
                <div data-v-39b0ff85="" class="comment-content">
                  <div data-v-39b0ff85="" class="text">恰好今天毕业了，用中午刚到的小米6x拍了几张毕业留恋照。没几天就要高考了，希望能给我带来好运。。。</div>
                  <div data-v-39b0ff85="" class="photos p6">
                    <img data-v-39b0ff85="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/b115797abcb3ef5199a53b51c7743014.webp" lazy="loaded">
                    <img data-v-39b0ff85="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/0bc7aaa403cca148faff52adc7ea912e.webp" lazy="loaded">
                    <img data-v-39b0ff85="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/8e4669e01f931a74fa698b13d1460c3a.webp" lazy="loaded">
                    <img data-v-39b0ff85="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c180c65344d83f5cf905d5c9624306be.webp" lazy="loaded">
                    <img data-v-39b0ff85="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/68adc354dd5ce45b8c0fceb030d75dd7.webp" lazy="loaded">
                    <img data-v-39b0ff85="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/5450e974962d0145552db5e25de628be.webp" lazy="loaded">
                  </div>
                </div>
                <div data-v-39b0ff85="" class="comment-reply">
                  <div data-v-39b0ff85="" class="comment-replay-item official">
                    <div data-v-39b0ff85="" class="text">
                      <div data-v-39b0ff85="" class="avatar"></div>
                      <span data-v-39b0ff85="">官方回复：</span>
                      又到六月高考日，梓梓学子挥汗如雨。从来是天道酬勤，一笔在手，淋漓大气生。今看你，论文韬武略，古今经典；家谋国计，上品斯文。一气呵成，行云流水，锦绣华章不染尘。还须问？上战场夺魁居榜首，临考场横扫千军！祝愿高考旗开得胜，前程似锦。感谢您对小米的支持。
                    </div>
                  </div>
                  <div data-v-39b0ff85="" class="comment-replay-item">
                    <div data-v-39b0ff85="" class="text">
                      <div data-v-39b0ff85="" class="avatar">
                        <img data-v-39b0ff85="" src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/f790b51a76afd7b41522048fa779d69d.jpg">
                      </div>
                      <span data-v-39b0ff85="">相信lie：</span>
                      是全网通嘛
                    </div>
                  </div>
                  <div data-v-39b0ff85="" class="comment-replay-item">
                    <div data-v-39b0ff85="" class="text">
                      <div data-v-39b0ff85="" class="avatar">
                        <img data-v-39b0ff85="" src="https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01UFdS2LciC/7HzZGBbR3CXp0f.jpg">
                      </div>
                      <span data-v-39b0ff85="">咖啡少年不加糖：</span>
                      哪里的考生
                    </div>
                  </div>
                  <div data-v-39b0ff85="" class="comment-replay-item">
                    <div data-v-39b0ff85="" class="text">
                      <div data-v-39b0ff85="" class="avatar">
                        <img data-v-39b0ff85="" src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c52c11c915d43e0ac3286161eec4fcaf.jpg">
                      </div>
                      <span data-v-39b0ff85="">涂山月初：</span>
                      待电怎么样，还有充电速度怎么样
                    </div>
                  </div>
                  <div data-v-39b0ff85="" class="more border-top-1px">查看全部8条评论</div>
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
                <section style="">
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/171cd5f240fcf62bc93d1c520e050dab.jpg?w=1080&amp;h=1474" lazy="loaded">
                  </div>
                </section>
                <section style="">
                  <div class="desc-img-box">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3f7eecf3f77f28cd71669913b005e412.jpg?w=1080&amp;h=1382" lazy="loaded">
                  </div>
                </section>
                <section style="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/020b8b5a0c9c923babed2628e32f0615.jpg?w=1080&amp;h=1475" lazy="loaded">
                  </div>
                </section>
                <section data-v-7ab76df1="" style="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ca626a8f020ce91d912ff8d169d2ba88.jpg?w=1080&amp;h=960" lazy="loaded">
                  </div>
                </section>
                <section data-v-7ab76df1="" style="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aa27c0965135cde1d9f94e3609c9b241.jpg?w=1080&amp;h=774" lazy="loaded">
                  </div>
                </section>
                <section data-v-7ab76df1="" style="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2dd9770847f0335513460853aa4b60ca.jpg?w=1080&amp;h=1716" lazy="loaded">
                  </div>
                </section>
                <section data-v-7ab76df1="" style="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8630b7ae21209ed7469be6de4ddb2a1.jpg?w=1080&amp;h=877" lazy="loaded">
                  </div>
                </section>
                <section data-v-7ab76df1="" style="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f4555a1c851b8d88b87cbe6988f25670.jpg?w=1080&amp;h=1664" lazy="loaded">
                  </div>
                </section>
                <section data-v-7ab76df1="" style="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/048e8b533d1a7a5affe82720f1cfba71.jpg?w=1080&amp;h=1977" lazy="loaded">
                  </div>
                </section>
                <section data-v-7ab76df1="" style="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ed24a95fcbc201d27e859c48529a6d8e.jpg?w=1080&amp;h=833" lazy="loaded">
                  </div>
                </section>
                <section data-v-7ab76df1="" style="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
              </div>
              <div data-v-7ab76df1="" class="tab-item" style="display: none;">
                <section data-v-7ab76df1="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/109a72cb245d3079e5040d19597859db.jpg?w=1080&amp;h=1448" lazy="loaded">
                  </div>
                </section>
                <section data-v-7ab76df1="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ad74cfd378579c5caed16a54479e2b84.jpg?w=1080&amp;h=2092" lazy="loaded">
                  </div>
                </section>
                <section data-v-7ab76df1="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26e9a5f6a7f0d7be40164bb046d968c1.jpg?w=1080&amp;h=1800" lazy="loaded">
                  </div>
                </section>
                <section data-v-7ab76df1="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5f6882f7c40723bb3a6c52fdf4b8dd4c.jpg?w=1080&amp;h=1630" lazy="loaded">
                  </div>
                </section>
                <section data-v-7ab76df1="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8645c26384b93c1d982b1b0e5bcb4b14.jpg?w=1080&amp;h=2668" lazy="loaded">
                  </div>
                </section>
                <section data-v-7ab76df1="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <section data-v-7ab76df1="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <section data-v-7ab76df1="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <section data-v-7ab76df1="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
                <section data-v-7ab76df1="">
                  <div data-v-7ab76df1="" class="desc-img-box">
                    <img data-v-7ab76df1="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div data-v-c1eaedb8="" data-v-7ab76df1="" class="recommend-box space-top">
            <div data-v-c1eaedb8="" class="recommend-title">为你推荐</div>
            <div data-v-c1eaedb8="" class="recommend-list layout row wrap align-center align-content-start justify-space-between J_linksign-customize">
              <div data-v-c1eaedb8="" class="goods-item">
                <a data-v-c1eaedb8="" data-log_code="recom_product_12-0#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=6259" class="exposure">
                  <div data-v-c1eaedb8="" class="goods-img-box">
                    <img data-v-c1eaedb8="" class="lazy" src="//i8.mifile.cn/v1/a1/f0ea0c6b-96b5-c85b-d2b4-e4aeaabea277!360x360.webp" lazy="loaded">
                  </div>
                  <div data-v-c1eaedb8="" class="goods-info">
                    <div data-v-c1eaedb8="" class="goods-name no-wrap">小米5X 64GB</div>
                    <div data-v-c1eaedb8="" class="goods-price price">1499</div>
                  </div>
                </a>
              </div>
              <div data-v-c1eaedb8="" class="goods-item">
                <a data-v-c1eaedb8="" data-log_code="recom_product_12-1#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=8030" class="exposure">
                  <div data-v-c1eaedb8="" class="goods-img-box">
                    <img data-v-c1eaedb8="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8612f157af2c116b7e3fc47356cdb7be.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div data-v-c1eaedb8="" class="goods-info">
                    <div data-v-c1eaedb8="" class="goods-name no-wrap">红米S2 4GB+64GB</div>
                    <div data-v-c1eaedb8="" class="goods-price price">1299</div>
                  </div>
                </a>
              </div>
              <div data-v-c1eaedb8="" class="goods-item">
                <a data-v-c1eaedb8="" data-log_code="recom_product_12-2#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=7768" class="exposure">
                  <div data-v-c1eaedb8="" class="goods-img-box">
                    <img data-v-c1eaedb8="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/850d316b25648c9862c7c22aefba9280.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div data-v-c1eaedb8="" class="goods-info">
                    <div data-v-c1eaedb8="" class="goods-name no-wrap">红米Note 5</div>
                    <div data-v-c1eaedb8="" class="goods-price price">1399<!----></div>
                  </div>
                </a>
              </div>
              <div data-v-c1eaedb8="" class="goods-item">
                <a data-v-c1eaedb8="" data-log_code="recom_product_12-3#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=6701" class="exposure">
                  <div data-v-c1eaedb8="" class="goods-img-box">
                    <img data-v-c1eaedb8="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d68da7f79cc9800a34b1b48e1a439e44.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div data-v-c1eaedb8="" class="goods-info">
                    <div data-v-c1eaedb8="" class="goods-name no-wrap">小米MIX 2 </div>
                    <div data-v-c1eaedb8="" class="goods-price price">
                      2599
                      <del data-v-c1eaedb8="" class="price">3299</del>
                    </div>
                  </div>
                </a>
              </div>
              <div data-v-c1eaedb8="" class="goods-item">
                <a data-v-c1eaedb8="" data-log_code="recom_product_12-4#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=7909" class="exposure">
                  <div data-v-c1eaedb8="" class="goods-img-box">
                    <img data-v-c1eaedb8="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e54e6d531611a372e1509c1f1e85c9b3.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div data-v-c1eaedb8="" class="goods-info">
                    <div data-v-c1eaedb8="" class="goods-name no-wrap">小米6X 标准高透贴膜</div>
                    <div data-v-c1eaedb8="" class="goods-price price">19<!----></div>
                  </div>
                </a>
              </div>
              <div data-v-c1eaedb8="" class="goods-item">
                <a data-v-c1eaedb8="" data-log_code="recom_product_12-5#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=7910" class="exposure">
                  <div data-v-c1eaedb8="" class="goods-img-box">
                    <img data-v-c1eaedb8="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6156db2b5b3b270e87e8bcbe140cabc2.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div data-v-c1eaedb8="" class="goods-info">
                    <div data-v-c1eaedb8="" class="goods-name no-wrap">小米6X保护壳</div>
                    <div data-v-c1eaedb8="" class="goods-price price">29<!----></div>
                  </div>
                </a>
              </div>
              <div data-v-c1eaedb8="" class="goods-item">
                <a data-v-c1eaedb8="" data-log_code="recom_product_12-6#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=4917" class="exposure">
                  <div data-v-c1eaedb8="" class="goods-img-box">
                    <img data-v-c1eaedb8="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/570c5d0701fd7a4a56688654ad4f1133.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div data-v-c1eaedb8="" class="goods-info">
                    <div data-v-c1eaedb8="" class="goods-name no-wrap">最生活毛巾</div>
                    <div data-v-c1eaedb8="" class="goods-price price">19.9<!----></div>
                  </div>
                </a>
              </div>
              <div data-v-c1eaedb8="" class="goods-item">
                <a data-v-c1eaedb8="" data-log_code="recom_product_12-7#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=5059" class="exposure">
                  <div data-v-c1eaedb8="" class="goods-img-box">
                    <img data-v-c1eaedb8="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/359594c6feed269a51eec5d0e59e42b1.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div data-v-c1eaedb8="" class="goods-info">
                    <div data-v-c1eaedb8="" class="goods-name no-wrap">活塞耳机 </div>
                    <div data-v-c1eaedb8="" class="goods-price price">29<!----></div>
                  </div>
                </a>
              </div>
              <div data-v-c1eaedb8="" class="goods-item">
                <a data-v-c1eaedb8="" data-log_code="recom_product_12-8#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=7244" class="exposure">
                  <div data-v-c1eaedb8="" class="goods-img-box">
                    <img data-v-c1eaedb8="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/806866db7cfac7efdb561e9d796b4a33.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div data-v-c1eaedb8="" class="goods-info">
                    <div data-v-c1eaedb8="" class="goods-name no-wrap">米兔指尖积木</div>
                    <div data-v-c1eaedb8="" class="goods-price price">9.9<!----></div>
                  </div>
                </a>
              </div>
              <div data-v-c1eaedb8="" class="goods-item">
                <a data-v-c1eaedb8="" data-log_code="recom_product_12-9#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=7092" class="exposure">
                  <div data-v-c1eaedb8="" class="goods-img-box">
                    <img data-v-c1eaedb8="" class="lazy" src="//i8.mifile.cn/v1/a1/2f258afa-bf3c-e02f-54ce-e490a922ffae!360x360.webp" lazy="loaded">
                  </div>
                  <div data-v-c1eaedb8="" class="goods-info">
                    <div data-v-c1eaedb8="" class="goods-name no-wrap">USB充电器</div>
                    <div data-v-c1eaedb8="" class="goods-price price">29.9<!----></div>
                  </div>
                </a>
              </div>
              <div data-v-c1eaedb8="" class="goods-item">
                <a data-v-c1eaedb8="" data-log_code="recom_product_12-10#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=6825" class="exposure">
                  <div data-v-c1eaedb8="" class="goods-img-box">
                    <img data-v-c1eaedb8="" class="lazy" src="//i8.mifile.cn/v1/a1/b9964239-82d5-7564-7a73-a117008157fb!360x360.webp" lazy="loaded">
                  </div>
                  <div data-v-c1eaedb8="" class="goods-info">
                    <div data-v-c1eaedb8="" class="goods-name no-wrap">Type C数据线</div>
                    <div data-v-c1eaedb8="" class="goods-price price">16.9<!----></div>
                  </div>
                </a>
              </div>
              <div data-v-c1eaedb8="" class="goods-item">
                <a data-v-c1eaedb8="" data-log_code="recom_product_12-11#eid=24:0:0:0:0:0:0:0:0:0&amp;tid=DetailRec-78cpaAwFqwUTL0eVFuqCzg==&amp;page=product&amp;pid=7463" class="exposure">
                  <div data-v-c1eaedb8="" class="goods-img-box">
                    <img data-v-c1eaedb8="" class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d75a2f3b510b1f003f9eef17e757fc7f.jpg?thumb=1&amp;w=360&amp;h=360" lazy="loaded">
                  </div>
                  <div data-v-c1eaedb8="" class="goods-info">
                    <div data-v-c1eaedb8="" class="goods-name no-wrap">新小米移动电源2 (10000mAh)</div>
                    <div data-v-c1eaedb8="" class="goods-price price">79<!----></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 52px;
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
.iconfont {
  font-size: 20px;
  line-height: 32px;
}
header .placeholder {
  flex: 1;
}
</style>
