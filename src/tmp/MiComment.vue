<template>
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
</template>

<style scoped>
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
</style>

