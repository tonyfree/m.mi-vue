<template>
  <div class="app-shell">
    <div class="app-view-wrapper">
      <div class="app-view app-view-with-header app-view-with-footer">
        <ol>
          <li class="item ui-flex align-center">
            <a class="item-img exposure">
              <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cbbf4728cf72469446dd98a51c564537.jpg" lazy="loaded">
              <span>
                <img src="//i8.mifile.cn/v1/a1/289039eb-c3ed-7c26-69c3-5b07b72a797d.webp?w=120&amp;h=48">
              </span>
            </a>
            <div class="item-intro box-flex flex">
              <div class="item-name flex">
                <p>小米8 6GB+64GB</p>
              </div>
              <div class="item-brief flex">
                <p>
                  <font color="#ff4a00">「新品开售」</font>全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏 / AI语音助手 / 多功能NFC
                </p>
              </div>
              <div class="item-intro-price flex">
                <span class="price">&nbsp;2699</span>
              </div>
            </div>
          </li>
          <li class="item ui-flex align-center">
            <a class="item-img exposure">
              <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cbbf4728cf72469446dd98a51c564537.jpg" lazy="loaded">
              <span>
                <img src="//i8.mifile.cn/v1/a1/289039eb-c3ed-7c26-69c3-5b07b72a797d.webp?w=120&amp;h=48">
              </span>
            </a>
            <div class="item-intro box-flex flex">
              <div class="item-name flex">
                <p>小米8 6GB+128GB</p>
              </div>
              <div class="item-brief flex">
                <p>
                  <font color="#ff4a00">「新品开售」</font>全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏 / AI语音助手 / 多功能NFC
                </p>
              </div>
              <div class="item-intro-price flex">
                <span class="price">&nbsp;2999</span>
              </div>
            </div>
          </li>
          <li class="item ui-flex align-center">
            <a class="item-img exposure">
              <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cbbf4728cf72469446dd98a51c564537.jpg" lazy="loaded">
              <span>
                <img src="//i8.mifile.cn/v1/a1/289039eb-c3ed-7c26-69c3-5b07b72a797d.webp?w=120&amp;h=48">
              </span>
            </a>
            <div class="item-intro box-flex flex">
              <div class="item-name flex">
                <p>小米8 6GB+256GB</p>
              </div>
              <div class="item-brief flex">
                <p>
                  <font color="#ff4a00">「新品开售」</font>全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏 / AI语音助手 / 多功能NFC
                </p>
              </div>
              <div class="item-intro-price flex">
                <span class="price">&nbsp;3299</span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>      
</template>

<style scoped>
.item:not(:last-child) {
  padding: 0 0 3px;
  position: relative;
}
.item:not(:last-child):after {
  content: "";
  position: absolute;
  bottom: 1px;
  left: 160px;
  right: 0;
  border-bottom: 1px solid #e4e4e4;
}
.item-img {
  position: relative;
  width: 156px;
  height: 156px;
  text-align: center;
  display: block;
}
.item-img img {
  width: auto;
  height: 100%;
}
.item-img span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 78px;
}
.item-img span img {
  width: auto;
  height: 16px;
}
.item-intro {
  display: block;
  padding: 0 16px 4px;
  width: 185px;
  box-sizing: border-box;
  text-align: left;
}
.item-intro .item-name {
  font-size: 16px;
  color: rgba(0,0,0,.87);
  margin-bottom: 8px;
}
.item-intro .item-brief {
  font-size: 12px;
  color: rgba(0,0,0,.54);
  margin-bottom: 8px;
  line-height: 16px;
  height: 32px;
  overflow: hidden;
}
.item-intro .item-brief p {
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.item-intro .item-intro-price {
  font-size: 16px;
  position: relative;
}
.item-intro span {
  color: #ff6000;
}
.price {
  position: relative;
  padding-left: 8px;
  line-height: 18px;
}
.price:before {
  content: "\A5";
  position: absolute;
  left: 0;
  top: 0;
  font-size: 16px;
  text-decoration: none;
}
</style>
